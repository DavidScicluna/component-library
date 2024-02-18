import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import {
	__DEFAULT_COLOR__,
	__DEFAULT_OUTLINE_OFFSET__,
	__DEFAULT_OUTLINE_WIDTH__,
	__DEFAULT_TEXT_DECORATION_STYLE__,
	__DEFAULT_TEXT_DECORATION_WIDTH__
} from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	__DEFAULT_LINK_IS_DISABLED__,
	__DEFAULT_LINK_IS_UNDERLINE__,
	__DEFAULT_LINK_IS_UNSTYLED__,
	__DEFAULT_LINK_OFFSET_SIZE__
} from '../constants';
import type { LinkElement, LinkProps } from '../types';

import useLinkResponsiveValues from './useLinkResponsiveValues';

type UseLinkClassesProps<Element extends LinkElement> = Pick<
	LinkProps<Element>,
	'color' | 'colorMode' | 'isDisabled' | 'isUnderline' | 'isUnstyled'
>;
type UseLinkClassesReturn = ClassName;

const useLinkClasses = <Element extends LinkElement>(props: UseLinkClassesProps<Element>): UseLinkClassesReturn => {
	const { colorMode: __DEFAULT_LINK_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_LINK_COLORMODE__,
		isDisabled: isDisabledProp = __DEFAULT_LINK_IS_DISABLED__,
		isUnderline: isUnderlineProp = __DEFAULT_LINK_IS_UNDERLINE__,
		isUnstyled: isUnstyledProp = __DEFAULT_LINK_IS_UNSTYLED__
	} = props;

	const { isDisabled, isUnderline, isUnstyled } = useLinkResponsiveValues<Element>({
		isDisabled: isDisabledProp,
		isUnderline: isUnderlineProp,
		isUnstyled: isUnstyledProp
	});

	const rootClasses = useConst<ClassName>(
		classNames(
			classes.interactivity.cursor.default,
			classes.interactivity.pointer_events.auto,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto
		)
	);

	const stylingClasses = useMemo<ClassName>(() => {
		const { base, hover, active } = __DEFAULT_LINK_OFFSET_SIZE__;

		const hue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.text_color[color][hue],
			classes.borders.outline_style.focus_visible.dashed,
			classes.borders.outline_width.focus_visible[__DEFAULT_OUTLINE_WIDTH__],
			classes.borders.outline_offset.focus_visible[__DEFAULT_OUTLINE_OFFSET__],
			classes.borders.outline_color[color][hue],
			{
				[classes.typography.text_decoration.underline]: isUnderline,
				[classes.typography.text_decoration_color[color][hue]]: isUnderline,
				[classes.typography.text_decoration_style[__DEFAULT_TEXT_DECORATION_STYLE__]]: isUnderline,
				[classes.typography.text_decoration_thickness[__DEFAULT_TEXT_DECORATION_WIDTH__]]: isUnderline,
				[classes.typography.text_underline_offset[base]]: isUnderline,
				[classes.typography.text_underline_offset.hover[hover]]: isUnderline,
				[classes.typography.text_underline_offset.active[active]]: isUnderline
			}
		);
	}, [color, colorMode, isUnderline]);

	const disabledClasses = useConst<ClassName>(
		classNames(classes.interactivity.cursor.default, classes.interactivity.pointer_events.none)
	);

	return classNames(rootClasses, {
		[stylingClasses]: !isUnstyled,
		[disabledClasses]: isDisabled
	});
};

export default useLinkClasses;
