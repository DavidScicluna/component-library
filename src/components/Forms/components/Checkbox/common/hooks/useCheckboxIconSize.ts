import { useMemo } from 'react';

import type { PolymorphicElementType } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';

import {
	__DEFAULT_CHECKBOX_IS_COMPACT__,
	__DEFAULT_CHECKBOX_LINE_HEIGHT_SIZE__,
	__DEFAULT_CHECKBOX_SIZE__
} from '../constants';
import type { CheckboxProps } from '../types';

import { useCheckboxResponsiveValues, useCheckboxSizeConfig } from '.';

type CheckboxIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;

type UseCheckboxIconSizeProps<Element extends PolymorphicElementType> = Pick<
	CheckboxProps<Element>,
	'isCompact' | 'size'
>;
type UseCheckboxIconSizeReturn = CheckboxIconSize;

const useCheckboxIconSize = <Element extends PolymorphicElementType>(
	props: UseCheckboxIconSizeProps<Element>
): UseCheckboxIconSizeReturn => {
	const { isCompact: isCompactProp = __DEFAULT_CHECKBOX_IS_COMPACT__, size: sizeProp = __DEFAULT_CHECKBOX_SIZE__ } =
		props;

	const { isCompact, size } = useCheckboxResponsiveValues<Element>({ isCompact: isCompactProp, size: sizeProp });

	const config = useCheckboxSizeConfig<Element>({ isCompact, size });

	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, __DEFAULT_CHECKBOX_LINE_HEIGHT_SIZE__);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useCheckboxIconSize;
