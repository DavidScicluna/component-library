import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import {
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '@components/Buttons/components/Button/common/constants';
import { Stack } from '@components/Layout';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { useButtonGroupResponsiveValues } from './common/hooks';
import { __KEYS_BUTTON_GROUP_CLASS__ } from './common/keys';
import type { ButtonGroupContext as ButtonGroupContextType, ButtonGroupProps, ButtonGroupRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const ButtonGroupContext = createContext<ButtonGroupContextType>({
	isAttached: __DEFAULT_BUTTON_GROUP_IS_ATTACHED__
});

const ButtonGroup: PolymorphicComponentWithRef = forwardRef(function ButtonGroup<
	Element extends ElementType = PolymorphicDefaultElement
>(props: ButtonGroupProps<Element>, ref: ButtonGroupRef<Element>): ReactElement {
	const {
		children,
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
		useButtonGroupResponsiveValues({
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
			<Stack<Element>
				{...rest}
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

ButtonGroup.displayName = 'ButtonGroup';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <ButtonGroup<Element> {...props} />;
