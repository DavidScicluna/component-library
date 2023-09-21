import type { ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

// import { IconButton as AriakitIconButton } from '@ariakit/react';
import classNames from 'classnames';
import { merge } from 'lodash-es';
import { useFocus } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';

import { Center } from '@components/Layout';
import { PushableOverlay } from '@components/Overlay/components/PushableOverlay';

import { useIconButtonGroupContext } from '../IconButtonGroup';

import {
	// __DEFAULT_ICON_BUTTON_CAN_CLICK_ON_ENTER__,
	// __DEFAULT_ICON_BUTTON_CAN_CLICK_ON_SPACE__,
	__DEFAULT_ICON_BUTTON_IS_ACTIVE__,
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	// __DEFAULT_ICON_BUTTON_IS_FOCUSABLE__,
	__DEFAULT_ICON_BUTTON_IS_LOADING__,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IconButtonContext = createContext<IconButtonContextType<any>>({
	size: __DEFAULT_ICON_BUTTON_SIZE__,
	variant: __DEFAULT_ICON_BUTTON_VARIANT__
});

const IconButton = forwardRef(function IconButton<Element extends IconButtonElement = IconButtonDefaultElement>(
	props: IconButtonProps<Element>,
	ref: IconButtonRef<Element>
): ReactElement {
	// const internalRef = useRef<IconButtonRef<Element>>();

	// const refs = useMergeRefs<IconButtonRef<Element>>(ref, internalRef);

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
		// canClickOnEnter = __DEFAULT_ICON_BUTTON_CAN_CLICK_ON_ENTER__,
		// canClickOnSpace = __DEFAULT_ICON_BUTTON_CAN_CLICK_ON_SPACE__,
		isActive = __DEFAULT_ICON_BUTTON_IS_ACTIVE__,
		isCompact = __DEFAULT_ICON_BUTTON_GROUP_IS_COMPACT__,
		isDisabled = __DEFAULT_ICON_BUTTON_GROUP_IS_DISABLED__,
		// isFocusable = __DEFAULT_ICON_BUTTON_IS_FOCUSABLE__,
		isLoading = __DEFAULT_ICON_BUTTON_IS_LOADING__,
		isRound = __DEFAULT_ICON_BUTTON_GROUP_IS_ROUND__,
		size: s = __DEFAULT_ICON_BUTTON_GROUP_SIZE__,
		variant: v = __DEFAULT_ICON_BUTTON_GROUP_VARIANT__,
		sx,
		...rest
	} = props;

	const [isFocused, setIsFocused] = useBoolean();

	const size = useGetResponsiveValue<IconButtonSize>(s);
	const variant = useGetResponsiveValue<IconButtonVariant>(v);

	const config = useIconButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useIconButtonClasses();
	const styles = useIconButtonStyles<Element>({ size });

	// const handleEnterKeyClick = debounce((): void => {
	// 	if (canClickOnEnter && isFocused && !isActive && !isDisabled) {
	// 		internalRef?.current?.click;
	// 	}
	// }, 500);

	// const handleSpaceKeyClick = debounce((): void => {
	// 	if (canClickOnSpace && isFocused && !isActive && !isDisabled) {
	// 		internalRef?.current?.click;
	// 	}
	// }, 500);

	// useKey(['Enter'], handleEnterKeyClick);
	// useKey(['Space'], handleSpaceKeyClick);

	const { focusProps } = useFocus({ onFocus: () => setIsFocused.on(), onBlur: () => setIsFocused.off() });

	return (
		<IconButtonContext.Provider value={{ color, colorMode, size, variant }}>
			{/* <AriakitIconButton
				render={
					<Box<Element>
						{...focusProps}
						{...rest}
						ref={refs}
						className={classNames(__KEYS_ICON_BUTTON_CLASS__, classes, { [className]: !!className })}
						tabIndex={0}
					/>
				}
				accessibleWhenDisabled={false}
				clickOnEnter={canClickOnEnter}
				clickOnSpace={canClickOnSpace}
				disabled={isDisabled}
				focusable={isFocusable}
			> */}
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
