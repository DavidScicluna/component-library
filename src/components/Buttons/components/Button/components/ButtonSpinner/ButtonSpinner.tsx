import type { ElementType, ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import { getColorHex } from '@common/utils';

import { Spinner } from '@components/Feedback';

import { useButtonContext, useButtonFontSize } from '../../common/hooks';

import { __KEYS_BUTTON_SPINNER_CLASS__ } from './common/keys';
import type { ButtonSpinnerProps, ButtonSpinnerRef } from './common/types';

const ButtonSpinner = forwardRef(function ButtonSpinner<Element extends ElementType>(
	props: ButtonSpinnerProps<Element>,
	ref: ButtonSpinnerRef<Element>
): ReactElement {
	const { color: __DEFAULT_BUTTON_SPINNER_COLOR__, colorMode: __DEFAULT_BUTTON_SPINNER_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_BUTTON_SPINNER_COLOR__,
		colorMode = __DEFAULT_BUTTON_SPINNER_COLORMODE__,
		size,
		variant
	} = useButtonContext();

	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const fontSize = useButtonFontSize({ size });

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

	return (
		<Spinner
			{...rest}
			ref={ref}
			className={classNames(__KEYS_BUTTON_SPINNER_CLASS__, { [className]: !!className })}
			color={c}
			isVisible
			size={`${fontSize}px`}
		/>
	);
});

ButtonSpinner.displayName = 'ButtonSpinner';

export default ButtonSpinner;
