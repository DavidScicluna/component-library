import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_DUMMY_TABS_ALIGN__,
	__DEFAULT_DUMMY_TABS_ID__,
	__DEFAULT_DUMMY_TABS_INDEX__,
	__DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	__DEFAULT_DUMMY_TABS_IS_FITTED__,
	__DEFAULT_DUMMY_TABS_ORIENTATION__,
	__DEFAULT_DUMMY_TABS_SIZE__
} from './common/constants';
import { __KEYS_DUMMY_TABS_CLASS__ } from './common/keys';
import type {
	DummyTabsAlign,
	DummyTabsContext as DummyTabsContextType,
	DummyTabsOrientation,
	DummyTabsProps,
	DummyTabsRef,
	DummyTabsSize
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DummyTabsContext = createContext<DummyTabsContextType<any>>({
	align: __DEFAULT_DUMMY_TABS_ALIGN__,
	id: __DEFAULT_DUMMY_TABS_ID__,
	index: __DEFAULT_DUMMY_TABS_INDEX__,
	isAnimated: __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	isFitted: __DEFAULT_DUMMY_TABS_IS_FITTED__,
	orientation: __DEFAULT_DUMMY_TABS_ORIENTATION__,
	size: __DEFAULT_DUMMY_TABS_SIZE__,
	spacing: __DEFAULT_SPACING__
});

const DummyTabs = forwardRef(function DummyTabs<Element extends ElementType>(
	props: DummyTabsProps<Element>,
	ref: DummyTabsRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		align: a = __DEFAULT_DUMMY_TABS_ALIGN__,
		id: i = __DEFAULT_DUMMY_TABS_ID__,
		index: ind = __DEFAULT_DUMMY_TABS_INDEX__,
		isAnimated: animated = __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
		isFitted: fitted = __DEFAULT_DUMMY_TABS_IS_FITTED__,
		orientation: o = __DEFAULT_DUMMY_TABS_ORIENTATION__,
		size: si = __DEFAULT_DUMMY_TABS_SIZE__,
		spacing: sp = __DEFAULT_SPACING__,
		...rest
	} = props;

	const align = useGetResponsiveValue<DummyTabsAlign>(a);

	const id = useGetResponsiveValue<string>(i);
	const index = useGetResponsiveValue<number>(ind);

	const isAnimated = useGetResponsiveValue<boolean>(animated);
	const isFitted = useGetResponsiveValue<boolean>(fitted);

	const orientation = useGetResponsiveValue<DummyTabsOrientation>(o);
	const size = useGetResponsiveValue<DummyTabsSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	return (
		<DummyTabsContext.Provider
			value={{ color, colorMode, align, id, index, isAnimated, isFitted, orientation, size, spacing }}
		>
			<Box<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_DUMMY_TABS_CLASS__, { [className]: !!className })}
			>
				{children}
			</Box>
		</DummyTabsContext.Provider>
	);
});

DummyTabs.displayName = 'DummyTabs';

export default DummyTabs;
