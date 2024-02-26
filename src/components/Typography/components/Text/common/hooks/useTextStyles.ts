import { DEFAULT_COLOR } from '@common/constants';
import type { Style } from '@common/types';
import { checkColorType } from '@common/utils';

import { DEFAULT_TEXT_DECORATION } from '../constants';
import type { TextElement, TextProps } from '../types';

import useTextResponsiveValues from './useTextResponsiveValues';

type UseTextStylesProps<Element extends TextElement> = Pick<TextProps<Element>, 'color' | 'decoration'>;
type UseTextStylesReturn = Style;

const useTextStyles = <Element extends TextElement>(props: UseTextStylesProps<Element>): UseTextStylesReturn => {
	const { color = DEFAULT_COLOR, decoration: decorationProp = DEFAULT_TEXT_DECORATION } = props;

	const { decoration } = useTextResponsiveValues<Element>({ decoration: decorationProp });

	return {
		color: checkColorType(color) === 'other' ? color : undefined,
		textDecorationColor: checkColorType(decoration.color) === 'other' ? color : undefined
	};
};

export default useTextStyles;
