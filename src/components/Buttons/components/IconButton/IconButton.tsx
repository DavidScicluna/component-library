import type { ReactElement } from 'react';
import { createContext, forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';
import { useFocus } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';

import { Center } from '@components/Layout';
import { PushableOverlay } from '@components/Overlay/components/PushableOverlay';

import { hooks as iconButtonGroupHooks } from '../IconButtonGroup';

import {
	__DEFAULT_ICON_BUTTON_IS_ACTIVE__,
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_FOCUSED__,
	__DEFAULT_ICON_BUTTON_IS_LOADING__,
	__DEFAULT_ICON_BUTTON_IS_OUTLINED__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from './common/constants';
import { useIconButtonClasses, useIconButtonSizeConfig, useIconButtonStyles } from './common/hooks';
import { __KEYS_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	IconButtonContext as IconButtonContextType,
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonProps,
	IconButtonRef,
	IconButtonSize,
	IconButtonVariant
} from './common/types';

const { useIconButtonGroupContext } = iconButtonGroupHooks;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IconButtonContext = createContext<IconButtonContextType<any>>({
	size: __DEFAULT_ICON_BUTTON_SIZE__,
	variant: __DEFAULT_ICON_BUTTON_VARIANT__
});

const IconButton = forwardRef(function IconButton<Element extends IconButtonElement = IconButtonDefaultElement>(
	props: IconButtonProps<Element>,
	ref: IconButtonRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_ICON_BUTTON_GROUP_COLOR__,
		colorMode: __DEFAULT_ICON_BUTTON_GROUP_COLORMODE__,
		isCompact: __DEFAULT_ICON_BUTTON_GROUP_IS_COMPACT__ = __DEFAULT_ICON_BUTTON_IS_COMPACT__,
		isDisabled: __DEFAULT_ICON_BUTTON_GROUP_IS_DISABLED__ = __DEFAULT_ICON_BUTTON_IS_DISABLED__,
		isRound: __DEFAULT_ICON_BUTTON_GROUP_IS_ROUND__ = __DEFAULT_ICON_BUTTON_IS_ROUND__,
		size: __DEFAULT_ICON_BUTTON_GROUP_SIZE__ = __DEFAULT_ICON_BUTTON_SIZE__,
		variant: __DEFAULT_ICON_BUTTON_GROUP_VARIANT__ = __DEFAULT_ICON_BUTTON_VARIANT__
	} = useIconButtonGroupContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderSpinner,
		color = __DEFAULT_ICON_BUTTON_GROUP_COLOR__,
		colorMode = __DEFAULT_ICON_BUTTON_GROUP_COLORMODE__,
		isActive: active = __DEFAULT_ICON_BUTTON_IS_ACTIVE__,
		isCompact: c = __DEFAULT_ICON_BUTTON_GROUP_IS_COMPACT__,
		isDisabled: disabled = __DEFAULT_ICON_BUTTON_GROUP_IS_DISABLED__,
		isFocused: focused = __DEFAULT_ICON_BUTTON_IS_FOCUSED__,
		isLoading: loading = __DEFAULT_ICON_BUTTON_IS_LOADING__,
		isRound: round = __DEFAULT_ICON_BUTTON_GROUP_IS_ROUND__,
		isOutlined: outlined = __DEFAULT_ICON_BUTTON_IS_OUTLINED__,
		size: s = __DEFAULT_ICON_BUTTON_GROUP_SIZE__,
		variant: v = __DEFAULT_ICON_BUTTON_GROUP_VARIANT__,
		sx,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const isActive = useGetResponsiveValue<boolean>(active);
	const isCompact = useGetResponsiveValue<boolean>(c);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isFocusedProp = useGetResponsiveValue<boolean>(focused);
	const isLoading = useGetResponsiveValue<boolean>(loading);
	const isRound = useGetResponsiveValue<boolean>(round);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);

	const size = useGetResponsiveValue<IconButtonSize>(s);
	const variant = useGetResponsiveValue<IconButtonVariant>(v);

	const isFocused = useMemo<boolean>(() => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

	const config = useIconButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useIconButtonClasses<Element>({ variant });
	const styles = useIconButtonStyles<Element>({ size });

	const { focusProps } = useFocus({ onFocus: () => setIsFocusedHook.on(), onBlur: () => setIsFocusedHook.off() });

	return (
		<IconButtonContext.Provider value={{ color, colorMode, size, variant }}>
			<PushableOverlay<Element>
				{...focusProps}
				{...rest}
				ref={ref}
				className={classNames(__KEYS_ICON_BUTTON_CLASS__, classes, { [className]: !!className })}
				as='button'
				color={color}
				colorMode={colorMode}
				radius={config.radius}
				isActive={isActive || isLoading}
				isDisabled={isDisabled}
				isFocused={isFocused}
				isOutlined={isOutlined}
				variant={variant === 'icon' ? 'transparent' : variant}
				p={config.padding}
				sx={merge(styles, sx)}
			>
				<Center as='span' w='100%' h='100%'>
					{isLoading && renderSpinner ? renderSpinner({ color, colorMode }) : children}
				</Center>
			</PushableOverlay>
		</IconButtonContext.Provider>
	);
});

IconButton.displayName = 'IconButton';

export default IconButton;
