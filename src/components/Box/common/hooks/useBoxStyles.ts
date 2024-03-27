import { useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import type {
	BoxHeight,
	BoxMaxHeight,
	BoxMaxWidth,
	BoxMinHeight,
	BoxMinWidth,
	BoxOtherProps,
	BoxWidth
} from '../types';

import useBoxResponsiveValues from './useBoxResponsiveValues';

type UseBoxStylesProps = BoxOtherProps;
type UseBoxStylesReturn = Style;

const useBoxStyles = (props: UseBoxStylesProps): UseBoxStylesReturn => {
	const { w: wProp, minW: minWProp, maxW: maxWProp, h: hProp, minH: minHProp, maxH: maxHProp } = props;

	const { w, minW, maxW, h, minH, maxH } = useBoxResponsiveValues({
		w: wProp,
		minW: minWProp,
		maxW: maxWProp,
		h: hProp,
		minH: minHProp,
		maxH: maxHProp
	});

	const width = useGetResponsiveValue<BoxWidth>(w);
	const minWidth = useGetResponsiveValue<BoxMinWidth>(minW);
	const maxWidth = useGetResponsiveValue<BoxMaxWidth>(maxW);

	const height = useGetResponsiveValue<BoxHeight>(h);
	const minHeight = useGetResponsiveValue<BoxMinHeight>(minH);
	const maxHeight = useGetResponsiveValue<BoxMaxHeight>(maxH);

	return {
		width,
		minWidth,
		maxWidth,
		height,
		minHeight,
		maxHeight
	};
};

export default useBoxStyles;
