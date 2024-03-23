import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import { DEFAULT_FORMS_IS_COMPACT, DEFAULT_FORMS_SIZE, DEFAULT_FORMS_VARIANT } from '../constants';
import type { FormsUniqueProps } from '../types';

import useFormsResponsiveValues from './useFormsResponsiveValues';

type FormsSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseFormsSizeConfigProps = Pick<FormsUniqueProps, 'isCompact' | 'size' | 'variant'>;
type UseFormsSizeConfigReturn = FormsSizeConfig;

const useFormsSizeConfig = (props: UseFormsSizeConfigProps): UseFormsSizeConfigReturn => {
	const {
		isCompact: isCompactProp = DEFAULT_FORMS_IS_COMPACT,
		size: sizeProp = DEFAULT_FORMS_SIZE,
		variant: variantProp = DEFAULT_FORMS_VARIANT
	} = props;

	const { isCompact, size, variant } = useFormsResponsiveValues({
		isCompact: isCompactProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useMemo<FormsSizeConfig>(() => {
		const radius: ThemeRadius = 'base';

		switch (size) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: { x: variant === 'underline' ? 0 : isCompact ? 0.25 : 1, y: isCompact ? 0.25 : 1 },
					radius,
					spacing: variant === 'underline' ? 0 : isCompact ? 0.25 : 1
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: { x: variant === 'underline' ? 0 : isCompact ? 0.5 : 1.25, y: isCompact ? 0.5 : 1.25 },
					radius,
					spacing: variant === 'underline' ? 0 : isCompact ? 0.5 : 1.25
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: variant === 'underline' ? 0 : isCompact ? 1 : 1.75, y: isCompact ? 1 : 1.75 },
					radius,
					spacing: variant === 'underline' ? 0 : isCompact ? 1 : 1.75
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: { x: variant === 'underline' ? 0 : isCompact ? 1.25 : 2, y: isCompact ? 1.25 : 2 },
					radius,
					spacing: variant === 'underline' ? 0 : isCompact ? 1.25 : 2
				};
			default:
				return {
					fontSize: 'md',
					padding: { x: variant === 'underline' ? 0 : isCompact ? 0.75 : 1.5, y: isCompact ? 0.75 : 1.5 },
					radius,
					spacing: variant === 'underline' ? 0 : isCompact ? 0.75 : 1.5
				};
		}
	}, [isCompact, size, variant]);

	return config;
};

export default useFormsSizeConfig;
