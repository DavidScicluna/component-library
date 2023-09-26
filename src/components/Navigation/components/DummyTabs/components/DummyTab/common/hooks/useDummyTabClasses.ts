import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_OUTLINE_WIDTH__ } from '@common/constants';
import { useAppTheme, useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import { __DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__ } from '@components/Navigation/components/DummyTabs/common/constants';
import { useDummyTabsContext } from '@components/Navigation/components/DummyTabs/common/hooks';

import { __DEFAULT_DUMMY_TAB_IS_COMPACT__, __DEFAULT_DUMMY_TAB_IS_UPPERCASE__ } from '../constants';
import type { DummyTabProps } from '../types';

import useDummyTabSizeConfig from './useDummyTabSizeConfig';

type UseDummyTabClassesProps<Element extends ElementType> = Pick<
	DummyTabProps<Element>,
	'color' | 'colorMode' | 'isCompact' | 'isUppercase'
> & { isSelected: boolean };
type UseDummyTabClassesReturn = Record<'dummytab' | 'topDivider' | 'bottomDivider' | 'label', ClassName>;

const useDummyTabClasses = <Element extends ElementType>(
	props: UseDummyTabClassesProps<Element>
): UseDummyTabClassesReturn => {
	const { colorMode: __DEFAULT_DUMMY_TAB_COLORMODE__ } = useAppTheme();

	const { isAnimated } = useDummyTabsContext();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_DUMMY_TAB_COLORMODE__,
		isCompact: compact = __DEFAULT_DUMMY_TAB_IS_COMPACT__,
		isUppercase: uppercase = __DEFAULT_DUMMY_TAB_IS_UPPERCASE__,
		isSelected
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(compact);
	const isUppercase = useGetResponsiveValue<boolean>(uppercase);

	const config = useDummyTabSizeConfig<Element>({ isCompact });

	const dummytabClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.interactivity.cursor.default,
			classes.interactivity.pointer_events.none,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.effects.opacity[50],
			classes.layout.display.focus_visible.outline,
			classes.borders.outline_style.focus_visible.dashed,
			classes.borders.outline_width.focus_visible[__DEFAULT_OUTLINE_WIDTH__],
			classes.borders.outline_offset.focus_visible[0],
			classes.borders.outline_color.focus_visible[color][outlineHue]
		);
	}, [color, colorMode]);

	const textColorClassname = useGetColor({
		color,
		colorMode,
		colorType: isSelected ? 'color' : 'default',
		hueType: isSelected ? 'color' : 'text.primary',
		classType: 'text'
	});
	const dividerColorClassname = useGetColor({
		color,
		colorMode,
		colorType: isSelected ? 'color' : 'default',
		hueType: isSelected ? 'color' : 'text.primary',
		classType: 'bg'
	});

	return {
		dummytab: classNames(dummytabClasses),
		topDivider: classNames(
			classes.backgrounds.background_color.transparent,
			classes.borders.border_radius_bl.full,
			classes.borders.border_radius_br.full,
			{ [classes.animation.pulse]: isAnimated }
		),
		bottomDivider: classNames(
			dividerColorClassname,
			classes.borders.border_radius_tl.full,
			classes.borders.border_radius_tr.full,
			{ [classes.animation.pulse]: isAnimated }
		),
		label: classNames(
			textColorClassname,
			classes.typography.align.center,
			classes.typography.font_size[config.fontSize],
			classes.typography.font_weight.semibold,
			classes.typography.letter_spacing.normal,
			classes.typography.line_height[__DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__],
			classes.typography.transform[isUppercase ? 'uppercase' : 'normal'],
			classes.typography.text_overflow.ellipsis,
			classes.typography.whitespace.nowrap,
			{ [classes.animation.pulse]: isAnimated }
		)
	};
};

export default useDummyTabClasses;
