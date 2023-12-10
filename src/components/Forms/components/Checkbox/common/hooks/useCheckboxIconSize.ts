import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';

import {
	__DEFAULT_CHECKBOX_IS_COMPACT__,
	__DEFAULT_CHECKBOX_LINE_HEIGHT_SIZE__,
	__DEFAULT_CHECKBOX_SIZE__
} from '../constants';
import type { CheckboxProps } from '../types';

import { useCheckboxResponsiveValues, useCheckboxSizeConfig } from '.';

type CheckboxIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;

type UseCheckboxIconSizeProps = Pick<CheckboxProps, 'isCompact' | 'size'>;
type UseCheckboxIconSizeReturn = CheckboxIconSize;

const useCheckboxIconSize = (props: UseCheckboxIconSizeProps): UseCheckboxIconSizeReturn => {
	const { isCompact: isCompactProp = __DEFAULT_CHECKBOX_IS_COMPACT__, size: sizeProp = __DEFAULT_CHECKBOX_SIZE__ } =
		props;

	const { isCompact, size } = useCheckboxResponsiveValues({ isCompact: isCompactProp, size: sizeProp });

	const config = useCheckboxSizeConfig({ isCompact, size });

	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, __DEFAULT_CHECKBOX_LINE_HEIGHT_SIZE__);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useCheckboxIconSize;
