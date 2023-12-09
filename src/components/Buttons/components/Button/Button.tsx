import type { ReactElement } from 'react';
import { createContext, forwardRef, useMemo } from 'react';

import { compact } from 'lodash-es';
import { useFocus } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Center, Grid, GridItem } from '@components/Layout';
import { PushableOverlay } from '@components/Overlay';

import { useButtonGroupContext } from '../ButtonGroup/common/hooks';

import {
	__DEFAULT_BUTTON_IS_ACTIVE__,
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FOCUSED__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_LOADING__,
	__DEFAULT_BUTTON_IS_OUTLINED__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from './common/constants';
import { useButtonClasses, useButtonResponsiveValues, useButtonSizeConfig } from './common/hooks';
import { __KEYS_BUTTON_CLASS__ } from './common/keys';
import type {
	ButtonContext as ButtonContextType,
	ButtonDefaultElement,
	ButtonElement,
	ButtonProps,
	ButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const ButtonContext = createContext<ButtonContextType>({
	size: __DEFAULT_BUTTON_SIZE__,
	variant: __DEFAULT_BUTTON_VARIANT__
});

const Button: PolymorphicComponentWithRef = forwardRef(function Button<
	Element extends ButtonElement = ButtonDefaultElement
>(props: ButtonProps<Element>, ref: ButtonRef<Element>): ReactElement {
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		color: __DEFAULT_BUTTON_GROUP_COLOR__,
		colorMode: __DEFAULT_BUTTON_GROUP_COLORMODE__,
		isCompact: __DEFAULT_BUTTON_GROUP_IS_COMPACT__ = __DEFAULT_BUTTON_IS_COMPACT__,
		isDisabled: __DEFAULT_BUTTON_GROUP_IS_DISABLED__ = __DEFAULT_BUTTON_IS_DISABLED__,
		isFullWidth: __DEFAULT_BUTTON_GROUP_IS_FULLWIDTH__ = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isRound: __DEFAULT_BUTTON_GROUP_IS_ROUND__ = __DEFAULT_BUTTON_IS_ROUND__,
		size: __DEFAULT_BUTTON_GROUP_SIZE__ = __DEFAULT_BUTTON_SIZE__,
		variant: __DEFAULT_BUTTON_GROUP_VARIANT__ = __DEFAULT_BUTTON_VARIANT__
	} = useButtonGroupContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderSpinner,
		color = __DEFAULT_BUTTON_GROUP_COLOR__,
		colorMode = __DEFAULT_BUTTON_GROUP_COLORMODE__,
		isActive: isActiveProp = __DEFAULT_BUTTON_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_BUTTON_GROUP_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_BUTTON_GROUP_IS_DISABLED__,
		isFocused: isFocusedProp = __DEFAULT_BUTTON_IS_FOCUSED__,
		isFullWidth: isFullWidthProp = __DEFAULT_BUTTON_GROUP_IS_FULLWIDTH__,
		isLoading: isLoadingProp = __DEFAULT_BUTTON_IS_LOADING__,
		isRound: isRoundProp = __DEFAULT_BUTTON_GROUP_IS_ROUND__,
		isOutlined: isOutlinedProp = __DEFAULT_BUTTON_IS_OUTLINED__,
		size: sizeProp = __DEFAULT_BUTTON_GROUP_SIZE__,
		variant: variantProp = __DEFAULT_BUTTON_GROUP_VARIANT__,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isActive,
		isCompact,
		isDisabled,
		isFocused: focused,
		isFullWidth,
		isLoading,
		isRound,
		isOutlined,
		size,
		variant
	} = useButtonResponsiveValues({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFocused: isFocusedProp,
		isFullWidth: isFullWidthProp,
		isLoading: isLoadingProp,
		isRound: isRoundProp,
		isOutlined: isOutlinedProp,
		size: sizeProp,
		variant: variantProp
	});

	const isFocused = useMemo<boolean>(() => focused || isFocusedHook, [focused, isFocusedHook]);

	const config = useButtonSizeConfig({ isCompact, isRound, size, variant });

	const classes = useButtonClasses({ isCompact, isFullWidth, isRound, size, variant });

	const { focusProps } = useFocus({ onFocus: () => setIsFocusedHook.on(), onBlur: () => setIsFocusedHook.off() });

	return (
		<ButtonContext.Provider value={{ color, colorMode, size, variant }}>
			<PushableOverlay<Element>
				{...focusProps}
				{...rest}
				ref={ref}
				className={classNames(__KEYS_BUTTON_CLASS__, classes, { [className]: !!className })}
				as='button'
				color={color}
				colorMode={colorMode}
				radius={config.radius}
				isActive={isActive || isLoading}
				isDisabled={isDisabled}
				isFocused={isFocused}
				isOutlined={isOutlined}
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
						<GridItem alignSelf='center' justifySelf='center'>
							{renderSpinner({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : renderLeft ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : null}

					{children ? (
						<GridItem>
							<Center ref={childrenRef} as='span' w='100%' h='100%'>
								{children}
							</Center>
						</GridItem>
					) : null}

					{isLoading && renderLeft && renderSpinner ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderSpinner({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : renderRight ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : null}
				</Grid>
			</PushableOverlay>
		</ButtonContext.Provider>
	);
});

Button.displayName = 'Button';

export default <Element extends ButtonElement = ButtonDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Button<Element> {...props} />;
