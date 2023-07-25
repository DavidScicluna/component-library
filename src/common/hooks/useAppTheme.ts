import type { NoUndefinedField } from '@common/types';
import type { CommonAppThemeProps } from '@common/types/theme';

import { useProviderContext } from '@components/Provider/common/hooks';

const useAppTheme = (): NoUndefinedField<CommonAppThemeProps> => {
	const { color, colorMode } = useProviderContext();
	return { color, colorMode };
};

export default useAppTheme;
