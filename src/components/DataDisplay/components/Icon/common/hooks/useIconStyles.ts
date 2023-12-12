import type { Style } from '@common/types';
import { checkFontSizeType } from '@common/utils';

import { __DEFAULT_ICON_SIZE__ } from '../constants';
import type { IconDefaultElement, IconElement, IconProps } from '../types';

import useIconResponsiveValues from './useIconResponsiveValues';

type UseIconStylesProps<Element extends IconElement = IconDefaultElement> = Pick<IconProps<Element>, 'size'>;
type UseIconStylesReturn = Style;

const useIconStyles = <Element extends IconElement = IconDefaultElement>(
	props: UseIconStylesProps<Element>
): UseIconStylesReturn => {
	const { size: sizeProp = __DEFAULT_ICON_SIZE__ } = props;

	const { size } = useIconResponsiveValues({ size: sizeProp });

	return {
		fontSize: checkFontSizeType(size) === 'other' ? size : undefined
	};
};

export default useIconStyles;
