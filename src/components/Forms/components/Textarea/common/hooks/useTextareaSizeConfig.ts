import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import { __DEFAULT_TEXTAREA_SIZE__ } from '../constants';
import type { TextareaDefaultElement, TextareaElement, TextareaProps, TextareaSize } from '../types';

type TextareaSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseTextareaSizeConfigProps<Element extends TextareaElement = TextareaDefaultElement> = Pick<
	TextareaProps<Element>,
	'size'
>;
type UseTextareaSizeConfigReturn = TextareaSizeConfig;

const useTextareaSizeConfig = <Element extends TextareaElement = TextareaDefaultElement>(
	props: UseTextareaSizeConfigProps<Element>
): UseTextareaSizeConfigReturn => {
	const { size = __DEFAULT_TEXTAREA_SIZE__ } = props;

	const config = useMemo<TextareaSizeConfig>(() => {
		const s = getResponsiveValue<TextareaSize>(size);

		const radius: ThemeRadius = 'base';

		switch (s) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: { x: 1, y: 0.25 },
					radius,
					spacing: 1
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: { x: 1.25, y: 0.5 },
					radius,
					spacing: 1.25
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: 1.75, y: 1 },
					radius,
					spacing: 1.75
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: { x: 2, y: 1.25 },
					radius,
					spacing: 2
				};
			default:
				return {
					fontSize: 'md',
					padding: { x: 1.5, y: 0.75 },
					radius,
					spacing: 1.5
				};
		}
	}, [size]);

	return config;
};

export default useTextareaSizeConfig;
