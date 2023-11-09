import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import {
	__DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	__DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
} from '../constants';
import type { DummyIconButtonProps, DummyIconButtonSize, DummyIconButtonVariant } from '../types';

type DummyIconButtonSizeConfig = {
	fontSize: ThemeFontSize;
	padding: ThemeSpacing;
	radius: ThemeRadius;
};

type UseDummyIconButtonSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	DummyIconButtonProps<Element>,
	'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseDummyIconButtonSizeConfigReturn = DummyIconButtonSizeConfig;

const useDummyIconButtonSizeConfig = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseDummyIconButtonSizeConfigProps<Element>
): UseDummyIconButtonSizeConfigReturn => {
	const {
		isCompact = __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
		isRound = __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
		size = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
	} = props;

	const config = useMemo<DummyIconButtonSizeConfig>(() => {
		const c = getResponsiveValue<boolean>(isCompact);
		const r = getResponsiveValue<boolean>(isRound);
		const s = getResponsiveValue<DummyIconButtonSize>(size);
		const v = getResponsiveValue<DummyIconButtonVariant>(variant);

		const radius: ThemeRadius = v === 'icon' ? 'none' : r ? 'full' : c ? 'xs' : 'base';

		switch (s) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: c ? 0.25 : 1,
					radius
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: c ? 0.5 : 1.25,
					radius
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: c ? 1 : 1.75,
					radius
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: c ? 1.25 : 2,
					radius
				};
			default:
				return {
					fontSize: 'md',
					padding: c ? 0.75 : 1.5,
					radius
				};
		}
	}, [isCompact, isRound, size, variant]);

	return config;
};

export default useDummyIconButtonSizeConfig;
