import type { ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import {
	__DEFAULT_APP_COLOR__,
	__DEFAULT_APP_COLORMODE__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_SPACING__
} from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_DUMMY_TABS_ALIGN__,
	__DEFAULT_DUMMY_TABS_AS__,
	__DEFAULT_DUMMY_TABS_ID__,
	__DEFAULT_DUMMY_TABS_INDEX__,
	__DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	__DEFAULT_DUMMY_TABS_IS_FITTED__,
	__DEFAULT_DUMMY_TABS_ORIENTATION__,
	__DEFAULT_DUMMY_TABS_SIZE__
} from './common/constants';
import { useDummyTabsResponsiveValues } from './common/hooks';
import { __KEYS_DUMMY_TABS_CLASS__ } from './common/keys';
import type {
	DummyTabsContext as DummyTabsContextType,
	DummyTabsDefaultElement,
	DummyTabsElement,
	DummyTabsProps,
	DummyTabsRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const DummyTabsContext = createContext<DummyTabsContextType<DummyTabsDefaultElement>>({
	color: __DEFAULT_APP_COLOR__,
	colorMode: __DEFAULT_APP_COLORMODE__,
	align: __DEFAULT_DUMMY_TABS_ALIGN__,
	id: __DEFAULT_DUMMY_TABS_ID__,
	index: __DEFAULT_DUMMY_TABS_INDEX__,
	isAnimated: __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	isFitted: __DEFAULT_DUMMY_TABS_IS_FITTED__,
	orientation: __DEFAULT_DUMMY_TABS_ORIENTATION__,
	size: __DEFAULT_DUMMY_TABS_SIZE__,
	spacing: __DEFAULT_SPACING__
});

const DummyTabs = forwardRef(function DummyTabs<Element extends DummyTabsElement>(
	props: DummyTabsProps<Element>,
	ref: DummyTabsRef<Element>
): ReactElement {
	const {
		children,
		id = __DEFAULT_DUMMY_TABS_ID__,
		as = __DEFAULT_DUMMY_TABS_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		align: alignProp = __DEFAULT_DUMMY_TABS_ALIGN__,
		index: indexProp = __DEFAULT_DUMMY_TABS_INDEX__,
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
		isFitted: isFittedProp = __DEFAULT_DUMMY_TABS_IS_FITTED__,
		orientation: orientationProp = __DEFAULT_DUMMY_TABS_ORIENTATION__,
		size: sizeProp = __DEFAULT_DUMMY_TABS_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		...rest
	} = props;

	const { align, index, isAnimated, isFitted, orientation, size, spacing } = useDummyTabsResponsiveValues<Element>({
		align: alignProp,
		index: indexProp,
		isAnimated: isAnimatedProp,
		isFitted: isFittedProp,
		orientation: orientationProp,
		size: sizeProp,
		spacing: spacingProp
	});

	return (
		<DummyTabsContext.Provider
			value={{ color, colorMode, align, id, index, isAnimated, isFitted, orientation, size, spacing }}
		>
			<Box
				{...(rest as BoxProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_DUMMY_TABS_CLASS__, { [className]: !!className })}
			>
				{children}
			</Box>
		</DummyTabsContext.Provider>
	);
});

// DummyTabs.displayName = 'DummyTabs';

export default DummyTabs;
