import type { ElementType } from 'react';

import type { Style } from '@common/types';

import { __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } from '../constants';
import type { DummyIconButtonProps } from '../types';

import useDummyIconButtonFontSize from './useDummyIconButtonFontSize';

type UseDummyIconButtonStylesProps<Element extends ElementType> = Pick<DummyIconButtonProps<Element>, 'size'>;
type UseDummyIconButtonStylesReturn = Style;

const useDummyIconButtonStyles = <Element extends ElementType>(
	props: UseDummyIconButtonStylesProps<Element>
): UseDummyIconButtonStylesReturn => {
	const { size = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } = props;

	const fontSize = useDummyIconButtonFontSize({ size });

	return { fontSize: `${fontSize}px` };
};

export default useDummyIconButtonStyles;
