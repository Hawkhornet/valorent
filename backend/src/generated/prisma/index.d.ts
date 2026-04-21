
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model RentalRequest
 * 
 */
export type RentalRequest = $Result.DefaultSelection<Prisma.$RentalRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Make: {
  Toyota: 'Toyota',
  Honda: 'Honda',
  BYD: 'BYD',
  Nissan: 'Nissan',
  Suzuki: 'Suzuki',
  Ford: 'Ford',
  BMW: 'BMW',
  Mercedes_Benz: 'Mercedes_Benz',
  Audi: 'Audi',
  Tata: 'Tata',
  Kia: 'Kia',
  Tesla: 'Tesla',
  Volkswagen: 'Volkswagen'
};

export type Make = (typeof Make)[keyof typeof Make]


export const District: {
  Colombo: 'Colombo',
  Gampaha: 'Gampaha',
  Kandy: 'Kandy',
  Galle: 'Galle',
  Jaffna: 'Jaffna',
  Trincomalee: 'Trincomalee',
  Anuradhapura: 'Anuradhapura',
  Kurunegala: 'Kurunegala'
};

export type District = (typeof District)[keyof typeof District]


export const BodyType: {
  Sedan: 'Sedan',
  SUV: 'SUV',
  Truck: 'Truck',
  Coupe: 'Coupe',
  Van: 'Van',
  Hatchback: 'Hatchback'
};

export type BodyType = (typeof BodyType)[keyof typeof BodyType]


