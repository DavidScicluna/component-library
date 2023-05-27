import { useDSCLProviderContext } from '../..';
import { CommonThemeProps, NoUndefinedField } from '../types';

const useGetThemeAppearance = (): NoUndefinedField<CommonThemeProps> => {
	const { color, colorMode } = useDSCLProviderContext();

	return { color, colorMode };
};

export default useGetThemeAppearance;
