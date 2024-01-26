import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';
import { getColorHex } from '@common/utils';

import type { PuffSpinnerProps, TailSpinSpinnerProps, ThreeDotsSpinnerProps } from '@components/Feedback';
import { PuffSpinner, TailSpinSpinner, ThreeDotsSpinner } from '@components/Feedback';

import { useButtonContext, useButtonFontSize } from '../../common/hooks';

import { __DEFAULT_BUTTON_SPINNER_VARIANT__ } from './common/constants';
import { useButtonSpinnerResponsiveValues } from './common/hooks';
import { __KEYS_BUTTON_SPINNER_CLASS__ } from './common/keys';
import type { ButtonSpinnerProps, ButtonSpinnerRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ButtonSpinner = forwardRef(function ButtonSpinner<Element extends PolymorphicElementType>(
	props: ButtonSpinnerProps<Element>,
	ref: ButtonSpinnerRef<Element>
): ReactElement {
	const { color: __DEFAULT_BUTTON_SPINNER_COLOR__, colorMode: __DEFAULT_BUTTON_SPINNER_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_BUTTON_SPINNER_COLOR__,
		colorMode = __DEFAULT_BUTTON_SPINNER_COLORMODE__,
		size,
		variant: buttonVariant
	} = useButtonContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		variant: variantProp = __DEFAULT_BUTTON_SPINNER_VARIANT__,
		...rest
	} = props;

	const { variant } = useButtonSpinnerResponsiveValues<Element>({ variant: variantProp });

	const fontSize = useButtonFontSize({ size });

	const c = useMemo<string>(() => {
		switch (buttonVariant) {
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
	}, [color, colorMode, buttonVariant]);

	switch (variant) {
		case 'tail_spin':
			return (
				<TailSpinSpinner
					{...(rest as TailSpinSpinnerProps<Element>)}
					ref={ref}
					className={classNames(__KEYS_BUTTON_SPINNER_CLASS__, { [className]: !!className })}
					color={c}
					isVisible
					size={`${fontSize}px`}
				/>
			);
		case 'three_dots':
			return (
				<ThreeDotsSpinner
					{...(rest as ThreeDotsSpinnerProps<Element>)}
					ref={ref}
					className={classNames(__KEYS_BUTTON_SPINNER_CLASS__, { [className]: !!className })}
					color={c}
					isVisible
					size={`${fontSize}px`}
				/>
			);
		default:
			return (
				<PuffSpinner
					{...(rest as PuffSpinnerProps<Element>)}
					ref={ref}
					className={classNames(__KEYS_BUTTON_SPINNER_CLASS__, { [className]: !!className })}
					color={c}
					isVisible
					size={`${fontSize}px`}
				/>
			);
	}
});

// ButtonSpinner.displayName = 'ButtonSpinner';

export default ButtonSpinner;
