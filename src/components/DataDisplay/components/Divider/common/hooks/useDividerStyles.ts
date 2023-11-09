import { useMemo } from 'react';

import { __DEFAULT_BORDER_WIDTH__, __DEFAULT_COLOR__, __DEFAULT_SPACING__ } from '@common/constants';
import { useTheme } from '@common/hooks';
import type { Style, ThemeBorderWidth, ThemeSpacing } from '@common/types';
import { checkColorType, getResponsiveValue } from '@common/utils';

import { __DEFAULT_DIVIDER_ORIENTATION__, __DEFAULT_DIVIDER_PLACEMENT__ } from '../constants';
import type { DividerElement, DividerProps } from '../types';

type PickedDividerProps = 'color' | 'orientation' | 'placement' | 'size' | 'spacing';

type UseDividerStylesProps<Element extends DividerElement> = Pick<DividerProps<Element>, PickedDividerProps> & {
	hasChildren: boolean;
};
type UseDividerStylesReturn = Style;

const useDividerStyles = <Element extends DividerElement>(
	props: UseDividerStylesProps<Element>
): UseDividerStylesReturn => {
	const theme = useTheme();

	const {
		color = __DEFAULT_COLOR__,
		hasChildren = false,
		orientation = __DEFAULT_DIVIDER_ORIENTATION__,
		placement = __DEFAULT_DIVIDER_PLACEMENT__,
		size = __DEFAULT_BORDER_WIDTH__,
		spacing: s = __DEFAULT_SPACING__
	} = props;

	const borderWidth = useMemo<string>(() => {
		const borderWidth = getResponsiveValue<ThemeBorderWidth>(size);
		return `${borderWidth}px`;
	}, [size]);

	const spacing = useMemo<string>(() => {
		const spacing = getResponsiveValue<ThemeSpacing>(s);
		return theme.spacing[spacing];
	}, [s]);

	return {
		'borderColor': checkColorType(color) === 'other' ? color : undefined,

		'&::before':
			orientation === 'horizontal' && (placement === 'right' || placement === 'center')
				? {
						content: '""',

						flex: '1 1 0%',

						borderTopWidth: orientation === 'horizontal' ? borderWidth : '0px',
						borderStyle: 'inherit',
						borderColor: 'inherit',

						marginRight: hasChildren ? spacing : undefined
				  }
				: {},
		'&::after':
			orientation === 'horizontal' && (placement === 'left' || placement === 'center')
				? {
						content: '""',

						flex: '1 1 0%',

						borderTopWidth: orientation === 'horizontal' ? borderWidth : '0px',
						borderStyle: 'inherit',
						borderColor: 'inherit',

						marginLeft: hasChildren ? spacing : undefined
				  }
				: {}
	};
};

export default useDividerStyles;
