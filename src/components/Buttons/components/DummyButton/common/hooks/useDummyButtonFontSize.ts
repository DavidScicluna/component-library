import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_BUTTON_SIZE__ } from '../constants';
import type { DummyButtonElement, DummyButtonProps } from '../types';

import useDummyButtonResponsiveValues from './useDummyButtonResponsiveValues';

type UseDummyButtonFontSizeProps<Element extends DummyButtonElement> = Pick<DummyButtonProps<Element>, 'size'>;

const useDummyButtonFontSize = <Element extends DummyButtonElement>(
	props: UseDummyButtonFontSizeProps<Element>
): number => {
	const { size: sizeProp = __DEFAULT_DUMMY_BUTTON_SIZE__ } = props;

	const { size } = useDummyButtonResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyButtonFontSize;
