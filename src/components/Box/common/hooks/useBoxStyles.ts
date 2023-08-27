import { type ElementType, useMemo } from 'react';

import { compact } from 'lodash-es';

import { useGetResponsiveValue, useTheme } from '@common/hooks';
import type { Style, Undefinable } from '@common/types';
import type { Space } from '@common/types/theme';
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

type UseBoxStylesProps<Element extends ElementType> = Pick<BoxProps<Element>, keyof BoxOtherProps>;
type UseBoxStylesReturn = Style;

const useBoxStyles = <Element extends ElementType>(props: UseBoxStylesProps<Element>): UseBoxStylesReturn => {
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
			const padding = getResponsiveValue<Space>(p);
			return theme.spacing[padding];
		} else if (px || py) {
			const plr = getResponsiveValue<Undefinable<Space>>(px);
			const ptb = getResponsiveValue<Undefinable<Space>>(py);
			return compact([plr ? theme.spacing[plr] : null, ptb ? theme.spacing[ptb] : null]).join(' ');
		}
	}, [p, px, py]);

	const paddingLeft = useMemo<Undefinable<string>>(() => {
		if (pl) {
			const paddingLeft = getResponsiveValue<Space>(pl);
			return theme.spacing[paddingLeft];
		}
	}, [pl]);
	const paddingTop = useMemo<Undefinable<string>>(() => {
		if (pt) {
			const paddingTop = getResponsiveValue<Space>(pt);
			return theme.spacing[paddingTop];
		}
	}, [pt]);
	const paddingRight = useMemo<Undefinable<string>>(() => {
		if (pr) {
			const paddingRight = getResponsiveValue<Space>(pr);
			return theme.spacing[paddingRight];
		}
	}, [pr]);
	const paddingBottom = useMemo<Undefinable<string>>(() => {
		if (pb) {
			const paddingBottom = getResponsiveValue<Space>(pb);
			return theme.spacing[paddingBottom];
		}
	}, [pb]);

	const margin = useMemo<Undefinable<string>>(() => {
		if (m) {
			const margin = getResponsiveValue<Space>(m);
			return theme.spacing[margin];
		} else if (mx || my) {
			const mlr = getResponsiveValue<Undefinable<Space>>(mx);
			const mtb = getResponsiveValue<Undefinable<Space>>(my);
			return compact([mlr ? theme.spacing[mlr] : null, mtb ? theme.spacing[mtb] : null]).join(' ');
		}
	}, [m, mx, my]);

	const marginLeft = useMemo<Undefinable<string>>(() => {
		if (ml) {
			const marginLeft = getResponsiveValue<Space>(ml);
			return theme.spacing[marginLeft];
		}
	}, [ml]);
	const marginTop = useMemo<Undefinable<string>>(() => {
		if (mt) {
			const marginTop = getResponsiveValue<Space>(mt);
			return theme.spacing[marginTop];
		}
	}, [mt]);
	const marginRight = useMemo<Undefinable<string>>(() => {
		if (mr) {
			const marginRight = getResponsiveValue<Space>(mr);
			return theme.spacing[marginRight];
		}
	}, [mr]);
	const marginBottom = useMemo<Undefinable<string>>(() => {
		if (mb) {
			const marginBottom = getResponsiveValue<Space>(mb);
			return theme.spacing[marginBottom];
		}
	}, [mb]);

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
