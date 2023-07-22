import theme from '@common/theme';

import useConst from './useConst';

const useTheme = () => {
	const {
		borderRadius,
		colors,
		fontFamily,
		transitionTimingFunction,
		transitionDuration,
		transitionProperty,
		spacing
	} = useConst(theme);

	return {
		borderRadius,
		colors,
		fontFamily,
		transitionTimingFunction,
		transitionDuration,
		transitionProperty,
		spacing
	};
};

export default useTheme;
