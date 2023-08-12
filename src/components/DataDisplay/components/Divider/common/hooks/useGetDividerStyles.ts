import { useMemo } from 'react';

import { __DEFAULT_BORDER_WIDTH__, __DEFAULT_SPACING__ } from '@common/constants';
import { useTheme } from '@common/hooks';
import type { Style } from '@common/types';
import type { BorderWidth } from '@common/types/classes';
import type { Space } from '@common/types/theme';
import { getResponsiveValue } from '@common/utils';

import { __DEFAULT_DIVIDER_ORIENTATION__, __DEFAULT_DIVIDER_PLACEMENT__ } from '../constants';
import type { DividerElement, DividerProps } from '../types';

type PickedDividerProps = 'orientation' | 'placement' | 'size' | 'spacing';

type UseGetDividerStylesProps<Element extends DividerElement> = Pick<DividerProps<Element>, PickedDividerProps> & {
	hasChildren: boolean;
};
type UseGetDividerStylesReturn = Style;

const useGetDividerStyles = <Element extends DividerElement>(
	props: UseGetDividerStylesProps<Element>
): UseGetDividerStylesReturn => {
	const theme = useTheme();

	const {
		hasChildren = false,
		orientation = __DEFAULT_DIVIDER_ORIENTATION__,
		placement = __DEFAULT_DIVIDER_PLACEMENT__,
		size = __DEFAULT_BORDER_WIDTH__,
		spacing: s = __DEFAULT_SPACING__
	} = props;

	const borderWidth = useMemo<string>(() => {
		const borderWidth = getResponsiveValue<BorderWidth>(size);
		return `${borderWidth}px`;
	}, [size]);

	const spacing = useMemo<string>(() => {
		const spacing = getResponsiveValue<Space>(s);
		return theme.spacing[spacing];
	}, [s]);

	return {
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

export default useGetDividerStyles;
