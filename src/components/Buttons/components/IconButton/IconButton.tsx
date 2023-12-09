import type { ReactElement } from 'react';
import { createContext, forwardRef, useMemo } from 'react';

import { merge } from 'lodash-es';
import { useFocus } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Center } from '@components/Layout';
import { PushableOverlay } from '@components/Overlay';

import { useIconButtonGroupContext } from '../IconButtonGroup/common/hooks';

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
import {
	useIconButtonClasses,
	useIconButtonResponsiveValues,
	useIconButtonSizeConfig,
	useIconButtonStyles
} from './common/hooks';
import { __KEYS_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	IconButtonContext as IconButtonContextType,
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonProps,
	IconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IconButtonContext = createContext<IconButtonContextType>({
	size: __DEFAULT_ICON_BUTTON_SIZE__,
	variant: __DEFAULT_ICON_BUTTON_VARIANT__
});

const IconButton: PolymorphicComponentWithRef = forwardRef(function IconButton<
	Element extends IconButtonElement = IconButtonDefaultElement
>(props: IconButtonProps<Element>, ref: IconButtonRef<Element>): ReactElement {
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
		isActive: isActiveProp = __DEFAULT_ICON_BUTTON_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_ICON_BUTTON_GROUP_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_ICON_BUTTON_GROUP_IS_DISABLED__,
		isFocused: isFocusedProp = __DEFAULT_ICON_BUTTON_IS_FOCUSED__,
		isLoading: isLoadingProp = __DEFAULT_ICON_BUTTON_IS_LOADING__,
		isRound: isRoundProp = __DEFAULT_ICON_BUTTON_GROUP_IS_ROUND__,
		isOutlined: isOutlinedProp = __DEFAULT_ICON_BUTTON_IS_OUTLINED__,
		size: sizeProp = __DEFAULT_ICON_BUTTON_GROUP_SIZE__,
		variant: variantProp = __DEFAULT_ICON_BUTTON_GROUP_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isActive,
		isCompact,
		isDisabled,
		isFocused: focused,
		isLoading,
		isRound,
		isOutlined,
		size,
		variant
	} = useIconButtonResponsiveValues({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFocused: isFocusedProp,
		isLoading: isLoadingProp,
		isRound: isRoundProp,
		isOutlined: isOutlinedProp,
		size: sizeProp,
		variant: variantProp
	});

	const isFocused = useMemo<boolean>(() => focused || isFocusedHook, [focused, isFocusedHook]);

	const config = useIconButtonSizeConfig({ isCompact, isRound, size, variant });

	const classes = useIconButtonClasses({ variant });
	const styles = useIconButtonStyles({ size });

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

export default <Element extends IconButtonElement = IconButtonDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <IconButton<Element> {...props} />;
