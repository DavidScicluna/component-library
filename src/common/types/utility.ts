// export type Undefinable<T> = T | undefined; // Adds undefined to type

// export type Nullable<T> = T | null; // Adds null to type

// export type NonNullable<T> = T extends null | undefined ? never : T; // Remove null and undefined from type

// export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> }; // Remove null and undefined from all keys type

export type PickFrom<T, K extends T> = {
	[P in keyof K]: P extends K ? P : never;
};

// export type Readonly<T> = {
// 	readonly [P in keyof T]: T[P];
// };
