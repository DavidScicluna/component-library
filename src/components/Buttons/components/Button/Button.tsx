import { createContext, forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef, useFocus } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import type { CenterRef } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';
import { PushableOverlay } from '@components/Overlay';

import { useButtonGroupContext } from '../ButtonGroup/common/hooks';

import {
	DEFAULT_BUTTON_AS,
	DEFAULT_BUTTON_IS_ACTIVE,
	DEFAULT_BUTTON_IS_COMPACT,
	DEFAULT_BUTTON_IS_DISABLED,
	DEFAULT_BUTTON_IS_FOCUSED,
	DEFAULT_BUTTON_IS_FULLWIDTH,
	DEFAULT_BUTTON_IS_LOADING,
	DEFAULT_BUTTON_IS_OUTLINED,
	DEFAULT_BUTTON_IS_ROUND,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT
} from './common/constants';
import { useButtonClasses, useButtonResponsiveValues, useButtonSizeConfig } from './common/hooks';
import { KEYS_BUTTON_CLASS } from './common/keys';
import type {
	ButtonContext as ButtonContextType,
	ButtonDefaultElement,
	ButtonElement,
	ButtonProps,
	ButtonRef
} from './common/types';

export const ButtonContext = createContext<ButtonContextType<ButtonDefaultElement>>({
	size: DEFAULT_BUTTON_SIZE,
	variant: DEFAULT_BUTTON_VARIANT
});

const Button = forwardRef(function Button<Element extends ButtonElement>(
	props: ButtonProps<Element>,
	ref: ButtonRef<Element>
): JSX.Element {
	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: DEFAULT_BUTTON_GROUP_COLOR,
		colorMode: DEFAULT_BUTTON_GROUP_COLORMODE,
		isCompact: DEFAULT_BUTTON_GROUP_IS_COMPACT = DEFAULT_BUTTON_IS_COMPACT,
		isDisabled: DEFAULT_BUTTON_GROUP_IS_DISABLED = DEFAULT_BUTTON_IS_DISABLED,
		isFullWidth: DEFAULT_BUTTON_GROUP_IS_FULLWIDTH = DEFAULT_BUTTON_IS_FULLWIDTH,
		isRound: DEFAULT_BUTTON_GROUP_IS_ROUND = DEFAULT_BUTTON_IS_ROUND,
		size: DEFAULT_BUTTON_GROUP_SIZE = DEFAULT_BUTTON_SIZE,
		variant: DEFAULT_BUTTON_GROUP_VARIANT = DEFAULT_BUTTON_VARIANT
	} = useButtonGroupContext();

	const {
		children,
		as = DEFAULT_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		renderSpinner,
		color = DEFAULT_BUTTON_GROUP_COLOR,
		colorMode = DEFAULT_BUTTON_GROUP_COLORMODE,
		isActive: isActiveProp = DEFAULT_BUTTON_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_BUTTON_GROUP_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_BUTTON_GROUP_IS_DISABLED,
		isFocused: isFocusedProp = DEFAULT_BUTTON_IS_FOCUSED,
		isFullWidth: isFullWidthProp = DEFAULT_BUTTON_GROUP_IS_FULLWIDTH,
		isLoading: isLoadingProp = DEFAULT_BUTTON_IS_LOADING,
		isRound: isRoundProp = DEFAULT_BUTTON_GROUP_IS_ROUND,
		isOutlined: isOutlinedProp = DEFAULT_BUTTON_IS_OUTLINED,
		size: sizeProp = DEFAULT_BUTTON_GROUP_SIZE,
		variant: variantProp = DEFAULT_BUTTON_GROUP_VARIANT,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isActive = DEFAULT_BUTTON_IS_ACTIVE,
		isCompact = DEFAULT_BUTTON_GROUP_IS_COMPACT,
		isDisabled = DEFAULT_BUTTON_GROUP_IS_DISABLED,
		isFocused: focused = DEFAULT_BUTTON_IS_FOCUSED,
		isFullWidth = DEFAULT_BUTTON_GROUP_IS_FULLWIDTH,
		isLoading = DEFAULT_BUTTON_IS_LOADING,
		isRound = DEFAULT_BUTTON_GROUP_IS_ROUND,
		isOutlined = DEFAULT_BUTTON_IS_OUTLINED,
		size = DEFAULT_BUTTON_GROUP_SIZE,
		variant = DEFAULT_BUTTON_GROUP_VARIANT
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
			<PushableOverlay
				{...focusProps}
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEYS_BUTTON_CLASS, classes, { [className]: !!className })}
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
							<Center
								ref={childrenRef as CenterRef<PolymorphicDefaultElement>}
								as='span'
								w='100%'
								h='100%'
							>
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

// Button.displayName = 'Button';

export default Button;
