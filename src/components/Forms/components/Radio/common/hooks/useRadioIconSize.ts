import { useMemo } from 'react';

import type { PolymorphicElementType } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconDefaultElement, IconProps } from '@components/DataDisplay';

import { __DEFAULT_RADIO_IS_COMPACT__, __DEFAULT_RADIO_LINE_HEIGHT_SIZE__, __DEFAULT_RADIO_SIZE__ } from '../constants';
import type { RadioProps } from '../types';

import { useRadioResponsiveValues, useRadioSizeConfig } from '.';

type RadioIconSize = Pick<IconProps<IconDefaultElement>, 'w' | 'h' | 'size'>;

type UseRadioIconSizeProps<Element extends PolymorphicElementType> = Pick<RadioProps<Element>, 'isCompact' | 'size'>;
type UseRadioIconSizeReturn = RadioIconSize;

const useRadioIconSize = <Element extends PolymorphicElementType>(
	props: UseRadioIconSizeProps<Element>
): UseRadioIconSizeReturn => {
	const { isCompact: isCompactProp = __DEFAULT_RADIO_IS_COMPACT__, size: sizeProp = __DEFAULT_RADIO_SIZE__ } = props;

	const { isCompact, size } = useRadioResponsiveValues<Element>({ isCompact: isCompactProp, size: sizeProp });

	const config = useRadioSizeConfig<Element>({ isCompact, size });

	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, __DEFAULT_RADIO_LINE_HEIGHT_SIZE__);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useRadioIconSize;
