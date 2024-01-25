import { useMemo } from 'react';

import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_OUTLINE_WIDTH__ } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';
import { getColorHue } from '@common/utils';

import { __DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__ } from '@components/Navigation/components/DummyTabs/common/constants';
import { useDummyTabsContext } from '@components/Navigation/components/DummyTabs/common/hooks';

import { __DEFAULT_DUMMY_TAB_IS_COMPACT__, __DEFAULT_DUMMY_TAB_IS_UPPERCASE__ } from '../constants';
import type { DummyTabProps } from '../types';

import useDummyTabResponsiveValues from './useDummyTabResponsiveValues';
import useDummyTabSizeConfig from './useDummyTabSizeConfig';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseDummyTabClassesProps<Element extends PolymorphicElementType> = Pick<
	DummyTabProps<Element>,
	'color' | 'colorMode' | 'isCompact' | 'isUppercase'
> & { isSelected: boolean };
type UseDummyTabClassesReturn = Record<'tab' | 'topDivider' | 'bottomDivider' | 'label', ClassName>;

const useDummyTabClasses = <Element extends PolymorphicElementType>(
	props: UseDummyTabClassesProps<Element>
): UseDummyTabClassesReturn => {
	const { colorMode: __DEFAULT_DUMMY_TAB_COLORMODE__ } = useAppTheme();
	const { orientation } = useDummyTabsContext();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_DUMMY_TAB_COLORMODE__,
		isCompact: isCompactProp = __DEFAULT_DUMMY_TAB_IS_COMPACT__,
		isUppercase: isUppercaseProp = __DEFAULT_DUMMY_TAB_IS_UPPERCASE__,
		isSelected
	} = props;

	const { isCompact, isUppercase } = useDummyTabResponsiveValues<Element>({
		isCompact: isCompactProp,
		isUppercase: isUppercaseProp
	});

	const config = useDummyTabSizeConfig<Element>({ isCompact });

	const dummytabClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.sizing.min_width.max,
			classes.interactivity.cursor[isSelected ? 'default' : 'pointer'],
			classes.interactivity.pointer_events[isSelected ? 'none' : 'auto'],
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.effects.opacity[50],
			classes.layout.display.focus_visible.outline,
			classes.borders.outline_style.focus_visible.dashed,
			classes.borders.outline_width.focus_visible[__DEFAULT_OUTLINE_WIDTH__],
			classes.borders.outline_offset.focus_visible[0],
			classes.borders.outline_color.focus_visible[color][outlineHue]
		);
	}, [color, colorMode, isSelected]);

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
		tab: classNames(dummytabClasses),
		topDivider: classNames(classes.borders.border_radius_bl.full, classes.borders.border_radius_br.full, {
			[dividerColorClassname]: orientation === 'top',
			[classes.backgrounds.background_color.transparent]: orientation === 'bottom'
		}),
		bottomDivider: classNames(classes.borders.border_radius_tl.full, classes.borders.border_radius_tr.full, {
			[dividerColorClassname]: orientation === 'bottom',
			[classes.backgrounds.background_color.transparent]: orientation === 'top'
		}),
		label: classNames(
			textColorClassname,
			classes.typography.align.center,
			classes.typography.font_size[config.fontSize],
			classes.typography.font_weight.semibold,
			classes.typography.letter_spacing.normal,
			classes.typography.line_height[__DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__],
			classes.typography.transform[isUppercase ? 'uppercase' : 'normal'],
			classes.typography.text_overflow.ellipsis,
			classes.typography.whitespace.nowrap
		)
	};
};

export default useDummyTabClasses;
