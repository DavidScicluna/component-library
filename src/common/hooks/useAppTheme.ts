import type { NoUndefinedField } from '@common/types';
import type { CommonThemeProps } from '@common/types/theme';

import { useProviderContext } from '@components/Provider/common/hooks';

const useAppTheme = (): NoUndefinedField<CommonThemeProps> => {
	const { color, colorMode } = useProviderContext();
	return { color, colorMode };
};

export default useAppTheme;
