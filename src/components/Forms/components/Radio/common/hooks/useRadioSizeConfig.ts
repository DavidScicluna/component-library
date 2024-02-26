import { useMemo } from 'react';

import type { PolymorphicElementType, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';

import { DEFAULT_RADIO_IS_COMPACT, DEFAULT_RADIO_SIZE } from '../constants';
import type { RadioProps } from '../types';

import { useRadioResponsiveValues } from '.';

type RadioSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	radius: ThemeRadius;
	spacing: ThemeSpacing;
};

type UseRadioSizeConfigReturn = RadioSizeConfig;
type UseRadioSizeConfigProps<Element extends PolymorphicElementType> = Pick<RadioProps<Element>, 'isCompact' | 'size'>;

const useRadioSizeConfig = <Element extends PolymorphicElementType>(
	props: UseRadioSizeConfigProps<Element>
): UseRadioSizeConfigReturn => {
	const { isCompact: isCompactProp = DEFAULT_RADIO_IS_COMPACT, size: sizeProp = DEFAULT_RADIO_SIZE } = props;

	const { isCompact, size } = useRadioResponsiveValues({ isCompact: isCompactProp, size: sizeProp });

	const config = useMemo<RadioSizeConfig>(() => {
		const radius: ThemeRadius = 'full';

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

export default useRadioSizeConfig;
