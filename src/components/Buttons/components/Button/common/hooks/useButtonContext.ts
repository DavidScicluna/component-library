import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';

import { ButtonContext } from '../../Button';
import { __DEFAULT_BUTTON_SIZE__, __DEFAULT_BUTTON_VARIANT__ } from '../constants';
import type {
	ButtonContext as ButtonContextType,
	ButtonDefaultElement,
	ButtonElement,
	ButtonSize,
	ButtonVariant
} from '../types';

const useButtonContext = <Element extends ButtonElement = ButtonDefaultElement>() => {
	const {
		color,
		colorMode,
		size: s = __DEFAULT_BUTTON_SIZE__,
		variant: v = __DEFAULT_BUTTON_VARIANT__
	} = useContext<ButtonContextType<Element>>(ButtonContext);

	const size = useGetResponsiveValue<ButtonSize>(s);
	const variant = useGetResponsiveValue<ButtonVariant>(v);

	return { color, colorMode, size, variant };
};

export default useButtonContext;
