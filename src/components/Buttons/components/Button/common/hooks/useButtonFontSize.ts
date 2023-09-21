import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_BUTTON_SIZE__ } from '../constants';
import type { ButtonDefaultElement, ButtonElement, ButtonProps, ButtonSize } from '../types';

type UseButtonFontSizeProps<Element extends ButtonElement = ButtonDefaultElement> = Pick<ButtonProps<Element>, 'size'>;

const useButtonFontSize = <Element extends ButtonElement = ButtonDefaultElement>(
	props: UseButtonFontSizeProps<Element>
): number => {
	const { size: s = __DEFAULT_BUTTON_SIZE__ } = props;

	const size = useGetResponsiveValue<ButtonSize>(s);

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useButtonFontSize;
