import { useProviderContext } from '../../components/Provider/common/hooks';
import type { NoUndefinedField } from '../types';
import type { CommonThemeProps } from '../types/theme';

const useAppTheme = (): NoUndefinedField<CommonThemeProps> => {
	const { color, colorMode } = useProviderContext();
	return { color, colorMode };
};

export default useAppTheme;
