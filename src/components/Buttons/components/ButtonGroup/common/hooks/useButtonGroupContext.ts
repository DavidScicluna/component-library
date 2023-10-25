import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { FlexDirectionClass } from '@common/types';

import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { ButtonGroupContext } from '../../ButtonGroup';
import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { ButtonGroupContext as ButtonGroupContextType } from '../types';

const useButtonGroupContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		direction: d = __DEFAULT_STACK_DIRECTION__,
		isAttached: a = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isFullWidth,
		isRound,
		size,
		variant
	} = useContext<ButtonGroupContextType<Element>>(ButtonGroupContext);

	const direction = useGetResponsiveValue<FlexDirectionClass>(d);
	const isAttached = useGetResponsiveValue<boolean>(a);

	return { color, colorMode, direction, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant };
};

export default useButtonGroupContext;
