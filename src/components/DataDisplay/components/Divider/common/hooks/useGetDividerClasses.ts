import classNames from 'classnames';

import { __DEFAULT_BORDER_WIDTH__ } from '@common/constants';
import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { BorderStyle, BorderWidth, JustifyContent } from '@common/types/classes';

import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from '../constants';
import type { DividerElement, DividerProps } from '../types';

type UseGetDividerClassesProps<Element extends DividerElement> = Pick<
	DividerProps<Element>,
	'color' | 'colorMode' | 'orientation' | 'placement' | 'size' | 'variant'
>;
type UseGetDividerClassesReturn = ClassName;

const useGetDividerClasses = <Element extends DividerElement>(
	props: UseGetDividerClassesProps<Element>
): UseGetDividerClassesReturn => {
	const {
		color,
		colorMode,
		orientation = __DEFAULT_DIVIDER_ORIENTATION__,
		placement = __DEFAULT_DIVIDER_PLACEMENT__,
		size = __DEFAULT_BORDER_WIDTH__,
		variant = __DEFAULT_DIVIDER_VARIANT__
	} = props;

	const borderLeftWidthClassName = useGetClass<BorderWidth>(size, ['borders', 'borderLeftWidth']);
	const borderStyleClassName = useGetClass<BorderStyle>(variant, ['borders', 'borderStyle']);
	const borderColorClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'border',
		hueType: 'divider'
	});

	const justifyContentClassName = useGetClass<JustifyContent>(
		placement === 'left' ? 'flex-start' : placement === 'right' ? 'flex-end' : 'center',
		['grid', 'justifyContent']
	);

	return classNames('flex', 'items-center', justifyContentClassName, borderStyleClassName, borderColorClassName, {
		[borderLeftWidthClassName]: orientation === 'vertical'
	});
};

export default useGetDividerClasses;
