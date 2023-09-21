import type { ElementType } from 'react';
import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } from '../constants';
import type { DummyIconButtonProps, DummyIconButtonSize } from '../types';

type UseDummyIconButtonFontSizeProps<Element extends ElementType> = Pick<DummyIconButtonProps<Element>, 'size'>;

const useDummyIconButtonFontSize = <Element extends ElementType>(
	props: UseDummyIconButtonFontSizeProps<Element>
): number => {
	const { size: s = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } = props;

	const size = useGetResponsiveValue<DummyIconButtonSize>(s);

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyIconButtonFontSize;
