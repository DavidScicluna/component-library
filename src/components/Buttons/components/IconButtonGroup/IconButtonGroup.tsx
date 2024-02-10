import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import {
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from '@components/Buttons/components/IconButton/common/constants';
import type { StackProps } from '@components/Layout';
import { Stack } from '@components/Layout';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { __DEFAULT_ICON_BUTTON_GROUP_AS__, __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { useIconButtonGroupResponsiveValues } from './common/hooks';
import { __KEYS_ICON_BUTTON_GROUP_CLASS__ } from './common/keys';
import type {
	IconButtonGroupContext as IconButtonGroupContextType,
	IconButtonGroupDefaultElement,
	IconButtonGroupElement,
	IconButtonGroupProps,
	IconButtonGroupRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const IconButtonGroupContext = createContext<IconButtonGroupContextType<IconButtonGroupDefaultElement>>({
	direction: __DEFAULT_STACK_DIRECTION__,
	isAttached: __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__
});

const IconButtonGroup = forwardRef(function IconButtonGroup<Element extends IconButtonGroupElement>(
	props: IconButtonGroupProps<Element>,
	ref: IconButtonGroupRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_ICON_BUTTON_GROUP_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		isAttached: isAttachedProp = __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
		isCompact: isCompactProp = __DEFAULT_ICON_BUTTON_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_ICON_BUTTON_IS_DISABLED__,
		isRound: isRoundProp = __DEFAULT_ICON_BUTTON_IS_ROUND__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_BUTTON_VARIANT__,
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
				className={classNames(__KEYS_ICON_BUTTON_GROUP_CLASS__, { [className]: !!className })}
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
