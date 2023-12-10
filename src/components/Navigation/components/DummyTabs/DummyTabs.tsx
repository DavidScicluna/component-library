import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

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
import { useDummyTabsResponsiveValues } from './common/hooks';
import { __KEYS_DUMMY_TABS_CLASS__ } from './common/keys';
import type { DummyTabsContext as DummyTabsContextType, DummyTabsProps, DummyTabsRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const DummyTabsContext = createContext<DummyTabsContextType>({
	align: __DEFAULT_DUMMY_TABS_ALIGN__,
	id: __DEFAULT_DUMMY_TABS_ID__,
	index: __DEFAULT_DUMMY_TABS_INDEX__,
	isAnimated: __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	isFitted: __DEFAULT_DUMMY_TABS_IS_FITTED__,
	orientation: __DEFAULT_DUMMY_TABS_ORIENTATION__,
	size: __DEFAULT_DUMMY_TABS_SIZE__,
	spacing: __DEFAULT_SPACING__
});

const DummyTabs: PolymorphicComponentWithRef = forwardRef(function DummyTabs<
	Element extends ElementType = PolymorphicDefaultElement
>(props: DummyTabsProps<Element>, ref: DummyTabsRef<Element>): ReactElement {
	const {
		children,
		id = __DEFAULT_DUMMY_TABS_ID__,
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

	const { align, index, isAnimated, isFitted, orientation, size, spacing } = useDummyTabsResponsiveValues({
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

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <DummyTabs<Element> {...props} />;
