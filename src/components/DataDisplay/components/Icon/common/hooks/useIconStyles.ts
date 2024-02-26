import type { Style } from '@common/types';
import { checkFontSizeType } from '@common/utils';

import { DEFAULT_ICON_SIZE } from '../constants';
import type { IconElement, IconProps } from '../types';

import useIconResponsiveValues from './useIconResponsiveValues';

type UseIconStylesProps<Element extends IconElement> = Pick<IconProps<Element>, 'size'>;
type UseIconStylesReturn = Style;

const useIconStyles = <Element extends IconElement>(props: UseIconStylesProps<Element>): UseIconStylesReturn => {
	const { size: sizeProp = DEFAULT_ICON_SIZE } = props;

	const { size } = useIconResponsiveValues<Element>({ size: sizeProp });

	return {
		fontSize: checkFontSizeType(size) === 'other' ? size : undefined
	};
};

export default useIconStyles;
