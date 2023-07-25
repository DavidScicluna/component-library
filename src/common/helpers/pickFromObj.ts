/* eslint-disable @typescript-eslint/no-unused-vars */

import memoize from 'micro-memoize';

/**
 * Credits to https://catchts.com/deep-pick
 */

type Primitives = string | number | symbol;

type Util<Obj, Props extends ReadonlyArray<Primitives>> = Props extends []
	? Obj
	: Props extends [infer First]
	? First extends keyof Obj
		? Obj[First]
		: never
	: Props extends [infer Fst, ...infer Tail]
	? Fst extends keyof Obj
		? Tail extends string[]
			? Util<Obj[Fst], Tail>
			: never
		: never
	: never;

// credits https://github.com/microsoft/TypeScript/issues/23182#issuecomment-379091887
// type IsNeverType<T> = [T] extends [never] ? true : false;

// type IsAllowed<T> = IsNeverType<T> extends true ? false : true;
// type Validator<T extends boolean | string> = T extends true ? [] : [never];
type ValuesUnion<T, Cache = T> = T extends Primitives
	? T
	: {
			[P in keyof T]: Cache | T[P] | ValuesUnion<T[P], Cache | T[P]>;
	  }[keyof T];

const hasProperty = memoize(<Obj, Prop extends Primitives>(obj: Obj, prop: Prop): obj is Obj & Record<Prop, never> => {
	return Object.prototype.hasOwnProperty.call(obj, prop);
});

const pickFromObj = memoize(
	<Obj, Prop extends string, Props extends ReadonlyArray<Prop>, _Result extends Util<Obj, Props>>(
		obj: ValuesUnion<Obj>,
		props: [...Props]
		// ..._: Validator<IsAllowed<Result>>
	) => {
		return props.reduce((acc, prop) => (hasProperty(acc, prop) ? acc[prop] : acc), obj);
	}
);

export default pickFromObj;
