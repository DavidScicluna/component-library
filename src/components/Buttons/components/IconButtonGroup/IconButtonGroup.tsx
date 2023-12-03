import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { FlexDirectionClass, PolymorphicComponentWithRef, PolymorphicDefaultElement } from '@common/types';

import { Stack } from '@components/Layout';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { __KEYS_ICON_BUTTON_GROUP_CLASS__ } from './common/keys';
import type {
	IconButtonGroupContext as IconButtonGroupContextType,
	IconButtonGroupProps,
	IconButtonGroupRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IconButtonGroupContext = createContext<IconButtonGroupContextType<any>>({
	direction: __DEFAULT_STACK_DIRECTION__,
	isAttached: __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__
});

const IconButtonGroup: PolymorphicComponentWithRef = forwardRef(function IconButtonGroup<
	Element extends ElementType = PolymorphicDefaultElement
>(props: IconButtonGroupProps<Element>, ref: IconButtonGroupRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		direction: d = __DEFAULT_STACK_DIRECTION__,
		isAttached: a = __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isRound,
		spacing,
		size,
		variant,
		...rest
	} = props;

	const direction = useGetResponsiveValue<FlexDirectionClass>(d);
	const isAttached = useGetResponsiveValue<boolean>(a);

	return (
		<IconButtonGroupContext.Provider
			value={{ color, colorMode, direction, isAttached, isCompact, isDisabled, isRound, size, variant }}
		>
			<Stack<Element>
				{...rest}
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

IconButtonGroup.displayName = 'IconButtonGroup';

export default IconButtonGroup;
