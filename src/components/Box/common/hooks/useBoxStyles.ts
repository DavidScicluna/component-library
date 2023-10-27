import { type ElementType, useMemo } from 'react';

import { useGetResponsiveValue, useTheme } from '@common/hooks';
import type { PolymorphicDefaultElement, Style, ThemeSpacing, Undefinable } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import type {
	BoxHeight,
	BoxMaxHeight,
	BoxMaxWidth,
	BoxMinHeight,
	BoxMinWidth,
	BoxOtherProps,
	BoxProps,
	BoxWidth
} from '../types';

type UseBoxStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	BoxProps<Element>,
	keyof BoxOtherProps
>;
type UseBoxStylesReturn = Style;

const useBoxStyles = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseBoxStylesProps<Element>
): UseBoxStylesReturn => {
	const theme = useTheme();

	const { w, minW, maxW, h, minH, maxH, p, px, py, pl, pt, pr, pb, m, mx, my, ml, mt, mr, mb } = props;

	const width = useGetResponsiveValue<BoxWidth>(w);
	const minWidth = useGetResponsiveValue<BoxMinWidth>(minW);
	const maxWidth = useGetResponsiveValue<BoxMaxWidth>(maxW);

	const height = useGetResponsiveValue<BoxHeight>(h);
	const minHeight = useGetResponsiveValue<BoxMinHeight>(minH);
	const maxHeight = useGetResponsiveValue<BoxMaxHeight>(maxH);

	const padding = useMemo<Undefinable<string>>(() => {
		if (p) {
			const padding = getResponsiveValue<ThemeSpacing>(p);
			return theme.spacing[padding];
		}
	}, [p]);

	const paddingLeft = useMemo<Undefinable<string>>(() => {
		if (pl || px) {
			const paddingLeft = getResponsiveValue<ThemeSpacing>(pl || px || 0);
			return theme.spacing[paddingLeft];
		}
	}, [pl, px]);
	const paddingTop = useMemo<Undefinable<string>>(() => {
		if (pt || py) {
			const paddingTop = getResponsiveValue<ThemeSpacing>(pt || py || 0);
			return theme.spacing[paddingTop];
		}
	}, [pt, py]);
	const paddingRight = useMemo<Undefinable<string>>(() => {
		if (pr || px) {
			const paddingRight = getResponsiveValue<ThemeSpacing>(pr || px || 0);
			return theme.spacing[paddingRight];
		}
	}, [pr, px]);
	const paddingBottom = useMemo<Undefinable<string>>(() => {
		if (pb || py) {
			const paddingBottom = getResponsiveValue<ThemeSpacing>(pb || py || 0);
			return theme.spacing[paddingBottom];
		}
	}, [pb, py]);

	const margin = useMemo<Undefinable<string>>(() => {
		if (m) {
			const margin = getResponsiveValue<ThemeSpacing>(m);
			return theme.spacing[margin];
		}
	}, [m]);

	const marginLeft = useMemo<Undefinable<string>>(() => {
		if (ml || mx) {
			const marginLeft = getResponsiveValue<ThemeSpacing>(ml || mx || 0);
			return theme.spacing[marginLeft];
		}
	}, [ml, mx]);
	const marginTop = useMemo<Undefinable<string>>(() => {
		if (mt || my) {
			const marginTop = getResponsiveValue<ThemeSpacing>(mt || my || 0);
			return theme.spacing[marginTop];
		}
	}, [mt, my]);
	const marginRight = useMemo<Undefinable<string>>(() => {
		if (mr || mx) {
			const marginRight = getResponsiveValue<ThemeSpacing>(mr || mx || 0);
			return theme.spacing[marginRight];
		}
	}, [mr, mx]);
	const marginBottom = useMemo<Undefinable<string>>(() => {
		if (mb || my) {
			const marginBottom = getResponsiveValue<ThemeSpacing>(mb || my || 0);
			return theme.spacing[marginBottom];
		}
	}, [mb, my]);

	return {
		width,
		minWidth,
		maxWidth,
		height,
		minHeight,
		maxHeight,
		padding,
		paddingLeft,
		paddingTop,
		paddingRight,
		paddingBottom,
		margin,
		marginLeft,
		marginTop,
		marginRight,
		marginBottom
	};
};

export default useBoxStyles;
