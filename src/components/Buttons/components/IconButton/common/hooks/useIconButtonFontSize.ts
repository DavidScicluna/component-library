import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_ICON_BUTTON_SIZE__ } from '../constants';
import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonSize } from '../types';

type UseIconButtonFontSizeProps<Element extends IconButtonElement = IconButtonDefaultElement> = Pick<
	IconButtonProps<Element>,
	'size'
>;

const useIconButtonFontSize = <Element extends IconButtonElement = IconButtonDefaultElement>(
	props: UseIconButtonFontSizeProps<Element>
): number => {
	const { size: s = __DEFAULT_ICON_BUTTON_SIZE__ } = props;

	const size = useGetResponsiveValue<IconButtonSize>(s);

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useIconButtonFontSize;