export const FuelType: {
  Petrol: 'Petrol',
  Diesel: 'Diesel',
  Electric: 'Electric',
  Hybrid: 'Hybrid'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const RentalRequestStatus: {
  pending: 'pending',
  accepted: 'accepted',
  denied: 'denied'
};

export type RentalRequestStatus = (typeof RentalRequestStatus)[keyof typeof RentalRequestStatus]


export const TransmissionType: {
  Automatic: 'Automatic',
  Manual: 'Manual'
};

export type TransmissionType = (typeof TransmissionType)[keyof typeof TransmissionType]


export const ListingStatus: {
  active: 'active',
  inactive: 'inactive',
  rented: 'rented',
  deleted: 'deleted'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const OrderStatus: {
  active: 'active',
  ending_soon: 'ending_soon',
  completed: 'completed'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const MessageType: {
  text: 'text',
  rental_request: 'rental_request',
  rental_accepted: 'rental_accepted',
  rental_denied: 'rental_denied'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type Make = $Enums.Make

export const Make: typeof $Enums.Make

export type District = $Enums.District

export const District: typeof $Enums.District

export type BodyType = $Enums.BodyType

export const BodyType: typeof $Enums.BodyType

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type RentalRequestStatus = $Enums.RentalRequestStatus

export const RentalRequestStatus: typeof $Enums.RentalRequestStatus

export type TransmissionType = $Enums.TransmissionType

export const TransmissionType: typeof $Enums.TransmissionType

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalRequest`: Exposes CRUD operations for the **RentalRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalRequests
    * const rentalRequests = await prisma.rentalRequest.findMany()
    * ```
    */
  get rentalRequest(): Prisma.RentalRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Listing: 'Listing',
    Order: 'Order',
    Chat: 'Chat',
    Message: 'Message',
    RentalRequest: 'RentalRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "listing" | "order" | "chat" | "message" | "rentalRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      RentalRequest: {
        payload: Prisma.$RentalRequestPayload<ExtArgs>
        fields: Prisma.RentalRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>
          }
          findFirst: {
            args: Prisma.RentalRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>
          }
          findMany: {
            args: Prisma.RentalRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>[]
          }
          create: {
            args: Prisma.RentalRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>
          }
          createMany: {
            args: Prisma.RentalRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>[]
          }
          delete: {
            args: Prisma.RentalRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>
          }
          update: {
            args: Prisma.RentalRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>
          }
          deleteMany: {
            args: Prisma.RentalRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>[]
          }
          upsert: {
            args: Prisma.RentalRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalRequestPayload>
          }
          aggregate: {
            args: Prisma.RentalRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalRequest>
          }
          groupBy: {
            args: Prisma.RentalRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalRequestCountArgs<ExtArgs>
            result: $Utils.Optional<RentalRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    listing?: ListingOmit
    order?: OrderOmit
    chat?: ChatOmit
    message?: MessageOmit
    rentalRequest?: RentalRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    listings: number
    orders: number
    ownerChats: number
    chatUserChats: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    ownerChats?: boolean | UserCountOutputTypeCountOwnerChatsArgs
    chatUserChats?: boolean | UserCountOutputTypeCountChatUserChatsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnerChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatUserChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    orders: number
    chats: number
    rentalRequests: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ListingCountOutputTypeCountOrdersArgs
    chats?: boolean | ListingCountOutputTypeCountChatsArgs
    rentalRequests?: boolean | ListingCountOutputTypeCountRentalRequestsArgs
  }

  // Custom InputTypes
  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     */
    select?: ListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountRentalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalRequestWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
    rentalRequests: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
    rentalRequests?: boolean | ChatCountOutputTypeCountRentalRequestsArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountRentalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listings?: boolean | User$listingsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    ownerChats?: boolean | User$ownerChatsArgs<ExtArgs>
    chatUserChats?: boolean | User$chatUserChatsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | User$listingsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    ownerChats?: boolean | User$ownerChatsArgs<ExtArgs>
    chatUserChats?: boolean | User$chatUserChatsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      listings: Prisma.$ListingPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      ownerChats: Prisma.$ChatPayload<ExtArgs>[]
      chatUserChats: Prisma.$ChatPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends User$listingsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownerChats<T extends User$ownerChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownerChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatUserChats<T extends User$chatUserChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatUserChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.listings
   */
  export type User$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.ownerChats
   */
  export type User$ownerChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.chatUserChats
   */
  export type User$chatUserChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    year: number | null
    horsepower: number | null
    doors: number | null
    cylinders: number | null
    engine_capacity_cc: number | null
    battery_capacity_kwh: number | null
    range_km: number | null
    seating_capacity: number | null
    mileage_km: number | null
    price_per_day: number | null
    deposit: number | null
    min_rental_days: number | null
    max_rental_days: number | null
  }

  export type ListingSumAggregateOutputType = {
    year: number | null
    horsepower: number | null
    doors: number | null
    cylinders: number | null
    engine_capacity_cc: number | null
    battery_capacity_kwh: number | null
    range_km: number | null
    seating_capacity: number | null
    mileage_km: number | null
    price_per_day: number | null
    deposit: number | null
    min_rental_days: number | null
    max_rental_days: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    make: $Enums.Make | null
    model: string | null
    year: number | null
    trim: string | null
    body_type: $Enums.BodyType | null
    exterior_color: string | null
    interior_color: string | null
    horsepower: number | null
    doors: number | null
    fuel_type: $Enums.FuelType | null
    cylinders: number | null
    engine_capacity_cc: number | null
    battery_capacity_kwh: number | null
    range_km: number | null
    seating_capacity: number | null
    transmission_type: $Enums.TransmissionType | null
    mileage_km: number | null
    price_per_day: number | null
    deposit: number | null
    min_rental_days: number | null
    max_rental_days: number | null
    description: string | null
    available: boolean | null
    city: string | null
    district: $Enums.District | null
    status: $Enums.ListingStatus | null
    platformAssured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    make: $Enums.Make | null
    model: string | null
    year: number | null
    trim: string | null
    body_type: $Enums.BodyType | null
    exterior_color: string | null
    interior_color: string | null
    horsepower: number | null
    doors: number | null
    fuel_type: $Enums.FuelType | null
    cylinders: number | null
    engine_capacity_cc: number | null
    battery_capacity_kwh: number | null
    range_km: number | null
    seating_capacity: number | null
    transmission_type: $Enums.TransmissionType | null
    mileage_km: number | null
    price_per_day: number | null
    deposit: number | null
    min_rental_days: number | null
    max_rental_days: number | null
    description: string | null
    available: boolean | null
    city: string | null
    district: $Enums.District | null
    status: $Enums.ListingStatus | null
    platformAssured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    make: number
    model: number
    year: number
    trim: number
    body_type: number
    exterior_color: number
    interior_color: number
    horsepower: number
    doors: number
    fuel_type: number
    cylinders: number
    engine_capacity_cc: number
    battery_capacity_kwh: number
    range_km: number
    seating_capacity: number
    transmission_type: number
    mileage_km: number
    price_per_day: number
    deposit: number
    min_rental_days: number
    max_rental_days: number
    description: number
    available: number
    city: number
    district: number
    status: number
    images: number
    platformAssured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    year?: true
    horsepower?: true
    doors?: true
    cylinders?: true
    engine_capacity_cc?: true
    battery_capacity_kwh?: true
    range_km?: true
    seating_capacity?: true
    mileage_km?: true
    price_per_day?: true
    deposit?: true
    min_rental_days?: true
    max_rental_days?: true
  }

  export type ListingSumAggregateInputType = {
    year?: true
    horsepower?: true
    doors?: true
    cylinders?: true
    engine_capacity_cc?: true
    battery_capacity_kwh?: true
    range_km?: true
    seating_capacity?: true
    mileage_km?: true
    price_per_day?: true
    deposit?: true
    min_rental_days?: true
    max_rental_days?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    make?: true
    model?: true
    year?: true
    trim?: true
    body_type?: true
    exterior_color?: true
    interior_color?: true
    horsepower?: true
    doors?: true
    fuel_type?: true
    cylinders?: true
    engine_capacity_cc?: true
    battery_capacity_kwh?: true
    range_km?: true
    seating_capacity?: true
    transmission_type?: true
    mileage_km?: true
    price_per_day?: true
    deposit?: true
    min_rental_days?: true
    max_rental_days?: true
    description?: true
    available?: true
    city?: true
    district?: true
    status?: true
    platformAssured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    make?: true
    model?: true
    year?: true
    trim?: true
    body_type?: true
    exterior_color?: true
    interior_color?: true
    horsepower?: true
    doors?: true
    fuel_type?: true
    cylinders?: true
    engine_capacity_cc?: true
    battery_capacity_kwh?: true
    range_km?: true
    seating_capacity?: true
    transmission_type?: true
    mileage_km?: true
    price_per_day?: true
    deposit?: true
    min_rental_days?: true
    max_rental_days?: true
    description?: true
    available?: true
    city?: true
    district?: true
    status?: true
    platformAssured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    make?: true
    model?: true
    year?: true
    trim?: true
    body_type?: true
    exterior_color?: true
    interior_color?: true
    horsepower?: true
    doors?: true
    fuel_type?: true
    cylinders?: true
    engine_capacity_cc?: true
    battery_capacity_kwh?: true
    range_km?: true
    seating_capacity?: true
    transmission_type?: true
    mileage_km?: true
    price_per_day?: true
    deposit?: true
    min_rental_days?: true
    max_rental_days?: true
    description?: true
    available?: true
    city?: true
    district?: true
    status?: true
    images?: true
    platformAssured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color: string | null
    horsepower: number
    doors: number | null
    fuel_type: $Enums.FuelType
    cylinders: number | null
    engine_capacity_cc: number | null
    battery_capacity_kwh: number | null
    range_km: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit: number | null
    min_rental_days: number
    max_rental_days: number
    description: string
    available: boolean
    city: string
    district: $Enums.District
    status: $Enums.ListingStatus
    images: string[]
    platformAssured: boolean
    createdAt: Date
    updatedAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    trim?: boolean
    body_type?: boolean
    exterior_color?: boolean
    interior_color?: boolean
    horsepower?: boolean
    doors?: boolean
    fuel_type?: boolean
    cylinders?: boolean
    engine_capacity_cc?: boolean
    battery_capacity_kwh?: boolean
    range_km?: boolean
    seating_capacity?: boolean
    transmission_type?: boolean
    mileage_km?: boolean
    price_per_day?: boolean
    deposit?: boolean
    min_rental_days?: boolean
    max_rental_days?: boolean
    description?: boolean
    available?: boolean
    city?: boolean
    district?: boolean
    status?: boolean
    images?: boolean
    platformAssured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | Listing$ordersArgs<ExtArgs>
    chats?: boolean | Listing$chatsArgs<ExtArgs>
    rentalRequests?: boolean | Listing$rentalRequestsArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    trim?: boolean
    body_type?: boolean
    exterior_color?: boolean
    interior_color?: boolean
    horsepower?: boolean
    doors?: boolean
    fuel_type?: boolean
    cylinders?: boolean
    engine_capacity_cc?: boolean
    battery_capacity_kwh?: boolean
    range_km?: boolean
    seating_capacity?: boolean
    transmission_type?: boolean
    mileage_km?: boolean
    price_per_day?: boolean
    deposit?: boolean
    min_rental_days?: boolean
    max_rental_days?: boolean
    description?: boolean
    available?: boolean
    city?: boolean
    district?: boolean
    status?: boolean
    images?: boolean
    platformAssured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    trim?: boolean
    body_type?: boolean
    exterior_color?: boolean
    interior_color?: boolean
    horsepower?: boolean
    doors?: boolean
    fuel_type?: boolean
    cylinders?: boolean
    engine_capacity_cc?: boolean
    battery_capacity_kwh?: boolean
    range_km?: boolean
    seating_capacity?: boolean
    transmission_type?: boolean
    mileage_km?: boolean
    price_per_day?: boolean
    deposit?: boolean
    min_rental_days?: boolean
    max_rental_days?: boolean
    description?: boolean
    available?: boolean
    city?: boolean
    district?: boolean
    status?: boolean
    images?: boolean
    platformAssured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    trim?: boolean
    body_type?: boolean
    exterior_color?: boolean
    interior_color?: boolean
    horsepower?: boolean
    doors?: boolean
    fuel_type?: boolean
    cylinders?: boolean
    engine_capacity_cc?: boolean
    battery_capacity_kwh?: boolean
    range_km?: boolean
    seating_capacity?: boolean
    transmission_type?: boolean
    mileage_km?: boolean
    price_per_day?: boolean
    deposit?: boolean
    min_rental_days?: boolean
    max_rental_days?: boolean
    description?: boolean
    available?: boolean
    city?: boolean
    district?: boolean
    status?: boolean
    images?: boolean
    platformAssured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "make" | "model" | "year" | "trim" | "body_type" | "exterior_color" | "interior_color" | "horsepower" | "doors" | "fuel_type" | "cylinders" | "engine_capacity_cc" | "battery_capacity_kwh" | "range_km" | "seating_capacity" | "transmission_type" | "mileage_km" | "price_per_day" | "deposit" | "min_rental_days" | "max_rental_days" | "description" | "available" | "city" | "district" | "status" | "images" | "platformAssured" | "createdAt" | "updatedAt", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | Listing$ordersArgs<ExtArgs>
    chats?: boolean | Listing$chatsArgs<ExtArgs>
    rentalRequests?: boolean | Listing$rentalRequestsArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      rentalRequests: Prisma.$RentalRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      make: $Enums.Make
      model: string
      year: number
      trim: string | null
      body_type: $Enums.BodyType
      exterior_color: string
      interior_color: string | null
      horsepower: number
      doors: number | null
      fuel_type: $Enums.FuelType
      cylinders: number | null
      engine_capacity_cc: number | null
      battery_capacity_kwh: number | null
      range_km: number | null
      seating_capacity: number
      transmission_type: $Enums.TransmissionType
      mileage_km: number
      price_per_day: number
      deposit: number | null
      min_rental_days: number
      max_rental_days: number
      description: string
      available: boolean
      city: string
      district: $Enums.District
      status: $Enums.ListingStatus
      images: string[]
      platformAssured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Listing$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Listing$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends Listing$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentalRequests<T extends Listing$rentalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$rentalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly ownerId: FieldRef<"Listing", 'String'>
    readonly title: FieldRef<"Listing", 'String'>
    readonly make: FieldRef<"Listing", 'Make'>
    readonly model: FieldRef<"Listing", 'String'>
    readonly year: FieldRef<"Listing", 'Int'>
    readonly trim: FieldRef<"Listing", 'String'>
    readonly body_type: FieldRef<"Listing", 'BodyType'>
    readonly exterior_color: FieldRef<"Listing", 'String'>
    readonly interior_color: FieldRef<"Listing", 'String'>
    readonly horsepower: FieldRef<"Listing", 'Int'>
    readonly doors: FieldRef<"Listing", 'Int'>
    readonly fuel_type: FieldRef<"Listing", 'FuelType'>
    readonly cylinders: FieldRef<"Listing", 'Int'>
    readonly engine_capacity_cc: FieldRef<"Listing", 'Int'>
    readonly battery_capacity_kwh: FieldRef<"Listing", 'Float'>
    readonly range_km: FieldRef<"Listing", 'Int'>
    readonly seating_capacity: FieldRef<"Listing", 'Int'>
    readonly transmission_type: FieldRef<"Listing", 'TransmissionType'>
    readonly mileage_km: FieldRef<"Listing", 'Int'>
    readonly price_per_day: FieldRef<"Listing", 'Float'>
    readonly deposit: FieldRef<"Listing", 'Float'>
    readonly min_rental_days: FieldRef<"Listing", 'Int'>
    readonly max_rental_days: FieldRef<"Listing", 'Int'>
    readonly description: FieldRef<"Listing", 'String'>
    readonly available: FieldRef<"Listing", 'Boolean'>
    readonly city: FieldRef<"Listing", 'String'>
    readonly district: FieldRef<"Listing", 'District'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly images: FieldRef<"Listing", 'String[]'>
    readonly platformAssured: FieldRef<"Listing", 'Boolean'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing.orders
   */
  export type Listing$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Listing.chats
   */
  export type Listing$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Listing.rentalRequests
   */
  export type Listing$rentalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    where?: RentalRequestWhereInput
    orderBy?: RentalRequestOrderByWithRelationInput | RentalRequestOrderByWithRelationInput[]
    cursor?: RentalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalRequestScalarFieldEnum | RentalRequestScalarFieldEnum[]
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    price_per_day: number | null
  }

  export type OrderSumAggregateOutputType = {
    price_per_day: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    ownerId: string | null
    userId: string | null
    price_per_day: number | null
    rental_start: Date | null
    rental_end: Date | null
    status: $Enums.OrderStatus | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    ownerId: string | null
    userId: string | null
    price_per_day: number | null
    rental_start: Date | null
    rental_end: Date | null
    status: $Enums.OrderStatus | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    listingId: number
    ownerId: number
    userId: number
    price_per_day: number
    rental_start: number
    rental_end: number
    status: number
    isPaid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    price_per_day?: true
  }

  export type OrderSumAggregateInputType = {
    price_per_day?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    listingId?: true
    ownerId?: true
    userId?: true
    price_per_day?: true
    rental_start?: true
    rental_end?: true
    status?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    listingId?: true
    ownerId?: true
    userId?: true
    price_per_day?: true
    rental_start?: true
    rental_end?: true
    status?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    listingId?: true
    ownerId?: true
    userId?: true
    price_per_day?: true
    rental_start?: true
    rental_end?: true
    status?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    listingId: string
    ownerId: string
    userId: string
    price_per_day: number
    rental_start: Date
    rental_end: Date
    status: $Enums.OrderStatus
    isPaid: boolean
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    ownerId?: boolean
    userId?: boolean
    price_per_day?: boolean
    rental_start?: boolean
    rental_end?: boolean
    status?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    ownerId?: boolean
    userId?: boolean
    price_per_day?: boolean
    rental_start?: boolean
    rental_end?: boolean
    status?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    ownerId?: boolean
    userId?: boolean
    price_per_day?: boolean
    rental_start?: boolean
    rental_end?: boolean
    status?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    listingId?: boolean
    ownerId?: boolean
    userId?: boolean
    price_per_day?: boolean
    rental_start?: boolean
    rental_end?: boolean
    status?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "ownerId" | "userId" | "price_per_day" | "rental_start" | "rental_end" | "status" | "isPaid" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      ownerId: string
      userId: string
      price_per_day: number
      rental_start: Date
      rental_end: Date
      status: $Enums.OrderStatus
      isPaid: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly listingId: FieldRef<"Order", 'String'>
    readonly ownerId: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly price_per_day: FieldRef<"Order", 'Float'>
    readonly rental_start: FieldRef<"Order", 'DateTime'>
    readonly rental_end: FieldRef<"Order", 'DateTime'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly isPaid: FieldRef<"Order", 'Boolean'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    chatUserId: string | null
    ownerUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
    lastMessage: string | null
    isLastMessageRead: boolean | null
    lastMessageSenderId: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    chatUserId: string | null
    ownerUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
    lastMessage: string | null
    isLastMessageRead: boolean | null
    lastMessageSenderId: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    listingId: number
    chatUserId: number
    ownerUserId: number
    createdAt: number
    updatedAt: number
    active: number
    lastMessage: number
    isLastMessageRead: number
    lastMessageSenderId: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    listingId?: true
    chatUserId?: true
    ownerUserId?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    lastMessage?: true
    isLastMessageRead?: true
    lastMessageSenderId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    listingId?: true
    chatUserId?: true
    ownerUserId?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    lastMessage?: true
    isLastMessageRead?: true
    lastMessageSenderId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    listingId?: true
    chatUserId?: true
    ownerUserId?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    lastMessage?: true
    isLastMessageRead?: true
    lastMessageSenderId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    listingId: string
    chatUserId: string
    ownerUserId: string
    createdAt: Date
    updatedAt: Date
    active: boolean
    lastMessage: string
    isLastMessageRead: boolean
    lastMessageSenderId: string
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    chatUserId?: boolean
    ownerUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    lastMessage?: boolean
    isLastMessageRead?: boolean
    lastMessageSenderId?: boolean
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    chatUser?: boolean | UserDefaultArgs<ExtArgs>
    rentalRequests?: boolean | Chat$rentalRequestsArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    chatUserId?: boolean
    ownerUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    lastMessage?: boolean
    isLastMessageRead?: boolean
    lastMessageSenderId?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    chatUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    chatUserId?: boolean
    ownerUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    lastMessage?: boolean
    isLastMessageRead?: boolean
    lastMessageSenderId?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    chatUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    listingId?: boolean
    chatUserId?: boolean
    ownerUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    lastMessage?: boolean
    isLastMessageRead?: boolean
    lastMessageSenderId?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "chatUserId" | "ownerUserId" | "createdAt" | "updatedAt" | "active" | "lastMessage" | "isLastMessageRead" | "lastMessageSenderId", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    chatUser?: boolean | UserDefaultArgs<ExtArgs>
    rentalRequests?: boolean | Chat$rentalRequestsArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    chatUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    chatUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      listing: Prisma.$ListingPayload<ExtArgs>
      ownerUser: Prisma.$UserPayload<ExtArgs>
      chatUser: Prisma.$UserPayload<ExtArgs>
      rentalRequests: Prisma.$RentalRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      chatUserId: string
      ownerUserId: string
      createdAt: Date
      updatedAt: Date
      active: boolean
      lastMessage: string
      isLastMessageRead: boolean
      lastMessageSenderId: string
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ownerUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rentalRequests<T extends Chat$rentalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Chat$rentalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly listingId: FieldRef<"Chat", 'String'>
    readonly chatUserId: FieldRef<"Chat", 'String'>
    readonly ownerUserId: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
    readonly active: FieldRef<"Chat", 'Boolean'>
    readonly lastMessage: FieldRef<"Chat", 'String'>
    readonly isLastMessageRead: FieldRef<"Chat", 'Boolean'>
    readonly lastMessageSenderId: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat.rentalRequests
   */
  export type Chat$rentalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    where?: RentalRequestWhereInput
    orderBy?: RentalRequestOrderByWithRelationInput | RentalRequestOrderByWithRelationInput[]
    cursor?: RentalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalRequestScalarFieldEnum | RentalRequestScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    message: string | null
    senderId: string | null
    type: $Enums.MessageType | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    message: string | null
    senderId: string | null
    type: $Enums.MessageType | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    message: number
    senderId: number
    type: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    message?: true
    senderId?: true
    type?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    message?: true
    senderId?: true
    type?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    message?: true
    senderId?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    chatId: string
    message: string
    senderId: string
    type: $Enums.MessageType
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    message?: boolean
    senderId?: boolean
    type?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    message?: boolean
    senderId?: boolean
    type?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    message?: boolean
    senderId?: boolean
    type?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    message?: boolean
    senderId?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "message" | "senderId" | "type" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      message: string
      senderId: string
      type: $Enums.MessageType
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly type: FieldRef<"Message", 'MessageType'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model RentalRequest
   */

  export type AggregateRentalRequest = {
    _count: RentalRequestCountAggregateOutputType | null
    _min: RentalRequestMinAggregateOutputType | null
    _max: RentalRequestMaxAggregateOutputType | null
  }

  export type RentalRequestMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    listingId: string | null
    renterId: string | null
    ownerId: string | null
    status: $Enums.RentalRequestStatus | null
    rentalStart: Date | null
    rentalEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalRequestMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    listingId: string | null
    renterId: string | null
    ownerId: string | null
    status: $Enums.RentalRequestStatus | null
    rentalStart: Date | null
    rentalEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalRequestCountAggregateOutputType = {
    id: number
    chatId: number
    listingId: number
    renterId: number
    ownerId: number
    status: number
    rentalStart: number
    rentalEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalRequestMinAggregateInputType = {
    id?: true
    chatId?: true
    listingId?: true
    renterId?: true
    ownerId?: true
    status?: true
    rentalStart?: true
    rentalEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalRequestMaxAggregateInputType = {
    id?: true
    chatId?: true
    listingId?: true
    renterId?: true
    ownerId?: true
    status?: true
    rentalStart?: true
    rentalEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalRequestCountAggregateInputType = {
    id?: true
    chatId?: true
    listingId?: true
    renterId?: true
    ownerId?: true
    status?: true
    rentalStart?: true
    rentalEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalRequest to aggregate.
     */
    where?: RentalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalRequests to fetch.
     */
    orderBy?: RentalRequestOrderByWithRelationInput | RentalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalRequests
    **/
    _count?: true | RentalRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalRequestMaxAggregateInputType
  }

  export type GetRentalRequestAggregateType<T extends RentalRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalRequest[P]>
      : GetScalarType<T[P], AggregateRentalRequest[P]>
  }




  export type RentalRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalRequestWhereInput
    orderBy?: RentalRequestOrderByWithAggregationInput | RentalRequestOrderByWithAggregationInput[]
    by: RentalRequestScalarFieldEnum[] | RentalRequestScalarFieldEnum
    having?: RentalRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalRequestCountAggregateInputType | true
    _min?: RentalRequestMinAggregateInputType
    _max?: RentalRequestMaxAggregateInputType
  }

  export type RentalRequestGroupByOutputType = {
    id: string
    chatId: string
    listingId: string
    renterId: string
    ownerId: string
    status: $Enums.RentalRequestStatus
    rentalStart: Date
    rentalEnd: Date
    createdAt: Date
    updatedAt: Date
    _count: RentalRequestCountAggregateOutputType | null
    _min: RentalRequestMinAggregateOutputType | null
    _max: RentalRequestMaxAggregateOutputType | null
  }

  type GetRentalRequestGroupByPayload<T extends RentalRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RentalRequestGroupByOutputType[P]>
        }
      >
    >


  export type RentalRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    listingId?: boolean
    renterId?: boolean
    ownerId?: boolean
    status?: boolean
    rentalStart?: boolean
    rentalEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalRequest"]>

  export type RentalRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    listingId?: boolean
    renterId?: boolean
    ownerId?: boolean
    status?: boolean
    rentalStart?: boolean
    rentalEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalRequest"]>

  export type RentalRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    listingId?: boolean
    renterId?: boolean
    ownerId?: boolean
    status?: boolean
    rentalStart?: boolean
    rentalEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalRequest"]>

  export type RentalRequestSelectScalar = {
    id?: boolean
    chatId?: boolean
    listingId?: boolean
    renterId?: boolean
    ownerId?: boolean
    status?: boolean
    rentalStart?: boolean
    rentalEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "listingId" | "renterId" | "ownerId" | "status" | "rentalStart" | "rentalEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalRequest"]>
  export type RentalRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type RentalRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type RentalRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $RentalRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalRequest"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      listingId: string
      renterId: string
      ownerId: string
      status: $Enums.RentalRequestStatus
      rentalStart: Date
      rentalEnd: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalRequest"]>
    composites: {}
  }

  type RentalRequestGetPayload<S extends boolean | null | undefined | RentalRequestDefaultArgs> = $Result.GetResult<Prisma.$RentalRequestPayload, S>

  type RentalRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalRequestCountAggregateInputType | true
    }

  export interface RentalRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalRequest'], meta: { name: 'RentalRequest' } }
    /**
     * Find zero or one RentalRequest that matches the filter.
     * @param {RentalRequestFindUniqueArgs} args - Arguments to find a RentalRequest
     * @example
     * // Get one RentalRequest
     * const rentalRequest = await prisma.rentalRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalRequestFindUniqueArgs>(args: SelectSubset<T, RentalRequestFindUniqueArgs<ExtArgs>>): Prisma__RentalRequestClient<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalRequestFindUniqueOrThrowArgs} args - Arguments to find a RentalRequest
     * @example
     * // Get one RentalRequest
     * const rentalRequest = await prisma.rentalRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalRequestClient<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestFindFirstArgs} args - Arguments to find a RentalRequest
     * @example
     * // Get one RentalRequest
     * const rentalRequest = await prisma.rentalRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalRequestFindFirstArgs>(args?: SelectSubset<T, RentalRequestFindFirstArgs<ExtArgs>>): Prisma__RentalRequestClient<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestFindFirstOrThrowArgs} args - Arguments to find a RentalRequest
     * @example
     * // Get one RentalRequest
     * const rentalRequest = await prisma.rentalRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalRequestClient<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalRequests
     * const rentalRequests = await prisma.rentalRequest.findMany()
     * 
     * // Get first 10 RentalRequests
     * const rentalRequests = await prisma.rentalRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalRequestWithIdOnly = await prisma.rentalRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalRequestFindManyArgs>(args?: SelectSubset<T, RentalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalRequest.
     * @param {RentalRequestCreateArgs} args - Arguments to create a RentalRequest.
     * @example
     * // Create one RentalRequest
     * const RentalRequest = await prisma.rentalRequest.create({
     *   data: {
     *     // ... data to create a RentalRequest
     *   }
     * })
     * 
     */
    create<T extends RentalRequestCreateArgs>(args: SelectSubset<T, RentalRequestCreateArgs<ExtArgs>>): Prisma__RentalRequestClient<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalRequests.
     * @param {RentalRequestCreateManyArgs} args - Arguments to create many RentalRequests.
     * @example
     * // Create many RentalRequests
     * const rentalRequest = await prisma.rentalRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalRequestCreateManyArgs>(args?: SelectSubset<T, RentalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalRequests and returns the data saved in the database.
     * @param {RentalRequestCreateManyAndReturnArgs} args - Arguments to create many RentalRequests.
     * @example
     * // Create many RentalRequests
     * const rentalRequest = await prisma.rentalRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalRequests and only return the `id`
     * const rentalRequestWithIdOnly = await prisma.rentalRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalRequest.
     * @param {RentalRequestDeleteArgs} args - Arguments to delete one RentalRequest.
     * @example
     * // Delete one RentalRequest
     * const RentalRequest = await prisma.rentalRequest.delete({
     *   where: {
     *     // ... filter to delete one RentalRequest
     *   }
     * })
     * 
     */
    delete<T extends RentalRequestDeleteArgs>(args: SelectSubset<T, RentalRequestDeleteArgs<ExtArgs>>): Prisma__RentalRequestClient<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalRequest.
     * @param {RentalRequestUpdateArgs} args - Arguments to update one RentalRequest.
     * @example
     * // Update one RentalRequest
     * const rentalRequest = await prisma.rentalRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalRequestUpdateArgs>(args: SelectSubset<T, RentalRequestUpdateArgs<ExtArgs>>): Prisma__RentalRequestClient<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalRequests.
     * @param {RentalRequestDeleteManyArgs} args - Arguments to filter RentalRequests to delete.
     * @example
     * // Delete a few RentalRequests
     * const { count } = await prisma.rentalRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalRequestDeleteManyArgs>(args?: SelectSubset<T, RentalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalRequests
     * const rentalRequest = await prisma.rentalRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalRequestUpdateManyArgs>(args: SelectSubset<T, RentalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalRequests and returns the data updated in the database.
     * @param {RentalRequestUpdateManyAndReturnArgs} args - Arguments to update many RentalRequests.
     * @example
     * // Update many RentalRequests
     * const rentalRequest = await prisma.rentalRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalRequests and only return the `id`
     * const rentalRequestWithIdOnly = await prisma.rentalRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalRequest.
     * @param {RentalRequestUpsertArgs} args - Arguments to update or create a RentalRequest.
     * @example
     * // Update or create a RentalRequest
     * const rentalRequest = await prisma.rentalRequest.upsert({
     *   create: {
     *     // ... data to create a RentalRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalRequest we want to update
     *   }
     * })
     */
    upsert<T extends RentalRequestUpsertArgs>(args: SelectSubset<T, RentalRequestUpsertArgs<ExtArgs>>): Prisma__RentalRequestClient<$Result.GetResult<Prisma.$RentalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestCountArgs} args - Arguments to filter RentalRequests to count.
     * @example
     * // Count the number of RentalRequests
     * const count = await prisma.rentalRequest.count({
     *   where: {
     *     // ... the filter for the RentalRequests we want to count
     *   }
     * })
    **/
    count<T extends RentalRequestCountArgs>(
      args?: Subset<T, RentalRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalRequestAggregateArgs>(args: Subset<T, RentalRequestAggregateArgs>): Prisma.PrismaPromise<GetRentalRequestAggregateType<T>>

    /**
     * Group by RentalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalRequestGroupByArgs['orderBy'] }
        : { orderBy?: RentalRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalRequest model
   */
  readonly fields: RentalRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentalRequest model
   */
  interface RentalRequestFieldRefs {
    readonly id: FieldRef<"RentalRequest", 'String'>
    readonly chatId: FieldRef<"RentalRequest", 'String'>
    readonly listingId: FieldRef<"RentalRequest", 'String'>
    readonly renterId: FieldRef<"RentalRequest", 'String'>
    readonly ownerId: FieldRef<"RentalRequest", 'String'>
    readonly status: FieldRef<"RentalRequest", 'RentalRequestStatus'>
    readonly rentalStart: FieldRef<"RentalRequest", 'DateTime'>
    readonly rentalEnd: FieldRef<"RentalRequest", 'DateTime'>
    readonly createdAt: FieldRef<"RentalRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalRequest findUnique
   */
  export type RentalRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * Filter, which RentalRequest to fetch.
     */
    where: RentalRequestWhereUniqueInput
  }

  /**
   * RentalRequest findUniqueOrThrow
   */
  export type RentalRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * Filter, which RentalRequest to fetch.
     */
    where: RentalRequestWhereUniqueInput
  }

  /**
   * RentalRequest findFirst
   */
  export type RentalRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * Filter, which RentalRequest to fetch.
     */
    where?: RentalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalRequests to fetch.
     */
    orderBy?: RentalRequestOrderByWithRelationInput | RentalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalRequests.
     */
    cursor?: RentalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalRequests.
     */
    distinct?: RentalRequestScalarFieldEnum | RentalRequestScalarFieldEnum[]
  }

  /**
   * RentalRequest findFirstOrThrow
   */
  export type RentalRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * Filter, which RentalRequest to fetch.
     */
    where?: RentalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalRequests to fetch.
     */
    orderBy?: RentalRequestOrderByWithRelationInput | RentalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalRequests.
     */
    cursor?: RentalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalRequests.
     */
    distinct?: RentalRequestScalarFieldEnum | RentalRequestScalarFieldEnum[]
  }

  /**
   * RentalRequest findMany
   */
  export type RentalRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * Filter, which RentalRequests to fetch.
     */
    where?: RentalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalRequests to fetch.
     */
    orderBy?: RentalRequestOrderByWithRelationInput | RentalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalRequests.
     */
    cursor?: RentalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalRequests.
     */
    distinct?: RentalRequestScalarFieldEnum | RentalRequestScalarFieldEnum[]
  }

  /**
   * RentalRequest create
   */
  export type RentalRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalRequest.
     */
    data: XOR<RentalRequestCreateInput, RentalRequestUncheckedCreateInput>
  }

  /**
   * RentalRequest createMany
   */
  export type RentalRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalRequests.
     */
    data: RentalRequestCreateManyInput | RentalRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalRequest createManyAndReturn
   */
  export type RentalRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * The data used to create many RentalRequests.
     */
    data: RentalRequestCreateManyInput | RentalRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalRequest update
   */
  export type RentalRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalRequest.
     */
    data: XOR<RentalRequestUpdateInput, RentalRequestUncheckedUpdateInput>
    /**
     * Choose, which RentalRequest to update.
     */
    where: RentalRequestWhereUniqueInput
  }

  /**
   * RentalRequest updateMany
   */
  export type RentalRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalRequests.
     */
    data: XOR<RentalRequestUpdateManyMutationInput, RentalRequestUncheckedUpdateManyInput>
    /**
     * Filter which RentalRequests to update
     */
    where?: RentalRequestWhereInput
    /**
     * Limit how many RentalRequests to update.
     */
    limit?: number
  }

  /**
   * RentalRequest updateManyAndReturn
   */
  export type RentalRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * The data used to update RentalRequests.
     */
    data: XOR<RentalRequestUpdateManyMutationInput, RentalRequestUncheckedUpdateManyInput>
    /**
     * Filter which RentalRequests to update
     */
    where?: RentalRequestWhereInput
    /**
     * Limit how many RentalRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalRequest upsert
   */
  export type RentalRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalRequest to update in case it exists.
     */
    where: RentalRequestWhereUniqueInput
    /**
     * In case the RentalRequest found by the `where` argument doesn't exist, create a new RentalRequest with this data.
     */
    create: XOR<RentalRequestCreateInput, RentalRequestUncheckedCreateInput>
    /**
     * In case the RentalRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalRequestUpdateInput, RentalRequestUncheckedUpdateInput>
  }

  /**
   * RentalRequest delete
   */
  export type RentalRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
    /**
     * Filter which RentalRequest to delete.
     */
    where: RentalRequestWhereUniqueInput
  }

  /**
   * RentalRequest deleteMany
   */
  export type RentalRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalRequests to delete
     */
    where?: RentalRequestWhereInput
    /**
     * Limit how many RentalRequests to delete.
     */
    limit?: number
  }

  /**
   * RentalRequest without action
   */
  export type RentalRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequest
     */
    select?: RentalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalRequest
     */
    omit?: RentalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    make: 'make',
    model: 'model',
    year: 'year',
    trim: 'trim',
    body_type: 'body_type',
    exterior_color: 'exterior_color',
    interior_color: 'interior_color',
    horsepower: 'horsepower',
    doors: 'doors',
    fuel_type: 'fuel_type',
    cylinders: 'cylinders',
    engine_capacity_cc: 'engine_capacity_cc',
    battery_capacity_kwh: 'battery_capacity_kwh',
    range_km: 'range_km',
    seating_capacity: 'seating_capacity',
    transmission_type: 'transmission_type',
    mileage_km: 'mileage_km',
    price_per_day: 'price_per_day',
    deposit: 'deposit',
    min_rental_days: 'min_rental_days',
    max_rental_days: 'max_rental_days',
    description: 'description',
    available: 'available',
    city: 'city',
    district: 'district',
    status: 'status',
    images: 'images',
    platformAssured: 'platformAssured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    ownerId: 'ownerId',
    userId: 'userId',
    price_per_day: 'price_per_day',
    rental_start: 'rental_start',
    rental_end: 'rental_end',
    status: 'status',
    isPaid: 'isPaid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    chatUserId: 'chatUserId',
    ownerUserId: 'ownerUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    active: 'active',
    lastMessage: 'lastMessage',
    isLastMessageRead: 'isLastMessageRead',
    lastMessageSenderId: 'lastMessageSenderId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    message: 'message',
    senderId: 'senderId',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const RentalRequestScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    listingId: 'listingId',
    renterId: 'renterId',
    ownerId: 'ownerId',
    status: 'status',
    rentalStart: 'rentalStart',
    rentalEnd: 'rentalEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalRequestScalarFieldEnum = (typeof RentalRequestScalarFieldEnum)[keyof typeof RentalRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Make'
   */
  export type EnumMakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Make'>
    


  /**
   * Reference to a field of type 'Make[]'
   */
  export type ListEnumMakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Make[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BodyType'
   */
  export type EnumBodyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BodyType'>
    


  /**
   * Reference to a field of type 'BodyType[]'
   */
  export type ListEnumBodyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BodyType[]'>
    


  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>
    


  /**
   * Reference to a field of type 'FuelType[]'
   */
  export type ListEnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransmissionType'
   */
  export type EnumTransmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransmissionType'>
    


  /**
   * Reference to a field of type 'TransmissionType[]'
   */
  export type ListEnumTransmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransmissionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'District'
   */
  export type EnumDistrictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'District'>
    


  /**
   * Reference to a field of type 'District[]'
   */
  export type ListEnumDistrictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'District[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'RentalRequestStatus'
   */
  export type EnumRentalRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalRequestStatus'>
    


  /**
   * Reference to a field of type 'RentalRequestStatus[]'
   */
  export type ListEnumRentalRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalRequestStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: ListingListRelationFilter
    orders?: OrderListRelationFilter
    ownerChats?: ChatListRelationFilter
    chatUserChats?: ChatListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listings?: ListingOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    ownerChats?: ChatOrderByRelationAggregateInput
    chatUserChats?: ChatOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: ListingListRelationFilter
    orders?: OrderListRelationFilter
    ownerChats?: ChatListRelationFilter
    chatUserChats?: ChatListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    ownerId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    make?: EnumMakeFilter<"Listing"> | $Enums.Make
    model?: StringFilter<"Listing"> | string
    year?: IntFilter<"Listing"> | number
    trim?: StringNullableFilter<"Listing"> | string | null
    body_type?: EnumBodyTypeFilter<"Listing"> | $Enums.BodyType
    exterior_color?: StringFilter<"Listing"> | string
    interior_color?: StringNullableFilter<"Listing"> | string | null
    horsepower?: IntFilter<"Listing"> | number
    doors?: IntNullableFilter<"Listing"> | number | null
    fuel_type?: EnumFuelTypeFilter<"Listing"> | $Enums.FuelType
    cylinders?: IntNullableFilter<"Listing"> | number | null
    engine_capacity_cc?: IntNullableFilter<"Listing"> | number | null
    battery_capacity_kwh?: FloatNullableFilter<"Listing"> | number | null
    range_km?: IntNullableFilter<"Listing"> | number | null
    seating_capacity?: IntFilter<"Listing"> | number
    transmission_type?: EnumTransmissionTypeFilter<"Listing"> | $Enums.TransmissionType
    mileage_km?: IntFilter<"Listing"> | number
    price_per_day?: FloatFilter<"Listing"> | number
    deposit?: FloatNullableFilter<"Listing"> | number | null
    min_rental_days?: IntFilter<"Listing"> | number
    max_rental_days?: IntFilter<"Listing"> | number
    description?: StringFilter<"Listing"> | string
    available?: BoolFilter<"Listing"> | boolean
    city?: StringFilter<"Listing"> | string
    district?: EnumDistrictFilter<"Listing"> | $Enums.District
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    images?: StringNullableListFilter<"Listing">
    platformAssured?: BoolFilter<"Listing"> | boolean
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
    chats?: ChatListRelationFilter
    rentalRequests?: RentalRequestListRelationFilter
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    trim?: SortOrderInput | SortOrder
    body_type?: SortOrder
    exterior_color?: SortOrder
    interior_color?: SortOrderInput | SortOrder
    horsepower?: SortOrder
    doors?: SortOrderInput | SortOrder
    fuel_type?: SortOrder
    cylinders?: SortOrderInput | SortOrder
    engine_capacity_cc?: SortOrderInput | SortOrder
    battery_capacity_kwh?: SortOrderInput | SortOrder
    range_km?: SortOrderInput | SortOrder
    seating_capacity?: SortOrder
    transmission_type?: SortOrder
    mileage_km?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrderInput | SortOrder
    min_rental_days?: SortOrder
    max_rental_days?: SortOrder
    description?: SortOrder
    available?: SortOrder
    city?: SortOrder
    district?: SortOrder
    status?: SortOrder
    images?: SortOrder
    platformAssured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    rentalRequests?: RentalRequestOrderByRelationAggregateInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    ownerId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    make?: EnumMakeFilter<"Listing"> | $Enums.Make
    model?: StringFilter<"Listing"> | string
    year?: IntFilter<"Listing"> | number
    trim?: StringNullableFilter<"Listing"> | string | null
    body_type?: EnumBodyTypeFilter<"Listing"> | $Enums.BodyType
    exterior_color?: StringFilter<"Listing"> | string
    interior_color?: StringNullableFilter<"Listing"> | string | null
    horsepower?: IntFilter<"Listing"> | number
    doors?: IntNullableFilter<"Listing"> | number | null
    fuel_type?: EnumFuelTypeFilter<"Listing"> | $Enums.FuelType
    cylinders?: IntNullableFilter<"Listing"> | number | null
    engine_capacity_cc?: IntNullableFilter<"Listing"> | number | null
    battery_capacity_kwh?: FloatNullableFilter<"Listing"> | number | null
    range_km?: IntNullableFilter<"Listing"> | number | null
    seating_capacity?: IntFilter<"Listing"> | number
    transmission_type?: EnumTransmissionTypeFilter<"Listing"> | $Enums.TransmissionType
    mileage_km?: IntFilter<"Listing"> | number
    price_per_day?: FloatFilter<"Listing"> | number
    deposit?: FloatNullableFilter<"Listing"> | number | null
    min_rental_days?: IntFilter<"Listing"> | number
    max_rental_days?: IntFilter<"Listing"> | number
    description?: StringFilter<"Listing"> | string
    available?: BoolFilter<"Listing"> | boolean
    city?: StringFilter<"Listing"> | string
    district?: EnumDistrictFilter<"Listing"> | $Enums.District
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    images?: StringNullableListFilter<"Listing">
    platformAssured?: BoolFilter<"Listing"> | boolean
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
    chats?: ChatListRelationFilter
    rentalRequests?: RentalRequestListRelationFilter
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    trim?: SortOrderInput | SortOrder
    body_type?: SortOrder
    exterior_color?: SortOrder
    interior_color?: SortOrderInput | SortOrder
    horsepower?: SortOrder
    doors?: SortOrderInput | SortOrder
    fuel_type?: SortOrder
    cylinders?: SortOrderInput | SortOrder
    engine_capacity_cc?: SortOrderInput | SortOrder
    battery_capacity_kwh?: SortOrderInput | SortOrder
    range_km?: SortOrderInput | SortOrder
    seating_capacity?: SortOrder
    transmission_type?: SortOrder
    mileage_km?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrderInput | SortOrder
    min_rental_days?: SortOrder
    max_rental_days?: SortOrder
    description?: SortOrder
    available?: SortOrder
    city?: SortOrder
    district?: SortOrder
    status?: SortOrder
    images?: SortOrder
    platformAssured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    ownerId?: StringWithAggregatesFilter<"Listing"> | string
    title?: StringWithAggregatesFilter<"Listing"> | string
    make?: EnumMakeWithAggregatesFilter<"Listing"> | $Enums.Make
    model?: StringWithAggregatesFilter<"Listing"> | string
    year?: IntWithAggregatesFilter<"Listing"> | number
    trim?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    body_type?: EnumBodyTypeWithAggregatesFilter<"Listing"> | $Enums.BodyType
    exterior_color?: StringWithAggregatesFilter<"Listing"> | string
    interior_color?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    horsepower?: IntWithAggregatesFilter<"Listing"> | number
    doors?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    fuel_type?: EnumFuelTypeWithAggregatesFilter<"Listing"> | $Enums.FuelType
    cylinders?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    engine_capacity_cc?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    battery_capacity_kwh?: FloatNullableWithAggregatesFilter<"Listing"> | number | null
    range_km?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    seating_capacity?: IntWithAggregatesFilter<"Listing"> | number
    transmission_type?: EnumTransmissionTypeWithAggregatesFilter<"Listing"> | $Enums.TransmissionType
    mileage_km?: IntWithAggregatesFilter<"Listing"> | number
    price_per_day?: FloatWithAggregatesFilter<"Listing"> | number
    deposit?: FloatNullableWithAggregatesFilter<"Listing"> | number | null
    min_rental_days?: IntWithAggregatesFilter<"Listing"> | number
    max_rental_days?: IntWithAggregatesFilter<"Listing"> | number
    description?: StringWithAggregatesFilter<"Listing"> | string
    available?: BoolWithAggregatesFilter<"Listing"> | boolean
    city?: StringWithAggregatesFilter<"Listing"> | string
    district?: EnumDistrictWithAggregatesFilter<"Listing"> | $Enums.District
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    images?: StringNullableListFilter<"Listing">
    platformAssured?: BoolWithAggregatesFilter<"Listing"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    listingId?: StringFilter<"Order"> | string
    ownerId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    price_per_day?: FloatFilter<"Order"> | number
    rental_start?: DateTimeFilter<"Order"> | Date | string
    rental_end?: DateTimeFilter<"Order"> | Date | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
    price_per_day?: SortOrder
    rental_start?: SortOrder
    rental_end?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    listingId?: StringFilter<"Order"> | string
    ownerId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    price_per_day?: FloatFilter<"Order"> | number
    rental_start?: DateTimeFilter<"Order"> | Date | string
    rental_end?: DateTimeFilter<"Order"> | Date | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
    price_per_day?: SortOrder
    rental_start?: SortOrder
    rental_end?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    listingId?: StringWithAggregatesFilter<"Order"> | string
    ownerId?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    price_per_day?: FloatWithAggregatesFilter<"Order"> | number
    rental_start?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    rental_end?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    isPaid?: BoolWithAggregatesFilter<"Order"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    listingId?: StringFilter<"Chat"> | string
    chatUserId?: StringFilter<"Chat"> | string
    ownerUserId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    active?: BoolFilter<"Chat"> | boolean
    lastMessage?: StringFilter<"Chat"> | string
    isLastMessageRead?: BoolFilter<"Chat"> | boolean
    lastMessageSenderId?: StringFilter<"Chat"> | string
    messages?: MessageListRelationFilter
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    ownerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    rentalRequests?: RentalRequestListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    chatUserId?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    lastMessage?: SortOrder
    isLastMessageRead?: SortOrder
    lastMessageSenderId?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    listing?: ListingOrderByWithRelationInput
    ownerUser?: UserOrderByWithRelationInput
    chatUser?: UserOrderByWithRelationInput
    rentalRequests?: RentalRequestOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    listingId?: StringFilter<"Chat"> | string
    chatUserId?: StringFilter<"Chat"> | string
    ownerUserId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    active?: BoolFilter<"Chat"> | boolean
    lastMessage?: StringFilter<"Chat"> | string
    isLastMessageRead?: BoolFilter<"Chat"> | boolean
    lastMessageSenderId?: StringFilter<"Chat"> | string
    messages?: MessageListRelationFilter
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    ownerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    rentalRequests?: RentalRequestListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    chatUserId?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    lastMessage?: SortOrder
    isLastMessageRead?: SortOrder
    lastMessageSenderId?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    listingId?: StringWithAggregatesFilter<"Chat"> | string
    chatUserId?: StringWithAggregatesFilter<"Chat"> | string
    ownerUserId?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    active?: BoolWithAggregatesFilter<"Chat"> | boolean
    lastMessage?: StringWithAggregatesFilter<"Chat"> | string
    isLastMessageRead?: BoolWithAggregatesFilter<"Chat"> | boolean
    lastMessageSenderId?: StringWithAggregatesFilter<"Chat"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    message?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type RentalRequestWhereInput = {
    AND?: RentalRequestWhereInput | RentalRequestWhereInput[]
    OR?: RentalRequestWhereInput[]
    NOT?: RentalRequestWhereInput | RentalRequestWhereInput[]
    id?: StringFilter<"RentalRequest"> | string
    chatId?: StringFilter<"RentalRequest"> | string
    listingId?: StringFilter<"RentalRequest"> | string
    renterId?: StringFilter<"RentalRequest"> | string
    ownerId?: StringFilter<"RentalRequest"> | string
    status?: EnumRentalRequestStatusFilter<"RentalRequest"> | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFilter<"RentalRequest"> | Date | string
    rentalEnd?: DateTimeFilter<"RentalRequest"> | Date | string
    createdAt?: DateTimeFilter<"RentalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RentalRequest"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type RentalRequestOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    listingId?: SortOrder
    renterId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    rentalStart?: SortOrder
    rentalEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
  }

  export type RentalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalRequestWhereInput | RentalRequestWhereInput[]
    OR?: RentalRequestWhereInput[]
    NOT?: RentalRequestWhereInput | RentalRequestWhereInput[]
    chatId?: StringFilter<"RentalRequest"> | string
    listingId?: StringFilter<"RentalRequest"> | string
    renterId?: StringFilter<"RentalRequest"> | string
    ownerId?: StringFilter<"RentalRequest"> | string
    status?: EnumRentalRequestStatusFilter<"RentalRequest"> | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFilter<"RentalRequest"> | Date | string
    rentalEnd?: DateTimeFilter<"RentalRequest"> | Date | string
    createdAt?: DateTimeFilter<"RentalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RentalRequest"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id">

  export type RentalRequestOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    listingId?: SortOrder
    renterId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    rentalStart?: SortOrder
    rentalEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalRequestCountOrderByAggregateInput
    _max?: RentalRequestMaxOrderByAggregateInput
    _min?: RentalRequestMinOrderByAggregateInput
  }

  export type RentalRequestScalarWhereWithAggregatesInput = {
    AND?: RentalRequestScalarWhereWithAggregatesInput | RentalRequestScalarWhereWithAggregatesInput[]
    OR?: RentalRequestScalarWhereWithAggregatesInput[]
    NOT?: RentalRequestScalarWhereWithAggregatesInput | RentalRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalRequest"> | string
    chatId?: StringWithAggregatesFilter<"RentalRequest"> | string
    listingId?: StringWithAggregatesFilter<"RentalRequest"> | string
    renterId?: StringWithAggregatesFilter<"RentalRequest"> | string
    ownerId?: StringWithAggregatesFilter<"RentalRequest"> | string
    status?: EnumRentalRequestStatusWithAggregatesFilter<"RentalRequest"> | $Enums.RentalRequestStatus
    rentalStart?: DateTimeWithAggregatesFilter<"RentalRequest"> | Date | string
    rentalEnd?: DateTimeWithAggregatesFilter<"RentalRequest"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RentalRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutOwnerInput
    orders?: OrderCreateNestedManyWithoutUserInput
    ownerChats?: ChatCreateNestedManyWithoutOwnerUserInput
    chatUserChats?: ChatCreateNestedManyWithoutChatUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutOwnerInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    ownerChats?: ChatUncheckedCreateNestedManyWithoutOwnerUserInput
    chatUserChats?: ChatUncheckedCreateNestedManyWithoutChatUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutOwnerNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    ownerChats?: ChatUpdateManyWithoutOwnerUserNestedInput
    chatUserChats?: ChatUpdateManyWithoutChatUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutOwnerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    ownerChats?: ChatUncheckedUpdateManyWithoutOwnerUserNestedInput
    chatUserChats?: ChatUncheckedUpdateManyWithoutChatUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    id?: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutListingsInput
    orders?: OrderCreateNestedManyWithoutListingInput
    chats?: ChatCreateNestedManyWithoutListingInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutListingInput
    chats?: ChatUncheckedCreateNestedManyWithoutListingInput
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutListingsNestedInput
    orders?: OrderUpdateManyWithoutListingNestedInput
    chats?: ChatUpdateManyWithoutListingNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutListingNestedInput
    chats?: ChatUncheckedUpdateManyWithoutListingNestedInput
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    ownerId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutOrdersInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    listingId: string
    ownerId: string
    userId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    listingId: string
    ownerId: string
    userId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageCreateNestedManyWithoutChatInput
    listing: ListingCreateNestedOneWithoutChatsInput
    ownerUser: UserCreateNestedOneWithoutOwnerChatsInput
    chatUser: UserCreateNestedOneWithoutChatUserChatsInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    listingId: string
    chatUserId: string
    ownerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    listing?: ListingUpdateOneRequiredWithoutChatsNestedInput
    ownerUser?: UserUpdateOneRequiredWithoutOwnerChatsNestedInput
    chatUser?: UserUpdateOneRequiredWithoutChatUserChatsNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    chatUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    listingId: string
    chatUserId: string
    ownerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    chatUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    message: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    chatId: string
    message: string
    senderId: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    chatId: string
    message: string
    senderId: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalRequestCreateInput = {
    id?: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutRentalRequestsInput
    listing: ListingCreateNestedOneWithoutRentalRequestsInput
  }

  export type RentalRequestUncheckedCreateInput = {
    id?: string
    chatId: string
    listingId: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutRentalRequestsNestedInput
    listing?: ListingUpdateOneRequiredWithoutRentalRequestsNestedInput
  }

  export type RentalRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalRequestCreateManyInput = {
    id?: string
    chatId: string
    listingId: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMakeFilter<$PrismaModel = never> = {
    equals?: $Enums.Make | EnumMakeFieldRefInput<$PrismaModel>
    in?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    not?: NestedEnumMakeFilter<$PrismaModel> | $Enums.Make
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumBodyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBodyTypeFilter<$PrismaModel> | $Enums.BodyType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTransmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionTypeFilter<$PrismaModel> | $Enums.TransmissionType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumDistrictFilter<$PrismaModel = never> = {
    equals?: $Enums.District | EnumDistrictFieldRefInput<$PrismaModel>
    in?: $Enums.District[] | ListEnumDistrictFieldRefInput<$PrismaModel>
    notIn?: $Enums.District[] | ListEnumDistrictFieldRefInput<$PrismaModel>
    not?: NestedEnumDistrictFilter<$PrismaModel> | $Enums.District
  }

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RentalRequestListRelationFilter = {
    every?: RentalRequestWhereInput
    some?: RentalRequestWhereInput
    none?: RentalRequestWhereInput
  }

  export type RentalRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    trim?: SortOrder
    body_type?: SortOrder
    exterior_color?: SortOrder
    interior_color?: SortOrder
    horsepower?: SortOrder
    doors?: SortOrder
    fuel_type?: SortOrder
    cylinders?: SortOrder
    engine_capacity_cc?: SortOrder
    battery_capacity_kwh?: SortOrder
    range_km?: SortOrder
    seating_capacity?: SortOrder
    transmission_type?: SortOrder
    mileage_km?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    min_rental_days?: SortOrder
    max_rental_days?: SortOrder
    description?: SortOrder
    available?: SortOrder
    city?: SortOrder
    district?: SortOrder
    status?: SortOrder
    images?: SortOrder
    platformAssured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    year?: SortOrder
    horsepower?: SortOrder
    doors?: SortOrder
    cylinders?: SortOrder
    engine_capacity_cc?: SortOrder
    battery_capacity_kwh?: SortOrder
    range_km?: SortOrder
    seating_capacity?: SortOrder
    mileage_km?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    min_rental_days?: SortOrder
    max_rental_days?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    trim?: SortOrder
    body_type?: SortOrder
    exterior_color?: SortOrder
    interior_color?: SortOrder
    horsepower?: SortOrder
    doors?: SortOrder
    fuel_type?: SortOrder
    cylinders?: SortOrder
    engine_capacity_cc?: SortOrder
    battery_capacity_kwh?: SortOrder
    range_km?: SortOrder
    seating_capacity?: SortOrder
    transmission_type?: SortOrder
    mileage_km?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    min_rental_days?: SortOrder
    max_rental_days?: SortOrder
    description?: SortOrder
    available?: SortOrder
    city?: SortOrder
    district?: SortOrder
    status?: SortOrder
    platformAssured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    trim?: SortOrder
    body_type?: SortOrder
    exterior_color?: SortOrder
    interior_color?: SortOrder
    horsepower?: SortOrder
    doors?: SortOrder
    fuel_type?: SortOrder
    cylinders?: SortOrder
    engine_capacity_cc?: SortOrder
    battery_capacity_kwh?: SortOrder
    range_km?: SortOrder
    seating_capacity?: SortOrder
    transmission_type?: SortOrder
    mileage_km?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    min_rental_days?: SortOrder
    max_rental_days?: SortOrder
    description?: SortOrder
    available?: SortOrder
    city?: SortOrder
    district?: SortOrder
    status?: SortOrder
    platformAssured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    year?: SortOrder
    horsepower?: SortOrder
    doors?: SortOrder
    cylinders?: SortOrder
    engine_capacity_cc?: SortOrder
    battery_capacity_kwh?: SortOrder
    range_km?: SortOrder
    seating_capacity?: SortOrder
    mileage_km?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    min_rental_days?: SortOrder
    max_rental_days?: SortOrder
  }

  export type EnumMakeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Make | EnumMakeFieldRefInput<$PrismaModel>
    in?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    not?: NestedEnumMakeWithAggregatesFilter<$PrismaModel> | $Enums.Make
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMakeFilter<$PrismaModel>
    _max?: NestedEnumMakeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBodyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBodyTypeWithAggregatesFilter<$PrismaModel> | $Enums.BodyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBodyTypeFilter<$PrismaModel>
    _max?: NestedEnumBodyTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTransmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransmissionTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDistrictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.District | EnumDistrictFieldRefInput<$PrismaModel>
    in?: $Enums.District[] | ListEnumDistrictFieldRefInput<$PrismaModel>
    notIn?: $Enums.District[] | ListEnumDistrictFieldRefInput<$PrismaModel>
    not?: NestedEnumDistrictWithAggregatesFilter<$PrismaModel> | $Enums.District
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDistrictFilter<$PrismaModel>
    _max?: NestedEnumDistrictFilter<$PrismaModel>
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type ListingScalarRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
    price_per_day?: SortOrder
    rental_start?: SortOrder
    rental_end?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    price_per_day?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
    price_per_day?: SortOrder
    rental_start?: SortOrder
    rental_end?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
    price_per_day?: SortOrder
    rental_start?: SortOrder
    rental_end?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    price_per_day?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    chatUserId?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    lastMessage?: SortOrder
    isLastMessageRead?: SortOrder
    lastMessageSenderId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    chatUserId?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    lastMessage?: SortOrder
    isLastMessageRead?: SortOrder
    lastMessageSenderId?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    chatUserId?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    lastMessage?: SortOrder
    isLastMessageRead?: SortOrder
    lastMessageSenderId?: SortOrder
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type EnumRentalRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalRequestStatus | EnumRentalRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalRequestStatus[] | ListEnumRentalRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalRequestStatus[] | ListEnumRentalRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalRequestStatusFilter<$PrismaModel> | $Enums.RentalRequestStatus
  }

  export type RentalRequestCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    listingId?: SortOrder
    renterId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    rentalStart?: SortOrder
    rentalEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    listingId?: SortOrder
    renterId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    rentalStart?: SortOrder
    rentalEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalRequestMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    listingId?: SortOrder
    renterId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    rentalStart?: SortOrder
    rentalEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRentalRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalRequestStatus | EnumRentalRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalRequestStatus[] | ListEnumRentalRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalRequestStatus[] | ListEnumRentalRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalRequestStatusFilter<$PrismaModel>
  }

  export type ListingCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ListingCreateWithoutOwnerInput, ListingUncheckedCreateWithoutOwnerInput> | ListingCreateWithoutOwnerInput[] | ListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutOwnerInput | ListingCreateOrConnectWithoutOwnerInput[]
    createMany?: ListingCreateManyOwnerInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutOwnerUserInput = {
    create?: XOR<ChatCreateWithoutOwnerUserInput, ChatUncheckedCreateWithoutOwnerUserInput> | ChatCreateWithoutOwnerUserInput[] | ChatUncheckedCreateWithoutOwnerUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOwnerUserInput | ChatCreateOrConnectWithoutOwnerUserInput[]
    createMany?: ChatCreateManyOwnerUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutChatUserInput = {
    create?: XOR<ChatCreateWithoutChatUserInput, ChatUncheckedCreateWithoutChatUserInput> | ChatCreateWithoutChatUserInput[] | ChatUncheckedCreateWithoutChatUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutChatUserInput | ChatCreateOrConnectWithoutChatUserInput[]
    createMany?: ChatCreateManyChatUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ListingCreateWithoutOwnerInput, ListingUncheckedCreateWithoutOwnerInput> | ListingCreateWithoutOwnerInput[] | ListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutOwnerInput | ListingCreateOrConnectWithoutOwnerInput[]
    createMany?: ListingCreateManyOwnerInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutOwnerUserInput = {
    create?: XOR<ChatCreateWithoutOwnerUserInput, ChatUncheckedCreateWithoutOwnerUserInput> | ChatCreateWithoutOwnerUserInput[] | ChatUncheckedCreateWithoutOwnerUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOwnerUserInput | ChatCreateOrConnectWithoutOwnerUserInput[]
    createMany?: ChatCreateManyOwnerUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutChatUserInput = {
    create?: XOR<ChatCreateWithoutChatUserInput, ChatUncheckedCreateWithoutChatUserInput> | ChatCreateWithoutChatUserInput[] | ChatUncheckedCreateWithoutChatUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutChatUserInput | ChatCreateOrConnectWithoutChatUserInput[]
    createMany?: ChatCreateManyChatUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ListingUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ListingCreateWithoutOwnerInput, ListingUncheckedCreateWithoutOwnerInput> | ListingCreateWithoutOwnerInput[] | ListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutOwnerInput | ListingCreateOrConnectWithoutOwnerInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutOwnerInput | ListingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ListingCreateManyOwnerInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutOwnerInput | ListingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutOwnerInput | ListingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutOwnerUserNestedInput = {
    create?: XOR<ChatCreateWithoutOwnerUserInput, ChatUncheckedCreateWithoutOwnerUserInput> | ChatCreateWithoutOwnerUserInput[] | ChatUncheckedCreateWithoutOwnerUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOwnerUserInput | ChatCreateOrConnectWithoutOwnerUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutOwnerUserInput | ChatUpsertWithWhereUniqueWithoutOwnerUserInput[]
    createMany?: ChatCreateManyOwnerUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutOwnerUserInput | ChatUpdateWithWhereUniqueWithoutOwnerUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutOwnerUserInput | ChatUpdateManyWithWhereWithoutOwnerUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutChatUserNestedInput = {
    create?: XOR<ChatCreateWithoutChatUserInput, ChatUncheckedCreateWithoutChatUserInput> | ChatCreateWithoutChatUserInput[] | ChatUncheckedCreateWithoutChatUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutChatUserInput | ChatCreateOrConnectWithoutChatUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutChatUserInput | ChatUpsertWithWhereUniqueWithoutChatUserInput[]
    createMany?: ChatCreateManyChatUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutChatUserInput | ChatUpdateWithWhereUniqueWithoutChatUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutChatUserInput | ChatUpdateManyWithWhereWithoutChatUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ListingCreateWithoutOwnerInput, ListingUncheckedCreateWithoutOwnerInput> | ListingCreateWithoutOwnerInput[] | ListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutOwnerInput | ListingCreateOrConnectWithoutOwnerInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutOwnerInput | ListingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ListingCreateManyOwnerInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutOwnerInput | ListingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutOwnerInput | ListingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutOwnerUserNestedInput = {
    create?: XOR<ChatCreateWithoutOwnerUserInput, ChatUncheckedCreateWithoutOwnerUserInput> | ChatCreateWithoutOwnerUserInput[] | ChatUncheckedCreateWithoutOwnerUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOwnerUserInput | ChatCreateOrConnectWithoutOwnerUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutOwnerUserInput | ChatUpsertWithWhereUniqueWithoutOwnerUserInput[]
    createMany?: ChatCreateManyOwnerUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutOwnerUserInput | ChatUpdateWithWhereUniqueWithoutOwnerUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutOwnerUserInput | ChatUpdateManyWithWhereWithoutOwnerUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutChatUserNestedInput = {
    create?: XOR<ChatCreateWithoutChatUserInput, ChatUncheckedCreateWithoutChatUserInput> | ChatCreateWithoutChatUserInput[] | ChatUncheckedCreateWithoutChatUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutChatUserInput | ChatCreateOrConnectWithoutChatUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutChatUserInput | ChatUpsertWithWhereUniqueWithoutChatUserInput[]
    createMany?: ChatCreateManyChatUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutChatUserInput | ChatUpdateWithWhereUniqueWithoutChatUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutChatUserInput | ChatUpdateManyWithWhereWithoutChatUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ListingCreateimagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutListingInput = {
    create?: XOR<OrderCreateWithoutListingInput, OrderUncheckedCreateWithoutListingInput> | OrderCreateWithoutListingInput[] | OrderUncheckedCreateWithoutListingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutListingInput | OrderCreateOrConnectWithoutListingInput[]
    createMany?: OrderCreateManyListingInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutListingInput = {
    create?: XOR<ChatCreateWithoutListingInput, ChatUncheckedCreateWithoutListingInput> | ChatCreateWithoutListingInput[] | ChatUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutListingInput | ChatCreateOrConnectWithoutListingInput[]
    createMany?: ChatCreateManyListingInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type RentalRequestCreateNestedManyWithoutListingInput = {
    create?: XOR<RentalRequestCreateWithoutListingInput, RentalRequestUncheckedCreateWithoutListingInput> | RentalRequestCreateWithoutListingInput[] | RentalRequestUncheckedCreateWithoutListingInput[]
    connectOrCreate?: RentalRequestCreateOrConnectWithoutListingInput | RentalRequestCreateOrConnectWithoutListingInput[]
    createMany?: RentalRequestCreateManyListingInputEnvelope
    connect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<OrderCreateWithoutListingInput, OrderUncheckedCreateWithoutListingInput> | OrderCreateWithoutListingInput[] | OrderUncheckedCreateWithoutListingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutListingInput | OrderCreateOrConnectWithoutListingInput[]
    createMany?: OrderCreateManyListingInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ChatCreateWithoutListingInput, ChatUncheckedCreateWithoutListingInput> | ChatCreateWithoutListingInput[] | ChatUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutListingInput | ChatCreateOrConnectWithoutListingInput[]
    createMany?: ChatCreateManyListingInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type RentalRequestUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<RentalRequestCreateWithoutListingInput, RentalRequestUncheckedCreateWithoutListingInput> | RentalRequestCreateWithoutListingInput[] | RentalRequestUncheckedCreateWithoutListingInput[]
    connectOrCreate?: RentalRequestCreateOrConnectWithoutListingInput | RentalRequestCreateOrConnectWithoutListingInput[]
    createMany?: RentalRequestCreateManyListingInputEnvelope
    connect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
  }

  export type EnumMakeFieldUpdateOperationsInput = {
    set?: $Enums.Make
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBodyTypeFieldUpdateOperationsInput = {
    set?: $Enums.BodyType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTransmissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransmissionType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumDistrictFieldUpdateOperationsInput = {
    set?: $Enums.District
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type ListingUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
  }

  export type OrderUpdateManyWithoutListingNestedInput = {
    create?: XOR<OrderCreateWithoutListingInput, OrderUncheckedCreateWithoutListingInput> | OrderCreateWithoutListingInput[] | OrderUncheckedCreateWithoutListingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutListingInput | OrderCreateOrConnectWithoutListingInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutListingInput | OrderUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: OrderCreateManyListingInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutListingInput | OrderUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutListingInput | OrderUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutListingNestedInput = {
    create?: XOR<ChatCreateWithoutListingInput, ChatUncheckedCreateWithoutListingInput> | ChatCreateWithoutListingInput[] | ChatUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutListingInput | ChatCreateOrConnectWithoutListingInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutListingInput | ChatUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ChatCreateManyListingInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutListingInput | ChatUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutListingInput | ChatUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type RentalRequestUpdateManyWithoutListingNestedInput = {
    create?: XOR<RentalRequestCreateWithoutListingInput, RentalRequestUncheckedCreateWithoutListingInput> | RentalRequestCreateWithoutListingInput[] | RentalRequestUncheckedCreateWithoutListingInput[]
    connectOrCreate?: RentalRequestCreateOrConnectWithoutListingInput | RentalRequestCreateOrConnectWithoutListingInput[]
    upsert?: RentalRequestUpsertWithWhereUniqueWithoutListingInput | RentalRequestUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: RentalRequestCreateManyListingInputEnvelope
    set?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    disconnect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    delete?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    connect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    update?: RentalRequestUpdateWithWhereUniqueWithoutListingInput | RentalRequestUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: RentalRequestUpdateManyWithWhereWithoutListingInput | RentalRequestUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: RentalRequestScalarWhereInput | RentalRequestScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<OrderCreateWithoutListingInput, OrderUncheckedCreateWithoutListingInput> | OrderCreateWithoutListingInput[] | OrderUncheckedCreateWithoutListingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutListingInput | OrderCreateOrConnectWithoutListingInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutListingInput | OrderUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: OrderCreateManyListingInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutListingInput | OrderUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutListingInput | OrderUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ChatCreateWithoutListingInput, ChatUncheckedCreateWithoutListingInput> | ChatCreateWithoutListingInput[] | ChatUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutListingInput | ChatCreateOrConnectWithoutListingInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutListingInput | ChatUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ChatCreateManyListingInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutListingInput | ChatUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutListingInput | ChatUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type RentalRequestUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<RentalRequestCreateWithoutListingInput, RentalRequestUncheckedCreateWithoutListingInput> | RentalRequestCreateWithoutListingInput[] | RentalRequestUncheckedCreateWithoutListingInput[]
    connectOrCreate?: RentalRequestCreateOrConnectWithoutListingInput | RentalRequestCreateOrConnectWithoutListingInput[]
    upsert?: RentalRequestUpsertWithWhereUniqueWithoutListingInput | RentalRequestUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: RentalRequestCreateManyListingInputEnvelope
    set?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    disconnect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    delete?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    connect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    update?: RentalRequestUpdateWithWhereUniqueWithoutListingInput | RentalRequestUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: RentalRequestUpdateManyWithWhereWithoutListingInput | RentalRequestUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: RentalRequestScalarWhereInput | RentalRequestScalarWhereInput[]
  }

  export type ListingCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ListingCreateWithoutOrdersInput, ListingUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ListingCreateOrConnectWithoutOrdersInput
    connect?: ListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type ListingUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ListingCreateWithoutOrdersInput, ListingUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ListingCreateOrConnectWithoutOrdersInput
    upsert?: ListingUpsertWithoutOrdersInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutOrdersInput, ListingUpdateWithoutOrdersInput>, ListingUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ListingCreateNestedOneWithoutChatsInput = {
    create?: XOR<ListingCreateWithoutChatsInput, ListingUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutChatsInput
    connect?: ListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOwnerChatsInput = {
    create?: XOR<UserCreateWithoutOwnerChatsInput, UserUncheckedCreateWithoutOwnerChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnerChatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatUserChatsInput = {
    create?: XOR<UserCreateWithoutChatUserChatsInput, UserUncheckedCreateWithoutChatUserChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatUserChatsInput
    connect?: UserWhereUniqueInput
  }

  export type RentalRequestCreateNestedManyWithoutChatInput = {
    create?: XOR<RentalRequestCreateWithoutChatInput, RentalRequestUncheckedCreateWithoutChatInput> | RentalRequestCreateWithoutChatInput[] | RentalRequestUncheckedCreateWithoutChatInput[]
    connectOrCreate?: RentalRequestCreateOrConnectWithoutChatInput | RentalRequestCreateOrConnectWithoutChatInput[]
    createMany?: RentalRequestCreateManyChatInputEnvelope
    connect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RentalRequestUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<RentalRequestCreateWithoutChatInput, RentalRequestUncheckedCreateWithoutChatInput> | RentalRequestCreateWithoutChatInput[] | RentalRequestUncheckedCreateWithoutChatInput[]
    connectOrCreate?: RentalRequestCreateOrConnectWithoutChatInput | RentalRequestCreateOrConnectWithoutChatInput[]
    createMany?: RentalRequestCreateManyChatInputEnvelope
    connect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ListingUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<ListingCreateWithoutChatsInput, ListingUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutChatsInput
    upsert?: ListingUpsertWithoutChatsInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutChatsInput, ListingUpdateWithoutChatsInput>, ListingUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateOneRequiredWithoutOwnerChatsNestedInput = {
    create?: XOR<UserCreateWithoutOwnerChatsInput, UserUncheckedCreateWithoutOwnerChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnerChatsInput
    upsert?: UserUpsertWithoutOwnerChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnerChatsInput, UserUpdateWithoutOwnerChatsInput>, UserUncheckedUpdateWithoutOwnerChatsInput>
  }

  export type UserUpdateOneRequiredWithoutChatUserChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatUserChatsInput, UserUncheckedCreateWithoutChatUserChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatUserChatsInput
    upsert?: UserUpsertWithoutChatUserChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatUserChatsInput, UserUpdateWithoutChatUserChatsInput>, UserUncheckedUpdateWithoutChatUserChatsInput>
  }

  export type RentalRequestUpdateManyWithoutChatNestedInput = {
    create?: XOR<RentalRequestCreateWithoutChatInput, RentalRequestUncheckedCreateWithoutChatInput> | RentalRequestCreateWithoutChatInput[] | RentalRequestUncheckedCreateWithoutChatInput[]
    connectOrCreate?: RentalRequestCreateOrConnectWithoutChatInput | RentalRequestCreateOrConnectWithoutChatInput[]
    upsert?: RentalRequestUpsertWithWhereUniqueWithoutChatInput | RentalRequestUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: RentalRequestCreateManyChatInputEnvelope
    set?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    disconnect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    delete?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    connect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    update?: RentalRequestUpdateWithWhereUniqueWithoutChatInput | RentalRequestUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: RentalRequestUpdateManyWithWhereWithoutChatInput | RentalRequestUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: RentalRequestScalarWhereInput | RentalRequestScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RentalRequestUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<RentalRequestCreateWithoutChatInput, RentalRequestUncheckedCreateWithoutChatInput> | RentalRequestCreateWithoutChatInput[] | RentalRequestUncheckedCreateWithoutChatInput[]
    connectOrCreate?: RentalRequestCreateOrConnectWithoutChatInput | RentalRequestCreateOrConnectWithoutChatInput[]
    upsert?: RentalRequestUpsertWithWhereUniqueWithoutChatInput | RentalRequestUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: RentalRequestCreateManyChatInputEnvelope
    set?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    disconnect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    delete?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    connect?: RentalRequestWhereUniqueInput | RentalRequestWhereUniqueInput[]
    update?: RentalRequestUpdateWithWhereUniqueWithoutChatInput | RentalRequestUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: RentalRequestUpdateManyWithWhereWithoutChatInput | RentalRequestUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: RentalRequestScalarWhereInput | RentalRequestScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatCreateNestedOneWithoutRentalRequestsInput = {
    create?: XOR<ChatCreateWithoutRentalRequestsInput, ChatUncheckedCreateWithoutRentalRequestsInput>
    connectOrCreate?: ChatCreateOrConnectWithoutRentalRequestsInput
    connect?: ChatWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutRentalRequestsInput = {
    create?: XOR<ListingCreateWithoutRentalRequestsInput, ListingUncheckedCreateWithoutRentalRequestsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutRentalRequestsInput
    connect?: ListingWhereUniqueInput
  }

  export type EnumRentalRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RentalRequestStatus
  }

  export type ChatUpdateOneRequiredWithoutRentalRequestsNestedInput = {
    create?: XOR<ChatCreateWithoutRentalRequestsInput, ChatUncheckedCreateWithoutRentalRequestsInput>
    connectOrCreate?: ChatCreateOrConnectWithoutRentalRequestsInput
    upsert?: ChatUpsertWithoutRentalRequestsInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutRentalRequestsInput, ChatUpdateWithoutRentalRequestsInput>, ChatUncheckedUpdateWithoutRentalRequestsInput>
  }

  export type ListingUpdateOneRequiredWithoutRentalRequestsNestedInput = {
    create?: XOR<ListingCreateWithoutRentalRequestsInput, ListingUncheckedCreateWithoutRentalRequestsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutRentalRequestsInput
    upsert?: ListingUpsertWithoutRentalRequestsInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutRentalRequestsInput, ListingUpdateWithoutRentalRequestsInput>, ListingUncheckedUpdateWithoutRentalRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMakeFilter<$PrismaModel = never> = {
    equals?: $Enums.Make | EnumMakeFieldRefInput<$PrismaModel>
    in?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    not?: NestedEnumMakeFilter<$PrismaModel> | $Enums.Make
  }

  export type NestedEnumBodyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBodyTypeFilter<$PrismaModel> | $Enums.BodyType
  }

  export type NestedEnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTransmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionTypeFilter<$PrismaModel> | $Enums.TransmissionType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDistrictFilter<$PrismaModel = never> = {
    equals?: $Enums.District | EnumDistrictFieldRefInput<$PrismaModel>
    in?: $Enums.District[] | ListEnumDistrictFieldRefInput<$PrismaModel>
    notIn?: $Enums.District[] | ListEnumDistrictFieldRefInput<$PrismaModel>
    not?: NestedEnumDistrictFilter<$PrismaModel> | $Enums.District
  }

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedEnumMakeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Make | EnumMakeFieldRefInput<$PrismaModel>
    in?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    not?: NestedEnumMakeWithAggregatesFilter<$PrismaModel> | $Enums.Make
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMakeFilter<$PrismaModel>
    _max?: NestedEnumMakeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumBodyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBodyTypeWithAggregatesFilter<$PrismaModel> | $Enums.BodyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBodyTypeFilter<$PrismaModel>
    _max?: NestedEnumBodyTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransmissionTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDistrictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.District | EnumDistrictFieldRefInput<$PrismaModel>
    in?: $Enums.District[] | ListEnumDistrictFieldRefInput<$PrismaModel>
    notIn?: $Enums.District[] | ListEnumDistrictFieldRefInput<$PrismaModel>
    not?: NestedEnumDistrictWithAggregatesFilter<$PrismaModel> | $Enums.District
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDistrictFilter<$PrismaModel>
    _max?: NestedEnumDistrictFilter<$PrismaModel>
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedEnumRentalRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalRequestStatus | EnumRentalRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalRequestStatus[] | ListEnumRentalRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalRequestStatus[] | ListEnumRentalRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalRequestStatusFilter<$PrismaModel> | $Enums.RentalRequestStatus
  }

  export type NestedEnumRentalRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalRequestStatus | EnumRentalRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalRequestStatus[] | ListEnumRentalRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalRequestStatus[] | ListEnumRentalRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalRequestStatusFilter<$PrismaModel>
  }

  export type ListingCreateWithoutOwnerInput = {
    id?: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutListingInput
    chats?: ChatCreateNestedManyWithoutListingInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutListingInput
    chats?: ChatUncheckedCreateNestedManyWithoutListingInput
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutOwnerInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutOwnerInput, ListingUncheckedCreateWithoutOwnerInput>
  }

  export type ListingCreateManyOwnerInputEnvelope = {
    data: ListingCreateManyOwnerInput | ListingCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    ownerId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    listingId: string
    ownerId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutOwnerUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageCreateNestedManyWithoutChatInput
    listing: ListingCreateNestedOneWithoutChatsInput
    chatUser: UserCreateNestedOneWithoutChatUserChatsInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutOwnerUserInput = {
    id?: string
    listingId: string
    chatUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutOwnerUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutOwnerUserInput, ChatUncheckedCreateWithoutOwnerUserInput>
  }

  export type ChatCreateManyOwnerUserInputEnvelope = {
    data: ChatCreateManyOwnerUserInput | ChatCreateManyOwnerUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutChatUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageCreateNestedManyWithoutChatInput
    listing: ListingCreateNestedOneWithoutChatsInput
    ownerUser: UserCreateNestedOneWithoutOwnerChatsInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutChatUserInput = {
    id?: string
    listingId: string
    ownerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutChatUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutChatUserInput, ChatUncheckedCreateWithoutChatUserInput>
  }

  export type ChatCreateManyChatUserInputEnvelope = {
    data: ChatCreateManyChatUserInput | ChatCreateManyChatUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    message: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    chatId: string
    message: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ListingUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutOwnerInput, ListingUncheckedUpdateWithoutOwnerInput>
    create: XOR<ListingCreateWithoutOwnerInput, ListingUncheckedCreateWithoutOwnerInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutOwnerInput, ListingUncheckedUpdateWithoutOwnerInput>
  }

  export type ListingUpdateManyWithWhereWithoutOwnerInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: StringFilter<"Listing"> | string
    ownerId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    make?: EnumMakeFilter<"Listing"> | $Enums.Make
    model?: StringFilter<"Listing"> | string
    year?: IntFilter<"Listing"> | number
    trim?: StringNullableFilter<"Listing"> | string | null
    body_type?: EnumBodyTypeFilter<"Listing"> | $Enums.BodyType
    exterior_color?: StringFilter<"Listing"> | string
    interior_color?: StringNullableFilter<"Listing"> | string | null
    horsepower?: IntFilter<"Listing"> | number
    doors?: IntNullableFilter<"Listing"> | number | null
    fuel_type?: EnumFuelTypeFilter<"Listing"> | $Enums.FuelType
    cylinders?: IntNullableFilter<"Listing"> | number | null
    engine_capacity_cc?: IntNullableFilter<"Listing"> | number | null
    battery_capacity_kwh?: FloatNullableFilter<"Listing"> | number | null
    range_km?: IntNullableFilter<"Listing"> | number | null
    seating_capacity?: IntFilter<"Listing"> | number
    transmission_type?: EnumTransmissionTypeFilter<"Listing"> | $Enums.TransmissionType
    mileage_km?: IntFilter<"Listing"> | number
    price_per_day?: FloatFilter<"Listing"> | number
    deposit?: FloatNullableFilter<"Listing"> | number | null
    min_rental_days?: IntFilter<"Listing"> | number
    max_rental_days?: IntFilter<"Listing"> | number
    description?: StringFilter<"Listing"> | string
    available?: BoolFilter<"Listing"> | boolean
    city?: StringFilter<"Listing"> | string
    district?: EnumDistrictFilter<"Listing"> | $Enums.District
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    images?: StringNullableListFilter<"Listing">
    platformAssured?: BoolFilter<"Listing"> | boolean
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    listingId?: StringFilter<"Order"> | string
    ownerId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    price_per_day?: FloatFilter<"Order"> | number
    rental_start?: DateTimeFilter<"Order"> | Date | string
    rental_end?: DateTimeFilter<"Order"> | Date | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutOwnerUserInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutOwnerUserInput, ChatUncheckedUpdateWithoutOwnerUserInput>
    create: XOR<ChatCreateWithoutOwnerUserInput, ChatUncheckedCreateWithoutOwnerUserInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutOwnerUserInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutOwnerUserInput, ChatUncheckedUpdateWithoutOwnerUserInput>
  }

  export type ChatUpdateManyWithWhereWithoutOwnerUserInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutOwnerUserInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    listingId?: StringFilter<"Chat"> | string
    chatUserId?: StringFilter<"Chat"> | string
    ownerUserId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    active?: BoolFilter<"Chat"> | boolean
    lastMessage?: StringFilter<"Chat"> | string
    isLastMessageRead?: BoolFilter<"Chat"> | boolean
    lastMessageSenderId?: StringFilter<"Chat"> | string
  }

  export type ChatUpsertWithWhereUniqueWithoutChatUserInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutChatUserInput, ChatUncheckedUpdateWithoutChatUserInput>
    create: XOR<ChatCreateWithoutChatUserInput, ChatUncheckedCreateWithoutChatUserInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutChatUserInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutChatUserInput, ChatUncheckedUpdateWithoutChatUserInput>
  }

  export type ChatUpdateManyWithWhereWithoutChatUserInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutChatUserInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type UserCreateWithoutListingsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    ownerChats?: ChatCreateNestedManyWithoutOwnerUserInput
    chatUserChats?: ChatCreateNestedManyWithoutChatUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    ownerChats?: ChatUncheckedCreateNestedManyWithoutOwnerUserInput
    chatUserChats?: ChatUncheckedCreateNestedManyWithoutChatUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type OrderCreateWithoutListingInput = {
    id?: string
    ownerId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutListingInput = {
    id?: string
    ownerId: string
    userId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutListingInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutListingInput, OrderUncheckedCreateWithoutListingInput>
  }

  export type OrderCreateManyListingInputEnvelope = {
    data: OrderCreateManyListingInput | OrderCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageCreateNestedManyWithoutChatInput
    ownerUser: UserCreateNestedOneWithoutOwnerChatsInput
    chatUser: UserCreateNestedOneWithoutChatUserChatsInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutListingInput = {
    id?: string
    chatUserId: string
    ownerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutListingInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutListingInput, ChatUncheckedCreateWithoutListingInput>
  }

  export type ChatCreateManyListingInputEnvelope = {
    data: ChatCreateManyListingInput | ChatCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type RentalRequestCreateWithoutListingInput = {
    id?: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutRentalRequestsInput
  }

  export type RentalRequestUncheckedCreateWithoutListingInput = {
    id?: string
    chatId: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalRequestCreateOrConnectWithoutListingInput = {
    where: RentalRequestWhereUniqueInput
    create: XOR<RentalRequestCreateWithoutListingInput, RentalRequestUncheckedCreateWithoutListingInput>
  }

  export type RentalRequestCreateManyListingInputEnvelope = {
    data: RentalRequestCreateManyListingInput | RentalRequestCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListingsInput = {
    update: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    ownerChats?: ChatUpdateManyWithoutOwnerUserNestedInput
    chatUserChats?: ChatUpdateManyWithoutChatUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    ownerChats?: ChatUncheckedUpdateManyWithoutOwnerUserNestedInput
    chatUserChats?: ChatUncheckedUpdateManyWithoutChatUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutListingInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutListingInput, OrderUncheckedUpdateWithoutListingInput>
    create: XOR<OrderCreateWithoutListingInput, OrderUncheckedCreateWithoutListingInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutListingInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutListingInput, OrderUncheckedUpdateWithoutListingInput>
  }

  export type OrderUpdateManyWithWhereWithoutListingInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutListingInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutListingInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutListingInput, ChatUncheckedUpdateWithoutListingInput>
    create: XOR<ChatCreateWithoutListingInput, ChatUncheckedCreateWithoutListingInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutListingInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutListingInput, ChatUncheckedUpdateWithoutListingInput>
  }

  export type ChatUpdateManyWithWhereWithoutListingInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutListingInput>
  }

  export type RentalRequestUpsertWithWhereUniqueWithoutListingInput = {
    where: RentalRequestWhereUniqueInput
    update: XOR<RentalRequestUpdateWithoutListingInput, RentalRequestUncheckedUpdateWithoutListingInput>
    create: XOR<RentalRequestCreateWithoutListingInput, RentalRequestUncheckedCreateWithoutListingInput>
  }

  export type RentalRequestUpdateWithWhereUniqueWithoutListingInput = {
    where: RentalRequestWhereUniqueInput
    data: XOR<RentalRequestUpdateWithoutListingInput, RentalRequestUncheckedUpdateWithoutListingInput>
  }

  export type RentalRequestUpdateManyWithWhereWithoutListingInput = {
    where: RentalRequestScalarWhereInput
    data: XOR<RentalRequestUpdateManyMutationInput, RentalRequestUncheckedUpdateManyWithoutListingInput>
  }

  export type RentalRequestScalarWhereInput = {
    AND?: RentalRequestScalarWhereInput | RentalRequestScalarWhereInput[]
    OR?: RentalRequestScalarWhereInput[]
    NOT?: RentalRequestScalarWhereInput | RentalRequestScalarWhereInput[]
    id?: StringFilter<"RentalRequest"> | string
    chatId?: StringFilter<"RentalRequest"> | string
    listingId?: StringFilter<"RentalRequest"> | string
    renterId?: StringFilter<"RentalRequest"> | string
    ownerId?: StringFilter<"RentalRequest"> | string
    status?: EnumRentalRequestStatusFilter<"RentalRequest"> | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFilter<"RentalRequest"> | Date | string
    rentalEnd?: DateTimeFilter<"RentalRequest"> | Date | string
    createdAt?: DateTimeFilter<"RentalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RentalRequest"> | Date | string
  }

  export type ListingCreateWithoutOrdersInput = {
    id?: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutListingsInput
    chats?: ChatCreateNestedManyWithoutListingInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutOrdersInput = {
    id?: string
    ownerId: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutListingInput
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutOrdersInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutOrdersInput, ListingUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutOwnerInput
    ownerChats?: ChatCreateNestedManyWithoutOwnerUserInput
    chatUserChats?: ChatCreateNestedManyWithoutChatUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutOwnerInput
    ownerChats?: ChatUncheckedCreateNestedManyWithoutOwnerUserInput
    chatUserChats?: ChatUncheckedCreateNestedManyWithoutChatUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type ListingUpsertWithoutOrdersInput = {
    update: XOR<ListingUpdateWithoutOrdersInput, ListingUncheckedUpdateWithoutOrdersInput>
    create: XOR<ListingCreateWithoutOrdersInput, ListingUncheckedCreateWithoutOrdersInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutOrdersInput, ListingUncheckedUpdateWithoutOrdersInput>
  }

  export type ListingUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutListingsNestedInput
    chats?: ChatUpdateManyWithoutListingNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutListingNestedInput
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutListingNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutOwnerNestedInput
    ownerChats?: ChatUpdateManyWithoutOwnerUserNestedInput
    chatUserChats?: ChatUpdateManyWithoutChatUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutOwnerNestedInput
    ownerChats?: ChatUncheckedUpdateManyWithoutOwnerUserNestedInput
    chatUserChats?: ChatUncheckedUpdateManyWithoutChatUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    message: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    message: string
    senderId: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutChatsInput = {
    id?: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutListingsInput
    orders?: OrderCreateNestedManyWithoutListingInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutChatsInput = {
    id?: string
    ownerId: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutListingInput
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutChatsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutChatsInput, ListingUncheckedCreateWithoutChatsInput>
  }

  export type UserCreateWithoutOwnerChatsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutOwnerInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chatUserChats?: ChatCreateNestedManyWithoutChatUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutOwnerChatsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutOwnerInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chatUserChats?: ChatUncheckedCreateNestedManyWithoutChatUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutOwnerChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnerChatsInput, UserUncheckedCreateWithoutOwnerChatsInput>
  }

  export type UserCreateWithoutChatUserChatsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutOwnerInput
    orders?: OrderCreateNestedManyWithoutUserInput
    ownerChats?: ChatCreateNestedManyWithoutOwnerUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutChatUserChatsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutOwnerInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    ownerChats?: ChatUncheckedCreateNestedManyWithoutOwnerUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutChatUserChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatUserChatsInput, UserUncheckedCreateWithoutChatUserChatsInput>
  }

  export type RentalRequestCreateWithoutChatInput = {
    id?: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutRentalRequestsInput
  }

  export type RentalRequestUncheckedCreateWithoutChatInput = {
    id?: string
    listingId: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalRequestCreateOrConnectWithoutChatInput = {
    where: RentalRequestWhereUniqueInput
    create: XOR<RentalRequestCreateWithoutChatInput, RentalRequestUncheckedCreateWithoutChatInput>
  }

  export type RentalRequestCreateManyChatInputEnvelope = {
    data: RentalRequestCreateManyChatInput | RentalRequestCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ListingUpsertWithoutChatsInput = {
    update: XOR<ListingUpdateWithoutChatsInput, ListingUncheckedUpdateWithoutChatsInput>
    create: XOR<ListingCreateWithoutChatsInput, ListingUncheckedCreateWithoutChatsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutChatsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutChatsInput, ListingUncheckedUpdateWithoutChatsInput>
  }

  export type ListingUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutListingsNestedInput
    orders?: OrderUpdateManyWithoutListingNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutListingNestedInput
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutListingNestedInput
  }

  export type UserUpsertWithoutOwnerChatsInput = {
    update: XOR<UserUpdateWithoutOwnerChatsInput, UserUncheckedUpdateWithoutOwnerChatsInput>
    create: XOR<UserCreateWithoutOwnerChatsInput, UserUncheckedCreateWithoutOwnerChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnerChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnerChatsInput, UserUncheckedUpdateWithoutOwnerChatsInput>
  }

  export type UserUpdateWithoutOwnerChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutOwnerNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chatUserChats?: ChatUpdateManyWithoutChatUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnerChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutOwnerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chatUserChats?: ChatUncheckedUpdateManyWithoutChatUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutChatUserChatsInput = {
    update: XOR<UserUpdateWithoutChatUserChatsInput, UserUncheckedUpdateWithoutChatUserChatsInput>
    create: XOR<UserCreateWithoutChatUserChatsInput, UserUncheckedCreateWithoutChatUserChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatUserChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatUserChatsInput, UserUncheckedUpdateWithoutChatUserChatsInput>
  }

  export type UserUpdateWithoutChatUserChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutOwnerNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    ownerChats?: ChatUpdateManyWithoutOwnerUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutChatUserChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutOwnerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    ownerChats?: ChatUncheckedUpdateManyWithoutOwnerUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type RentalRequestUpsertWithWhereUniqueWithoutChatInput = {
    where: RentalRequestWhereUniqueInput
    update: XOR<RentalRequestUpdateWithoutChatInput, RentalRequestUncheckedUpdateWithoutChatInput>
    create: XOR<RentalRequestCreateWithoutChatInput, RentalRequestUncheckedCreateWithoutChatInput>
  }

  export type RentalRequestUpdateWithWhereUniqueWithoutChatInput = {
    where: RentalRequestWhereUniqueInput
    data: XOR<RentalRequestUpdateWithoutChatInput, RentalRequestUncheckedUpdateWithoutChatInput>
  }

  export type RentalRequestUpdateManyWithWhereWithoutChatInput = {
    where: RentalRequestScalarWhereInput
    data: XOR<RentalRequestUpdateManyMutationInput, RentalRequestUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    listing: ListingCreateNestedOneWithoutChatsInput
    ownerUser: UserCreateNestedOneWithoutOwnerChatsInput
    chatUser: UserCreateNestedOneWithoutChatUserChatsInput
    rentalRequests?: RentalRequestCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    listingId: string
    chatUserId: string
    ownerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    rentalRequests?: RentalRequestUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutOwnerInput
    orders?: OrderCreateNestedManyWithoutUserInput
    ownerChats?: ChatCreateNestedManyWithoutOwnerUserInput
    chatUserChats?: ChatCreateNestedManyWithoutChatUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutOwnerInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    ownerChats?: ChatUncheckedCreateNestedManyWithoutOwnerUserInput
    chatUserChats?: ChatUncheckedCreateNestedManyWithoutChatUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    listing?: ListingUpdateOneRequiredWithoutChatsNestedInput
    ownerUser?: UserUpdateOneRequiredWithoutOwnerChatsNestedInput
    chatUser?: UserUpdateOneRequiredWithoutChatUserChatsNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    chatUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutOwnerNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    ownerChats?: ChatUpdateManyWithoutOwnerUserNestedInput
    chatUserChats?: ChatUpdateManyWithoutChatUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutOwnerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    ownerChats?: ChatUncheckedUpdateManyWithoutOwnerUserNestedInput
    chatUserChats?: ChatUncheckedUpdateManyWithoutChatUserNestedInput
  }

  export type ChatCreateWithoutRentalRequestsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageCreateNestedManyWithoutChatInput
    listing: ListingCreateNestedOneWithoutChatsInput
    ownerUser: UserCreateNestedOneWithoutOwnerChatsInput
    chatUser: UserCreateNestedOneWithoutChatUserChatsInput
  }

  export type ChatUncheckedCreateWithoutRentalRequestsInput = {
    id?: string
    listingId: string
    chatUserId: string
    ownerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutRentalRequestsInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutRentalRequestsInput, ChatUncheckedCreateWithoutRentalRequestsInput>
  }

  export type ListingCreateWithoutRentalRequestsInput = {
    id?: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutListingsInput
    orders?: OrderCreateNestedManyWithoutListingInput
    chats?: ChatCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutRentalRequestsInput = {
    id?: string
    ownerId: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutListingInput
    chats?: ChatUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutRentalRequestsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutRentalRequestsInput, ListingUncheckedCreateWithoutRentalRequestsInput>
  }

  export type ChatUpsertWithoutRentalRequestsInput = {
    update: XOR<ChatUpdateWithoutRentalRequestsInput, ChatUncheckedUpdateWithoutRentalRequestsInput>
    create: XOR<ChatCreateWithoutRentalRequestsInput, ChatUncheckedCreateWithoutRentalRequestsInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutRentalRequestsInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutRentalRequestsInput, ChatUncheckedUpdateWithoutRentalRequestsInput>
  }

  export type ChatUpdateWithoutRentalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    listing?: ListingUpdateOneRequiredWithoutChatsNestedInput
    ownerUser?: UserUpdateOneRequiredWithoutOwnerChatsNestedInput
    chatUser?: UserUpdateOneRequiredWithoutChatUserChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutRentalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    chatUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ListingUpsertWithoutRentalRequestsInput = {
    update: XOR<ListingUpdateWithoutRentalRequestsInput, ListingUncheckedUpdateWithoutRentalRequestsInput>
    create: XOR<ListingCreateWithoutRentalRequestsInput, ListingUncheckedCreateWithoutRentalRequestsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutRentalRequestsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutRentalRequestsInput, ListingUncheckedUpdateWithoutRentalRequestsInput>
  }

  export type ListingUpdateWithoutRentalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutListingsNestedInput
    orders?: OrderUpdateManyWithoutListingNestedInput
    chats?: ChatUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutRentalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutListingNestedInput
    chats?: ChatUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyOwnerInput = {
    id?: string
    title: string
    make: $Enums.Make
    model: string
    year: number
    trim?: string | null
    body_type: $Enums.BodyType
    exterior_color: string
    interior_color?: string | null
    horsepower: number
    doors?: number | null
    fuel_type: $Enums.FuelType
    cylinders?: number | null
    engine_capacity_cc?: number | null
    battery_capacity_kwh?: number | null
    range_km?: number | null
    seating_capacity: number
    transmission_type: $Enums.TransmissionType
    mileage_km: number
    price_per_day: number
    deposit?: number | null
    min_rental_days?: number
    max_rental_days?: number
    description: string
    available?: boolean
    city: string
    district: $Enums.District
    status?: $Enums.ListingStatus
    images?: ListingCreateimagesInput | string[]
    platformAssured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    listingId: string
    ownerId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateManyOwnerUserInput = {
    id?: string
    listingId: string
    chatUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
  }

  export type ChatCreateManyChatUserInput = {
    id?: string
    listingId: string
    ownerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    chatId: string
    message: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type ListingUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutListingNestedInput
    chats?: ChatUpdateManyWithoutListingNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutListingNestedInput
    chats?: ChatUncheckedUpdateManyWithoutListingNestedInput
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    trim?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType
    exterior_color?: StringFieldUpdateOperationsInput | string
    interior_color?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: IntFieldUpdateOperationsInput | number
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    fuel_type?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    engine_capacity_cc?: NullableIntFieldUpdateOperationsInput | number | null
    battery_capacity_kwh?: NullableFloatFieldUpdateOperationsInput | number | null
    range_km?: NullableIntFieldUpdateOperationsInput | number | null
    seating_capacity?: IntFieldUpdateOperationsInput | number
    transmission_type?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    mileage_km?: IntFieldUpdateOperationsInput | number
    price_per_day?: FloatFieldUpdateOperationsInput | number
    deposit?: NullableFloatFieldUpdateOperationsInput | number | null
    min_rental_days?: IntFieldUpdateOperationsInput | number
    max_rental_days?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    city?: StringFieldUpdateOperationsInput | string
    district?: EnumDistrictFieldUpdateOperationsInput | $Enums.District
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    images?: ListingUpdateimagesInput | string[]
    platformAssured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutOwnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    listing?: ListingUpdateOneRequiredWithoutChatsNestedInput
    chatUser?: UserUpdateOneRequiredWithoutChatUserChatsNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutOwnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    chatUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutOwnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    chatUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUpdateWithoutChatUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    listing?: ListingUpdateOneRequiredWithoutChatsNestedInput
    ownerUser?: UserUpdateOneRequiredWithoutOwnerChatsNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutChatUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutChatUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyListingInput = {
    id?: string
    ownerId: string
    userId: string
    price_per_day: number
    rental_start: Date | string
    rental_end: Date | string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateManyListingInput = {
    id?: string
    chatUserId: string
    ownerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    lastMessage?: string
    isLastMessageRead?: boolean
    lastMessageSenderId?: string
  }

  export type RentalRequestCreateManyListingInput = {
    id?: string
    chatId: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rental_start?: DateTimeFieldUpdateOperationsInput | Date | string
    rental_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    ownerUser?: UserUpdateOneRequiredWithoutOwnerChatsNestedInput
    chatUser?: UserUpdateOneRequiredWithoutChatUserChatsNestedInput
    rentalRequests?: RentalRequestUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    rentalRequests?: RentalRequestUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    isLastMessageRead?: BoolFieldUpdateOperationsInput | boolean
    lastMessageSenderId?: StringFieldUpdateOperationsInput | string
  }

  export type RentalRequestUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutRentalRequestsNestedInput
  }

  export type RentalRequestUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalRequestUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    message: string
    senderId: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type RentalRequestCreateManyChatInput = {
    id?: string
    listingId: string
    renterId: string
    ownerId: string
    status?: $Enums.RentalRequestStatus
    rentalStart: Date | string
    rentalEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalRequestUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutRentalRequestsNestedInput
  }

  export type RentalRequestUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalRequestUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    renterId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus
    rentalStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}