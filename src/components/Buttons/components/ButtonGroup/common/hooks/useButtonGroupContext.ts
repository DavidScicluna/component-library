import { useContext } from 'react';

import {
	DEFAULT_BUTTON_IS_COMPACT,
	DEFAULT_BUTTON_IS_DISABLED,
	DEFAULT_BUTTON_IS_FULLWIDTH,
	DEFAULT_BUTTON_IS_ROUND,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT
} from '@components/Buttons/components/Button/common/constants';
import { DEFAULT_STACK_DIRECTION } from '@components/Layout/components/Stacks/Stack/common/constants';

import { ButtonGroupContext } from '../../ButtonGroup';
import { DEFAULT_BUTTON_GROUP_IS_ATTACHED } from '../constants';
import type { ButtonGroupContext as ButtonGroupContextType, ButtonGroupElement } from '../types';

import useButtonGroupResponsiveValues from './useButtonGroupResponsiveValues';

const useButtonGroupContext = <Element extends ButtonGroupElement>() => {
	const {
		color,
		colorMode,
		direction: directionProp = DEFAULT_STACK_DIRECTION,
		isAttached: isAttachedProp = DEFAULT_BUTTON_GROUP_IS_ATTACHED,
		isCompact: isCompactProp = DEFAULT_BUTTON_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_BUTTON_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_BUTTON_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_BUTTON_IS_ROUND,
		size: sizeProp = DEFAULT_BUTTON_SIZE,
		variant: variantProp = DEFAULT_BUTTON_VARIANT
	} = useContext<ButtonGroupContextType<Element>>(ButtonGroupContext);

	const { direction, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant } =
		useButtonGroupResponsiveValues<Element>({
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
