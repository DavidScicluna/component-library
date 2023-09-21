import type { ElementType } from 'react';
import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_BUTTON_SIZE__ } from '../constants';
import type { DummyButtonProps, DummyButtonSize } from '../types';

type UseDummyButtonFontSizeProps<Element extends ElementType> = Pick<DummyButtonProps<Element>, 'size'>;

const useDummyButtonFontSize = <Element extends ElementType>(props: UseDummyButtonFontSizeProps<Element>): number => {
	const { size: s = __DEFAULT_DUMMY_BUTTON_SIZE__ } = props;

	const size = useGetResponsiveValue<DummyButtonSize>(s);

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyButtonFontSize;
