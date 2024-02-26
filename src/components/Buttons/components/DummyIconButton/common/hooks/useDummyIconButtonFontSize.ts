import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE, DEFAULT_DUMMY_ICON_BUTTON_SIZE } from '../constants';
import type { DummyIconButtonElement, DummyIconButtonProps } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

type UseDummyIconButtonFontSizeProps<Element extends DummyIconButtonElement> = Pick<
	DummyIconButtonProps<Element>,
	'size'
>;

const useDummyIconButtonFontSize = <Element extends DummyIconButtonElement>(
	props: UseDummyIconButtonFontSizeProps<Element>
): number => {
	const { size: sizeProp = DEFAULT_DUMMY_ICON_BUTTON_SIZE } = props;

	const { size } = useDummyIconButtonResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useDummyIconButtonFontSize;
