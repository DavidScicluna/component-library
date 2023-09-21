import type { Style } from '@common/types';

import { __DEFAULT_ICON_BUTTON_SIZE__ } from '../constants';
import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps } from '../types';

import useIconButtonFontSize from './useIconButtonFontSize';

type UseIconButtonStylesProps<Element extends IconButtonElement = IconButtonDefaultElement> = Pick<
	IconButtonProps<Element>,
	'size'
>;
type UseIconButtonStylesReturn = Style;

const useIconButtonStyles = <Element extends IconButtonElement = IconButtonDefaultElement>(
	props: UseIconButtonStylesProps<Element>
): UseIconButtonStylesReturn => {
	const { size = __DEFAULT_ICON_BUTTON_SIZE__ } = props;

	const fontSize = useIconButtonFontSize({ size });

	return { fontSize: `${fontSize}px` };
};

export default useIconButtonStyles;
