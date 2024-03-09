import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import {
	DEFAULT_APP_COLOR,
	DEFAULT_APP_COLORMODE,
	DEFAULT_CLASSNAME,
	DEFAULT_METHOD,
	DEFAULT_SPACING
} from '@common/constants';

import { Box } from '@components/Box';

import {
	DEFAULT_TABS_ALIGN,
	DEFAULT_TABS_AS,
	DEFAULT_TABS_ID,
	DEFAULT_TABS_INDEX,
	DEFAULT_TABS_IS_DISABLED,
	DEFAULT_TABS_IS_FITTED,
	DEFAULT_TABS_ORIENTATION,
	DEFAULT_TABS_SIZE
} from './common/constants';
import { useTabsResponsiveValues } from './common/hooks';
import { KEYS_TABS_CLASS } from './common/keys';
import type {
	TabsContext as TabsContextType,
	TabsDefaultElement,
	TabsElement,
	TabsProps,
	TabsRef
} from './common/types';

export const TabsContext = createContext<TabsContextType<TabsDefaultElement>>({
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE,
	align: DEFAULT_TABS_ALIGN,
	id: DEFAULT_TABS_ID,
	index: DEFAULT_TABS_INDEX,
	isDisabled: DEFAULT_TABS_IS_DISABLED,
	isFitted: DEFAULT_TABS_IS_FITTED,
	onChange: DEFAULT_METHOD,
	orientation: DEFAULT_TABS_ORIENTATION,
	size: DEFAULT_TABS_SIZE,
	spacing: DEFAULT_SPACING
});

const Tabs = forwardRef(function Tabs<Element extends TabsElement>(
	props: TabsProps<Element>,
	ref: TabsRef<Element>
): JSX.Element {
	const {
		children,
		id = DEFAULT_TABS_ID,
		as = DEFAULT_TABS_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		align: alignProp = DEFAULT_TABS_ALIGN,
		index: indexProp = DEFAULT_TABS_INDEX,
		isDisabled: isDisabledProp = DEFAULT_TABS_IS_DISABLED,
		isFitted: isFittedProp = DEFAULT_TABS_IS_FITTED,
		onChange = DEFAULT_METHOD,
		orientation: orientationProp = DEFAULT_TABS_ORIENTATION,
		size: sizeProp = DEFAULT_TABS_SIZE,
		spacing: spacingProp = DEFAULT_SPACING,
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
			<Box {...rest} as={as} ref={ref} className={classNames(KEYS_TABS_CLASS, { [className]: !!className })}>
				{children}
			</Box>
		</TabsContext.Provider>
	);
});

// Tabs.displayName = 'Tabs';

export default Tabs;
