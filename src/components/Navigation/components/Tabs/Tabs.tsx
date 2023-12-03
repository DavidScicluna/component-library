import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicComponentWithRef, PolymorphicDefaultElement, ThemeSpacing } from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_TABS_ALIGN__,
	__DEFAULT_TABS_ID__,
	__DEFAULT_TABS_INDEX__,
	__DEFAULT_TABS_IS_DISABLED__,
	__DEFAULT_TABS_IS_FITTED__,
	__DEFAULT_TABS_ORIENTATION__,
	__DEFAULT_TABS_SIZE__
} from './common/constants';
import { __KEYS_TABS_CLASS__ } from './common/keys';
import type {
	TabsAlign,
	TabsContext as TabsContextType,
	TabsOrientation,
	TabsProps,
	TabsRef,
	TabsSize
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TabsContext = createContext<TabsContextType<any>>({
	align: __DEFAULT_TABS_ALIGN__,
	id: __DEFAULT_TABS_ID__,
	index: __DEFAULT_TABS_INDEX__,
	isDisabled: __DEFAULT_TABS_IS_DISABLED__,
	isFitted: __DEFAULT_TABS_IS_FITTED__,
	onChange: __DEFAULT_METHOD__,
	orientation: __DEFAULT_TABS_ORIENTATION__,
	size: __DEFAULT_TABS_SIZE__,
	spacing: __DEFAULT_SPACING__
});

const Tabs: PolymorphicComponentWithRef = forwardRef(function Tabs<
	Element extends ElementType = PolymorphicDefaultElement
>(props: TabsProps<Element>, ref: TabsRef<Element>): ReactElement {
	const {
		children,
		id = __DEFAULT_TABS_ID__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		align: a = __DEFAULT_TABS_ALIGN__,
		index: ind = __DEFAULT_TABS_INDEX__,
		isDisabled: disabled = __DEFAULT_TABS_IS_DISABLED__,
		isFitted: fitted = __DEFAULT_TABS_IS_FITTED__,
		onChange = __DEFAULT_METHOD__,
		orientation: o = __DEFAULT_TABS_ORIENTATION__,
		size: si = __DEFAULT_TABS_SIZE__,
		spacing: sp = __DEFAULT_SPACING__,
		...rest
	} = props;

	const align = useGetResponsiveValue<TabsAlign>(a);

	const index = useGetResponsiveValue<number>(ind);

	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isFitted = useGetResponsiveValue<boolean>(fitted);

	const orientation = useGetResponsiveValue<TabsOrientation>(o);
	const size = useGetResponsiveValue<TabsSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	return (
		<TabsContext.Provider
			value={{ color, colorMode, align, id, index, isDisabled, isFitted, onChange, orientation, size, spacing }}
		>
			<Box<Element> {...rest} ref={ref} className={classNames(__KEYS_TABS_CLASS__, { [className]: !!className })}>
				{children}
			</Box>
		</TabsContext.Provider>
	);
});

Tabs.displayName = 'Tabs';

export default Tabs;
