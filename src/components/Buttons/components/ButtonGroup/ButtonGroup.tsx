import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import {
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '@components/Buttons/components/Button/common/constants';
import type { StackProps } from '@components/Layout';
import { Stack } from '@components/Layout';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { __DEFAULT_BUTTON_GROUP_AS__, __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { useButtonGroupResponsiveValues } from './common/hooks';
import { __KEYS_BUTTON_GROUP_CLASS__ } from './common/keys';
import type {
	ButtonGroupContext as ButtonGroupContextType,
	ButtonGroupDefaultElement,
	ButtonGroupElement,
	ButtonGroupProps,
	ButtonGroupRef
} from './common/types';

export const ButtonGroupContext = createContext<ButtonGroupContextType<ButtonGroupDefaultElement>>({
	isAttached: __DEFAULT_BUTTON_GROUP_IS_ATTACHED__
});

const ButtonGroup = forwardRef(function ButtonGroup<Element extends ButtonGroupElement>(
	props: ButtonGroupProps<Element>,
	ref: ButtonGroupRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_BUTTON_GROUP_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		isAttached: isAttachedProp = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		isCompact: isCompactProp = __DEFAULT_BUTTON_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_BUTTON_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_BUTTON_IS_ROUND__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_BUTTON_VARIANT__,
		...rest
	} = props;

	const { direction, isAttached, isCompact, isDisabled, isFullWidth, isRound, spacing, size, variant } =
		useButtonGroupResponsiveValues<Element>({
			direction: directionProp,
			isAttached: isAttachedProp,
			isCompact: isCompactProp,
			isDisabled: isDisabledProp,
			isFullWidth: isFullWidthProp,
			isRound: isRoundProp,
			spacing: spacingProp,
			size: sizeProp,
			variant: variantProp
		});

	return (
		<ButtonGroupContext.Provider
			value={{
				color,
				colorMode,
				direction,
				isAttached,
				isCompact,
				isDisabled,
				isFullWidth,
				isRound,
				size,
				variant
			}}
		>
			<Stack
				{...(rest as StackProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_BUTTON_GROUP_CLASS__, { [className]: !!className })}
				w={isFullWidth ? '100%' : undefined}
				direction={direction}
				spacing={isAttached ? 0 : spacing}
			>
				{children}
			</Stack>
		</ButtonGroupContext.Provider>
	);
});

// ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
