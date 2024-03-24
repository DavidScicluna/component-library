import type { Style } from '@common/types';

import { DEFAULT_ICON_BUTTON_SIZE } from '../constants';
import type { IconButtonUniqueProps } from '../types';

import useIconButtonFontSize from './useIconButtonFontSize';
import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type UseIconButtonStylesProps = Pick<IconButtonUniqueProps, 'size'>;
type UseIconButtonStylesReturn = Style;

const useIconButtonStyles = (props: UseIconButtonStylesProps): UseIconButtonStylesReturn => {
	const { size: sizeProp = DEFAULT_ICON_BUTTON_SIZE } = props;

	const { size } = useIconButtonResponsiveValues({ size: sizeProp });

	const fontSize = useIconButtonFontSize({ size });

	return { fontSize: `${fontSize}px` };
};

export default useIconButtonStyles;
