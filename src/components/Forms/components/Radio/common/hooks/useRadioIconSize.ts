import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import type { IconDefaultElement, IconProps } from '@components/DataDisplay';

import { DEFAULT_RADIO_IS_COMPACT, DEFAULT_RADIO_LINE_HEIGHT_SIZE, DEFAULT_RADIO_SIZE } from '../constants';
import type { RadioUniqueProps } from '../types';

import { useRadioResponsiveValues, useRadioSizeConfig } from '.';

type RadioIconSize = Pick<IconProps<IconDefaultElement>, 'w' | 'h' | 'size'>;

type UseRadioIconSizeProps = Pick<RadioUniqueProps, 'isCompact' | 'size'>;
type UseRadioIconSizeReturn = RadioIconSize;

const useRadioIconSize = (props: UseRadioIconSizeProps): UseRadioIconSizeReturn => {
	const { isCompact: isCompactProp = DEFAULT_RADIO_IS_COMPACT, size: sizeProp = DEFAULT_RADIO_SIZE } = props;

	const { isCompact, size } = useRadioResponsiveValues({ isCompact: isCompactProp, size: sizeProp });

	const config = useRadioSizeConfig({ isCompact, size });

	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, DEFAULT_RADIO_LINE_HEIGHT_SIZE);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useRadioIconSize;
