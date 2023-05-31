import { debounce, DebouncedFunc, DebounceSettings } from 'lodash-es';
import memoize from 'micro-memoize';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

export interface MemoizeDebouncedFunction<F extends AnyFunction> extends DebouncedFunc<F> {
	(...args: Parameters<F>): ReturnType<F> | undefined;
	flush: (...args: Parameters<F>) => ReturnType<F> | undefined;
	cancel: (...args: Parameters<F>) => void;
}

/**Combines Lodash's debounce with memoize to allow for debouncing
 * based on parameters passed to the function during runtime.
 *
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @param options Lodash debounce options object.
 * @param resolver The function to resolve the cache key.
 */
const memoizeDebounce = <F extends AnyFunction>(
	func: F,
	wait = 0,
	options: DebounceSettings = {},
	resolver?: (...args: Parameters<F>) => unknown
): MemoizeDebouncedFunction<F> => {
	const debounceMemo = memoize<(...args: Parameters<F>) => DebouncedFunc<F>>(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		(..._args: Parameters<F>) => debounce(func, wait, options),
		resolver
	);

	function wrappedFunction(this: MemoizeDebouncedFunction<F>, ...args: Parameters<F>): ReturnType<F> | undefined {
		return debounceMemo(...args)(...args);
	}

	const flush: MemoizeDebouncedFunction<F>['flush'] = (...args) => {
		return debounceMemo(...args).flush();
	};

	const cancel: MemoizeDebouncedFunction<F>['cancel'] = (...args) => {
		return debounceMemo(...args).cancel();
	};

	wrappedFunction.flush = flush;
	wrappedFunction.cancel = cancel;

	return wrappedFunction;
};

export default memoizeDebounce;