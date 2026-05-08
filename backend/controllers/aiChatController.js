import Anthropic from "@anthropic-ai/sdk";
import prisma from "../lib/prisma.js";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const aiChat = async (req, res) => {
    try {
        const { messages } = req.body;

        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ message: "messages array is required" });
        }

        // Fetch all active listings to give the AI context
        const listings = await prisma.listing.findMany({
            where: { status: "active" },
            select: {
                id: true,
                title: true,
                make: true,
                model: true,
                year: true,
                body_type: true,
                fuel_type: true,
                transmission_type: true,
                seating_capacity: true,
                price_per_day: true,
                district: true,
                city: true,
                mileage_km: true,
                min_rental_days: true,
                max_rental_days: true,
                description: true,
                images: true,
            },
        });

        const listingsSummary = listings
            .map(
                (l) =>
                    `[ID: ${l.id}] ${l.year} ${l.make} ${l.model} (${l.body_type}) — ` +
                    `රු${l.price_per_day.toLocaleString()}/day | ${l.seating_capacity} seats | ` +
                    `${l.transmission_type} | ${l.fuel_type} | ${l.district}, ${l.city} | ` +
                    `Min ${l.min_rental_days} day(s), Max ${l.max_rental_days} day(s)`
            )
            .join("\n");

        const systemPrompt = `You are DriveBot, a friendly and helpful vehicle recommendation assistant for Valorent — a peer-to-peer vehicle rental marketplace in Sri Lanka.

Your role is to help customers find the perfect rental vehicle by asking smart questions and recommending the best matches from available listings.

CONVERSATION FLOW — ask these questions naturally, one or two at a time, in a friendly conversational tone:
1. How many days will the trip be?
2. How many people will be travelling?
3. Which district are they looking to rent from? (Colombo, Gampaha, Kandy, Galle, Jaffna, Trincomalee, Anuradhapura, Kurunegala)
4. What is their approximate daily budget in LKR?
5. Do they prefer Automatic or Manual transmission? (optional)
6. Any vehicle type preference — Sedan, SUV, Truck, Van, Hatchback, Coupe? (optional)

Once you have enough information (at minimum: trip days, number of people, district), recommend the TOP 3 most suitable vehicles from the list below.

RECOMMENDATION FORMAT — when presenting recommendations, use this structure for each vehicle:
🚗 **[Vehicle Title]**
• Price: රු[price]/day | Total: රු[price × days] for [days] days
• Seats: [seats] | [transmission] | [fuel]
• Location: [district], [city]
• [One sentence about why this matches their needs]
🔗 View listing: /listing/[id]

Keep responses concise, warm, and helpful. If no listings match perfectly, suggest the closest options and explain why. If the user asks anything unrelated to vehicle rentals, politely redirect them.

AVAILABLE VEHICLES (${listings.length} active listings):
${listingsSummary || "No listings available at the moment."}`;

        const response = await anthropic.messages.create({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 1024,
            system: systemPrompt,
            messages: messages.map((m) => ({
                role: m.role,
                content: m.content,
            })),
        });

        const reply = response.content[0]?.text || "Sorry, I couldn't generate a response.";

        res.json({ reply });
    } catch (error) {
        console.error("AI chat error:", error);
        res.status(500).json({ message: "AI service error", error: error.message });
    }
};
