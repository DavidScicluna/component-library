import type { ElementType, ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { useAppTheme } from '@common/hooks';
import { getColorHex } from '@common/utils';

import { Spinner } from '@components/Feedback';

import { useButtonContext } from '../../common/hooks';

import type { ButtonSpinnerProps, ButtonSpinnerRef } from './common/types';

const ButtonSpinner = forwardRef(function ButtonSpinner<Element extends ElementType>(
	_props: ButtonSpinnerProps,
	ref: ButtonSpinnerRef<Element>
): ReactElement {
	const { color: __DEFAULT_BUTTON_COLOR__, colorMode: __DEFAULT_BUTTON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_BUTTON_COLOR__,
		colorMode = __DEFAULT_BUTTON_COLORMODE__,
		size,
		variant
	} = useButtonContext();

	const c = useMemo<string>(() => {
		switch (variant) {
			case 'light':
				return getColorHex({ color, colorMode, hueType: 'darker' });
			case 'dark':
				return getColorHex({ color, colorMode, hueType: 'lighter' });
			case 'monochrome':
				return getColorHex({ color: 'gray', colorMode, hueType: 'text.primary' });
			case 'outlined':
			case 'text':
				return getColorHex({ color, colorMode, hueType: 'color' });
			default:
				return getColorHex({ color: 'gray', colorMode, hueType: 'background' });
		}
	}, [color, colorMode, variant]);

	return <Spinner ref={ref} color={c} isVisible size={size} variant='three_dots' />;
});

export default ButtonSpinner;
