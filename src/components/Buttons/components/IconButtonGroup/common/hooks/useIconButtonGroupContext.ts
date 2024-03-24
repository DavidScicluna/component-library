import { useContext } from 'react';

import {
	DEFAULT_ICON_BUTTON_IS_COMPACT,
	DEFAULT_ICON_BUTTON_IS_DISABLED,
	DEFAULT_ICON_BUTTON_IS_ROUND,
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_BUTTON_VARIANT
} from '@components/Buttons/components/IconButton/common/constants';
import { DEFAULT_STACK_DIRECTION } from '@components/Layout/components/Stacks/Stack/common/constants';

import { IconButtonGroupContext } from '../../IconButtonGroup';
import { DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED } from '../constants';
import type { IconButtonGroupContext as IconButtonGroupContextType, IconButtonGroupDefaultElement } from '../types';

import useIconButtonGroupResponsiveValues from './useIconButtonGroupResponsiveValues';

const useIconButtonGroupContext = () => {
	const {
		color,
		colorMode,
		direction: directionProp = DEFAULT_STACK_DIRECTION,
		isAttached: isAttachedProp = DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED,
		isCompact: isCompactProp = DEFAULT_ICON_BUTTON_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_ICON_BUTTON_IS_DISABLED,
		isRound: isRoundProp = DEFAULT_ICON_BUTTON_IS_ROUND,
		size: sizeProp = DEFAULT_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_ICON_BUTTON_VARIANT
	} = useContext<IconButtonGroupContextType<IconButtonGroupDefaultElement>>(IconButtonGroupContext);

	const { direction, isAttached, isCompact, isDisabled, isRound, size, variant } = useIconButtonGroupResponsiveValues(
		{
			direction: directionProp,
			isAttached: isAttachedProp,
			isCompact: isCompactProp,
			isDisabled: isDisabledProp,
			isRound: isRoundProp,
			size: sizeProp,
			variant: variantProp
		}
	);
	return { color, colorMode, direction, isAttached, isCompact, isDisabled, isRound, size, variant };
};

export default useIconButtonGroupContext;
