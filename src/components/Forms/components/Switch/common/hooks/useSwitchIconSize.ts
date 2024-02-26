import { useMemo } from 'react';

import type { PolymorphicElementType } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconDefaultElement, IconProps } from '@components/DataDisplay';

import { DEFAULT_SWITCH_IS_COMPACT, DEFAULT_SWITCH_LINE_HEIGHT_SIZE, DEFAULT_SWITCH_SIZE } from '../constants';
import type { SwitchProps } from '../types';

import { useSwitchResponsiveValues, useSwitchSizeConfig } from '.';

type SwitchIconSize = Pick<IconProps<IconDefaultElement>, 'w' | 'h' | 'size'>;

type UseSwitchIconSizeProps<Element extends PolymorphicElementType> = Pick<SwitchProps<Element>, 'isCompact' | 'size'>;
type UseSwitchIconSizeReturn = SwitchIconSize;

const useSwitchIconSize = <Element extends PolymorphicElementType>(
	props: UseSwitchIconSizeProps<Element>
): UseSwitchIconSizeReturn => {
	const { isCompact: isCompactProp = DEFAULT_SWITCH_IS_COMPACT, size: sizeProp = DEFAULT_SWITCH_SIZE } = props;

	const { isCompact, size } = useSwitchResponsiveValues<Element>({ isCompact: isCompactProp, size: sizeProp });

	const config = useSwitchSizeConfig<Element>({ isCompact, size });

	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, DEFAULT_SWITCH_LINE_HEIGHT_SIZE);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useSwitchIconSize;
