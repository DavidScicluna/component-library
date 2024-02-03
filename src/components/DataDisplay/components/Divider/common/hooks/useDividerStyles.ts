import { __DEFAULT_BORDER_WIDTH__, __DEFAULT_COLOR__, __DEFAULT_SPACING__ } from '@common/constants';
import { useTheme } from '@common/hooks';
import type { Style } from '@common/types';
import { checkColorType } from '@common/utils';

import { __DEFAULT_DIVIDER_ORIENTATION__, __DEFAULT_DIVIDER_PLACEMENT__ } from '../constants';
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
		color = __DEFAULT_COLOR__,
		hasChildren = false,
		orientation: orientationProp = __DEFAULT_DIVIDER_ORIENTATION__,
		placement: placementProp = __DEFAULT_DIVIDER_PLACEMENT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_BORDER_WIDTH__
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
