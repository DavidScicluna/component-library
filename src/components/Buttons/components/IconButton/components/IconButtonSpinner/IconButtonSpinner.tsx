import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';
import { getColorHex } from '@common/utils';

import { PuffSpinner, TailSpinSpinner, ThreeDotsSpinner } from '@components/Feedback';

import { useIconButtonContext, useIconButtonFontSize } from '../../common/hooks';

import { DEFAULT_ICON_BUTTON_SPINNER_VARIANT } from './common/constants';
import { useIconButtonSpinnerResponsiveValues } from './common/hooks';
import { KEYS_ICON_BUTTON_SPINNER_CLASS } from './common/keys';
import type { IconButtonSpinnerProps, IconButtonSpinnerRef } from './common/types';

const IconButtonSpinner = forwardRef(function IconButtonSpinner<Element extends PolymorphicElementType>(
	props: IconButtonSpinnerProps<Element>,
	ref: IconButtonSpinnerRef<Element>
): JSX.Element {
	const { color: DEFAULT_ICON_BUTTON_COLOR, colorMode: DEFAULT_ICON_BUTTON_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_ICON_BUTTON_COLOR,
		colorMode = DEFAULT_ICON_BUTTON_COLORMODE,
		size,
		variant: iconButtonVariant
	} = useIconButtonContext();

	const {
		className = DEFAULT_CLASSNAME,
		variant: variantProp = DEFAULT_ICON_BUTTON_SPINNER_VARIANT,
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
					{...rest}
					ref={ref}
					className={classNames(KEYS_ICON_BUTTON_SPINNER_CLASS, { [className]: !!className })}
					color={c}
					isVisible
					size={`${fontSize}px`}
				/>
			);
		case 'three_dots':
			return (
				<ThreeDotsSpinner
					{...rest}
					ref={ref}
					className={classNames(KEYS_ICON_BUTTON_SPINNER_CLASS, { [className]: !!className })}
					color={c}
					isVisible
					size={`${fontSize}px`}
				/>
			);
		default:
			return (
				<PuffSpinner
					{...rest}
					ref={ref}
					className={classNames(KEYS_ICON_BUTTON_SPINNER_CLASS, { [className]: !!className })}
					color={c}
					isVisible
					size={`${fontSize}px`}
				/>
			);
	}
});

// IconButtonSpinner.displayName = 'IconButtonSpinner';

export default IconButtonSpinner;
