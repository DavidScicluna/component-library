import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';

import { IconButtonGroupContext } from '../../IconButtonGroup';
import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { IconButtonGroupContext as IconButtonGroupContextType } from '../types';

const useIconButtonGroupContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		isAttached: a = __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isRound,
		size,
		variant
	} = useContext<IconButtonGroupContextType<Element>>(IconButtonGroupContext);

	const isAttached = useGetResponsiveValue<boolean>(a);

	return { color, colorMode, isAttached, isCompact, isDisabled, isRound, size, variant };
};

export default useIconButtonGroupContext;
