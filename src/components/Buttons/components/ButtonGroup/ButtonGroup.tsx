import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_SPACING } from '@common/constants';

import {
	DEFAULT_BUTTON_IS_COMPACT,
	DEFAULT_BUTTON_IS_DISABLED,
	DEFAULT_BUTTON_IS_FULLWIDTH,
	DEFAULT_BUTTON_IS_ROUND,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT
} from '@components/Buttons/components/Button/common/constants';
import { Stack } from '@components/Layout';
import { DEFAULT_STACK_DIRECTION } from '@components/Layout/components/Stacks/Stack/common/constants';

import { DEFAULT_BUTTON_GROUP_AS, DEFAULT_BUTTON_GROUP_IS_ATTACHED } from './common/constants';
import { useButtonGroupResponsiveValues } from './common/hooks';
import { KEYS_BUTTON_GROUP_CLASS } from './common/keys';
import type {
	ButtonGroupContext as ButtonGroupContextType,
	ButtonGroupDefaultElement,
	ButtonGroupElement,
	ButtonGroupProps,
	ButtonGroupRef
} from './common/types';

export const ButtonGroupContext = createContext<ButtonGroupContextType<ButtonGroupDefaultElement>>({
	isAttached: DEFAULT_BUTTON_GROUP_IS_ATTACHED
});

const ButtonGroup = forwardRef(function ButtonGroup<Element extends ButtonGroupElement>(
	props: ButtonGroupProps<Element>,
	ref: ButtonGroupRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_BUTTON_GROUP_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		direction: directionProp = DEFAULT_STACK_DIRECTION,
		isAttached: isAttachedProp = DEFAULT_BUTTON_GROUP_IS_ATTACHED,
		isCompact: isCompactProp = DEFAULT_BUTTON_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_BUTTON_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_BUTTON_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_BUTTON_IS_ROUND,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_BUTTON_SIZE,
		variant: variantProp = DEFAULT_BUTTON_VARIANT,
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
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEYS_BUTTON_GROUP_CLASS, { [className]: !!className })}
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
