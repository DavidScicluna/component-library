import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { FlexDirectionClass, PolymorphicComponentWithRef, PolymorphicDefaultElement } from '@common/types';

import { Stack } from '@components/Layout';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { __KEYS_BUTTON_GROUP_CLASS__ } from './common/keys';
import type { ButtonGroupContext as ButtonGroupContextType, ButtonGroupProps, ButtonGroupRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ButtonGroupContext = createContext<ButtonGroupContextType<any>>({
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
		direction: d = __DEFAULT_STACK_DIRECTION__,
		isAttached: a = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isFullWidth,
		isRound,
		spacing,
		size,
		variant,
		...rest
	} = props;

	const direction = useGetResponsiveValue<FlexDirectionClass>(d);
	const isAttached = useGetResponsiveValue<boolean>(a);

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

export default ButtonGroup;
