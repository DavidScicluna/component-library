import type { ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

// import { Button as AriakitButton } from '@ariakit/react';
import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useFocus } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';

import { Center, Grid, GridItem } from '@components/Layout';
import { PushableOverlay } from '@components/Overlay/components/PushableOverlay';

import {
	// __DEFAULT_BUTTON_CAN_CLICK_ON_ENTER__,
	// __DEFAULT_BUTTON_CAN_CLICK_ON_SPACE__,
	__DEFAULT_BUTTON_IS_ACTIVE__,
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	// __DEFAULT_BUTTON_IS_FOCUSABLE__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_LOADING__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from './common/constants';
import { useButtonClasses, useButtonSizeConfig } from './common/hooks';
import type {
	ButtonContext as ButtonContextType,
	ButtonDefaultElement,
	ButtonElement,
	ButtonProps,
	ButtonRef,
	ButtonSize,
	ButtonVariant
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ButtonContext = createContext<ButtonContextType<any>>({
	size: __DEFAULT_BUTTON_SIZE__,
	variant: __DEFAULT_BUTTON_VARIANT__
});

const Button = forwardRef(function Button<Element extends ButtonElement = ButtonDefaultElement>(
	props: ButtonProps<Element>,
	ref: ButtonRef<Element>
): ReactElement {
	// const internalRef = useRef<ButtonRef<Element>>();

	// const refs = useMergeRefs<ButtonRef<Element>>(ref, internalRef);

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderSpinner,
		color,
		colorMode,
		// canClickOnEnter = __DEFAULT_BUTTON_CAN_CLICK_ON_ENTER__,
		// canClickOnSpace = __DEFAULT_BUTTON_CAN_CLICK_ON_SPACE__,
		isActive = __DEFAULT_BUTTON_IS_ACTIVE__,
		isCompact = __DEFAULT_BUTTON_IS_COMPACT__,
		isDisabled = __DEFAULT_BUTTON_IS_DISABLED__,
		// isFocusable = __DEFAULT_BUTTON_IS_FOCUSABLE__,
		isFullWidth = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isLoading = __DEFAULT_BUTTON_IS_LOADING__,
		isRound = __DEFAULT_BUTTON_IS_ROUND__,
		size: s = __DEFAULT_BUTTON_SIZE__,
		variant: v = __DEFAULT_BUTTON_VARIANT__,
		...rest
	} = props;

	const [isFocused, setIsFocused] = useBoolean();

	const size = useGetResponsiveValue<ButtonSize>(s);
	const variant = useGetResponsiveValue<ButtonVariant>(v);

	const config = useButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useButtonClasses<Element>({ isCompact, isFullWidth, isRound, size, variant });

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
		<ButtonContext.Provider value={{ color, colorMode, size, variant }}>
			{/* <AriakitButton
				render={
					<Box<Element>
						{...focusProps}
						{...rest}
						ref={refs}
						className={classNames(`${__DEFAULT_CLASS_PREFIX__}-button`, classes, {
							[className]: !!className
						})}
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
				className={classNames(`${__DEFAULT_CLASS_PREFIX__}-button`, classes, {
					[className]: !!className
				})}
				as='button'
				color={color}
				colorMode={colorMode}
				radius={config.radius}
				isActive={isActive || isLoading}
				isDisabled={isDisabled}
				isFocused={isFocused}
				variant={variant === 'text' ? 'transparent' : variant}
				px={config.padding.x}
				py={config.padding.y}
			>
				<Grid
					w='100%'
					h='100%'
					templateColumns={compact([
						(isLoading && !renderLeft) || renderLeft ? 'auto' : null,
						'auto',
						(isLoading && renderLeft) || renderRight ? 'auto' : null
					]).join(' ')}
					templateRows={1}
					alignItems={isFullWidth ? 'center' : 'stretch'}
					alignContent={isFullWidth ? 'center' : 'stretch'}
					justifyItems={isFullWidth ? 'center' : 'stretch'}
					justifyContent={isFullWidth ? 'center' : 'stretch'}
					spacing={config.spacing}
				>
					{isLoading && !renderLeft && renderSpinner ? (
						<GridItem>{renderSpinner({ color, colorMode, w: childrenWidth, h: childrenHeight })}</GridItem>
					) : renderLeft ? (
						<GridItem>{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}</GridItem>
					) : null}

					{children ? (
						<GridItem>
							<Center ref={childrenRef} as='span' w='100%' h='100%'>
								{children}
							</Center>
						</GridItem>
					) : null}

					{isLoading && renderLeft && renderSpinner ? (
						<GridItem>{renderSpinner({ color, colorMode, w: childrenWidth, h: childrenHeight })}</GridItem>
					) : renderRight ? (
						<GridItem>{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}</GridItem>
					) : null}
				</Grid>
			</PushableOverlay>
		</ButtonContext.Provider>
	);
});

export default Button;
