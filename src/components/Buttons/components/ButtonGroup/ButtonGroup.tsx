import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import { HStack } from '@components/Layout';

import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { __KEYS_BUTTON_GROUP_CLASS__ } from './common/keys';
import type { ButtonGroupContext as ButtonGroupContextType, ButtonGroupProps, ButtonGroupRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ButtonGroupContext = createContext<ButtonGroupContextType<any>>({
	isAttached: __DEFAULT_BUTTON_GROUP_IS_ATTACHED__
});

const ButtonGroup = forwardRef(function ButtonGroup<Element extends ElementType>(
	props: ButtonGroupProps<Element>,
	ref: ButtonGroupRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
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

	const isAttached = useGetResponsiveValue<boolean>(a);

	return (
		<ButtonGroupContext.Provider
			value={{ color, colorMode, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant }}
		>
			<HStack<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_BUTTON_GROUP_CLASS__, { [className]: !!className })}
				w={isFullWidth ? '100%' : undefined}
				spacing={isAttached ? 0 : spacing}
			>
				{children}
			</HStack>
		</ButtonGroupContext.Provider>
	);
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
