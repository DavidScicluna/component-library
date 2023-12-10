import { useMemo } from 'react';

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

type UseSwitchIconSizeProps = Pick<SwitchProps, 'isCompact' | 'size'>;
type UseSwitchIconSizeReturn = SwitchIconSize;

const useSwitchIconSize = (props: UseSwitchIconSizeProps): UseSwitchIconSizeReturn => {
	const { isCompact: isCompactProp = __DEFAULT_SWITCH_IS_COMPACT__, size: sizeProp = __DEFAULT_SWITCH_SIZE__ } =
		props;

	const { isCompact, size } = useSwitchResponsiveValues({ isCompact: isCompactProp, size: sizeProp });

	const config = useSwitchSizeConfig({ isCompact, size });

	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, __DEFAULT_SWITCH_LINE_HEIGHT_SIZE__);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useSwitchIconSize;
