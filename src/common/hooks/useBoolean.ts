import { useMemo, useState } from 'react';

export type UseBooleanParams = boolean | (() => boolean);
export type UseBooleanToggles = Record<'on' | 'off', () => void>;

export type UseBooleanReturn = [boolean, UseBooleanToggles];

/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
const useBoolean = (initialState: UseBooleanParams = false): UseBooleanReturn => {
	const [value, setValue] = useState<boolean>(initialState);

	const callbacks = useMemo<UseBooleanToggles>(
		() => ({
			on: () => setValue(true),
			off: () => setValue(false)
		}),
		[]
	);

	return [value, callbacks];
};

export default useBoolean;
