import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { FlexDirectionClass, PolymorphicDefaultElement } from '@common/types';

import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { IconButtonGroupContext } from '../../IconButtonGroup';
import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { IconButtonGroupContext as IconButtonGroupContextType } from '../types';

const useIconButtonGroupContext = <Element extends ElementType = PolymorphicDefaultElement>() => {
	const {
		color,
		colorMode,
		direction: d = __DEFAULT_STACK_DIRECTION__,
		isAttached: a = __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isRound,
		size,
		variant
	} = useContext<IconButtonGroupContextType<Element>>(IconButtonGroupContext);

	const direction = useGetResponsiveValue<FlexDirectionClass>(d);
	const isAttached = useGetResponsiveValue<boolean>(a);

	return { color, colorMode, direction, isAttached, isCompact, isDisabled, isRound, size, variant };
};

export default useIconButtonGroupContext;
