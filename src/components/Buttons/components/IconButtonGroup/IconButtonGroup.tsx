import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_SPACING } from '@common/constants';

import {
	DEFAULT_ICON_BUTTON_IS_COMPACT,
	DEFAULT_ICON_BUTTON_IS_DISABLED,
	DEFAULT_ICON_BUTTON_IS_ROUND,
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_BUTTON_VARIANT
} from '@components/Buttons/components/IconButton/common/constants';
import type { StackProps } from '@components/Layout';
import { Stack } from '@components/Layout';
import { DEFAULT_STACK_DIRECTION } from '@components/Layout/components/Stacks/Stack/common/constants';

import { DEFAULT_ICON_BUTTON_GROUP_AS, DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED } from './common/constants';
import { useIconButtonGroupResponsiveValues } from './common/hooks';
import { KEYS_ICON_BUTTON_GROUP_CLASS } from './common/keys';
import type {
	IconButtonGroupContext as IconButtonGroupContextType,
	IconButtonGroupDefaultElement,
	IconButtonGroupElement,
	IconButtonGroupProps,
	IconButtonGroupRef
} from './common/types';

export const IconButtonGroupContext = createContext<IconButtonGroupContextType<IconButtonGroupDefaultElement>>({
	direction: DEFAULT_STACK_DIRECTION,
	isAttached: DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED
});

const IconButtonGroup = forwardRef(function IconButtonGroup<Element extends IconButtonGroupElement>(
	props: IconButtonGroupProps<Element>,
	ref: IconButtonGroupRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_ICON_BUTTON_GROUP_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		direction: directionProp = DEFAULT_STACK_DIRECTION,
		isAttached: isAttachedProp = DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED,
		isCompact: isCompactProp = DEFAULT_ICON_BUTTON_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_ICON_BUTTON_IS_DISABLED,
		isRound: isRoundProp = DEFAULT_ICON_BUTTON_IS_ROUND,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_ICON_BUTTON_VARIANT,
		...rest
	} = props;

	const { direction, isAttached, isCompact, isDisabled, isRound, spacing, size, variant } =
		useIconButtonGroupResponsiveValues<Element>({
			direction: directionProp,
			isAttached: isAttachedProp,
			isCompact: isCompactProp,
			isDisabled: isDisabledProp,
			isRound: isRoundProp,
			spacing: spacingProp,
			size: sizeProp,
			variant: variantProp
		});

	return (
		<IconButtonGroupContext.Provider
			value={{ color, colorMode, direction, isAttached, isCompact, isDisabled, isRound, size, variant }}
		>
			<Stack
				{...(rest as StackProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEYS_ICON_BUTTON_GROUP_CLASS, { [className]: !!className })}
				direction={direction}
				spacing={isAttached ? 0 : spacing}
			>
				{children}
			</Stack>
		</IconButtonGroupContext.Provider>
	);
});

// IconButtonGroup.displayName = 'IconButtonGroup';

export default IconButtonGroup;
