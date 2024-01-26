import type { Style } from '@common/types';

import { __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } from '../constants';
import type { DummyIconButtonElement, DummyIconButtonProps } from '../types';

import useDummyIconButtonFontSize from './useDummyIconButtonFontSize';
import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

type UseDummyIconButtonStylesProps<Element extends DummyIconButtonElement> = Pick<
	DummyIconButtonProps<Element>,
	'size'
>;
type UseDummyIconButtonStylesReturn = Style;

const useDummyIconButtonStyles = <Element extends DummyIconButtonElement>(
	props: UseDummyIconButtonStylesProps<Element>
): UseDummyIconButtonStylesReturn => {
	const { size: sizeProp = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } = props;

	const { size } = useDummyIconButtonResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useDummyIconButtonFontSize<Element>({ size });

	return { fontSize: `${fontSize}px` };
};

export default useDummyIconButtonStyles;
