
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model LostFoundPost
 * 
 */
export type LostFoundPost = $Result.DefaultSelection<Prisma.$LostFoundPostPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model SavedListing
 * 
 */
export type SavedListing = $Result.DefaultSelection<Prisma.$SavedListingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ListingStatus: {
  active: 'active',
  sold: 'sold',
  deleted: 'deleted'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const LFType: {
  lost: 'lost',
  found: 'found'
};

export type LFType = (typeof LFType)[keyof typeof LFType]


export const LFStatus: {
  open: 'open',
  resolved: 'resolved'
};

export type LFStatus = (typeof LFStatus)[keyof typeof LFStatus]


export const TransactionStatus: {
  pending: 'pending',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type LFType = $Enums.LFType

export const LFType: typeof $Enums.LFType

export type LFStatus = $Enums.LFStatus

export const LFStatus: typeof $Enums.LFStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.lostFoundPost`: Exposes CRUD operations for the **LostFoundPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LostFoundPosts
    * const lostFoundPosts = await prisma.lostFoundPost.findMany()
    * ```
    */
  get lostFoundPost(): Prisma.LostFoundPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedListing`: Exposes CRUD operations for the **SavedListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedListings
    * const savedListings = await prisma.savedListing.findMany()
    * ```
    */
  get savedListing(): Prisma.SavedListingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.6.0
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
    Category: 'Category',
    Listing: 'Listing',
    LostFoundPost: 'LostFoundPost',
    Image: 'Image',
    Message: 'Message',
    Transaction: 'Transaction',
    Report: 'Report',
    SavedListing: 'SavedListing'
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
      modelProps: "user" | "category" | "listing" | "lostFoundPost" | "image" | "message" | "transaction" | "report" | "savedListing"
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
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
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
      LostFoundPost: {
        payload: Prisma.$LostFoundPostPayload<ExtArgs>
        fields: Prisma.LostFoundPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LostFoundPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LostFoundPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>
          }
          findFirst: {
            args: Prisma.LostFoundPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LostFoundPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>
          }
          findMany: {
            args: Prisma.LostFoundPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>[]
          }
          create: {
            args: Prisma.LostFoundPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>
          }
          createMany: {
            args: Prisma.LostFoundPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LostFoundPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>[]
          }
          delete: {
            args: Prisma.LostFoundPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>
          }
          update: {
            args: Prisma.LostFoundPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>
          }
          deleteMany: {
            args: Prisma.LostFoundPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LostFoundPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LostFoundPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>[]
          }
          upsert: {
            args: Prisma.LostFoundPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPostPayload>
          }
          aggregate: {
            args: Prisma.LostFoundPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLostFoundPost>
          }
          groupBy: {
            args: Prisma.LostFoundPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<LostFoundPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.LostFoundPostCountArgs<ExtArgs>
            result: $Utils.Optional<LostFoundPostCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
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
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      SavedListing: {
        payload: Prisma.$SavedListingPayload<ExtArgs>
        fields: Prisma.SavedListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          findFirst: {
            args: Prisma.SavedListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          findMany: {
            args: Prisma.SavedListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>[]
          }
          create: {
            args: Prisma.SavedListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          createMany: {
            args: Prisma.SavedListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>[]
          }
          delete: {
            args: Prisma.SavedListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          update: {
            args: Prisma.SavedListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          deleteMany: {
            args: Prisma.SavedListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>[]
          }
          upsert: {
            args: Prisma.SavedListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          aggregate: {
            args: Prisma.SavedListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedListing>
          }
          groupBy: {
            args: Prisma.SavedListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedListingCountArgs<ExtArgs>
            result: $Utils.Optional<SavedListingCountAggregateOutputType> | number
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
    category?: CategoryOmit
    listing?: ListingOmit
    lostFoundPost?: LostFoundPostOmit
    image?: ImageOmit
    message?: MessageOmit
    transaction?: TransactionOmit
    report?: ReportOmit
    savedListing?: SavedListingOmit
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
    posts: number
    sentMessages: number
    receivedMessages: number
    purchases: number
    sales: number
    reports: number
    SavedListing: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    sales?: boolean | UserCountOutputTypeCountSalesArgs
    reports?: boolean | UserCountOutputTypeCountReportsArgs
    SavedListing?: boolean | UserCountOutputTypeCountSavedListingArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostFoundPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedListingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedListingWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    listings: number
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | CategoryCountOutputTypeCountListingsArgs
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostFoundPostWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    images: number
    transactions: number
    reports: number
    savedBy: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ListingCountOutputTypeCountImagesArgs
    transactions?: boolean | ListingCountOutputTypeCountTransactionsArgs
    reports?: boolean | ListingCountOutputTypeCountReportsArgs
    savedBy?: boolean | ListingCountOutputTypeCountSavedByArgs
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
  export type ListingCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedListingWhereInput
  }


  /**
   * Count Type LostFoundPostCountOutputType
   */

  export type LostFoundPostCountOutputType = {
    images: number
    reports: number
  }

  export type LostFoundPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | LostFoundPostCountOutputTypeCountImagesArgs
    reports?: boolean | LostFoundPostCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * LostFoundPostCountOutputType without action
   */
  export type LostFoundPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPostCountOutputType
     */
    select?: LostFoundPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LostFoundPostCountOutputType without action
   */
  export type LostFoundPostCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * LostFoundPostCountOutputType without action
   */
  export type LostFoundPostCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
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
    passwordHash: string | null
    studentId: string | null
    avatarUrl: string | null
    createdAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    studentId: string | null
    avatarUrl: string | null
    createdAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    studentId: number
    avatarUrl: number
    createdAt: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    studentId?: true
    avatarUrl?: true
    createdAt?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    studentId?: true
    avatarUrl?: true
    createdAt?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    studentId?: true
    avatarUrl?: true
    createdAt?: true
    resetToken?: true
    resetTokenExpiry?: true
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
    passwordHash: string
    studentId: string | null
    avatarUrl: string | null
    createdAt: Date
    resetToken: string | null
    resetTokenExpiry: Date | null
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
    passwordHash?: boolean
    studentId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    listings?: boolean | User$listingsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    SavedListing?: boolean | User$SavedListingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    studentId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    studentId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    studentId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "studentId" | "avatarUrl" | "createdAt" | "resetToken" | "resetTokenExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | User$listingsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    SavedListing?: boolean | User$SavedListingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      listings: Prisma.$ListingPayload<ExtArgs>[]
      posts: Prisma.$LostFoundPostPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      purchases: Prisma.$TransactionPayload<ExtArgs>[]
      sales: Prisma.$TransactionPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      SavedListing: Prisma.$SavedListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      studentId: string | null
      avatarUrl: string | null
      createdAt: Date
      resetToken: string | null
      resetTokenExpiry: Date | null
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
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends User$salesArgs<ExtArgs> = {}>(args?: Subset<T, User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SavedListing<T extends User$SavedListingArgs<ExtArgs> = {}>(args?: Subset<T, User$SavedListingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly studentId: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
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
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    where?: LostFoundPostWhereInput
    orderBy?: LostFoundPostOrderByWithRelationInput | LostFoundPostOrderByWithRelationInput[]
    cursor?: LostFoundPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LostFoundPostScalarFieldEnum | LostFoundPostScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.sales
   */
  export type User$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.SavedListing
   */
  export type User$SavedListingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    where?: SavedListingWhereInput
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    cursor?: SavedListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
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
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    type: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    type: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    listings?: boolean | Category$listingsArgs<ExtArgs>
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | Category$listingsArgs<ExtArgs>
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      listings: Prisma.$ListingPayload<ExtArgs>[]
      posts: Prisma.$LostFoundPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends Category$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Category$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.listings
   */
  export type Category$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    where?: LostFoundPostWhereInput
    orderBy?: LostFoundPostOrderByWithRelationInput | LostFoundPostOrderByWithRelationInput[]
    cursor?: LostFoundPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LostFoundPostScalarFieldEnum | LostFoundPostScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
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
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type ListingSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type ListingMinAggregateOutputType = {
    pickupLocation: string | null
    id: number | null
    userId: string | null
    title: string | null
    description: string | null
    price: number | null
    categoryId: number | null
    status: $Enums.ListingStatus | null
    createdAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    pickupLocation: string | null
    id: number | null
    userId: string | null
    title: string | null
    description: string | null
    price: number | null
    categoryId: number | null
    status: $Enums.ListingStatus | null
    createdAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    pickupLocation: number
    id: number
    userId: number
    title: number
    description: number
    price: number
    categoryId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type ListingSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type ListingMinAggregateInputType = {
    pickupLocation?: true
    id?: true
    userId?: true
    title?: true
    description?: true
    price?: true
    categoryId?: true
    status?: true
    createdAt?: true
  }

  export type ListingMaxAggregateInputType = {
    pickupLocation?: true
    id?: true
    userId?: true
    title?: true
    description?: true
    price?: true
    categoryId?: true
    status?: true
    createdAt?: true
  }

  export type ListingCountAggregateInputType = {
    pickupLocation?: true
    id?: true
    userId?: true
    title?: true
    description?: true
    price?: true
    categoryId?: true
    status?: true
    createdAt?: true
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
    pickupLocation: string | null
    id: number
    userId: string
    title: string
    description: string
    price: number
    categoryId: number
    status: $Enums.ListingStatus
    createdAt: Date
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
    pickupLocation?: boolean
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Listing$imagesArgs<ExtArgs>
    transactions?: boolean | Listing$transactionsArgs<ExtArgs>
    reports?: boolean | Listing$reportsArgs<ExtArgs>
    savedBy?: boolean | Listing$savedByArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pickupLocation?: boolean
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pickupLocation?: boolean
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    pickupLocation?: boolean
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pickupLocation" | "id" | "userId" | "title" | "description" | "price" | "categoryId" | "status" | "createdAt", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Listing$imagesArgs<ExtArgs>
    transactions?: boolean | Listing$transactionsArgs<ExtArgs>
    reports?: boolean | Listing$reportsArgs<ExtArgs>
    savedBy?: boolean | Listing$savedByArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      savedBy: Prisma.$SavedListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pickupLocation: string | null
      id: number
      userId: string
      title: string
      description: string
      price: number
      categoryId: number
      status: $Enums.ListingStatus
      createdAt: Date
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
     * // Only select the `pickupLocation`
     * const listingWithPickupLocationOnly = await prisma.listing.findMany({ select: { pickupLocation: true } })
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
     * // Create many Listings and only return the `pickupLocation`
     * const listingWithPickupLocationOnly = await prisma.listing.createManyAndReturn({
     *   select: { pickupLocation: true },
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
     * // Update zero or more Listings and only return the `pickupLocation`
     * const listingWithPickupLocationOnly = await prisma.listing.updateManyAndReturn({
     *   select: { pickupLocation: true },
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Listing$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Listing$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Listing$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends Listing$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Listing$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly pickupLocation: FieldRef<"Listing", 'String'>
    readonly id: FieldRef<"Listing", 'Int'>
    readonly userId: FieldRef<"Listing", 'String'>
    readonly title: FieldRef<"Listing", 'String'>
    readonly description: FieldRef<"Listing", 'String'>
    readonly price: FieldRef<"Listing", 'Float'>
    readonly categoryId: FieldRef<"Listing", 'Int'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
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
   * Listing.images
   */
  export type Listing$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Listing.transactions
   */
  export type Listing$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Listing.reports
   */
  export type Listing$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Listing.savedBy
   */
  export type Listing$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    where?: SavedListingWhereInput
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    cursor?: SavedListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
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
   * Model LostFoundPost
   */

  export type AggregateLostFoundPost = {
    _count: LostFoundPostCountAggregateOutputType | null
    _avg: LostFoundPostAvgAggregateOutputType | null
    _sum: LostFoundPostSumAggregateOutputType | null
    _min: LostFoundPostMinAggregateOutputType | null
    _max: LostFoundPostMaxAggregateOutputType | null
  }

  export type LostFoundPostAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type LostFoundPostSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type LostFoundPostMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    description: string | null
    categoryId: number | null
    type: $Enums.LFType | null
    locationText: string | null
    dateLostFound: Date | null
    status: $Enums.LFStatus | null
    createdAt: Date | null
  }

  export type LostFoundPostMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    description: string | null
    categoryId: number | null
    type: $Enums.LFType | null
    locationText: string | null
    dateLostFound: Date | null
    status: $Enums.LFStatus | null
    createdAt: Date | null
  }

  export type LostFoundPostCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    categoryId: number
    type: number
    locationText: number
    dateLostFound: number
    status: number
    createdAt: number
    _all: number
  }


  export type LostFoundPostAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type LostFoundPostSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type LostFoundPostMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    categoryId?: true
    type?: true
    locationText?: true
    dateLostFound?: true
    status?: true
    createdAt?: true
  }

  export type LostFoundPostMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    categoryId?: true
    type?: true
    locationText?: true
    dateLostFound?: true
    status?: true
    createdAt?: true
  }

  export type LostFoundPostCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    categoryId?: true
    type?: true
    locationText?: true
    dateLostFound?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LostFoundPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LostFoundPost to aggregate.
     */
    where?: LostFoundPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostFoundPosts to fetch.
     */
    orderBy?: LostFoundPostOrderByWithRelationInput | LostFoundPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LostFoundPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostFoundPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostFoundPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LostFoundPosts
    **/
    _count?: true | LostFoundPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LostFoundPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LostFoundPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LostFoundPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LostFoundPostMaxAggregateInputType
  }

  export type GetLostFoundPostAggregateType<T extends LostFoundPostAggregateArgs> = {
        [P in keyof T & keyof AggregateLostFoundPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLostFoundPost[P]>
      : GetScalarType<T[P], AggregateLostFoundPost[P]>
  }




  export type LostFoundPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostFoundPostWhereInput
    orderBy?: LostFoundPostOrderByWithAggregationInput | LostFoundPostOrderByWithAggregationInput[]
    by: LostFoundPostScalarFieldEnum[] | LostFoundPostScalarFieldEnum
    having?: LostFoundPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LostFoundPostCountAggregateInputType | true
    _avg?: LostFoundPostAvgAggregateInputType
    _sum?: LostFoundPostSumAggregateInputType
    _min?: LostFoundPostMinAggregateInputType
    _max?: LostFoundPostMaxAggregateInputType
  }

  export type LostFoundPostGroupByOutputType = {
    id: number
    userId: string
    title: string
    description: string
    categoryId: number
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date
    status: $Enums.LFStatus
    createdAt: Date
    _count: LostFoundPostCountAggregateOutputType | null
    _avg: LostFoundPostAvgAggregateOutputType | null
    _sum: LostFoundPostSumAggregateOutputType | null
    _min: LostFoundPostMinAggregateOutputType | null
    _max: LostFoundPostMaxAggregateOutputType | null
  }

  type GetLostFoundPostGroupByPayload<T extends LostFoundPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LostFoundPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LostFoundPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LostFoundPostGroupByOutputType[P]>
            : GetScalarType<T[P], LostFoundPostGroupByOutputType[P]>
        }
      >
    >


  export type LostFoundPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    type?: boolean
    locationText?: boolean
    dateLostFound?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | LostFoundPost$imagesArgs<ExtArgs>
    reports?: boolean | LostFoundPost$reportsArgs<ExtArgs>
    _count?: boolean | LostFoundPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lostFoundPost"]>

  export type LostFoundPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    type?: boolean
    locationText?: boolean
    dateLostFound?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lostFoundPost"]>

  export type LostFoundPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    type?: boolean
    locationText?: boolean
    dateLostFound?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lostFoundPost"]>

  export type LostFoundPostSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    type?: boolean
    locationText?: boolean
    dateLostFound?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type LostFoundPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "categoryId" | "type" | "locationText" | "dateLostFound" | "status" | "createdAt", ExtArgs["result"]["lostFoundPost"]>
  export type LostFoundPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | LostFoundPost$imagesArgs<ExtArgs>
    reports?: boolean | LostFoundPost$reportsArgs<ExtArgs>
    _count?: boolean | LostFoundPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LostFoundPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type LostFoundPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $LostFoundPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LostFoundPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      description: string
      categoryId: number
      type: $Enums.LFType
      locationText: string
      dateLostFound: Date
      status: $Enums.LFStatus
      createdAt: Date
    }, ExtArgs["result"]["lostFoundPost"]>
    composites: {}
  }

  type LostFoundPostGetPayload<S extends boolean | null | undefined | LostFoundPostDefaultArgs> = $Result.GetResult<Prisma.$LostFoundPostPayload, S>

  type LostFoundPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LostFoundPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LostFoundPostCountAggregateInputType | true
    }

  export interface LostFoundPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LostFoundPost'], meta: { name: 'LostFoundPost' } }
    /**
     * Find zero or one LostFoundPost that matches the filter.
     * @param {LostFoundPostFindUniqueArgs} args - Arguments to find a LostFoundPost
     * @example
     * // Get one LostFoundPost
     * const lostFoundPost = await prisma.lostFoundPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LostFoundPostFindUniqueArgs>(args: SelectSubset<T, LostFoundPostFindUniqueArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LostFoundPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LostFoundPostFindUniqueOrThrowArgs} args - Arguments to find a LostFoundPost
     * @example
     * // Get one LostFoundPost
     * const lostFoundPost = await prisma.lostFoundPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LostFoundPostFindUniqueOrThrowArgs>(args: SelectSubset<T, LostFoundPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LostFoundPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPostFindFirstArgs} args - Arguments to find a LostFoundPost
     * @example
     * // Get one LostFoundPost
     * const lostFoundPost = await prisma.lostFoundPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LostFoundPostFindFirstArgs>(args?: SelectSubset<T, LostFoundPostFindFirstArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LostFoundPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPostFindFirstOrThrowArgs} args - Arguments to find a LostFoundPost
     * @example
     * // Get one LostFoundPost
     * const lostFoundPost = await prisma.lostFoundPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LostFoundPostFindFirstOrThrowArgs>(args?: SelectSubset<T, LostFoundPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LostFoundPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LostFoundPosts
     * const lostFoundPosts = await prisma.lostFoundPost.findMany()
     * 
     * // Get first 10 LostFoundPosts
     * const lostFoundPosts = await prisma.lostFoundPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lostFoundPostWithIdOnly = await prisma.lostFoundPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LostFoundPostFindManyArgs>(args?: SelectSubset<T, LostFoundPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LostFoundPost.
     * @param {LostFoundPostCreateArgs} args - Arguments to create a LostFoundPost.
     * @example
     * // Create one LostFoundPost
     * const LostFoundPost = await prisma.lostFoundPost.create({
     *   data: {
     *     // ... data to create a LostFoundPost
     *   }
     * })
     * 
     */
    create<T extends LostFoundPostCreateArgs>(args: SelectSubset<T, LostFoundPostCreateArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LostFoundPosts.
     * @param {LostFoundPostCreateManyArgs} args - Arguments to create many LostFoundPosts.
     * @example
     * // Create many LostFoundPosts
     * const lostFoundPost = await prisma.lostFoundPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LostFoundPostCreateManyArgs>(args?: SelectSubset<T, LostFoundPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LostFoundPosts and returns the data saved in the database.
     * @param {LostFoundPostCreateManyAndReturnArgs} args - Arguments to create many LostFoundPosts.
     * @example
     * // Create many LostFoundPosts
     * const lostFoundPost = await prisma.lostFoundPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LostFoundPosts and only return the `id`
     * const lostFoundPostWithIdOnly = await prisma.lostFoundPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LostFoundPostCreateManyAndReturnArgs>(args?: SelectSubset<T, LostFoundPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LostFoundPost.
     * @param {LostFoundPostDeleteArgs} args - Arguments to delete one LostFoundPost.
     * @example
     * // Delete one LostFoundPost
     * const LostFoundPost = await prisma.lostFoundPost.delete({
     *   where: {
     *     // ... filter to delete one LostFoundPost
     *   }
     * })
     * 
     */
    delete<T extends LostFoundPostDeleteArgs>(args: SelectSubset<T, LostFoundPostDeleteArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LostFoundPost.
     * @param {LostFoundPostUpdateArgs} args - Arguments to update one LostFoundPost.
     * @example
     * // Update one LostFoundPost
     * const lostFoundPost = await prisma.lostFoundPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LostFoundPostUpdateArgs>(args: SelectSubset<T, LostFoundPostUpdateArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LostFoundPosts.
     * @param {LostFoundPostDeleteManyArgs} args - Arguments to filter LostFoundPosts to delete.
     * @example
     * // Delete a few LostFoundPosts
     * const { count } = await prisma.lostFoundPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LostFoundPostDeleteManyArgs>(args?: SelectSubset<T, LostFoundPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LostFoundPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LostFoundPosts
     * const lostFoundPost = await prisma.lostFoundPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LostFoundPostUpdateManyArgs>(args: SelectSubset<T, LostFoundPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LostFoundPosts and returns the data updated in the database.
     * @param {LostFoundPostUpdateManyAndReturnArgs} args - Arguments to update many LostFoundPosts.
     * @example
     * // Update many LostFoundPosts
     * const lostFoundPost = await prisma.lostFoundPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LostFoundPosts and only return the `id`
     * const lostFoundPostWithIdOnly = await prisma.lostFoundPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends LostFoundPostUpdateManyAndReturnArgs>(args: SelectSubset<T, LostFoundPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LostFoundPost.
     * @param {LostFoundPostUpsertArgs} args - Arguments to update or create a LostFoundPost.
     * @example
     * // Update or create a LostFoundPost
     * const lostFoundPost = await prisma.lostFoundPost.upsert({
     *   create: {
     *     // ... data to create a LostFoundPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LostFoundPost we want to update
     *   }
     * })
     */
    upsert<T extends LostFoundPostUpsertArgs>(args: SelectSubset<T, LostFoundPostUpsertArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LostFoundPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPostCountArgs} args - Arguments to filter LostFoundPosts to count.
     * @example
     * // Count the number of LostFoundPosts
     * const count = await prisma.lostFoundPost.count({
     *   where: {
     *     // ... the filter for the LostFoundPosts we want to count
     *   }
     * })
    **/
    count<T extends LostFoundPostCountArgs>(
      args?: Subset<T, LostFoundPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LostFoundPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LostFoundPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LostFoundPostAggregateArgs>(args: Subset<T, LostFoundPostAggregateArgs>): Prisma.PrismaPromise<GetLostFoundPostAggregateType<T>>

    /**
     * Group by LostFoundPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPostGroupByArgs} args - Group by arguments.
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
      T extends LostFoundPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LostFoundPostGroupByArgs['orderBy'] }
        : { orderBy?: LostFoundPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LostFoundPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLostFoundPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LostFoundPost model
   */
  readonly fields: LostFoundPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LostFoundPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LostFoundPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends LostFoundPost$imagesArgs<ExtArgs> = {}>(args?: Subset<T, LostFoundPost$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends LostFoundPost$reportsArgs<ExtArgs> = {}>(args?: Subset<T, LostFoundPost$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LostFoundPost model
   */
  interface LostFoundPostFieldRefs {
    readonly id: FieldRef<"LostFoundPost", 'Int'>
    readonly userId: FieldRef<"LostFoundPost", 'String'>
    readonly title: FieldRef<"LostFoundPost", 'String'>
    readonly description: FieldRef<"LostFoundPost", 'String'>
    readonly categoryId: FieldRef<"LostFoundPost", 'Int'>
    readonly type: FieldRef<"LostFoundPost", 'LFType'>
    readonly locationText: FieldRef<"LostFoundPost", 'String'>
    readonly dateLostFound: FieldRef<"LostFoundPost", 'DateTime'>
    readonly status: FieldRef<"LostFoundPost", 'LFStatus'>
    readonly createdAt: FieldRef<"LostFoundPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LostFoundPost findUnique
   */
  export type LostFoundPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * Filter, which LostFoundPost to fetch.
     */
    where: LostFoundPostWhereUniqueInput
  }

  /**
   * LostFoundPost findUniqueOrThrow
   */
  export type LostFoundPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * Filter, which LostFoundPost to fetch.
     */
    where: LostFoundPostWhereUniqueInput
  }

  /**
   * LostFoundPost findFirst
   */
  export type LostFoundPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * Filter, which LostFoundPost to fetch.
     */
    where?: LostFoundPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostFoundPosts to fetch.
     */
    orderBy?: LostFoundPostOrderByWithRelationInput | LostFoundPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LostFoundPosts.
     */
    cursor?: LostFoundPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostFoundPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostFoundPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostFoundPosts.
     */
    distinct?: LostFoundPostScalarFieldEnum | LostFoundPostScalarFieldEnum[]
  }

  /**
   * LostFoundPost findFirstOrThrow
   */
  export type LostFoundPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * Filter, which LostFoundPost to fetch.
     */
    where?: LostFoundPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostFoundPosts to fetch.
     */
    orderBy?: LostFoundPostOrderByWithRelationInput | LostFoundPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LostFoundPosts.
     */
    cursor?: LostFoundPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostFoundPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostFoundPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostFoundPosts.
     */
    distinct?: LostFoundPostScalarFieldEnum | LostFoundPostScalarFieldEnum[]
  }

  /**
   * LostFoundPost findMany
   */
  export type LostFoundPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * Filter, which LostFoundPosts to fetch.
     */
    where?: LostFoundPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostFoundPosts to fetch.
     */
    orderBy?: LostFoundPostOrderByWithRelationInput | LostFoundPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LostFoundPosts.
     */
    cursor?: LostFoundPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostFoundPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostFoundPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostFoundPosts.
     */
    distinct?: LostFoundPostScalarFieldEnum | LostFoundPostScalarFieldEnum[]
  }

  /**
   * LostFoundPost create
   */
  export type LostFoundPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * The data needed to create a LostFoundPost.
     */
    data: XOR<LostFoundPostCreateInput, LostFoundPostUncheckedCreateInput>
  }

  /**
   * LostFoundPost createMany
   */
  export type LostFoundPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LostFoundPosts.
     */
    data: LostFoundPostCreateManyInput | LostFoundPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LostFoundPost createManyAndReturn
   */
  export type LostFoundPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * The data used to create many LostFoundPosts.
     */
    data: LostFoundPostCreateManyInput | LostFoundPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LostFoundPost update
   */
  export type LostFoundPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * The data needed to update a LostFoundPost.
     */
    data: XOR<LostFoundPostUpdateInput, LostFoundPostUncheckedUpdateInput>
    /**
     * Choose, which LostFoundPost to update.
     */
    where: LostFoundPostWhereUniqueInput
  }

  /**
   * LostFoundPost updateMany
   */
  export type LostFoundPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LostFoundPosts.
     */
    data: XOR<LostFoundPostUpdateManyMutationInput, LostFoundPostUncheckedUpdateManyInput>
    /**
     * Filter which LostFoundPosts to update
     */
    where?: LostFoundPostWhereInput
    /**
     * Limit how many LostFoundPosts to update.
     */
    limit?: number
  }

  /**
   * LostFoundPost updateManyAndReturn
   */
  export type LostFoundPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * The data used to update LostFoundPosts.
     */
    data: XOR<LostFoundPostUpdateManyMutationInput, LostFoundPostUncheckedUpdateManyInput>
    /**
     * Filter which LostFoundPosts to update
     */
    where?: LostFoundPostWhereInput
    /**
     * Limit how many LostFoundPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LostFoundPost upsert
   */
  export type LostFoundPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * The filter to search for the LostFoundPost to update in case it exists.
     */
    where: LostFoundPostWhereUniqueInput
    /**
     * In case the LostFoundPost found by the `where` argument doesn't exist, create a new LostFoundPost with this data.
     */
    create: XOR<LostFoundPostCreateInput, LostFoundPostUncheckedCreateInput>
    /**
     * In case the LostFoundPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LostFoundPostUpdateInput, LostFoundPostUncheckedUpdateInput>
  }

  /**
   * LostFoundPost delete
   */
  export type LostFoundPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    /**
     * Filter which LostFoundPost to delete.
     */
    where: LostFoundPostWhereUniqueInput
  }

  /**
   * LostFoundPost deleteMany
   */
  export type LostFoundPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LostFoundPosts to delete
     */
    where?: LostFoundPostWhereInput
    /**
     * Limit how many LostFoundPosts to delete.
     */
    limit?: number
  }

  /**
   * LostFoundPost.images
   */
  export type LostFoundPost$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * LostFoundPost.reports
   */
  export type LostFoundPost$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * LostFoundPost without action
   */
  export type LostFoundPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
    postId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    listingId: number | null
    postId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    listingId: number | null
    postId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    listingId: number | null
    postId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    listingId: number
    postId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    listingId?: true
    postId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    listingId?: true
    postId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    listingId?: true
    postId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    listingId?: true
    postId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    listingId?: true
    postId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    listingId: number | null
    postId: number | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    listingId?: boolean
    postId?: boolean
    listing?: boolean | Image$listingArgs<ExtArgs>
    post?: boolean | Image$postArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    listingId?: boolean
    postId?: boolean
    listing?: boolean | Image$listingArgs<ExtArgs>
    post?: boolean | Image$postArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    listingId?: boolean
    postId?: boolean
    listing?: boolean | Image$listingArgs<ExtArgs>
    post?: boolean | Image$postArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    listingId?: boolean
    postId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "listingId" | "postId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | Image$listingArgs<ExtArgs>
    post?: boolean | Image$postArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | Image$listingArgs<ExtArgs>
    post?: boolean | Image$postArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | Image$listingArgs<ExtArgs>
    post?: boolean | Image$postArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs> | null
      post: Prisma.$LostFoundPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      listingId: number | null
      postId: number | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends Image$listingArgs<ExtArgs> = {}>(args?: Subset<T, Image$listingArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends Image$postArgs<ExtArgs> = {}>(args?: Subset<T, Image$postArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly listingId: FieldRef<"Image", 'Int'>
    readonly postId: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.listing
   */
  export type Image$listingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Image.post
   */
  export type Image$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    where?: LostFoundPostWhereInput
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    senderId: string | null
    receiverId: string | null
    content: string | null
    createdAt: Date | null
    readStatus: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    senderId: string | null
    receiverId: string | null
    content: string | null
    createdAt: Date | null
    readStatus: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: number
    createdAt: number
    readStatus: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
    readStatus?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
    readStatus?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
    readStatus?: true
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
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
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
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    senderId: string
    receiverId: string
    content: string
    createdAt: Date
    readStatus: boolean
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
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
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
    readStatus?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
    readStatus?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
    readStatus?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
    readStatus?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "content" | "createdAt" | "readStatus", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: string
      receiverId: string
      content: string
      createdAt: Date
      readStatus: boolean
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
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Message", 'Int'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly readStatus: FieldRef<"Message", 'Boolean'>
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
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
    price: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    listingId: number | null
    price: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    listingId: number | null
    buyerId: string | null
    sellerId: string | null
    price: number | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    listingId: number | null
    buyerId: string | null
    sellerId: string | null
    price: number | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    listingId: number
    buyerId: number
    sellerId: number
    price: number
    status: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    listingId?: true
    price?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    listingId?: true
    price?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    listingId?: true
    buyerId?: true
    sellerId?: true
    price?: true
    status?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    listingId?: true
    buyerId?: true
    sellerId?: true
    price?: true
    status?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    listingId?: true
    buyerId?: true
    sellerId?: true
    price?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    listingId: number
    buyerId: string
    sellerId: string
    price: number
    status: $Enums.TransactionStatus
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    listingId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "buyerId" | "sellerId" | "price" | "status" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      listingId: number
      buyerId: string
      sellerId: string
      price: number
      status: $Enums.TransactionStatus
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly listingId: FieldRef<"Transaction", 'Int'>
    readonly buyerId: FieldRef<"Transaction", 'String'>
    readonly sellerId: FieldRef<"Transaction", 'String'>
    readonly price: FieldRef<"Transaction", 'Float'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
    postId: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
    listingId: number | null
    postId: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    reporterId: string | null
    listingId: number | null
    postId: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    reporterId: string | null
    listingId: number | null
    postId: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    reporterId: number
    listingId: number
    postId: number
    reason: number
    createdAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    listingId?: true
    postId?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    listingId?: true
    postId?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    reporterId?: true
    listingId?: true
    postId?: true
    reason?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    reporterId?: true
    listingId?: true
    postId?: true
    reason?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    reporterId?: true
    listingId?: true
    postId?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    reporterId: string
    listingId: number | null
    postId: number | null
    reason: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    listingId?: boolean
    postId?: boolean
    reason?: boolean
    createdAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | Report$listingArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    listingId?: boolean
    postId?: boolean
    reason?: boolean
    createdAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | Report$listingArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    listingId?: boolean
    postId?: boolean
    reason?: boolean
    createdAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | Report$listingArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    reporterId?: boolean
    listingId?: boolean
    postId?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporterId" | "listingId" | "postId" | "reason" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | Report$listingArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | Report$listingArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | Report$listingArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      reporter: Prisma.$UserPayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs> | null
      post: Prisma.$LostFoundPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reporterId: string
      listingId: number | null
      postId: number | null
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends Report$listingArgs<ExtArgs> = {}>(args?: Subset<T, Report$listingArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends Report$postArgs<ExtArgs> = {}>(args?: Subset<T, Report$postArgs<ExtArgs>>): Prisma__LostFoundPostClient<$Result.GetResult<Prisma.$LostFoundPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly reporterId: FieldRef<"Report", 'String'>
    readonly listingId: FieldRef<"Report", 'Int'>
    readonly postId: FieldRef<"Report", 'Int'>
    readonly reason: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.listing
   */
  export type Report$listingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Report.post
   */
  export type Report$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPost
     */
    select?: LostFoundPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPost
     */
    omit?: LostFoundPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostFoundPostInclude<ExtArgs> | null
    where?: LostFoundPostWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model SavedListing
   */

  export type AggregateSavedListing = {
    _count: SavedListingCountAggregateOutputType | null
    _avg: SavedListingAvgAggregateOutputType | null
    _sum: SavedListingSumAggregateOutputType | null
    _min: SavedListingMinAggregateOutputType | null
    _max: SavedListingMaxAggregateOutputType | null
  }

  export type SavedListingAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type SavedListingSumAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type SavedListingMinAggregateOutputType = {
    id: number | null
    userId: string | null
    listingId: number | null
    createdAt: Date | null
  }

  export type SavedListingMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    listingId: number | null
    createdAt: Date | null
  }

  export type SavedListingCountAggregateOutputType = {
    id: number
    userId: number
    listingId: number
    createdAt: number
    _all: number
  }


  export type SavedListingAvgAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type SavedListingSumAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type SavedListingMinAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
    createdAt?: true
  }

  export type SavedListingMaxAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
    createdAt?: true
  }

  export type SavedListingCountAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedListing to aggregate.
     */
    where?: SavedListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedListings to fetch.
     */
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedListings
    **/
    _count?: true | SavedListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedListingMaxAggregateInputType
  }

  export type GetSavedListingAggregateType<T extends SavedListingAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedListing[P]>
      : GetScalarType<T[P], AggregateSavedListing[P]>
  }




  export type SavedListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedListingWhereInput
    orderBy?: SavedListingOrderByWithAggregationInput | SavedListingOrderByWithAggregationInput[]
    by: SavedListingScalarFieldEnum[] | SavedListingScalarFieldEnum
    having?: SavedListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedListingCountAggregateInputType | true
    _avg?: SavedListingAvgAggregateInputType
    _sum?: SavedListingSumAggregateInputType
    _min?: SavedListingMinAggregateInputType
    _max?: SavedListingMaxAggregateInputType
  }

  export type SavedListingGroupByOutputType = {
    id: number
    userId: string
    listingId: number
    createdAt: Date
    _count: SavedListingCountAggregateOutputType | null
    _avg: SavedListingAvgAggregateOutputType | null
    _sum: SavedListingSumAggregateOutputType | null
    _min: SavedListingMinAggregateOutputType | null
    _max: SavedListingMaxAggregateOutputType | null
  }

  type GetSavedListingGroupByPayload<T extends SavedListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedListingGroupByOutputType[P]>
            : GetScalarType<T[P], SavedListingGroupByOutputType[P]>
        }
      >
    >


  export type SavedListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    listingId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedListing"]>

  export type SavedListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    listingId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedListing"]>

  export type SavedListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    listingId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedListing"]>

  export type SavedListingSelectScalar = {
    id?: boolean
    userId?: boolean
    listingId?: boolean
    createdAt?: boolean
  }

  export type SavedListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "listingId" | "createdAt", ExtArgs["result"]["savedListing"]>
  export type SavedListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type SavedListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type SavedListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $SavedListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedListing"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      listingId: number
      createdAt: Date
    }, ExtArgs["result"]["savedListing"]>
    composites: {}
  }

  type SavedListingGetPayload<S extends boolean | null | undefined | SavedListingDefaultArgs> = $Result.GetResult<Prisma.$SavedListingPayload, S>

  type SavedListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedListingCountAggregateInputType | true
    }

  export interface SavedListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedListing'], meta: { name: 'SavedListing' } }
    /**
     * Find zero or one SavedListing that matches the filter.
     * @param {SavedListingFindUniqueArgs} args - Arguments to find a SavedListing
     * @example
     * // Get one SavedListing
     * const savedListing = await prisma.savedListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedListingFindUniqueArgs>(args: SelectSubset<T, SavedListingFindUniqueArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedListingFindUniqueOrThrowArgs} args - Arguments to find a SavedListing
     * @example
     * // Get one SavedListing
     * const savedListing = await prisma.savedListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedListingFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingFindFirstArgs} args - Arguments to find a SavedListing
     * @example
     * // Get one SavedListing
     * const savedListing = await prisma.savedListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedListingFindFirstArgs>(args?: SelectSubset<T, SavedListingFindFirstArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingFindFirstOrThrowArgs} args - Arguments to find a SavedListing
     * @example
     * // Get one SavedListing
     * const savedListing = await prisma.savedListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedListingFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedListings
     * const savedListings = await prisma.savedListing.findMany()
     * 
     * // Get first 10 SavedListings
     * const savedListings = await prisma.savedListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedListingWithIdOnly = await prisma.savedListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedListingFindManyArgs>(args?: SelectSubset<T, SavedListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedListing.
     * @param {SavedListingCreateArgs} args - Arguments to create a SavedListing.
     * @example
     * // Create one SavedListing
     * const SavedListing = await prisma.savedListing.create({
     *   data: {
     *     // ... data to create a SavedListing
     *   }
     * })
     * 
     */
    create<T extends SavedListingCreateArgs>(args: SelectSubset<T, SavedListingCreateArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedListings.
     * @param {SavedListingCreateManyArgs} args - Arguments to create many SavedListings.
     * @example
     * // Create many SavedListings
     * const savedListing = await prisma.savedListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedListingCreateManyArgs>(args?: SelectSubset<T, SavedListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedListings and returns the data saved in the database.
     * @param {SavedListingCreateManyAndReturnArgs} args - Arguments to create many SavedListings.
     * @example
     * // Create many SavedListings
     * const savedListing = await prisma.savedListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedListings and only return the `id`
     * const savedListingWithIdOnly = await prisma.savedListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedListingCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedListing.
     * @param {SavedListingDeleteArgs} args - Arguments to delete one SavedListing.
     * @example
     * // Delete one SavedListing
     * const SavedListing = await prisma.savedListing.delete({
     *   where: {
     *     // ... filter to delete one SavedListing
     *   }
     * })
     * 
     */
    delete<T extends SavedListingDeleteArgs>(args: SelectSubset<T, SavedListingDeleteArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedListing.
     * @param {SavedListingUpdateArgs} args - Arguments to update one SavedListing.
     * @example
     * // Update one SavedListing
     * const savedListing = await prisma.savedListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedListingUpdateArgs>(args: SelectSubset<T, SavedListingUpdateArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedListings.
     * @param {SavedListingDeleteManyArgs} args - Arguments to filter SavedListings to delete.
     * @example
     * // Delete a few SavedListings
     * const { count } = await prisma.savedListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedListingDeleteManyArgs>(args?: SelectSubset<T, SavedListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedListings
     * const savedListing = await prisma.savedListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedListingUpdateManyArgs>(args: SelectSubset<T, SavedListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedListings and returns the data updated in the database.
     * @param {SavedListingUpdateManyAndReturnArgs} args - Arguments to update many SavedListings.
     * @example
     * // Update many SavedListings
     * const savedListing = await prisma.savedListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedListings and only return the `id`
     * const savedListingWithIdOnly = await prisma.savedListing.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedListingUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedListing.
     * @param {SavedListingUpsertArgs} args - Arguments to update or create a SavedListing.
     * @example
     * // Update or create a SavedListing
     * const savedListing = await prisma.savedListing.upsert({
     *   create: {
     *     // ... data to create a SavedListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedListing we want to update
     *   }
     * })
     */
    upsert<T extends SavedListingUpsertArgs>(args: SelectSubset<T, SavedListingUpsertArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingCountArgs} args - Arguments to filter SavedListings to count.
     * @example
     * // Count the number of SavedListings
     * const count = await prisma.savedListing.count({
     *   where: {
     *     // ... the filter for the SavedListings we want to count
     *   }
     * })
    **/
    count<T extends SavedListingCountArgs>(
      args?: Subset<T, SavedListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedListingAggregateArgs>(args: Subset<T, SavedListingAggregateArgs>): Prisma.PrismaPromise<GetSavedListingAggregateType<T>>

    /**
     * Group by SavedListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingGroupByArgs} args - Group by arguments.
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
      T extends SavedListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedListingGroupByArgs['orderBy'] }
        : { orderBy?: SavedListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedListing model
   */
  readonly fields: SavedListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedListing model
   */
  interface SavedListingFieldRefs {
    readonly id: FieldRef<"SavedListing", 'Int'>
    readonly userId: FieldRef<"SavedListing", 'String'>
    readonly listingId: FieldRef<"SavedListing", 'Int'>
    readonly createdAt: FieldRef<"SavedListing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedListing findUnique
   */
  export type SavedListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListing to fetch.
     */
    where: SavedListingWhereUniqueInput
  }

  /**
   * SavedListing findUniqueOrThrow
   */
  export type SavedListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListing to fetch.
     */
    where: SavedListingWhereUniqueInput
  }

  /**
   * SavedListing findFirst
   */
  export type SavedListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListing to fetch.
     */
    where?: SavedListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedListings to fetch.
     */
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedListings.
     */
    cursor?: SavedListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedListings.
     */
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
  }

  /**
   * SavedListing findFirstOrThrow
   */
  export type SavedListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListing to fetch.
     */
    where?: SavedListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedListings to fetch.
     */
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedListings.
     */
    cursor?: SavedListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedListings.
     */
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
  }

  /**
   * SavedListing findMany
   */
  export type SavedListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListings to fetch.
     */
    where?: SavedListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedListings to fetch.
     */
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedListings.
     */
    cursor?: SavedListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedListings.
     */
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
  }

  /**
   * SavedListing create
   */
  export type SavedListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedListing.
     */
    data: XOR<SavedListingCreateInput, SavedListingUncheckedCreateInput>
  }

  /**
   * SavedListing createMany
   */
  export type SavedListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedListings.
     */
    data: SavedListingCreateManyInput | SavedListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedListing createManyAndReturn
   */
  export type SavedListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * The data used to create many SavedListings.
     */
    data: SavedListingCreateManyInput | SavedListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedListing update
   */
  export type SavedListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedListing.
     */
    data: XOR<SavedListingUpdateInput, SavedListingUncheckedUpdateInput>
    /**
     * Choose, which SavedListing to update.
     */
    where: SavedListingWhereUniqueInput
  }

  /**
   * SavedListing updateMany
   */
  export type SavedListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedListings.
     */
    data: XOR<SavedListingUpdateManyMutationInput, SavedListingUncheckedUpdateManyInput>
    /**
     * Filter which SavedListings to update
     */
    where?: SavedListingWhereInput
    /**
     * Limit how many SavedListings to update.
     */
    limit?: number
  }

  /**
   * SavedListing updateManyAndReturn
   */
  export type SavedListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * The data used to update SavedListings.
     */
    data: XOR<SavedListingUpdateManyMutationInput, SavedListingUncheckedUpdateManyInput>
    /**
     * Filter which SavedListings to update
     */
    where?: SavedListingWhereInput
    /**
     * Limit how many SavedListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedListing upsert
   */
  export type SavedListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedListing to update in case it exists.
     */
    where: SavedListingWhereUniqueInput
    /**
     * In case the SavedListing found by the `where` argument doesn't exist, create a new SavedListing with this data.
     */
    create: XOR<SavedListingCreateInput, SavedListingUncheckedCreateInput>
    /**
     * In case the SavedListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedListingUpdateInput, SavedListingUncheckedUpdateInput>
  }

  /**
   * SavedListing delete
   */
  export type SavedListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter which SavedListing to delete.
     */
    where: SavedListingWhereUniqueInput
  }

  /**
   * SavedListing deleteMany
   */
  export type SavedListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedListings to delete
     */
    where?: SavedListingWhereInput
    /**
     * Limit how many SavedListings to delete.
     */
    limit?: number
  }

  /**
   * SavedListing without action
   */
  export type SavedListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
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
    passwordHash: 'passwordHash',
    studentId: 'studentId',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    pickupLocation: 'pickupLocation',
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    price: 'price',
    categoryId: 'categoryId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const LostFoundPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    categoryId: 'categoryId',
    type: 'type',
    locationText: 'locationText',
    dateLostFound: 'dateLostFound',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LostFoundPostScalarFieldEnum = (typeof LostFoundPostScalarFieldEnum)[keyof typeof LostFoundPostScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    listingId: 'listingId',
    postId: 'postId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    content: 'content',
    createdAt: 'createdAt',
    readStatus: 'readStatus'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    buyerId: 'buyerId',
    sellerId: 'sellerId',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    reporterId: 'reporterId',
    listingId: 'listingId',
    postId: 'postId',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SavedListingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    listingId: 'listingId',
    createdAt: 'createdAt'
  };

  export type SavedListingScalarFieldEnum = (typeof SavedListingScalarFieldEnum)[keyof typeof SavedListingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'LFType'
   */
  export type EnumLFTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LFType'>
    


  /**
   * Reference to a field of type 'LFType[]'
   */
  export type ListEnumLFTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LFType[]'>
    


  /**
   * Reference to a field of type 'LFStatus'
   */
  export type EnumLFStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LFStatus'>
    


  /**
   * Reference to a field of type 'LFStatus[]'
   */
  export type ListEnumLFStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LFStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
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
    passwordHash?: StringFilter<"User"> | string
    studentId?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    listings?: ListingListRelationFilter
    posts?: LostFoundPostListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    purchases?: TransactionListRelationFilter
    sales?: TransactionListRelationFilter
    reports?: ReportListRelationFilter
    SavedListing?: SavedListingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    studentId?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    listings?: ListingOrderByRelationAggregateInput
    posts?: LostFoundPostOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    purchases?: TransactionOrderByRelationAggregateInput
    sales?: TransactionOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    SavedListing?: SavedListingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    studentId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    listings?: ListingListRelationFilter
    posts?: LostFoundPostListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    purchases?: TransactionListRelationFilter
    sales?: TransactionListRelationFilter
    reports?: ReportListRelationFilter
    SavedListing?: SavedListingListRelationFilter
  }, "id" | "email" | "studentId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    studentId?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
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
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    studentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    type?: StringFilter<"Category"> | string
    listings?: ListingListRelationFilter
    posts?: LostFoundPostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    listings?: ListingOrderByRelationAggregateInput
    posts?: LostFoundPostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    type?: StringFilter<"Category"> | string
    listings?: ListingListRelationFilter
    posts?: LostFoundPostListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    type?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    pickupLocation?: StringNullableFilter<"Listing"> | string | null
    id?: IntFilter<"Listing"> | number
    userId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    categoryId?: IntFilter<"Listing"> | number
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ImageListRelationFilter
    transactions?: TransactionListRelationFilter
    reports?: ReportListRelationFilter
    savedBy?: SavedListingListRelationFilter
  }

  export type ListingOrderByWithRelationInput = {
    pickupLocation?: SortOrderInput | SortOrder
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    savedBy?: SavedListingOrderByRelationAggregateInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    pickupLocation?: StringNullableFilter<"Listing"> | string | null
    userId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    categoryId?: IntFilter<"Listing"> | number
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ImageListRelationFilter
    transactions?: TransactionListRelationFilter
    reports?: ReportListRelationFilter
    savedBy?: SavedListingListRelationFilter
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    pickupLocation?: SortOrderInput | SortOrder
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
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
    pickupLocation?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    id?: IntWithAggregatesFilter<"Listing"> | number
    userId?: StringWithAggregatesFilter<"Listing"> | string
    title?: StringWithAggregatesFilter<"Listing"> | string
    description?: StringWithAggregatesFilter<"Listing"> | string
    price?: FloatWithAggregatesFilter<"Listing"> | number
    categoryId?: IntWithAggregatesFilter<"Listing"> | number
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type LostFoundPostWhereInput = {
    AND?: LostFoundPostWhereInput | LostFoundPostWhereInput[]
    OR?: LostFoundPostWhereInput[]
    NOT?: LostFoundPostWhereInput | LostFoundPostWhereInput[]
    id?: IntFilter<"LostFoundPost"> | number
    userId?: StringFilter<"LostFoundPost"> | string
    title?: StringFilter<"LostFoundPost"> | string
    description?: StringFilter<"LostFoundPost"> | string
    categoryId?: IntFilter<"LostFoundPost"> | number
    type?: EnumLFTypeFilter<"LostFoundPost"> | $Enums.LFType
    locationText?: StringFilter<"LostFoundPost"> | string
    dateLostFound?: DateTimeFilter<"LostFoundPost"> | Date | string
    status?: EnumLFStatusFilter<"LostFoundPost"> | $Enums.LFStatus
    createdAt?: DateTimeFilter<"LostFoundPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ImageListRelationFilter
    reports?: ReportListRelationFilter
  }

  export type LostFoundPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    locationText?: SortOrder
    dateLostFound?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type LostFoundPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LostFoundPostWhereInput | LostFoundPostWhereInput[]
    OR?: LostFoundPostWhereInput[]
    NOT?: LostFoundPostWhereInput | LostFoundPostWhereInput[]
    userId?: StringFilter<"LostFoundPost"> | string
    title?: StringFilter<"LostFoundPost"> | string
    description?: StringFilter<"LostFoundPost"> | string
    categoryId?: IntFilter<"LostFoundPost"> | number
    type?: EnumLFTypeFilter<"LostFoundPost"> | $Enums.LFType
    locationText?: StringFilter<"LostFoundPost"> | string
    dateLostFound?: DateTimeFilter<"LostFoundPost"> | Date | string
    status?: EnumLFStatusFilter<"LostFoundPost"> | $Enums.LFStatus
    createdAt?: DateTimeFilter<"LostFoundPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ImageListRelationFilter
    reports?: ReportListRelationFilter
  }, "id">

  export type LostFoundPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    locationText?: SortOrder
    dateLostFound?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LostFoundPostCountOrderByAggregateInput
    _avg?: LostFoundPostAvgOrderByAggregateInput
    _max?: LostFoundPostMaxOrderByAggregateInput
    _min?: LostFoundPostMinOrderByAggregateInput
    _sum?: LostFoundPostSumOrderByAggregateInput
  }

  export type LostFoundPostScalarWhereWithAggregatesInput = {
    AND?: LostFoundPostScalarWhereWithAggregatesInput | LostFoundPostScalarWhereWithAggregatesInput[]
    OR?: LostFoundPostScalarWhereWithAggregatesInput[]
    NOT?: LostFoundPostScalarWhereWithAggregatesInput | LostFoundPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LostFoundPost"> | number
    userId?: StringWithAggregatesFilter<"LostFoundPost"> | string
    title?: StringWithAggregatesFilter<"LostFoundPost"> | string
    description?: StringWithAggregatesFilter<"LostFoundPost"> | string
    categoryId?: IntWithAggregatesFilter<"LostFoundPost"> | number
    type?: EnumLFTypeWithAggregatesFilter<"LostFoundPost"> | $Enums.LFType
    locationText?: StringWithAggregatesFilter<"LostFoundPost"> | string
    dateLostFound?: DateTimeWithAggregatesFilter<"LostFoundPost"> | Date | string
    status?: EnumLFStatusWithAggregatesFilter<"LostFoundPost"> | $Enums.LFStatus
    createdAt?: DateTimeWithAggregatesFilter<"LostFoundPost"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    listingId?: IntNullableFilter<"Image"> | number | null
    postId?: IntNullableFilter<"Image"> | number | null
    listing?: XOR<ListingNullableScalarRelationFilter, ListingWhereInput> | null
    post?: XOR<LostFoundPostNullableScalarRelationFilter, LostFoundPostWhereInput> | null
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    listingId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    listing?: ListingOrderByWithRelationInput
    post?: LostFoundPostOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    listingId?: IntNullableFilter<"Image"> | number | null
    postId?: IntNullableFilter<"Image"> | number | null
    listing?: XOR<ListingNullableScalarRelationFilter, ListingWhereInput> | null
    post?: XOR<LostFoundPostNullableScalarRelationFilter, LostFoundPostWhereInput> | null
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    listingId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    listingId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    postId?: IntNullableWithAggregatesFilter<"Image"> | number | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    readStatus?: BoolFilter<"Message"> | boolean
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    readStatus?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    readStatus?: BoolFilter<"Message"> | boolean
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    readStatus?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    readStatus?: BoolWithAggregatesFilter<"Message"> | boolean
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    listingId?: IntFilter<"Transaction"> | number
    buyerId?: StringFilter<"Transaction"> | string
    sellerId?: StringFilter<"Transaction"> | string
    price?: FloatFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    listingId?: IntFilter<"Transaction"> | number
    buyerId?: StringFilter<"Transaction"> | string
    sellerId?: StringFilter<"Transaction"> | string
    price?: FloatFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    listingId?: IntWithAggregatesFilter<"Transaction"> | number
    buyerId?: StringWithAggregatesFilter<"Transaction"> | string
    sellerId?: StringWithAggregatesFilter<"Transaction"> | string
    price?: FloatWithAggregatesFilter<"Transaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    reporterId?: StringFilter<"Report"> | string
    listingId?: IntNullableFilter<"Report"> | number | null
    postId?: IntNullableFilter<"Report"> | number | null
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    listing?: XOR<ListingNullableScalarRelationFilter, ListingWhereInput> | null
    post?: XOR<LostFoundPostNullableScalarRelationFilter, LostFoundPostWhereInput> | null
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    reporterId?: SortOrder
    listingId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    reporter?: UserOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
    post?: LostFoundPostOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    reporterId?: StringFilter<"Report"> | string
    listingId?: IntNullableFilter<"Report"> | number | null
    postId?: IntNullableFilter<"Report"> | number | null
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    listing?: XOR<ListingNullableScalarRelationFilter, ListingWhereInput> | null
    post?: XOR<LostFoundPostNullableScalarRelationFilter, LostFoundPostWhereInput> | null
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    reporterId?: SortOrder
    listingId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    reporterId?: StringWithAggregatesFilter<"Report"> | string
    listingId?: IntNullableWithAggregatesFilter<"Report"> | number | null
    postId?: IntNullableWithAggregatesFilter<"Report"> | number | null
    reason?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type SavedListingWhereInput = {
    AND?: SavedListingWhereInput | SavedListingWhereInput[]
    OR?: SavedListingWhereInput[]
    NOT?: SavedListingWhereInput | SavedListingWhereInput[]
    id?: IntFilter<"SavedListing"> | number
    userId?: StringFilter<"SavedListing"> | string
    listingId?: IntFilter<"SavedListing"> | number
    createdAt?: DateTimeFilter<"SavedListing"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type SavedListingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
  }

  export type SavedListingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_listingId?: SavedListingUserIdListingIdCompoundUniqueInput
    AND?: SavedListingWhereInput | SavedListingWhereInput[]
    OR?: SavedListingWhereInput[]
    NOT?: SavedListingWhereInput | SavedListingWhereInput[]
    userId?: StringFilter<"SavedListing"> | string
    listingId?: IntFilter<"SavedListing"> | number
    createdAt?: DateTimeFilter<"SavedListing"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id" | "userId_listingId">

  export type SavedListingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedListingCountOrderByAggregateInput
    _avg?: SavedListingAvgOrderByAggregateInput
    _max?: SavedListingMaxOrderByAggregateInput
    _min?: SavedListingMinOrderByAggregateInput
    _sum?: SavedListingSumOrderByAggregateInput
  }

  export type SavedListingScalarWhereWithAggregatesInput = {
    AND?: SavedListingScalarWhereWithAggregatesInput | SavedListingScalarWhereWithAggregatesInput[]
    OR?: SavedListingScalarWhereWithAggregatesInput[]
    NOT?: SavedListingScalarWhereWithAggregatesInput | SavedListingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavedListing"> | number
    userId?: StringWithAggregatesFilter<"SavedListing"> | string
    listingId?: IntWithAggregatesFilter<"SavedListing"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SavedListing"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingCreateNestedManyWithoutUserInput
    posts?: LostFoundPostCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    purchases?: TransactionCreateNestedManyWithoutBuyerInput
    sales?: TransactionCreateNestedManyWithoutSellerInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingUncheckedCreateNestedManyWithoutUserInput
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    purchases?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    sales?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUpdateManyWithoutSellerNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUncheckedUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    name: string
    type: string
    listings?: ListingCreateNestedManyWithoutCategoryInput
    posts?: LostFoundPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    listings?: ListingUncheckedCreateNestedManyWithoutCategoryInput
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    listings?: ListingUpdateManyWithoutCategoryNestedInput
    posts?: LostFoundPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    listings?: ListingUncheckedUpdateManyWithoutCategoryNestedInput
    posts?: LostFoundPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    type: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ListingCreateInput = {
    pickupLocation?: string | null
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutListingsInput
    category: CategoryCreateNestedOneWithoutListingsInput
    images?: ImageCreateNestedManyWithoutListingInput
    transactions?: TransactionCreateNestedManyWithoutListingInput
    reports?: ReportCreateNestedManyWithoutListingInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    pickupLocation?: string | null
    id?: number
    userId: string
    title: string
    description: string
    price: number
    categoryId: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutListingInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutListingInput
    reports?: ReportUncheckedCreateNestedManyWithoutListingInput
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
    category?: CategoryUpdateOneRequiredWithoutListingsNestedInput
    images?: ImageUpdateManyWithoutListingNestedInput
    transactions?: TransactionUpdateManyWithoutListingNestedInput
    reports?: ReportUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutListingNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutListingNestedInput
    reports?: ReportUncheckedUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    pickupLocation?: string | null
    id?: number
    userId: string
    title: string
    description: string
    price: number
    categoryId: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostFoundPostCreateInput = {
    title: string
    description: string
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    category: CategoryCreateNestedOneWithoutPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
    reports?: ReportCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    description: string
    categoryId: number
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutPostInput
    reports?: ReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    images?: ImageUpdateManyWithoutPostNestedInput
    reports?: ReportUpdateManyWithoutPostNestedInput
  }

  export type LostFoundPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutPostNestedInput
    reports?: ReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type LostFoundPostCreateManyInput = {
    id?: number
    userId: string
    title: string
    description: string
    categoryId: number
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
  }

  export type LostFoundPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostFoundPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    url: string
    listing?: ListingCreateNestedOneWithoutImagesInput
    post?: LostFoundPostCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    listingId?: number | null
    postId?: number | null
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    listing?: ListingUpdateOneWithoutImagesNestedInput
    post?: LostFoundPostUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageCreateManyInput = {
    id?: number
    url: string
    listingId?: number | null
    postId?: number | null
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageCreateInput = {
    content: string
    createdAt?: Date | string
    readStatus?: boolean
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    senderId: string
    receiverId: string
    content: string
    createdAt?: Date | string
    readStatus?: boolean
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateManyInput = {
    id?: number
    senderId: string
    receiverId: string
    content: string
    createdAt?: Date | string
    readStatus?: boolean
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateInput = {
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    listing: ListingCreateNestedOneWithoutTransactionsInput
    buyer: UserCreateNestedOneWithoutPurchasesInput
    seller: UserCreateNestedOneWithoutSalesInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    listingId: number
    buyerId: string
    sellerId: string
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutTransactionsNestedInput
    buyer?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    seller?: UserUpdateOneRequiredWithoutSalesNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    listingId: number
    buyerId: string
    sellerId: string
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    reason: string
    createdAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsInput
    listing?: ListingCreateNestedOneWithoutReportsInput
    post?: LostFoundPostCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    reporterId: string
    listingId?: number | null
    postId?: number | null
    reason: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsNestedInput
    listing?: ListingUpdateOneWithoutReportsNestedInput
    post?: LostFoundPostUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporterId?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: number
    reporterId: string
    listingId?: number | null
    postId?: number | null
    reason: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporterId?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedListingInput
    listing: ListingCreateNestedOneWithoutSavedByInput
  }

  export type SavedListingUncheckedCreateInput = {
    id?: number
    userId: string
    listingId: number
    createdAt?: Date | string
  }

  export type SavedListingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedListingNestedInput
    listing?: ListingUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedListingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    listingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingCreateManyInput = {
    id?: number
    userId: string
    listingId: number
    createdAt?: Date | string
  }

  export type SavedListingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    listingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type LostFoundPostListRelationFilter = {
    every?: LostFoundPostWhereInput
    some?: LostFoundPostWhereInput
    none?: LostFoundPostWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type SavedListingListRelationFilter = {
    every?: SavedListingWhereInput
    some?: SavedListingWhereInput
    none?: SavedListingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LostFoundPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    studentId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    studentId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    studentId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingCountOrderByAggregateInput = {
    pickupLocation?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    pickupLocation?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    pickupLocation?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
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

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type EnumLFTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LFType | EnumLFTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LFType[] | ListEnumLFTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LFType[] | ListEnumLFTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLFTypeFilter<$PrismaModel> | $Enums.LFType
  }

  export type EnumLFStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LFStatus | EnumLFStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LFStatus[] | ListEnumLFStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LFStatus[] | ListEnumLFStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLFStatusFilter<$PrismaModel> | $Enums.LFStatus
  }

  export type LostFoundPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    locationText?: SortOrder
    dateLostFound?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LostFoundPostAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type LostFoundPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    locationText?: SortOrder
    dateLostFound?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LostFoundPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    locationText?: SortOrder
    dateLostFound?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LostFoundPostSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumLFTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LFType | EnumLFTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LFType[] | ListEnumLFTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LFType[] | ListEnumLFTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLFTypeWithAggregatesFilter<$PrismaModel> | $Enums.LFType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLFTypeFilter<$PrismaModel>
    _max?: NestedEnumLFTypeFilter<$PrismaModel>
  }

  export type EnumLFStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LFStatus | EnumLFStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LFStatus[] | ListEnumLFStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LFStatus[] | ListEnumLFStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLFStatusWithAggregatesFilter<$PrismaModel> | $Enums.LFStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLFStatusFilter<$PrismaModel>
    _max?: NestedEnumLFStatusFilter<$PrismaModel>
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

  export type ListingNullableScalarRelationFilter = {
    is?: ListingWhereInput | null
    isNot?: ListingWhereInput | null
  }

  export type LostFoundPostNullableScalarRelationFilter = {
    is?: LostFoundPostWhereInput | null
    isNot?: LostFoundPostWhereInput | null
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    readStatus?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    readStatus?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    readStatus?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type ListingScalarRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    price?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    price?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    postId?: SortOrder
  }

  export type SavedListingUserIdListingIdCompoundUniqueInput = {
    userId: string
    listingId: number
  }

  export type SavedListingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedListingAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type SavedListingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedListingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedListingSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type ListingCreateNestedManyWithoutUserInput = {
    create?: XOR<ListingCreateWithoutUserInput, ListingUncheckedCreateWithoutUserInput> | ListingCreateWithoutUserInput[] | ListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutUserInput | ListingCreateOrConnectWithoutUserInput[]
    createMany?: ListingCreateManyUserInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type LostFoundPostCreateNestedManyWithoutUserInput = {
    create?: XOR<LostFoundPostCreateWithoutUserInput, LostFoundPostUncheckedCreateWithoutUserInput> | LostFoundPostCreateWithoutUserInput[] | LostFoundPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutUserInput | LostFoundPostCreateOrConnectWithoutUserInput[]
    createMany?: LostFoundPostCreateManyUserInputEnvelope
    connect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutSellerInput = {
    create?: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput> | TransactionCreateWithoutSellerInput[] | TransactionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSellerInput | TransactionCreateOrConnectWithoutSellerInput[]
    createMany?: TransactionCreateManySellerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutReporterInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type SavedListingCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput> | SavedListingCreateWithoutUserInput[] | SavedListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutUserInput | SavedListingCreateOrConnectWithoutUserInput[]
    createMany?: SavedListingCreateManyUserInputEnvelope
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListingCreateWithoutUserInput, ListingUncheckedCreateWithoutUserInput> | ListingCreateWithoutUserInput[] | ListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutUserInput | ListingCreateOrConnectWithoutUserInput[]
    createMany?: ListingCreateManyUserInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type LostFoundPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LostFoundPostCreateWithoutUserInput, LostFoundPostUncheckedCreateWithoutUserInput> | LostFoundPostCreateWithoutUserInput[] | LostFoundPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutUserInput | LostFoundPostCreateOrConnectWithoutUserInput[]
    createMany?: LostFoundPostCreateManyUserInputEnvelope
    connect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput> | TransactionCreateWithoutSellerInput[] | TransactionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSellerInput | TransactionCreateOrConnectWithoutSellerInput[]
    createMany?: TransactionCreateManySellerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type SavedListingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput> | SavedListingCreateWithoutUserInput[] | SavedListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutUserInput | SavedListingCreateOrConnectWithoutUserInput[]
    createMany?: SavedListingCreateManyUserInputEnvelope
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ListingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListingCreateWithoutUserInput, ListingUncheckedCreateWithoutUserInput> | ListingCreateWithoutUserInput[] | ListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutUserInput | ListingCreateOrConnectWithoutUserInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutUserInput | ListingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListingCreateManyUserInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutUserInput | ListingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutUserInput | ListingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type LostFoundPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<LostFoundPostCreateWithoutUserInput, LostFoundPostUncheckedCreateWithoutUserInput> | LostFoundPostCreateWithoutUserInput[] | LostFoundPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutUserInput | LostFoundPostCreateOrConnectWithoutUserInput[]
    upsert?: LostFoundPostUpsertWithWhereUniqueWithoutUserInput | LostFoundPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LostFoundPostCreateManyUserInputEnvelope
    set?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    disconnect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    delete?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    connect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    update?: LostFoundPostUpdateWithWhereUniqueWithoutUserInput | LostFoundPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LostFoundPostUpdateManyWithWhereWithoutUserInput | LostFoundPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LostFoundPostScalarWhereInput | LostFoundPostScalarWhereInput[]
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

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBuyerInput | TransactionUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBuyerInput | TransactionUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBuyerInput | TransactionUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutSellerNestedInput = {
    create?: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput> | TransactionCreateWithoutSellerInput[] | TransactionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSellerInput | TransactionCreateOrConnectWithoutSellerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSellerInput | TransactionUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: TransactionCreateManySellerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSellerInput | TransactionUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSellerInput | TransactionUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutReporterNestedInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput | ReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReporterInput | ReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReporterInput | ReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type SavedListingUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput> | SavedListingCreateWithoutUserInput[] | SavedListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutUserInput | SavedListingCreateOrConnectWithoutUserInput[]
    upsert?: SavedListingUpsertWithWhereUniqueWithoutUserInput | SavedListingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedListingCreateManyUserInputEnvelope
    set?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    disconnect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    delete?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    update?: SavedListingUpdateWithWhereUniqueWithoutUserInput | SavedListingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedListingUpdateManyWithWhereWithoutUserInput | SavedListingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListingCreateWithoutUserInput, ListingUncheckedCreateWithoutUserInput> | ListingCreateWithoutUserInput[] | ListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutUserInput | ListingCreateOrConnectWithoutUserInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutUserInput | ListingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListingCreateManyUserInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutUserInput | ListingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutUserInput | ListingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type LostFoundPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LostFoundPostCreateWithoutUserInput, LostFoundPostUncheckedCreateWithoutUserInput> | LostFoundPostCreateWithoutUserInput[] | LostFoundPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutUserInput | LostFoundPostCreateOrConnectWithoutUserInput[]
    upsert?: LostFoundPostUpsertWithWhereUniqueWithoutUserInput | LostFoundPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LostFoundPostCreateManyUserInputEnvelope
    set?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    disconnect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    delete?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    connect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    update?: LostFoundPostUpdateWithWhereUniqueWithoutUserInput | LostFoundPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LostFoundPostUpdateManyWithWhereWithoutUserInput | LostFoundPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LostFoundPostScalarWhereInput | LostFoundPostScalarWhereInput[]
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

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBuyerInput | TransactionUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBuyerInput | TransactionUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBuyerInput | TransactionUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput> | TransactionCreateWithoutSellerInput[] | TransactionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSellerInput | TransactionCreateOrConnectWithoutSellerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSellerInput | TransactionUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: TransactionCreateManySellerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSellerInput | TransactionUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSellerInput | TransactionUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput | ReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReporterInput | ReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReporterInput | ReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type SavedListingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput> | SavedListingCreateWithoutUserInput[] | SavedListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutUserInput | SavedListingCreateOrConnectWithoutUserInput[]
    upsert?: SavedListingUpsertWithWhereUniqueWithoutUserInput | SavedListingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedListingCreateManyUserInputEnvelope
    set?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    disconnect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    delete?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    update?: SavedListingUpdateWithWhereUniqueWithoutUserInput | SavedListingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedListingUpdateManyWithWhereWithoutUserInput | SavedListingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
  }

  export type ListingCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput> | ListingCreateWithoutCategoryInput[] | ListingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCategoryInput | ListingCreateOrConnectWithoutCategoryInput[]
    createMany?: ListingCreateManyCategoryInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type LostFoundPostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<LostFoundPostCreateWithoutCategoryInput, LostFoundPostUncheckedCreateWithoutCategoryInput> | LostFoundPostCreateWithoutCategoryInput[] | LostFoundPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutCategoryInput | LostFoundPostCreateOrConnectWithoutCategoryInput[]
    createMany?: LostFoundPostCreateManyCategoryInputEnvelope
    connect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput> | ListingCreateWithoutCategoryInput[] | ListingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCategoryInput | ListingCreateOrConnectWithoutCategoryInput[]
    createMany?: ListingCreateManyCategoryInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type LostFoundPostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<LostFoundPostCreateWithoutCategoryInput, LostFoundPostUncheckedCreateWithoutCategoryInput> | LostFoundPostCreateWithoutCategoryInput[] | LostFoundPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutCategoryInput | LostFoundPostCreateOrConnectWithoutCategoryInput[]
    createMany?: LostFoundPostCreateManyCategoryInputEnvelope
    connect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
  }

  export type ListingUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput> | ListingCreateWithoutCategoryInput[] | ListingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCategoryInput | ListingCreateOrConnectWithoutCategoryInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutCategoryInput | ListingUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ListingCreateManyCategoryInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutCategoryInput | ListingUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutCategoryInput | ListingUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type LostFoundPostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<LostFoundPostCreateWithoutCategoryInput, LostFoundPostUncheckedCreateWithoutCategoryInput> | LostFoundPostCreateWithoutCategoryInput[] | LostFoundPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutCategoryInput | LostFoundPostCreateOrConnectWithoutCategoryInput[]
    upsert?: LostFoundPostUpsertWithWhereUniqueWithoutCategoryInput | LostFoundPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: LostFoundPostCreateManyCategoryInputEnvelope
    set?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    disconnect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    delete?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    connect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    update?: LostFoundPostUpdateWithWhereUniqueWithoutCategoryInput | LostFoundPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: LostFoundPostUpdateManyWithWhereWithoutCategoryInput | LostFoundPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: LostFoundPostScalarWhereInput | LostFoundPostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListingUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput> | ListingCreateWithoutCategoryInput[] | ListingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCategoryInput | ListingCreateOrConnectWithoutCategoryInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutCategoryInput | ListingUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ListingCreateManyCategoryInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutCategoryInput | ListingUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutCategoryInput | ListingUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type LostFoundPostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<LostFoundPostCreateWithoutCategoryInput, LostFoundPostUncheckedCreateWithoutCategoryInput> | LostFoundPostCreateWithoutCategoryInput[] | LostFoundPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutCategoryInput | LostFoundPostCreateOrConnectWithoutCategoryInput[]
    upsert?: LostFoundPostUpsertWithWhereUniqueWithoutCategoryInput | LostFoundPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: LostFoundPostCreateManyCategoryInputEnvelope
    set?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    disconnect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    delete?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    connect?: LostFoundPostWhereUniqueInput | LostFoundPostWhereUniqueInput[]
    update?: LostFoundPostUpdateWithWhereUniqueWithoutCategoryInput | LostFoundPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: LostFoundPostUpdateManyWithWhereWithoutCategoryInput | LostFoundPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: LostFoundPostScalarWhereInput | LostFoundPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutListingsInput = {
    create?: XOR<CategoryCreateWithoutListingsInput, CategoryUncheckedCreateWithoutListingsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutListingsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutListingInput = {
    create?: XOR<ImageCreateWithoutListingInput, ImageUncheckedCreateWithoutListingInput> | ImageCreateWithoutListingInput[] | ImageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutListingInput | ImageCreateOrConnectWithoutListingInput[]
    createMany?: ImageCreateManyListingInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutListingInput = {
    create?: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput> | TransactionCreateWithoutListingInput[] | TransactionUncheckedCreateWithoutListingInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutListingInput | TransactionCreateOrConnectWithoutListingInput[]
    createMany?: TransactionCreateManyListingInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutListingInput = {
    create?: XOR<ReportCreateWithoutListingInput, ReportUncheckedCreateWithoutListingInput> | ReportCreateWithoutListingInput[] | ReportUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutListingInput | ReportCreateOrConnectWithoutListingInput[]
    createMany?: ReportCreateManyListingInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type SavedListingCreateNestedManyWithoutListingInput = {
    create?: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput> | SavedListingCreateWithoutListingInput[] | SavedListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutListingInput | SavedListingCreateOrConnectWithoutListingInput[]
    createMany?: SavedListingCreateManyListingInputEnvelope
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ImageCreateWithoutListingInput, ImageUncheckedCreateWithoutListingInput> | ImageCreateWithoutListingInput[] | ImageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutListingInput | ImageCreateOrConnectWithoutListingInput[]
    createMany?: ImageCreateManyListingInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput> | TransactionCreateWithoutListingInput[] | TransactionUncheckedCreateWithoutListingInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutListingInput | TransactionCreateOrConnectWithoutListingInput[]
    createMany?: TransactionCreateManyListingInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ReportCreateWithoutListingInput, ReportUncheckedCreateWithoutListingInput> | ReportCreateWithoutListingInput[] | ReportUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutListingInput | ReportCreateOrConnectWithoutListingInput[]
    createMany?: ReportCreateManyListingInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type SavedListingUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput> | SavedListingCreateWithoutListingInput[] | SavedListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutListingInput | SavedListingCreateOrConnectWithoutListingInput[]
    createMany?: SavedListingCreateManyListingInputEnvelope
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
  }

  export type CategoryUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<CategoryCreateWithoutListingsInput, CategoryUncheckedCreateWithoutListingsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutListingsInput
    upsert?: CategoryUpsertWithoutListingsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutListingsInput, CategoryUpdateWithoutListingsInput>, CategoryUncheckedUpdateWithoutListingsInput>
  }

  export type ImageUpdateManyWithoutListingNestedInput = {
    create?: XOR<ImageCreateWithoutListingInput, ImageUncheckedCreateWithoutListingInput> | ImageCreateWithoutListingInput[] | ImageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutListingInput | ImageCreateOrConnectWithoutListingInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutListingInput | ImageUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ImageCreateManyListingInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutListingInput | ImageUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutListingInput | ImageUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutListingNestedInput = {
    create?: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput> | TransactionCreateWithoutListingInput[] | TransactionUncheckedCreateWithoutListingInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutListingInput | TransactionCreateOrConnectWithoutListingInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutListingInput | TransactionUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: TransactionCreateManyListingInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutListingInput | TransactionUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutListingInput | TransactionUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutListingNestedInput = {
    create?: XOR<ReportCreateWithoutListingInput, ReportUncheckedCreateWithoutListingInput> | ReportCreateWithoutListingInput[] | ReportUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutListingInput | ReportCreateOrConnectWithoutListingInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutListingInput | ReportUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ReportCreateManyListingInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutListingInput | ReportUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutListingInput | ReportUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type SavedListingUpdateManyWithoutListingNestedInput = {
    create?: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput> | SavedListingCreateWithoutListingInput[] | SavedListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutListingInput | SavedListingCreateOrConnectWithoutListingInput[]
    upsert?: SavedListingUpsertWithWhereUniqueWithoutListingInput | SavedListingUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: SavedListingCreateManyListingInputEnvelope
    set?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    disconnect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    delete?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    update?: SavedListingUpdateWithWhereUniqueWithoutListingInput | SavedListingUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: SavedListingUpdateManyWithWhereWithoutListingInput | SavedListingUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ImageCreateWithoutListingInput, ImageUncheckedCreateWithoutListingInput> | ImageCreateWithoutListingInput[] | ImageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutListingInput | ImageCreateOrConnectWithoutListingInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutListingInput | ImageUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ImageCreateManyListingInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutListingInput | ImageUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutListingInput | ImageUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput> | TransactionCreateWithoutListingInput[] | TransactionUncheckedCreateWithoutListingInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutListingInput | TransactionCreateOrConnectWithoutListingInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutListingInput | TransactionUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: TransactionCreateManyListingInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutListingInput | TransactionUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutListingInput | TransactionUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ReportCreateWithoutListingInput, ReportUncheckedCreateWithoutListingInput> | ReportCreateWithoutListingInput[] | ReportUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutListingInput | ReportCreateOrConnectWithoutListingInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutListingInput | ReportUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ReportCreateManyListingInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutListingInput | ReportUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutListingInput | ReportUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type SavedListingUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput> | SavedListingCreateWithoutListingInput[] | SavedListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutListingInput | SavedListingCreateOrConnectWithoutListingInput[]
    upsert?: SavedListingUpsertWithWhereUniqueWithoutListingInput | SavedListingUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: SavedListingCreateManyListingInputEnvelope
    set?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    disconnect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    delete?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    update?: SavedListingUpdateWithWhereUniqueWithoutListingInput | SavedListingUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: SavedListingUpdateManyWithWhereWithoutListingInput | SavedListingUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutPostInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutPostInput = {
    create?: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput> | ReportCreateWithoutPostInput[] | ReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPostInput | ReportCreateOrConnectWithoutPostInput[]
    createMany?: ReportCreateManyPostInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput> | ReportCreateWithoutPostInput[] | ReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPostInput | ReportCreateOrConnectWithoutPostInput[]
    createMany?: ReportCreateManyPostInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type EnumLFTypeFieldUpdateOperationsInput = {
    set?: $Enums.LFType
  }

  export type EnumLFStatusFieldUpdateOperationsInput = {
    set?: $Enums.LFStatus
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type ImageUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPostInput | ImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPostInput | ImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPostInput | ImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput> | ReportCreateWithoutPostInput[] | ReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPostInput | ReportCreateOrConnectWithoutPostInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutPostInput | ReportUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReportCreateManyPostInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutPostInput | ReportUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutPostInput | ReportUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPostInput | ImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPostInput | ImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPostInput | ImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput> | ReportCreateWithoutPostInput[] | ReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPostInput | ReportCreateOrConnectWithoutPostInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutPostInput | ReportUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReportCreateManyPostInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutPostInput | ReportUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutPostInput | ReportUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ListingCreateNestedOneWithoutImagesInput = {
    create?: XOR<ListingCreateWithoutImagesInput, ListingUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutImagesInput
    connect?: ListingWhereUniqueInput
  }

  export type LostFoundPostCreateNestedOneWithoutImagesInput = {
    create?: XOR<LostFoundPostCreateWithoutImagesInput, LostFoundPostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutImagesInput
    connect?: LostFoundPostWhereUniqueInput
  }

  export type ListingUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ListingCreateWithoutImagesInput, ListingUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutImagesInput
    upsert?: ListingUpsertWithoutImagesInput
    disconnect?: ListingWhereInput | boolean
    delete?: ListingWhereInput | boolean
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutImagesInput, ListingUpdateWithoutImagesInput>, ListingUncheckedUpdateWithoutImagesInput>
  }

  export type LostFoundPostUpdateOneWithoutImagesNestedInput = {
    create?: XOR<LostFoundPostCreateWithoutImagesInput, LostFoundPostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutImagesInput
    upsert?: LostFoundPostUpsertWithoutImagesInput
    disconnect?: LostFoundPostWhereInput | boolean
    delete?: LostFoundPostWhereInput | boolean
    connect?: LostFoundPostWhereUniqueInput
    update?: XOR<XOR<LostFoundPostUpdateToOneWithWhereWithoutImagesInput, LostFoundPostUpdateWithoutImagesInput>, LostFoundPostUncheckedUpdateWithoutImagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ListingCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ListingCreateWithoutTransactionsInput, ListingUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutTransactionsInput
    connect?: ListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSalesInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type ListingUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ListingCreateWithoutTransactionsInput, ListingUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutTransactionsInput
    upsert?: ListingUpsertWithoutTransactionsInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutTransactionsInput, ListingUpdateWithoutTransactionsInput>, ListingUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    upsert?: UserUpsertWithoutSalesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesInput, UserUpdateWithoutSalesInput>, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutReportsInput = {
    create?: XOR<ListingCreateWithoutReportsInput, ListingUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutReportsInput
    connect?: ListingWhereUniqueInput
  }

  export type LostFoundPostCreateNestedOneWithoutReportsInput = {
    create?: XOR<LostFoundPostCreateWithoutReportsInput, LostFoundPostUncheckedCreateWithoutReportsInput>
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutReportsInput
    connect?: LostFoundPostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type ListingUpdateOneWithoutReportsNestedInput = {
    create?: XOR<ListingCreateWithoutReportsInput, ListingUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutReportsInput
    upsert?: ListingUpsertWithoutReportsInput
    disconnect?: ListingWhereInput | boolean
    delete?: ListingWhereInput | boolean
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutReportsInput, ListingUpdateWithoutReportsInput>, ListingUncheckedUpdateWithoutReportsInput>
  }

  export type LostFoundPostUpdateOneWithoutReportsNestedInput = {
    create?: XOR<LostFoundPostCreateWithoutReportsInput, LostFoundPostUncheckedCreateWithoutReportsInput>
    connectOrCreate?: LostFoundPostCreateOrConnectWithoutReportsInput
    upsert?: LostFoundPostUpsertWithoutReportsInput
    disconnect?: LostFoundPostWhereInput | boolean
    delete?: LostFoundPostWhereInput | boolean
    connect?: LostFoundPostWhereUniqueInput
    update?: XOR<XOR<LostFoundPostUpdateToOneWithWhereWithoutReportsInput, LostFoundPostUpdateWithoutReportsInput>, LostFoundPostUncheckedUpdateWithoutReportsInput>
  }

  export type UserCreateNestedOneWithoutSavedListingInput = {
    create?: XOR<UserCreateWithoutSavedListingInput, UserUncheckedCreateWithoutSavedListingInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedListingInput
    connect?: UserWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutSavedByInput = {
    create?: XOR<ListingCreateWithoutSavedByInput, ListingUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ListingCreateOrConnectWithoutSavedByInput
    connect?: ListingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedListingNestedInput = {
    create?: XOR<UserCreateWithoutSavedListingInput, UserUncheckedCreateWithoutSavedListingInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedListingInput
    upsert?: UserUpsertWithoutSavedListingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedListingInput, UserUpdateWithoutSavedListingInput>, UserUncheckedUpdateWithoutSavedListingInput>
  }

  export type ListingUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<ListingCreateWithoutSavedByInput, ListingUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ListingCreateOrConnectWithoutSavedByInput
    upsert?: ListingUpsertWithoutSavedByInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutSavedByInput, ListingUpdateWithoutSavedByInput>, ListingUncheckedUpdateWithoutSavedByInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
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

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type NestedEnumLFTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LFType | EnumLFTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LFType[] | ListEnumLFTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LFType[] | ListEnumLFTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLFTypeFilter<$PrismaModel> | $Enums.LFType
  }

  export type NestedEnumLFStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LFStatus | EnumLFStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LFStatus[] | ListEnumLFStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LFStatus[] | ListEnumLFStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLFStatusFilter<$PrismaModel> | $Enums.LFStatus
  }

  export type NestedEnumLFTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LFType | EnumLFTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LFType[] | ListEnumLFTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LFType[] | ListEnumLFTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLFTypeWithAggregatesFilter<$PrismaModel> | $Enums.LFType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLFTypeFilter<$PrismaModel>
    _max?: NestedEnumLFTypeFilter<$PrismaModel>
  }

  export type NestedEnumLFStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LFStatus | EnumLFStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LFStatus[] | ListEnumLFStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LFStatus[] | ListEnumLFStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLFStatusWithAggregatesFilter<$PrismaModel> | $Enums.LFStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLFStatusFilter<$PrismaModel>
    _max?: NestedEnumLFStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type ListingCreateWithoutUserInput = {
    pickupLocation?: string | null
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutListingsInput
    images?: ImageCreateNestedManyWithoutListingInput
    transactions?: TransactionCreateNestedManyWithoutListingInput
    reports?: ReportCreateNestedManyWithoutListingInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutUserInput = {
    pickupLocation?: string | null
    id?: number
    title: string
    description: string
    price: number
    categoryId: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutListingInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutListingInput
    reports?: ReportUncheckedCreateNestedManyWithoutListingInput
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutUserInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutUserInput, ListingUncheckedCreateWithoutUserInput>
  }

  export type ListingCreateManyUserInputEnvelope = {
    data: ListingCreateManyUserInput | ListingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LostFoundPostCreateWithoutUserInput = {
    title: string
    description: string
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
    reports?: ReportCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    categoryId: number
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutPostInput
    reports?: ReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostCreateOrConnectWithoutUserInput = {
    where: LostFoundPostWhereUniqueInput
    create: XOR<LostFoundPostCreateWithoutUserInput, LostFoundPostUncheckedCreateWithoutUserInput>
  }

  export type LostFoundPostCreateManyUserInputEnvelope = {
    data: LostFoundPostCreateManyUserInput | LostFoundPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    content: string
    createdAt?: Date | string
    readStatus?: boolean
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: string
    content: string
    createdAt?: Date | string
    readStatus?: boolean
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    content: string
    createdAt?: Date | string
    readStatus?: boolean
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: string
    content: string
    createdAt?: Date | string
    readStatus?: boolean
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutBuyerInput = {
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    listing: ListingCreateNestedOneWithoutTransactionsInput
    seller: UserCreateNestedOneWithoutSalesInput
  }

  export type TransactionUncheckedCreateWithoutBuyerInput = {
    id?: number
    listingId: number
    sellerId: string
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput>
  }

  export type TransactionCreateManyBuyerInputEnvelope = {
    data: TransactionCreateManyBuyerInput | TransactionCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutSellerInput = {
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    listing: ListingCreateNestedOneWithoutTransactionsInput
    buyer: UserCreateNestedOneWithoutPurchasesInput
  }

  export type TransactionUncheckedCreateWithoutSellerInput = {
    id?: number
    listingId: number
    buyerId: string
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutSellerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput>
  }

  export type TransactionCreateManySellerInputEnvelope = {
    data: TransactionCreateManySellerInput | TransactionCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutReporterInput = {
    reason: string
    createdAt?: Date | string
    listing?: ListingCreateNestedOneWithoutReportsInput
    post?: LostFoundPostCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutReporterInput = {
    id?: number
    listingId?: number | null
    postId?: number | null
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutReporterInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput>
  }

  export type ReportCreateManyReporterInputEnvelope = {
    data: ReportCreateManyReporterInput | ReportCreateManyReporterInput[]
    skipDuplicates?: boolean
  }

  export type SavedListingCreateWithoutUserInput = {
    createdAt?: Date | string
    listing: ListingCreateNestedOneWithoutSavedByInput
  }

  export type SavedListingUncheckedCreateWithoutUserInput = {
    id?: number
    listingId: number
    createdAt?: Date | string
  }

  export type SavedListingCreateOrConnectWithoutUserInput = {
    where: SavedListingWhereUniqueInput
    create: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput>
  }

  export type SavedListingCreateManyUserInputEnvelope = {
    data: SavedListingCreateManyUserInput | SavedListingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListingUpsertWithWhereUniqueWithoutUserInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutUserInput, ListingUncheckedUpdateWithoutUserInput>
    create: XOR<ListingCreateWithoutUserInput, ListingUncheckedCreateWithoutUserInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutUserInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutUserInput, ListingUncheckedUpdateWithoutUserInput>
  }

  export type ListingUpdateManyWithWhereWithoutUserInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutUserInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    pickupLocation?: StringNullableFilter<"Listing"> | string | null
    id?: IntFilter<"Listing"> | number
    userId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    categoryId?: IntFilter<"Listing"> | number
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    createdAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type LostFoundPostUpsertWithWhereUniqueWithoutUserInput = {
    where: LostFoundPostWhereUniqueInput
    update: XOR<LostFoundPostUpdateWithoutUserInput, LostFoundPostUncheckedUpdateWithoutUserInput>
    create: XOR<LostFoundPostCreateWithoutUserInput, LostFoundPostUncheckedCreateWithoutUserInput>
  }

  export type LostFoundPostUpdateWithWhereUniqueWithoutUserInput = {
    where: LostFoundPostWhereUniqueInput
    data: XOR<LostFoundPostUpdateWithoutUserInput, LostFoundPostUncheckedUpdateWithoutUserInput>
  }

  export type LostFoundPostUpdateManyWithWhereWithoutUserInput = {
    where: LostFoundPostScalarWhereInput
    data: XOR<LostFoundPostUpdateManyMutationInput, LostFoundPostUncheckedUpdateManyWithoutUserInput>
  }

  export type LostFoundPostScalarWhereInput = {
    AND?: LostFoundPostScalarWhereInput | LostFoundPostScalarWhereInput[]
    OR?: LostFoundPostScalarWhereInput[]
    NOT?: LostFoundPostScalarWhereInput | LostFoundPostScalarWhereInput[]
    id?: IntFilter<"LostFoundPost"> | number
    userId?: StringFilter<"LostFoundPost"> | string
    title?: StringFilter<"LostFoundPost"> | string
    description?: StringFilter<"LostFoundPost"> | string
    categoryId?: IntFilter<"LostFoundPost"> | number
    type?: EnumLFTypeFilter<"LostFoundPost"> | $Enums.LFType
    locationText?: StringFilter<"LostFoundPost"> | string
    dateLostFound?: DateTimeFilter<"LostFoundPost"> | Date | string
    status?: EnumLFStatusFilter<"LostFoundPost"> | $Enums.LFStatus
    createdAt?: DateTimeFilter<"LostFoundPost"> | Date | string
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
    id?: IntFilter<"Message"> | number
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    readStatus?: BoolFilter<"Message"> | boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBuyerInput, TransactionUncheckedUpdateWithoutBuyerInput>
    create: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBuyerInput, TransactionUncheckedUpdateWithoutBuyerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBuyerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBuyerInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    listingId?: IntFilter<"Transaction"> | number
    buyerId?: StringFilter<"Transaction"> | string
    sellerId?: StringFilter<"Transaction"> | string
    price?: FloatFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutSellerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSellerInput, TransactionUncheckedUpdateWithoutSellerInput>
    create: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSellerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSellerInput, TransactionUncheckedUpdateWithoutSellerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSellerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSellerInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutReporterInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutReporterInput, ReportUncheckedUpdateWithoutReporterInput>
    create: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutReporterInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutReporterInput, ReportUncheckedUpdateWithoutReporterInput>
  }

  export type ReportUpdateManyWithWhereWithoutReporterInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReporterInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: IntFilter<"Report"> | number
    reporterId?: StringFilter<"Report"> | string
    listingId?: IntNullableFilter<"Report"> | number | null
    postId?: IntNullableFilter<"Report"> | number | null
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type SavedListingUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedListingWhereUniqueInput
    update: XOR<SavedListingUpdateWithoutUserInput, SavedListingUncheckedUpdateWithoutUserInput>
    create: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput>
  }

  export type SavedListingUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedListingWhereUniqueInput
    data: XOR<SavedListingUpdateWithoutUserInput, SavedListingUncheckedUpdateWithoutUserInput>
  }

  export type SavedListingUpdateManyWithWhereWithoutUserInput = {
    where: SavedListingScalarWhereInput
    data: XOR<SavedListingUpdateManyMutationInput, SavedListingUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedListingScalarWhereInput = {
    AND?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
    OR?: SavedListingScalarWhereInput[]
    NOT?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
    id?: IntFilter<"SavedListing"> | number
    userId?: StringFilter<"SavedListing"> | string
    listingId?: IntFilter<"SavedListing"> | number
    createdAt?: DateTimeFilter<"SavedListing"> | Date | string
  }

  export type ListingCreateWithoutCategoryInput = {
    pickupLocation?: string | null
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutListingsInput
    images?: ImageCreateNestedManyWithoutListingInput
    transactions?: TransactionCreateNestedManyWithoutListingInput
    reports?: ReportCreateNestedManyWithoutListingInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutCategoryInput = {
    pickupLocation?: string | null
    id?: number
    userId: string
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutListingInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutListingInput
    reports?: ReportUncheckedCreateNestedManyWithoutListingInput
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutCategoryInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput>
  }

  export type ListingCreateManyCategoryInputEnvelope = {
    data: ListingCreateManyCategoryInput | ListingCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type LostFoundPostCreateWithoutCategoryInput = {
    title: string
    description: string
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
    reports?: ReportCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: string
    title: string
    description: string
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutPostInput
    reports?: ReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostCreateOrConnectWithoutCategoryInput = {
    where: LostFoundPostWhereUniqueInput
    create: XOR<LostFoundPostCreateWithoutCategoryInput, LostFoundPostUncheckedCreateWithoutCategoryInput>
  }

  export type LostFoundPostCreateManyCategoryInputEnvelope = {
    data: LostFoundPostCreateManyCategoryInput | LostFoundPostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ListingUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutCategoryInput, ListingUncheckedUpdateWithoutCategoryInput>
    create: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutCategoryInput, ListingUncheckedUpdateWithoutCategoryInput>
  }

  export type ListingUpdateManyWithWhereWithoutCategoryInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutCategoryInput>
  }

  export type LostFoundPostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: LostFoundPostWhereUniqueInput
    update: XOR<LostFoundPostUpdateWithoutCategoryInput, LostFoundPostUncheckedUpdateWithoutCategoryInput>
    create: XOR<LostFoundPostCreateWithoutCategoryInput, LostFoundPostUncheckedCreateWithoutCategoryInput>
  }

  export type LostFoundPostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: LostFoundPostWhereUniqueInput
    data: XOR<LostFoundPostUpdateWithoutCategoryInput, LostFoundPostUncheckedUpdateWithoutCategoryInput>
  }

  export type LostFoundPostUpdateManyWithWhereWithoutCategoryInput = {
    where: LostFoundPostScalarWhereInput
    data: XOR<LostFoundPostUpdateManyMutationInput, LostFoundPostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutListingsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    posts?: LostFoundPostCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    purchases?: TransactionCreateNestedManyWithoutBuyerInput
    sales?: TransactionCreateNestedManyWithoutSellerInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    purchases?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    sales?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type CategoryCreateWithoutListingsInput = {
    name: string
    type: string
    posts?: LostFoundPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutListingsInput = {
    id?: number
    name: string
    type: string
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutListingsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutListingsInput, CategoryUncheckedCreateWithoutListingsInput>
  }

  export type ImageCreateWithoutListingInput = {
    url: string
    post?: LostFoundPostCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutListingInput = {
    id?: number
    url: string
    postId?: number | null
  }

  export type ImageCreateOrConnectWithoutListingInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutListingInput, ImageUncheckedCreateWithoutListingInput>
  }

  export type ImageCreateManyListingInputEnvelope = {
    data: ImageCreateManyListingInput | ImageCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutListingInput = {
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    buyer: UserCreateNestedOneWithoutPurchasesInput
    seller: UserCreateNestedOneWithoutSalesInput
  }

  export type TransactionUncheckedCreateWithoutListingInput = {
    id?: number
    buyerId: string
    sellerId: string
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutListingInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput>
  }

  export type TransactionCreateManyListingInputEnvelope = {
    data: TransactionCreateManyListingInput | TransactionCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutListingInput = {
    reason: string
    createdAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsInput
    post?: LostFoundPostCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutListingInput = {
    id?: number
    reporterId: string
    postId?: number | null
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutListingInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutListingInput, ReportUncheckedCreateWithoutListingInput>
  }

  export type ReportCreateManyListingInputEnvelope = {
    data: ReportCreateManyListingInput | ReportCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type SavedListingCreateWithoutListingInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedListingInput
  }

  export type SavedListingUncheckedCreateWithoutListingInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type SavedListingCreateOrConnectWithoutListingInput = {
    where: SavedListingWhereUniqueInput
    create: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput>
  }

  export type SavedListingCreateManyListingInputEnvelope = {
    data: SavedListingCreateManyListingInput | SavedListingCreateManyListingInput[]
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
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: LostFoundPostUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUpdateManyWithoutSellerNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: LostFoundPostUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutListingsInput = {
    update: XOR<CategoryUpdateWithoutListingsInput, CategoryUncheckedUpdateWithoutListingsInput>
    create: XOR<CategoryCreateWithoutListingsInput, CategoryUncheckedCreateWithoutListingsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutListingsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutListingsInput, CategoryUncheckedUpdateWithoutListingsInput>
  }

  export type CategoryUpdateWithoutListingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    posts?: LostFoundPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutListingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    posts?: LostFoundPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutListingInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutListingInput, ImageUncheckedUpdateWithoutListingInput>
    create: XOR<ImageCreateWithoutListingInput, ImageUncheckedCreateWithoutListingInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutListingInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutListingInput, ImageUncheckedUpdateWithoutListingInput>
  }

  export type ImageUpdateManyWithWhereWithoutListingInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutListingInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    listingId?: IntNullableFilter<"Image"> | number | null
    postId?: IntNullableFilter<"Image"> | number | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutListingInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutListingInput, TransactionUncheckedUpdateWithoutListingInput>
    create: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutListingInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutListingInput, TransactionUncheckedUpdateWithoutListingInput>
  }

  export type TransactionUpdateManyWithWhereWithoutListingInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutListingInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutListingInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutListingInput, ReportUncheckedUpdateWithoutListingInput>
    create: XOR<ReportCreateWithoutListingInput, ReportUncheckedCreateWithoutListingInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutListingInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutListingInput, ReportUncheckedUpdateWithoutListingInput>
  }

  export type ReportUpdateManyWithWhereWithoutListingInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutListingInput>
  }

  export type SavedListingUpsertWithWhereUniqueWithoutListingInput = {
    where: SavedListingWhereUniqueInput
    update: XOR<SavedListingUpdateWithoutListingInput, SavedListingUncheckedUpdateWithoutListingInput>
    create: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput>
  }

  export type SavedListingUpdateWithWhereUniqueWithoutListingInput = {
    where: SavedListingWhereUniqueInput
    data: XOR<SavedListingUpdateWithoutListingInput, SavedListingUncheckedUpdateWithoutListingInput>
  }

  export type SavedListingUpdateManyWithWhereWithoutListingInput = {
    where: SavedListingScalarWhereInput
    data: XOR<SavedListingUpdateManyMutationInput, SavedListingUncheckedUpdateManyWithoutListingInput>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    purchases?: TransactionCreateNestedManyWithoutBuyerInput
    sales?: TransactionCreateNestedManyWithoutSellerInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    purchases?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    sales?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    name: string
    type: string
    listings?: ListingCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    type: string
    listings?: ListingUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type ImageCreateWithoutPostInput = {
    url: string
    listing?: ListingCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutPostInput = {
    id?: number
    url: string
    listingId?: number | null
  }

  export type ImageCreateOrConnectWithoutPostInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput>
  }

  export type ImageCreateManyPostInputEnvelope = {
    data: ImageCreateManyPostInput | ImageCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutPostInput = {
    reason: string
    createdAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsInput
    listing?: ListingCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutPostInput = {
    id?: number
    reporterId: string
    listingId?: number | null
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutPostInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput>
  }

  export type ReportCreateManyPostInputEnvelope = {
    data: ReportCreateManyPostInput | ReportCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUpdateManyWithoutSellerNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    listings?: ListingUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    listings?: ListingUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutPostInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutPostInput, ImageUncheckedUpdateWithoutPostInput>
    create: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutPostInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutPostInput, ImageUncheckedUpdateWithoutPostInput>
  }

  export type ImageUpdateManyWithWhereWithoutPostInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutPostInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutPostInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutPostInput, ReportUncheckedUpdateWithoutPostInput>
    create: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutPostInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutPostInput, ReportUncheckedUpdateWithoutPostInput>
  }

  export type ReportUpdateManyWithWhereWithoutPostInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutPostInput>
  }

  export type ListingCreateWithoutImagesInput = {
    pickupLocation?: string | null
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutListingsInput
    category: CategoryCreateNestedOneWithoutListingsInput
    transactions?: TransactionCreateNestedManyWithoutListingInput
    reports?: ReportCreateNestedManyWithoutListingInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutImagesInput = {
    pickupLocation?: string | null
    id?: number
    userId: string
    title: string
    description: string
    price: number
    categoryId: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutListingInput
    reports?: ReportUncheckedCreateNestedManyWithoutListingInput
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutImagesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutImagesInput, ListingUncheckedCreateWithoutImagesInput>
  }

  export type LostFoundPostCreateWithoutImagesInput = {
    title: string
    description: string
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    category: CategoryCreateNestedOneWithoutPostsInput
    reports?: ReportCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostUncheckedCreateWithoutImagesInput = {
    id?: number
    userId: string
    title: string
    description: string
    categoryId: number
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostCreateOrConnectWithoutImagesInput = {
    where: LostFoundPostWhereUniqueInput
    create: XOR<LostFoundPostCreateWithoutImagesInput, LostFoundPostUncheckedCreateWithoutImagesInput>
  }

  export type ListingUpsertWithoutImagesInput = {
    update: XOR<ListingUpdateWithoutImagesInput, ListingUncheckedUpdateWithoutImagesInput>
    create: XOR<ListingCreateWithoutImagesInput, ListingUncheckedCreateWithoutImagesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutImagesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutImagesInput, ListingUncheckedUpdateWithoutImagesInput>
  }

  export type ListingUpdateWithoutImagesInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
    category?: CategoryUpdateOneRequiredWithoutListingsNestedInput
    transactions?: TransactionUpdateManyWithoutListingNestedInput
    reports?: ReportUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutImagesInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutListingNestedInput
    reports?: ReportUncheckedUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type LostFoundPostUpsertWithoutImagesInput = {
    update: XOR<LostFoundPostUpdateWithoutImagesInput, LostFoundPostUncheckedUpdateWithoutImagesInput>
    create: XOR<LostFoundPostCreateWithoutImagesInput, LostFoundPostUncheckedCreateWithoutImagesInput>
    where?: LostFoundPostWhereInput
  }

  export type LostFoundPostUpdateToOneWithWhereWithoutImagesInput = {
    where?: LostFoundPostWhereInput
    data: XOR<LostFoundPostUpdateWithoutImagesInput, LostFoundPostUncheckedUpdateWithoutImagesInput>
  }

  export type LostFoundPostUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    reports?: ReportUpdateManyWithoutPostNestedInput
  }

  export type LostFoundPostUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingCreateNestedManyWithoutUserInput
    posts?: LostFoundPostCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    purchases?: TransactionCreateNestedManyWithoutBuyerInput
    sales?: TransactionCreateNestedManyWithoutSellerInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingUncheckedCreateNestedManyWithoutUserInput
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    purchases?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    sales?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingCreateNestedManyWithoutUserInput
    posts?: LostFoundPostCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    purchases?: TransactionCreateNestedManyWithoutBuyerInput
    sales?: TransactionCreateNestedManyWithoutSellerInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingUncheckedCreateNestedManyWithoutUserInput
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    purchases?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    sales?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUpdateManyWithoutSellerNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUncheckedUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    purchases?: TransactionUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUpdateManyWithoutSellerNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUncheckedUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    purchases?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListingCreateWithoutTransactionsInput = {
    pickupLocation?: string | null
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutListingsInput
    category: CategoryCreateNestedOneWithoutListingsInput
    images?: ImageCreateNestedManyWithoutListingInput
    reports?: ReportCreateNestedManyWithoutListingInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutTransactionsInput = {
    pickupLocation?: string | null
    id?: number
    userId: string
    title: string
    description: string
    price: number
    categoryId: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutListingInput
    reports?: ReportUncheckedCreateNestedManyWithoutListingInput
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutTransactionsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutTransactionsInput, ListingUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingCreateNestedManyWithoutUserInput
    posts?: LostFoundPostCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sales?: TransactionCreateNestedManyWithoutSellerInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingUncheckedCreateNestedManyWithoutUserInput
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sales?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type UserCreateWithoutSalesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingCreateNestedManyWithoutUserInput
    posts?: LostFoundPostCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    purchases?: TransactionCreateNestedManyWithoutBuyerInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingUncheckedCreateNestedManyWithoutUserInput
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    purchases?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    SavedListing?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
  }

  export type ListingUpsertWithoutTransactionsInput = {
    update: XOR<ListingUpdateWithoutTransactionsInput, ListingUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ListingCreateWithoutTransactionsInput, ListingUncheckedCreateWithoutTransactionsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutTransactionsInput, ListingUncheckedUpdateWithoutTransactionsInput>
  }

  export type ListingUpdateWithoutTransactionsInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
    category?: CategoryUpdateOneRequiredWithoutListingsNestedInput
    images?: ImageUpdateManyWithoutListingNestedInput
    reports?: ReportUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutTransactionsInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutListingNestedInput
    reports?: ReportUncheckedUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sales?: TransactionUpdateManyWithoutSellerNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUncheckedUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sales?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSalesInput = {
    update: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUpdateManyWithoutBuyerNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUncheckedUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    SavedListing?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReportsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingCreateNestedManyWithoutUserInput
    posts?: LostFoundPostCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    purchases?: TransactionCreateNestedManyWithoutBuyerInput
    sales?: TransactionCreateNestedManyWithoutSellerInput
    SavedListing?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingUncheckedCreateNestedManyWithoutUserInput
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    purchases?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    sales?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    SavedListing?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type ListingCreateWithoutReportsInput = {
    pickupLocation?: string | null
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutListingsInput
    category: CategoryCreateNestedOneWithoutListingsInput
    images?: ImageCreateNestedManyWithoutListingInput
    transactions?: TransactionCreateNestedManyWithoutListingInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutReportsInput = {
    pickupLocation?: string | null
    id?: number
    userId: string
    title: string
    description: string
    price: number
    categoryId: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutListingInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutListingInput
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutReportsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutReportsInput, ListingUncheckedCreateWithoutReportsInput>
  }

  export type LostFoundPostCreateWithoutReportsInput = {
    title: string
    description: string
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    category: CategoryCreateNestedOneWithoutPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostUncheckedCreateWithoutReportsInput = {
    id?: number
    userId: string
    title: string
    description: string
    categoryId: number
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutPostInput
  }

  export type LostFoundPostCreateOrConnectWithoutReportsInput = {
    where: LostFoundPostWhereUniqueInput
    create: XOR<LostFoundPostCreateWithoutReportsInput, LostFoundPostUncheckedCreateWithoutReportsInput>
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUpdateManyWithoutSellerNestedInput
    SavedListing?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUncheckedUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    SavedListing?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListingUpsertWithoutReportsInput = {
    update: XOR<ListingUpdateWithoutReportsInput, ListingUncheckedUpdateWithoutReportsInput>
    create: XOR<ListingCreateWithoutReportsInput, ListingUncheckedCreateWithoutReportsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutReportsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutReportsInput, ListingUncheckedUpdateWithoutReportsInput>
  }

  export type ListingUpdateWithoutReportsInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
    category?: CategoryUpdateOneRequiredWithoutListingsNestedInput
    images?: ImageUpdateManyWithoutListingNestedInput
    transactions?: TransactionUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutReportsInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutListingNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type LostFoundPostUpsertWithoutReportsInput = {
    update: XOR<LostFoundPostUpdateWithoutReportsInput, LostFoundPostUncheckedUpdateWithoutReportsInput>
    create: XOR<LostFoundPostCreateWithoutReportsInput, LostFoundPostUncheckedCreateWithoutReportsInput>
    where?: LostFoundPostWhereInput
  }

  export type LostFoundPostUpdateToOneWithWhereWithoutReportsInput = {
    where?: LostFoundPostWhereInput
    data: XOR<LostFoundPostUpdateWithoutReportsInput, LostFoundPostUncheckedUpdateWithoutReportsInput>
  }

  export type LostFoundPostUpdateWithoutReportsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    images?: ImageUpdateManyWithoutPostNestedInput
  }

  export type LostFoundPostUncheckedUpdateWithoutReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutSavedListingInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingCreateNestedManyWithoutUserInput
    posts?: LostFoundPostCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    purchases?: TransactionCreateNestedManyWithoutBuyerInput
    sales?: TransactionCreateNestedManyWithoutSellerInput
    reports?: ReportCreateNestedManyWithoutReporterInput
  }

  export type UserUncheckedCreateWithoutSavedListingInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    studentId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    listings?: ListingUncheckedCreateNestedManyWithoutUserInput
    posts?: LostFoundPostUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    purchases?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    sales?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
  }

  export type UserCreateOrConnectWithoutSavedListingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedListingInput, UserUncheckedCreateWithoutSavedListingInput>
  }

  export type ListingCreateWithoutSavedByInput = {
    pickupLocation?: string | null
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutListingsInput
    category: CategoryCreateNestedOneWithoutListingsInput
    images?: ImageCreateNestedManyWithoutListingInput
    transactions?: TransactionCreateNestedManyWithoutListingInput
    reports?: ReportCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutSavedByInput = {
    pickupLocation?: string | null
    id?: number
    userId: string
    title: string
    description: string
    price: number
    categoryId: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutListingInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutListingInput
    reports?: ReportUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutSavedByInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutSavedByInput, ListingUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedListingInput = {
    update: XOR<UserUpdateWithoutSavedListingInput, UserUncheckedUpdateWithoutSavedListingInput>
    create: XOR<UserCreateWithoutSavedListingInput, UserUncheckedCreateWithoutSavedListingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedListingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedListingInput, UserUncheckedUpdateWithoutSavedListingInput>
  }

  export type UserUpdateWithoutSavedListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUpdateManyWithoutSellerNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listings?: ListingUncheckedUpdateManyWithoutUserNestedInput
    posts?: LostFoundPostUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    purchases?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    sales?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type ListingUpsertWithoutSavedByInput = {
    update: XOR<ListingUpdateWithoutSavedByInput, ListingUncheckedUpdateWithoutSavedByInput>
    create: XOR<ListingCreateWithoutSavedByInput, ListingUncheckedCreateWithoutSavedByInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutSavedByInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutSavedByInput, ListingUncheckedUpdateWithoutSavedByInput>
  }

  export type ListingUpdateWithoutSavedByInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
    category?: CategoryUpdateOneRequiredWithoutListingsNestedInput
    images?: ImageUpdateManyWithoutListingNestedInput
    transactions?: TransactionUpdateManyWithoutListingNestedInput
    reports?: ReportUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutSavedByInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutListingNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutListingNestedInput
    reports?: ReportUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyUserInput = {
    pickupLocation?: string | null
    id?: number
    title: string
    description: string
    price: number
    categoryId: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
  }

  export type LostFoundPostCreateManyUserInput = {
    id?: number
    title: string
    description: string
    categoryId: number
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: number
    receiverId: string
    content: string
    createdAt?: Date | string
    readStatus?: boolean
  }

  export type MessageCreateManyReceiverInput = {
    id?: number
    senderId: string
    content: string
    createdAt?: Date | string
    readStatus?: boolean
  }

  export type TransactionCreateManyBuyerInput = {
    id?: number
    listingId: number
    sellerId: string
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionCreateManySellerInput = {
    id?: number
    listingId: number
    buyerId: string
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type ReportCreateManyReporterInput = {
    id?: number
    listingId?: number | null
    postId?: number | null
    reason: string
    createdAt?: Date | string
  }

  export type SavedListingCreateManyUserInput = {
    id?: number
    listingId: number
    createdAt?: Date | string
  }

  export type ListingUpdateWithoutUserInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutListingsNestedInput
    images?: ImageUpdateManyWithoutListingNestedInput
    transactions?: TransactionUpdateManyWithoutListingNestedInput
    reports?: ReportUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutUserInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutListingNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutListingNestedInput
    reports?: ReportUncheckedUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutUserInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostFoundPostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    images?: ImageUpdateManyWithoutPostNestedInput
    reports?: ReportUpdateManyWithoutPostNestedInput
  }

  export type LostFoundPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutPostNestedInput
    reports?: ReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type LostFoundPostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutBuyerInput = {
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutTransactionsNestedInput
    seller?: UserUpdateOneRequiredWithoutSalesNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutSellerInput = {
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutTransactionsNestedInput
    buyer?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    buyerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    buyerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutReporterInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneWithoutReportsNestedInput
    post?: LostFoundPostUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutReporterInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutReporterInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedListingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateManyCategoryInput = {
    pickupLocation?: string | null
    id?: number
    userId: string
    title: string
    description: string
    price: number
    status?: $Enums.ListingStatus
    createdAt?: Date | string
  }

  export type LostFoundPostCreateManyCategoryInput = {
    id?: number
    userId: string
    title: string
    description: string
    type: $Enums.LFType
    locationText: string
    dateLostFound: Date | string
    status?: $Enums.LFStatus
    createdAt?: Date | string
  }

  export type ListingUpdateWithoutCategoryInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
    images?: ImageUpdateManyWithoutListingNestedInput
    transactions?: TransactionUpdateManyWithoutListingNestedInput
    reports?: ReportUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutCategoryInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutListingNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutListingNestedInput
    reports?: ReportUncheckedUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutCategoryInput = {
    pickupLocation?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostFoundPostUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    images?: ImageUpdateManyWithoutPostNestedInput
    reports?: ReportUpdateManyWithoutPostNestedInput
  }

  export type LostFoundPostUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutPostNestedInput
    reports?: ReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type LostFoundPostUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumLFTypeFieldUpdateOperationsInput | $Enums.LFType
    locationText?: StringFieldUpdateOperationsInput | string
    dateLostFound?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLFStatusFieldUpdateOperationsInput | $Enums.LFStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyListingInput = {
    id?: number
    url: string
    postId?: number | null
  }

  export type TransactionCreateManyListingInput = {
    id?: number
    buyerId: string
    sellerId: string
    price: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type ReportCreateManyListingInput = {
    id?: number
    reporterId: string
    postId?: number | null
    reason: string
    createdAt?: Date | string
  }

  export type SavedListingCreateManyListingInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type ImageUpdateWithoutListingInput = {
    url?: StringFieldUpdateOperationsInput | string
    post?: LostFoundPostUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUncheckedUpdateManyWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUpdateWithoutListingInput = {
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    seller?: UserUpdateOneRequiredWithoutSalesNestedInput
  }

  export type TransactionUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutListingInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsNestedInput
    post?: LostFoundPostUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporterId?: StringFieldUpdateOperationsInput | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporterId?: StringFieldUpdateOperationsInput | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUpdateWithoutListingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedListingNestedInput
  }

  export type SavedListingUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUncheckedUpdateManyWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyPostInput = {
    id?: number
    url: string
    listingId?: number | null
  }

  export type ReportCreateManyPostInput = {
    id?: number
    reporterId: string
    listingId?: number | null
    reason: string
    createdAt?: Date | string
  }

  export type ImageUpdateWithoutPostInput = {
    url?: StringFieldUpdateOperationsInput | string
    listing?: ListingUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportUpdateWithoutPostInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsNestedInput
    listing?: ListingUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporterId?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporterId?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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