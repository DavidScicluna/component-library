import { __DEFAULT_COLOR__ } from '@common/constants';
import type { Style } from '@common/types';
import { checkColorType } from '@common/utils';

import type { TextElement, TextProps } from '../types';

type UseTextStylesProps<Element extends TextElement> = Pick<TextProps<Element>, 'color'>;
type UseTextStylesReturn = Style;

const useTextStyles = <Element extends TextElement>(props: UseTextStylesProps<Element>): UseTextStylesReturn => {
	const { color = __DEFAULT_COLOR__ } = props;

	return {
		color: checkColorType(color) === 'other' ? color : undefined
	};
};

export default useTextStyles;
