import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import { HStack } from '@components/Layout';

import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { __KEYS_ICON_BUTTON_GROUP_CLASS__ } from './common/keys';
import type {
	IconButtonGroupContext as IconButtonGroupContextType,
	IconButtonGroupProps,
	IconButtonGroupRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IconButtonGroupContext = createContext<IconButtonGroupContextType<any>>({
	isAttached: __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__
});

const IconButtonGroup = forwardRef(function IconButtonGroup<Element extends ElementType>(
	props: IconButtonGroupProps<Element>,
	ref: IconButtonGroupRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isAttached: a = __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isRound,
		spacing,
		size,
		variant,
		...rest
	} = props;

	const isAttached = useGetResponsiveValue<boolean>(a);

	return (
		<IconButtonGroupContext.Provider
			value={{ color, colorMode, isAttached, isCompact, isDisabled, isRound, size, variant }}
		>
			<HStack<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_ICON_BUTTON_GROUP_CLASS__, { [className]: !!className })}
				spacing={isAttached ? 0 : spacing}
			>
				{children}
			</HStack>
		</IconButtonGroupContext.Provider>
	);
});

IconButtonGroup.displayName = 'IconButtonGroup';

export default IconButtonGroup;
