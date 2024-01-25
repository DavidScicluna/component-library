import type { ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import {
	__DEFAULT_APP_COLOR__,
	__DEFAULT_APP_COLORMODE__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_METHOD__,
	__DEFAULT_SPACING__
} from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_TABS_ALIGN__,
	__DEFAULT_TABS_AS__,
	__DEFAULT_TABS_ID__,
	__DEFAULT_TABS_INDEX__,
	__DEFAULT_TABS_IS_DISABLED__,
	__DEFAULT_TABS_IS_FITTED__,
	__DEFAULT_TABS_ORIENTATION__,
	__DEFAULT_TABS_SIZE__
} from './common/constants';
import { useTabsResponsiveValues } from './common/hooks';
import { __KEYS_TABS_CLASS__ } from './common/keys';
import type {
	TabsContext as TabsContextType,
	TabsDefaultElement,
	TabsElement,
	TabsProps,
	TabsRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const TabsContext = createContext<TabsContextType<TabsDefaultElement>>({
	color: __DEFAULT_APP_COLOR__,
	colorMode: __DEFAULT_APP_COLORMODE__,
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

// TODO: Replace all ReactElement with JSX.Element
const Tabs = forwardRef(function Tabs<Element extends TabsElement>(
	props: TabsProps<Element>,
	ref: TabsRef<Element>
): ReactElement {
	const {
		children,
		id = __DEFAULT_TABS_ID__,
		as = __DEFAULT_TABS_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		align: alignProp = __DEFAULT_TABS_ALIGN__,
		index: indexProp = __DEFAULT_TABS_INDEX__,
		isDisabled: isDisabledProp = __DEFAULT_TABS_IS_DISABLED__,
		isFitted: isFittedProp = __DEFAULT_TABS_IS_FITTED__,
		onChange = __DEFAULT_METHOD__,
		orientation: orientationProp = __DEFAULT_TABS_ORIENTATION__,
		size: sizeProp = __DEFAULT_TABS_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		...rest
	} = props;

	const { align, index, isDisabled, isFitted, orientation, size, spacing } = useTabsResponsiveValues<Element>({
		align: alignProp,
		index: indexProp,
		isDisabled: isDisabledProp,
		isFitted: isFittedProp,
		orientation: orientationProp,
		size: sizeProp,
		spacing: spacingProp
	});

	return (
		<TabsContext.Provider
			value={{ color, colorMode, align, id, index, isDisabled, isFitted, onChange, orientation, size, spacing }}
		>
			<Box
				{...(rest as BoxProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_TABS_CLASS__, { [className]: !!className })}
			>
				{children}
			</Box>
		</TabsContext.Provider>
	);
});

// Tabs.displayName = 'Tabs';

export default Tabs;
