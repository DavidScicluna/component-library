import { OS } from '../types';
import { getOS } from '../utils';

/**
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-os/use-os.ts
 *
 * @returns OS - 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'
 */
const useOs = (): OS => {
	if (typeof window !== 'undefined') {
		return getOS();
	}

	return 'undetermined';
};

export default useOs;
