import type { Style } from '@common/types';
import { checkFontSizeType } from '@common/utils';

import { __DEFAULT_ICON_SIZE__ } from '../constants';
import type { IconProps } from '../types';

import useIconResponsiveValues from './useIconResponsiveValues';

type UseIconStylesProps = Pick<IconProps, 'size'>;
type UseIconStylesReturn = Style;

const useIconStyles = (props: UseIconStylesProps): UseIconStylesReturn => {
	const { size: sizeProp = __DEFAULT_ICON_SIZE__ } = props;

	const { size } = useIconResponsiveValues({ size: sizeProp });

	return {
		fontSize: checkFontSizeType(size) === 'other' ? size : undefined
	};
};

export default useIconStyles;
