import { useMemo } from 'react';

import type { ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import { __DEFAULT_FORMS_SIZE__ } from '../constants';
import type { FormsCommonProps, FormsCommonSize } from '../types';

type FormsSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseFormsSizeConfigProps = Pick<FormsCommonProps, 'size'>;
type UseFormsSizeConfigReturn = FormsSizeConfig;

const useFormsSizeConfig = (props: UseFormsSizeConfigProps): UseFormsSizeConfigReturn => {
	const { size = __DEFAULT_FORMS_SIZE__ } = props;

	const config = useMemo<FormsSizeConfig>(() => {
		const s = getResponsiveValue<FormsCommonSize>(size);

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

export default useFormsSizeConfig;
