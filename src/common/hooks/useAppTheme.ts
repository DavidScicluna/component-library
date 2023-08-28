import type { DeepRequired } from 'utility-types';

import type { ThemeAppAppearanceProps } from '@common/types';

import { useProviderContext } from '@components/Provider/common/hooks';

const useAppTheme = (): DeepRequired<ThemeAppAppearanceProps> => {
	const { color, colorMode } = useProviderContext();
	return { color, colorMode };
};

export default useAppTheme;
