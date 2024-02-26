import { useMemo } from 'react';

import type { PolymorphicElementType } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconDefaultElement, IconProps } from '@components/DataDisplay';

import { DEFAULT_CHECKBOX_IS_COMPACT, DEFAULT_CHECKBOX_LINE_HEIGHT_SIZE, DEFAULT_CHECKBOX_SIZE } from '../constants';
import type { CheckboxProps } from '../types';

import { useCheckboxResponsiveValues, useCheckboxSizeConfig } from '.';

type CheckboxIconSize = Pick<IconProps<IconDefaultElement>, 'w' | 'h' | 'size'>;

type UseCheckboxIconSizeProps<Element extends PolymorphicElementType> = Pick<
	CheckboxProps<Element>,
	'isCompact' | 'size'
>;
type UseCheckboxIconSizeReturn = CheckboxIconSize;

const useCheckboxIconSize = <Element extends PolymorphicElementType>(
	props: UseCheckboxIconSizeProps<Element>
): UseCheckboxIconSizeReturn => {
	const { isCompact: isCompactProp = DEFAULT_CHECKBOX_IS_COMPACT, size: sizeProp = DEFAULT_CHECKBOX_SIZE } = props;

	const { isCompact, size } = useCheckboxResponsiveValues<Element>({ isCompact: isCompactProp, size: sizeProp });

	const config = useCheckboxSizeConfig<Element>({ isCompact, size });

	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, DEFAULT_CHECKBOX_LINE_HEIGHT_SIZE);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useCheckboxIconSize;
