import type { Style } from '@common/types';

import { __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } from '../constants';
import type { DummyIconButtonProps } from '../types';

import useDummyIconButtonFontSize from './useDummyIconButtonFontSize';
import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

type UseDummyIconButtonStylesProps = Pick<DummyIconButtonProps, 'size'>;
type UseDummyIconButtonStylesReturn = Style;

const useDummyIconButtonStyles = (props: UseDummyIconButtonStylesProps): UseDummyIconButtonStylesReturn => {
	const { size: sizeProp = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } = props;

	const { size } = useDummyIconButtonResponsiveValues({ size: sizeProp });

	const fontSize = useDummyIconButtonFontSize({ size });

	return { fontSize: `${fontSize}px` };
};

export default useDummyIconButtonStyles;
