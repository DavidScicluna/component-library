import classNames from 'classnames';

import { __DEFAULT_BORDER_WIDTH__ } from '@common/constants';
import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { BorderStyle, JustifyContent } from '@common/types/classes';
import type { BorderWidth } from '@common/types/theme';

import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from '../constants';
import type { DividerElement, DividerProps } from '../types';

type UseDividerClassesProps<Element extends DividerElement> = Pick<
	DividerProps<Element>,
	'color' | 'colorMode' | 'orientation' | 'placement' | 'size' | 'variant'
>;
type UseDividerClassesReturn = ClassName;

const useDividerClasses = <Element extends DividerElement>(
	props: UseDividerClassesProps<Element>
): UseDividerClassesReturn => {
	const {
		color,
		colorMode,
		orientation = __DEFAULT_DIVIDER_ORIENTATION__,
		placement = __DEFAULT_DIVIDER_PLACEMENT__,
		size = __DEFAULT_BORDER_WIDTH__,
		variant = __DEFAULT_DIVIDER_VARIANT__
	} = props;

	const borderLeftWidthClassName = useGetClass<BorderWidth>(size, ['borders', 'border_l_width']);
	const borderStyleClassName = useGetClass<BorderStyle>(variant, ['borders', 'border_style']);
	const borderColorClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'border',
		hueType: 'divider'
	});

	const justifyContentClassName = useGetClass<JustifyContent>(
		placement === 'left' ? 'flex-start' : placement === 'right' ? 'flex-end' : 'center',
		['grid', 'justify_content']
	);

	return classNames('flex', 'items-center', justifyContentClassName, borderStyleClassName, borderColorClassName, {
		[borderLeftWidthClassName]: orientation === 'vertical'
	});
};

export default useDividerClasses;
