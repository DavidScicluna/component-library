import { useDSCLProviderContext } from '../..';
import { CommonThemeProps } from '../types';

const useGetThemeAppearance = (): CommonThemeProps => {
	const { color, colorMode } = useDSCLProviderContext();

	return { color, colorMode };
};

export default useGetThemeAppearance;
