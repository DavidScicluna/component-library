import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import { __DEFAULT_FORMS_IS_COMPACT__, __DEFAULT_FORMS_SIZE__, __DEFAULT_FORMS_VARIANT__ } from '../constants';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '../types';

type FormsSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseFormsSizeConfigProps = Pick<FormsCommonProps, 'isCompact' | 'size' | 'variant'>;
type UseFormsSizeConfigReturn = FormsSizeConfig;

const useFormsSizeConfig = (props: UseFormsSizeConfigProps): UseFormsSizeConfigReturn => {
	const {
		isCompact = __DEFAULT_FORMS_IS_COMPACT__,
		size = __DEFAULT_FORMS_SIZE__,
		variant = __DEFAULT_FORMS_VARIANT__
	} = props;

	const config = useMemo<FormsSizeConfig>(() => {
		const c = getResponsiveValue<boolean>(isCompact);
		const s = getResponsiveValue<FormsCommonSize>(size);
		const v = getResponsiveValue<FormsCommonVariant>(variant);

		const radius: ThemeRadius = 'base';

		switch (s) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: { x: v === 'underline' ? 0 : c ? 0.25 : 1, y: c ? 0.25 : 1 },
					radius,
					spacing: v === 'underline' ? 0 : c ? 0.25 : 1
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: { x: v === 'underline' ? 0 : c ? 0.5 : 1.25, y: c ? 0.5 : 1.25 },
					radius,
					spacing: v === 'underline' ? 0 : c ? 0.5 : 1.25
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: v === 'underline' ? 0 : c ? 1 : 1.75, y: c ? 1 : 1.75 },
					radius,
					spacing: v === 'underline' ? 0 : c ? 1 : 1.75
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: { x: v === 'underline' ? 0 : c ? 1.25 : 2, y: c ? 1.25 : 2 },
					radius,
					spacing: v === 'underline' ? 0 : c ? 1.25 : 2
				};
			default:
				return {
					fontSize: 'md',
					padding: { x: v === 'underline' ? 0 : c ? 0.75 : 1.5, y: c ? 0.75 : 1.5 },
					radius,
					spacing: v === 'underline' ? 0 : c ? 0.75 : 1.5
				};
		}
	}, [isCompact, size, variant]);

	return config;
};

export default useFormsSizeConfig;
