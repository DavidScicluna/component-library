import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import {
	DEFAULT_COLOR,
	DEFAULT_OUTLINE_OFFSET,
	DEFAULT_OUTLINE_WIDTH,
	DEFAULT_TEXT_DECORATION_STYLE,
	DEFAULT_TEXT_DECORATION_WIDTH
} from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	DEFAULT_LINK_IS_DISABLED,
	DEFAULT_LINK_IS_UNDERLINE,
	DEFAULT_LINK_IS_UNSTYLED,
	DEFAULT_LINK_OFFSET_SIZE
} from '../constants';
import type { LinkElement, LinkProps } from '../types';

import useLinkResponsiveValues from './useLinkResponsiveValues';

type UseLinkClassesProps<Element extends LinkElement> = Pick<
	LinkProps<Element>,
	'color' | 'colorMode' | 'isDisabled' | 'isUnderline' | 'isUnstyled'
>;
type UseLinkClassesReturn = ClassName;

const useLinkClasses = <Element extends LinkElement>(props: UseLinkClassesProps<Element>): UseLinkClassesReturn => {
	const { colorMode: DEFAULT_LINK_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_LINK_COLORMODE,
		isDisabled: isDisabledProp = DEFAULT_LINK_IS_DISABLED,
		isUnderline: isUnderlineProp = DEFAULT_LINK_IS_UNDERLINE,
		isUnstyled: isUnstyledProp = DEFAULT_LINK_IS_UNSTYLED
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
		const { base, hover, active } = DEFAULT_LINK_OFFSET_SIZE;

		const hue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.text_color[color][hue],
			classes.borders.outline_style.focus_visible.dashed,
			classes.borders.outline_width.focus_visible[DEFAULT_OUTLINE_WIDTH],
			classes.borders.outline_offset.focus_visible[DEFAULT_OUTLINE_OFFSET],
			classes.borders.outline_color[color][hue],
			{
				[classes.typography.text_decoration.underline]: isUnderline,
				[classes.typography.text_decoration_color[color][hue]]: isUnderline,
				[classes.typography.text_decoration_style[DEFAULT_TEXT_DECORATION_STYLE]]: isUnderline,
				[classes.typography.text_decoration_thickness[DEFAULT_TEXT_DECORATION_WIDTH]]: isUnderline,
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
