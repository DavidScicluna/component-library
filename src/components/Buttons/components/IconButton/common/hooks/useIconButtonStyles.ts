import type { Style } from '@common/types';

import { __DEFAULT_ICON_BUTTON_SIZE__ } from '../constants';
import type { IconButtonElement, IconButtonProps } from '../types';

import useIconButtonFontSize from './useIconButtonFontSize';
import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type UseIconButtonStylesProps<Element extends IconButtonElement> = Pick<IconButtonProps<Element>, 'size'>;
type UseIconButtonStylesReturn = Style;

const useIconButtonStyles = <Element extends IconButtonElement>(
	props: UseIconButtonStylesProps<Element>
): UseIconButtonStylesReturn => {
	const { size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__ } = props;

	const { size } = useIconButtonResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useIconButtonFontSize<Element>({ size });

	return { fontSize: `${fontSize}px` };
};

export default useIconButtonStyles;
