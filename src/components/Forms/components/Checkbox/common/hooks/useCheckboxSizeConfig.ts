import { useMemo } from 'react';

import type { PolymorphicElementType, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import { __DEFAULT_CHECKBOX_IS_COMPACT__, __DEFAULT_CHECKBOX_SIZE__ } from '../constants';
import type { CheckboxProps } from '../types';

import { useCheckboxResponsiveValues } from '.';

type CheckboxSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseCheckboxSizeConfigProps<Element extends PolymorphicElementType> = Pick<
	CheckboxProps<Element>,
	'isCompact' | 'size'
>;
type UseCheckboxSizeConfigReturn = CheckboxSizeConfig;

const useCheckboxSizeConfig = <Element extends PolymorphicElementType>(
	props: UseCheckboxSizeConfigProps<Element>
): UseCheckboxSizeConfigReturn => {
	const { isCompact: isCompactProp = __DEFAULT_CHECKBOX_IS_COMPACT__, size: sizeProp = __DEFAULT_CHECKBOX_SIZE__ } =
		props;

	const { isCompact, size } = useCheckboxResponsiveValues<Element>({ isCompact: isCompactProp, size: sizeProp });

	const config = useMemo<CheckboxSizeConfig>(() => {
		const radius: ThemeRadius = 'base';

		switch (size) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: { x: isCompact ? 0.25 : 1, y: isCompact ? 0.25 : 1 },
					radius,
					spacing: isCompact ? 0.25 : 1
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: { x: isCompact ? 0.5 : 1.25, y: isCompact ? 0.5 : 1.25 },
					radius,
					spacing: isCompact ? 0.5 : 1.25
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: isCompact ? 1 : 1.75, y: isCompact ? 1 : 1.75 },
					radius,
					spacing: isCompact ? 1 : 1.75
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: { x: isCompact ? 1.25 : 2, y: isCompact ? 1.25 : 2 },
					radius,
					spacing: isCompact ? 1.25 : 2
				};
			default:
				return {
					fontSize: 'md',
					padding: { x: isCompact ? 0.75 : 1.5, y: isCompact ? 0.75 : 1.5 },
					radius,
					spacing: isCompact ? 0.75 : 1.5
				};
		}
	}, [isCompact, size]);

	return config;
};

export default useCheckboxSizeConfig;
