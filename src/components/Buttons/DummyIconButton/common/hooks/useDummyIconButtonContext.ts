import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';

import { DummyIconButtonContext } from '../../DummyIconButton';
import { __DEFAULT_DUMMY_ICON_BUTTON_SIZE__, __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__ } from '../constants';
import type {
	DummyIconButtonContext as DummyIconButtonContextType,
	DummyIconButtonSize,
	DummyIconButtonVariant
} from '../types';

const useDummyIconButtonContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		size: s = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant: v = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
	} = useContext<DummyIconButtonContextType<Element>>(DummyIconButtonContext);

	const size = useGetResponsiveValue<DummyIconButtonSize>(s);
	const variant = useGetResponsiveValue<DummyIconButtonVariant>(v);

	return { color, colorMode, size, variant };
};

export default useDummyIconButtonContext;
