import { useContext } from 'react';

import {
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '@components/Buttons/components/Button/common/constants';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { ButtonGroupContext } from '../../ButtonGroup';
import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { ButtonGroupContext as ButtonGroupContextType } from '../types';

import useButtonGroupResponsiveValues from './useButtonGroupResponsiveValues';

const useButtonGroupContext = () => {
	const {
		color,
		colorMode,
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		isAttached: isAttachedProp = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		isCompact: isCompactProp = __DEFAULT_BUTTON_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_BUTTON_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_BUTTON_IS_ROUND__,
		size: sizeProp = __DEFAULT_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_BUTTON_VARIANT__
	} = useContext<ButtonGroupContextType>(ButtonGroupContext);

	const { direction, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant } =
		useButtonGroupResponsiveValues({
			direction: directionProp,
			isAttached: isAttachedProp,
			isCompact: isCompactProp,
			isDisabled: isDisabledProp,
			isFullWidth: isFullWidthProp,
			isRound: isRoundProp,
			size: sizeProp,
			variant: variantProp
		});

	return { color, colorMode, direction, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant };
};

export default useButtonGroupContext;
