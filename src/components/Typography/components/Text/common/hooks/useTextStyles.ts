import { __DEFAULT_COLOR__ } from '@common/constants';
import type { Style } from '@common/types';
import { checkColorType } from '@common/utils';

import { __DEFAULT_TEXT_DECORATION__ } from '../constants';
import type { TextElement, TextProps } from '../types';

import useTextResponsiveValues from './useTextResponsiveValues';

type UseTextStylesProps<Element extends TextElement> = Pick<TextProps<Element>, 'color' | 'decoration'>;
type UseTextStylesReturn = Style;

const useTextStyles = <Element extends TextElement>(props: UseTextStylesProps<Element>): UseTextStylesReturn => {
	const { color = __DEFAULT_COLOR__, decoration: decorationProp = __DEFAULT_TEXT_DECORATION__ } = props;

	const { decoration } = useTextResponsiveValues<Element>({ decoration: decorationProp });

	return {
		color: checkColorType(color) === 'other' ? color : undefined,
		textDecorationColor: checkColorType(decoration.color) === 'other' ? color : undefined
	};
};

export default useTextStyles;
