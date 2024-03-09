import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_APP_COLOR, DEFAULT_APP_COLORMODE, DEFAULT_CLASSNAME, DEFAULT_SPACING } from '@common/constants';

import { Box } from '@components/Box';

import {
	DEFAULT_DUMMY_TABS_ALIGN,
	DEFAULT_DUMMY_TABS_AS,
	DEFAULT_DUMMY_TABS_ID,
	DEFAULT_DUMMY_TABS_INDEX,
	DEFAULT_DUMMY_TABS_IS_ANIMATED,
	DEFAULT_DUMMY_TABS_IS_FITTED,
	DEFAULT_DUMMY_TABS_ORIENTATION,
	DEFAULT_DUMMY_TABS_SIZE
} from './common/constants';
import { useDummyTabsResponsiveValues } from './common/hooks';
import { KEYS_DUMMY_TABS_CLASS } from './common/keys';
import type {
	DummyTabsContext as DummyTabsContextType,
	DummyTabsDefaultElement,
	DummyTabsElement,
	DummyTabsProps,
	DummyTabsRef
} from './common/types';

export const DummyTabsContext = createContext<DummyTabsContextType<DummyTabsDefaultElement>>({
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE,
	align: DEFAULT_DUMMY_TABS_ALIGN,
	id: DEFAULT_DUMMY_TABS_ID,
	index: DEFAULT_DUMMY_TABS_INDEX,
	isAnimated: DEFAULT_DUMMY_TABS_IS_ANIMATED,
	isFitted: DEFAULT_DUMMY_TABS_IS_FITTED,
	orientation: DEFAULT_DUMMY_TABS_ORIENTATION,
	size: DEFAULT_DUMMY_TABS_SIZE,
	spacing: DEFAULT_SPACING
});

const DummyTabs = forwardRef(function DummyTabs<Element extends DummyTabsElement>(
	props: DummyTabsProps<Element>,
	ref: DummyTabsRef<Element>
): JSX.Element {
	const {
		children,
		id = DEFAULT_DUMMY_TABS_ID,
		as = DEFAULT_DUMMY_TABS_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		align: alignProp = DEFAULT_DUMMY_TABS_ALIGN,
		index: indexProp = DEFAULT_DUMMY_TABS_INDEX,
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_TABS_IS_ANIMATED,
		isFitted: isFittedProp = DEFAULT_DUMMY_TABS_IS_FITTED,
		orientation: orientationProp = DEFAULT_DUMMY_TABS_ORIENTATION,
		size: sizeProp = DEFAULT_DUMMY_TABS_SIZE,
		spacing: spacingProp = DEFAULT_SPACING,
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
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEYS_DUMMY_TABS_CLASS, { [className]: !!className })}
			>
				{children}
			</Box>
		</DummyTabsContext.Provider>
	);
});

// DummyTabs.displayName = 'DummyTabs';

export default DummyTabs;
