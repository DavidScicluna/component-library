import { DEFAULT_COLOR } from '@common/constants';
import type { Style } from '@common/types';
import { checkColorType } from '@common/utils';

import { DEFAULT_TEXT_DECORATION } from '../constants';
import type { TextUniqueProps } from '../types';

import useTextResponsiveValues from './useTextResponsiveValues';

type UseTextStylesProps = Pick<TextUniqueProps, 'color' | 'decoration'>;
type UseTextStylesReturn = Style;

const useTextStyles = (props: UseTextStylesProps): UseTextStylesReturn => {
	const { color = DEFAULT_COLOR, decoration: decorationProp } = props;

	const { decoration = DEFAULT_TEXT_DECORATION } = useTextResponsiveValues({ decoration: decorationProp });

	return {
		color: checkColorType(color) === 'other' ? color : undefined,
		textDecorationColor: checkColorType(decoration.color) === 'other' ? color : undefined
	};
};

export default useTextStyles;
