import { useContext } from 'react';

import {
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from '@components/Buttons/components/IconButton/common/constants';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { IconButtonGroupContext } from '../../IconButtonGroup';
import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { IconButtonGroupContext as IconButtonGroupContextType, IconButtonGroupElement } from '../types';

import useIconButtonGroupResponsiveValues from './useIconButtonGroupResponsiveValues';

const useIconButtonGroupContext = <Element extends IconButtonGroupElement>() => {
	const {
		color,
		colorMode,
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		isAttached: isAttachedProp = __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
		isCompact: isCompactProp = __DEFAULT_ICON_BUTTON_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_ICON_BUTTON_IS_DISABLED__,
		isRound: isRoundProp = __DEFAULT_ICON_BUTTON_IS_ROUND__,
		size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_BUTTON_VARIANT__
	} = useContext<IconButtonGroupContextType<Element>>(IconButtonGroupContext);

	const { direction, isAttached, isCompact, isDisabled, isRound, size, variant } =
		useIconButtonGroupResponsiveValues<Element>({
			direction: directionProp,
			isAttached: isAttachedProp,
			isCompact: isCompactProp,
			isDisabled: isDisabledProp,
			isRound: isRoundProp,
			size: sizeProp,
			variant: variantProp
		});
	return { color, colorMode, direction, isAttached, isCompact, isDisabled, isRound, size, variant };
};

export default useIconButtonGroupContext;
