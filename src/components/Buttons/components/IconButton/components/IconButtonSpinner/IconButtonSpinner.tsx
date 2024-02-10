import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';
import { getColorHex } from '@common/utils';

import type { PuffSpinnerProps, TailSpinSpinnerProps, ThreeDotsSpinnerProps } from '@components/Feedback';
import { PuffSpinner, TailSpinSpinner, ThreeDotsSpinner } from '@components/Feedback';

import { useIconButtonContext, useIconButtonFontSize } from '../../common/hooks';

import { __DEFAULT_ICON_BUTTON_SPINNER_VARIANT__ } from './common/constants';
import { useIconButtonSpinnerResponsiveValues } from './common/hooks';
import { __KEYS_ICON_BUTTON_SPINNER_CLASS__ } from './common/keys';
import type { IconButtonSpinnerProps, IconButtonSpinnerRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const IconButtonSpinner = forwardRef(function IconButtonSpinner<Element extends PolymorphicElementType>(
	props: IconButtonSpinnerProps<Element>,
	ref: IconButtonSpinnerRef<Element>
): JSX.Element {
	const { color: __DEFAULT_ICON_BUTTON_COLOR__, colorMode: __DEFAULT_ICON_BUTTON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_ICON_BUTTON_COLOR__,
		colorMode = __DEFAULT_ICON_BUTTON_COLORMODE__,
		size,
		variant: iconButtonVariant
	} = useIconButtonContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		variant: variantProp = __DEFAULT_ICON_BUTTON_SPINNER_VARIANT__,
		...rest
	} = props;

	const { variant } = useIconButtonSpinnerResponsiveValues<Element>({ variant: variantProp });

	const fontSize = useIconButtonFontSize({ size });

	const c = useMemo<string>(() => {
		switch (iconButtonVariant) {
			case 'light':
				return getColorHex({ color, colorMode, hueType: 'darker' });
			case 'dark':
				return getColorHex({ color, colorMode, hueType: 'lighter' });
			case 'monochrome':
				return getColorHex({ color: 'gray', colorMode, hueType: 'text.primary' });
			case 'outlined':
			case 'icon':
				return getColorHex({ color, colorMode, hueType: 'color' });
			default:
				return getColorHex({ color: 'gray', colorMode, hueType: 'background' });
		}
	}, [color, colorMode, iconButtonVariant]);

	switch (variant) {
		case 'tail_spin':
			return (
				<TailSpinSpinner
					{...(rest as TailSpinSpinnerProps<Element>)}
					ref={ref}
					className={classNames(__KEYS_ICON_BUTTON_SPINNER_CLASS__, { [className]: !!className })}
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
					className={classNames(__KEYS_ICON_BUTTON_SPINNER_CLASS__, { [className]: !!className })}
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
					className={classNames(__KEYS_ICON_BUTTON_SPINNER_CLASS__, { [className]: !!className })}
					color={c}
					isVisible
					size={`${fontSize}px`}
				/>
			);
	}
});

// IconButtonSpinner.displayName = 'IconButtonSpinner';

export default IconButtonSpinner;
