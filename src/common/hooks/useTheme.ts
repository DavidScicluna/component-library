import theme from '@common/theme';
import type { ZIndexObj } from '@common/types/classes';
import type {
	BreakpointsObj,
	ColorsObj,
	DelaysObj,
	DurationsObj,
	EasingsObj,
	FontSizesObj,
	FontWeightsObj,
	LineHeightsObj,
	RadiiObj,
	SpacingObj
} from '@common/types/theme';

import useConst from './useConst';

interface UseThemeReturn {
	borderRadius: RadiiObj;
	colors: ColorsObj;
	container: BreakpointsObj;
	fontSizes: FontSizesObj;
	fontWeights: FontWeightsObj;
	lineHeights: LineHeightsObj;
	transition: {
		delay: DelaysObj;
		duration: DurationsObj;
		easing: EasingsObj;
	};
	spacing: SpacingObj;
	zIndex: ZIndexObj;
}

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
