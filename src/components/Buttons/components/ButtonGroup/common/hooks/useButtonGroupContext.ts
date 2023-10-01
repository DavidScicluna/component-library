import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';

import { ButtonGroupContext } from '../../ButtonGroup';
import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { ButtonGroupContext as ButtonGroupContextType } from '../types';

const useButtonGroupContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		isAttached: a = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isFullWidth,
		isRound,
		size,
		variant
	} = useContext<ButtonGroupContextType<Element>>(ButtonGroupContext);

	const isAttached = useGetResponsiveValue<boolean>(a);

	return { color, colorMode, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant };
};

export default useButtonGroupContext;
