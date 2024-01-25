import { useMemo } from 'react';

import type { ThemeFontSize, ThemeSpacing } from '@common/types';

import { useTabsContext } from '@components/Navigation/components/Tabs/common/hooks';

import { __DEFAULT_TAB_IS_COMPACT__ } from '../constants';
import type { TabElement, TabProps } from '../types';

import useTabResponsiveValues from './useTabResponsiveValues';

type TabSizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	spacing: ThemeSpacing;
};

type UseTabSizeConfigProps<Element extends TabElement> = Pick<TabProps<Element>, 'isCompact'>;
type UseTabSizeConfigReturn = TabSizeConfig;

const useTabSizeConfig = <Element extends TabElement>(
	props: UseTabSizeConfigProps<Element>
): UseTabSizeConfigReturn => {
	const { size } = useTabsContext();

	const { isCompact: isCompactProp = __DEFAULT_TAB_IS_COMPACT__ } = props;

	const { isCompact } = useTabResponsiveValues<Element>({ isCompact: isCompactProp });

	const config = useMemo<TabSizeConfig>(() => {
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

export default useTabSizeConfig;
