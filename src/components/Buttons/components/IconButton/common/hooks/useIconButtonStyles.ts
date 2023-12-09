import type { Style } from '@common/types';

import { __DEFAULT_ICON_BUTTON_SIZE__ } from '../constants';
import type { IconButtonProps } from '../types';

import useIconButtonFontSize from './useIconButtonFontSize';
import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type UseIconButtonStylesProps = Pick<IconButtonProps, 'size'>;
type UseIconButtonStylesReturn = Style;

const useIconButtonStyles = (props: UseIconButtonStylesProps): UseIconButtonStylesReturn => {
	const { size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__ } = props;

	const { size } = useIconButtonResponsiveValues({ size: sizeProp });

	const fontSize = useIconButtonFontSize({ size });

	return { fontSize: `${fontSize}px` };
};

export default useIconButtonStyles;
