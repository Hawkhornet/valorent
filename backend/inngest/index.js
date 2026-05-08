import { Inngest } from "inngest";
import prisma from "../lib/prisma.js"

// Create a client to send and receive events
export const inngest = new Inngest({ id: "vehicle-rental" });

// Function to save user data to database
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk", triggers: [{ event: "clerk/user.created" }] },
  async ({ event }) => {
    const { data } = event

    // check if user already exists in database

    const user = await prisma.user.findFirst({
        where: {id: data.id}
    })

    if(user){
        // Update user data if it exists

        await prisma.user.update({
            where: {id: data.id},
            data: {
                email: data.email_addresses[0].email_address,
                name: data.first_name + " " + data.last_name,
                image: data.profile_image_url,
            }
        })
        return;
    }
  await prisma.user.create({
    data: {
        id: data.id,
        email: data.email_addresses[0].email_address,
        name: data.first_name + " " + data.last_name,
        image: data.profile_image_url,
    }
  })
  }
);

// Inngest function to delete user from database

const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk", triggers: [{ event: "clerk/user.deleted" }] },
  async ({ event }) => {
    const { data } = event

    const listings = await prisma.listing.findMany({
        where: {ownerId: data.id}
    })

    const chats = await prisma.chat.findMany({
        where: {OR: [{ ownerId: data.id }, { userId: data.id }]}
    })

    if(listings.length === 0 && chats.length === 0){
        await prisma.user.delete({where: {id: data.id}})
    }else{
        await prisma.listing.updateMany({
            where: {ownerId: data.id},
            data: {status: "inactive"}
        })
    }
},
);

const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk", triggers: [{ event: "clerk/user.updated" }] },
  async ({ event }) => {
    const { data } = event

    await prisma.user.update({
        where: {id: data.id},
        data: {
            email: data.email_addresses[0].email_address,
            name: data.first_name + " " + data.last_name,
            image: data.profile_image_url,
        }
    })
  }
);


// Cron job: run every hour to transition order and listing statuses based on rental dates
const updateOrderStatuses = inngest.createFunction(
  { id: "update-order-statuses", triggers: [{ cron: "0 * * * *" }] },
  async () => {
    const now = new Date();
    const in24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    // Complete orders whose rental_end has passed and restore their listings to active
    const expiredOrders = await prisma.order.findMany({
      where: {
        rental_end: { lte: now },
        status: { not: "completed" },
      },
      select: { id: true, listingId: true },
    });

    for (const order of expiredOrders) {
      await prisma.$transaction([
        prisma.order.update({
          where: { id: order.id },
          data: { status: "completed" },
        }),
        prisma.listing.update({
          where: { id: order.listingId },
          data: { status: "active" },
        }),
      ]);
    }

    // Mark as ending_soon: rental ends within the next 24 hours and order is still active
    await prisma.order.updateMany({
      where: {
        rental_end: { gt: now, lte: in24Hours },
        status: "active",
      },
      data: { status: "ending_soon" },
    });

    return {
      completed: expiredOrders.length,
      timestamp: now.toISOString(),
    };
  }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation,
    updateOrderStatuses,
];