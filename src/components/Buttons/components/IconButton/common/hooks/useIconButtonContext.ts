import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';

import { IconButtonContext } from '../../IconButton';
import { __DEFAULT_ICON_BUTTON_SIZE__, __DEFAULT_ICON_BUTTON_VARIANT__ } from '../constants';
import type {
	IconButtonContext as IconButtonContextType,
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonSize,
	IconButtonVariant
} from '../types';

const useIconButtonContext = <Element extends IconButtonElement = IconButtonDefaultElement>() => {
	const {
		color,
		colorMode,
		size: s = __DEFAULT_ICON_BUTTON_SIZE__,
		variant: v = __DEFAULT_ICON_BUTTON_VARIANT__
	} = useContext<IconButtonContextType<Element>>(IconButtonContext);

	const size = useGetResponsiveValue<IconButtonSize>(s);
	const variant = useGetResponsiveValue<IconButtonVariant>(v);

	return { color, colorMode, size, variant };
};

export default useIconButtonContext;
