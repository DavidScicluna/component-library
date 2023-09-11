import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

// import { constants } from '@components/Buttons/Button';
import { HStack } from '@components/Layout';

import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { __KEYS_BUTTON_GROUP_CLASS__ } from './common/keys';
import type { ButtonGroupContext as ButtonGroupContextType, ButtonGroupProps, ButtonGroupRef } from './common/types';

// const {
// 	__DEFAULT_BUTTON_IS_COMPACT__,
// 	__DEFAULT_BUTTON_IS_DISABLED__,
// 	__DEFAULT_BUTTON_IS_FULLWIDTH__,
// 	__DEFAULT_BUTTON_IS_ROUND__,
// 	__DEFAULT_BUTTON_SIZE__,
// 	__DEFAULT_BUTTON_VARIANT__
// } = constants;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ButtonGroupContext = createContext<ButtonGroupContextType<any>>({
	isAttached: __DEFAULT_BUTTON_GROUP_IS_ATTACHED__
	// isCompact: __DEFAULT_BUTTON_IS_COMPACT__,
	// isDisabled: __DEFAULT_BUTTON_IS_DISABLED__,
	// isFullWidth: __DEFAULT_BUTTON_IS_FULLWIDTH__,
	// isRound: __DEFAULT_BUTTON_IS_ROUND__,
	// size: __DEFAULT_BUTTON_SIZE__,
	// variant: __DEFAULT_BUTTON_VARIANT__
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
		isAttached = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		// isCompact = __DEFAULT_BUTTON_IS_COMPACT__,
		isCompact,
		// isDisabled = __DEFAULT_BUTTON_IS_DISABLED__,
		isDisabled,
		// isFullWidth = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isFullWidth,
		// isRound = __DEFAULT_BUTTON_IS_ROUND__,
		isRound,
		spacing,
		// size = __DEFAULT_BUTTON_SIZE__,
		size,
		// variant = __DEFAULT_BUTTON_VARIANT__,
		variant,
		...rest
	} = props;

	return (
		<ButtonGroupContext.Provider
			value={{ color, colorMode, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant }}
		>
			<HStack<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_BUTTON_GROUP_CLASS__, { [className]: !!className })}
				w={isFullWidth ? '100%' : 'auto'}
				spacing={isAttached ? 0 : spacing}
			>
				{children}
			</HStack>
		</ButtonGroupContext.Provider>
	);
});

export default ButtonGroup;
