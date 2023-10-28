import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';

import {
	__DEFAULT_SWITCH_IS_COMPACT__,
	__DEFAULT_SWITCH_LINE_HEIGHT_SIZE__,
	__DEFAULT_SWITCH_SIZE__
} from '../constants';
import type { SwitchProps } from '../types';

import { useSwitchResponsiveValues, useSwitchSizeConfig } from '.';

type SwitchIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;

type UseSwitchIconSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	SwitchProps<Element>,
	'isCompact' | 'size'
>;
type UseSwitchIconSizeReturn = SwitchIconSize;

const useSwitchIconSize = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseSwitchIconSizeProps<Element>
): UseSwitchIconSizeReturn => {
	const { isCompact: isCompactProp = __DEFAULT_SWITCH_IS_COMPACT__, size: sizeProp = __DEFAULT_SWITCH_SIZE__ } =
		props;

	const { isCompact, size } = useSwitchResponsiveValues<Element>({ isCompact: isCompactProp, size: sizeProp });

	const config = useSwitchSizeConfig({ isCompact, size });
	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, __DEFAULT_SWITCH_LINE_HEIGHT_SIZE__);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useSwitchIconSize;
