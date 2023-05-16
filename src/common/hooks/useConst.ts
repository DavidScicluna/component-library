/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

type UseConstParamsFn<T> = () => T;
type UseConstParams<T> = T | UseConstParamsFn<T>;

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConst`
 * you can ensure that initializers don't execute twice or more.
 *
 * Based on Chakra UI useConst hook
 * @see Docs https://chakra-ui.com/docs/hooks/use-const
 */
const useConst = <T extends any>(params: UseConstParams<T>): T => {
	const ref = useRef<T | null>(null);

	if (ref.current === null) {
		ref.current = typeof params === 'function' ? (params as UseConstParamsFn<T>)() : params;
	}

	return ref.current as T;
};

export default useConst;
