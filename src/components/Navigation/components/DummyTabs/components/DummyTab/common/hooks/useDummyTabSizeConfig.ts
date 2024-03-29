import { useMemo } from 'react';

import type { PolymorphicElementType, ThemeFontSize, ThemeSpacing } from '@common/types';

import { useDummyTabsContext } from '@components/Navigation/components/DummyTabs/common/hooks';

import { DEFAULT_DUMMY_TAB_IS_COMPACT } from '../constants';
import type { DummyTabProps } from '../types';

import useDummyTabResponsiveValues from './useDummyTabResponsiveValues';

type DummyTabSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	spacing: ThemeSpacing;
};

type UseDummyTabSizeConfigProps<Element extends PolymorphicElementType> = Pick<DummyTabProps<Element>, 'isCompact'>;
type UseDummyTabSizeConfigReturn = DummyTabSizeConfig;

const useDummyTabSizeConfig = <Element extends PolymorphicElementType>(
	props: UseDummyTabSizeConfigProps<Element>
): UseDummyTabSizeConfigReturn => {
	const { size } = useDummyTabsContext();

	const { isCompact: isUppercaseProp = DEFAULT_DUMMY_TAB_IS_COMPACT } = props;

	const { isCompact } = useDummyTabResponsiveValues<Element>({ isUppercase: isUppercaseProp });

	const config = useMemo<DummyTabSizeConfig>(() => {
		switch (size) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: { x: isCompact ? 1 : 2, y: isCompact ? 0.25 : 1 },
					spacing: isCompact ? 1 : 2
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: { x: isCompact ? 1.25 : 2.5, y: isCompact ? 0.5 : 1.25 },
					spacing: isCompact ? 1.25 : 2.5
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: isCompact ? 1.75 : 3.5, y: isCompact ? 1 : 1.75 },
					spacing: isCompact ? 1.75 : 3.5
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: { x: isCompact ? 2 : 4, y: isCompact ? 1.25 : 2 },
					spacing: isCompact ? 2 : 4
				};
			default:
				return {
					fontSize: 'md',
					padding: { x: isCompact ? 1.5 : 3, y: isCompact ? 0.75 : 1.5 },
					spacing: isCompact ? 1.5 : 3
				};
		}
	}, [isCompact, size]);

	return config;
};

export default useDummyTabSizeConfig;
