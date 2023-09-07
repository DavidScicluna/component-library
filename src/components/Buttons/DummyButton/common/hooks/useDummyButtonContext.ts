import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';

import { DummyButtonContext } from '../../DummyButton';
import {
	__DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from '../constants';
import type { DummyButtonContext as DummyButtonContextType, DummyButtonSize, DummyButtonVariant } from '../types';

const useDummyButtonContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		isAnimated: animated = __DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
		size: s = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant: v = __DEFAULT_DUMMY_BUTTON_VARIANT__
	} = useContext<DummyButtonContextType<Element>>(DummyButtonContext);

	const isAnimated = useGetResponsiveValue<boolean>(animated);

	const size = useGetResponsiveValue<DummyButtonSize>(s);
	const variant = useGetResponsiveValue<DummyButtonVariant>(v);

	return { color, colorMode, isAnimated, size, variant };
};

export default useDummyButtonContext;
