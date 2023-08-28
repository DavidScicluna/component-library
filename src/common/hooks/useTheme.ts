import theme from '@common/theme';
import type {
	ThemeBreakpointObj,
	ThemeColorObj,
	ThemeDelayObj,
	ThemeDurationObj,
	ThemeEaseObj,
	ThemeFontSizeObj,
	ThemeFontWeightObj,
	ThemeLineHeightObj,
	ThemeRadiusObj,
	ThemeSpacingObj,
	ZIndexClassObj
} from '@common/types';

import useConst from './useConst';

type UseThemeReturn = {
	borderRadius: ThemeRadiusObj;
	colors: ThemeColorObj;
	container: ThemeBreakpointObj;
	fontSizes: ThemeFontSizeObj;
	fontWeights: ThemeFontWeightObj;
	lineHeights: ThemeLineHeightObj;
	transition: {
		delay: ThemeDelayObj;
		duration: ThemeDurationObj;
		easing: ThemeEaseObj;
	};
	spacing: ThemeSpacingObj;
	zIndex: ZIndexClassObj;
};

const useTheme = (): UseThemeReturn => {
	const {
		borderRadius,
		colors,
		container,
		fontSizes,
		fontWeights,
		lineHeights,
		transitionDelay: delay,
		transitionDuration: duration,
		transitionTimingFunction: easing,
		spacing,
		zIndex
	} = useConst(theme);

	return {
		borderRadius,
		colors,
		container,
		fontSizes,
		fontWeights,
		lineHeights,
		transition: { delay, duration, easing },
		spacing,
		zIndex
	};
};

export default useTheme;
