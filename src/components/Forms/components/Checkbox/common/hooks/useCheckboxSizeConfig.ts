import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import { DEFAULT_CHECKBOX_IS_COMPACT, DEFAULT_CHECKBOX_SIZE } from '../constants';
import type { CheckboxUniqueProps } from '../types';

import { useCheckboxResponsiveValues } from '.';

type CheckboxSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseCheckboxSizeConfigProps = Pick<CheckboxUniqueProps, 'isCompact' | 'size'>;
type UseCheckboxSizeConfigReturn = CheckboxSizeConfig;

const useCheckboxSizeConfig = (props: UseCheckboxSizeConfigProps): UseCheckboxSizeConfigReturn => {
	const { isCompact: isCompactProp = DEFAULT_CHECKBOX_IS_COMPACT, size: sizeProp = DEFAULT_CHECKBOX_SIZE } = props;

	const { isCompact, size } = useCheckboxResponsiveValues({ isCompact: isCompactProp, size: sizeProp });

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
