import { DEFAULT_BORDER_WIDTH, DEFAULT_COLOR, DEFAULT_SPACING } from '@common/constants';
import { useTheme } from '@common/hooks';
import type { Style } from '@common/types';
import { checkColorType } from '@common/utils';

import { DEFAULT_DIVIDER_ORIENTATION, DEFAULT_DIVIDER_PLACEMENT } from '../constants';
import type { DividerElement, DividerProps } from '../types';

import useDividerResponsiveValues from './useDividerResponsiveValues';

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
		color = DEFAULT_COLOR,
		hasChildren = false,
		orientation: orientationProp = DEFAULT_DIVIDER_ORIENTATION,
		placement: placementProp = DEFAULT_DIVIDER_PLACEMENT,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_BORDER_WIDTH
	} = props;

	const { orientation, placement, spacing, size } = useDividerResponsiveValues<Element>({
		orientation: orientationProp,
		placement: placementProp,
		spacing: spacingProp,
		size: sizeProp
	});

	return {
		'borderColor': checkColorType(color) === 'other' ? color : undefined,

		'&::before':
			orientation === 'horizontal' && (placement === 'right' || placement === 'center')
				? {
						content: '""',

						flex: '1 1 0%',

						borderTopWidth: orientation === 'horizontal' ? `${size}px` : '0px',
						borderStyle: 'inherit',
						borderColor: 'inherit',

						marginRight: hasChildren ? theme.spacing[spacing] : undefined
					}
				: {},
		'&::after':
			orientation === 'horizontal' && (placement === 'left' || placement === 'center')
				? {
						content: '""',

						flex: '1 1 0%',

						borderTopWidth: orientation === 'horizontal' ? `${size}px` : '0px',
						borderStyle: 'inherit',
						borderColor: 'inherit',

						marginLeft: hasChildren ? theme.spacing[spacing] : undefined
					}
				: {}
	};
};

export default useDividerStyles;
