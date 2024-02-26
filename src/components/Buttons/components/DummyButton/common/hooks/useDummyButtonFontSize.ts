import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE, DEFAULT_DUMMY_BUTTON_SIZE } from '../constants';
import type { DummyButtonElement, DummyButtonProps } from '../types';

import useDummyButtonResponsiveValues from './useDummyButtonResponsiveValues';

type UseDummyButtonFontSizeProps<Element extends DummyButtonElement> = Pick<DummyButtonProps<Element>, 'size'>;

const useDummyButtonFontSize = <Element extends DummyButtonElement>(
	props: UseDummyButtonFontSizeProps<Element>
): number => {
	const { size: sizeProp = DEFAULT_DUMMY_BUTTON_SIZE } = props;

	const { size } = useDummyButtonResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useDummyButtonFontSize;
