export type Undefinable<T> = T | undefined; // Adds undefined to type

export type Nullish<T> = T | null; // Adds null to type

export type PickFrom<T, K extends T> = {
	[P in keyof K]: P extends K ? P : never;
};

// export type Readonly<T> = {
// 	readonly [P in keyof T]: T[P];
// };
