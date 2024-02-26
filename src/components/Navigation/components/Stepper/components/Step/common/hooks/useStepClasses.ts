import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_COLOR, DEFAULT_OUTLINE_WIDTH } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import { DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE } from '@components/Navigation/components/Stepper/common/constants';
import { useStepperContext } from '@components/Navigation/components/Stepper/common/hooks';

import {
	DEFAULT_STEP_IS_ACTIVE,
	DEFAULT_STEP_IS_COMPACT,
	DEFAULT_STEP_IS_DISABLED,
	DEFAULT_STEP_IS_UPPERCASE
} from '../constants';
import type { StepElement, StepProps } from '../types';

import useStepResponsiveValues from './useStepResponsiveValues';
import useStepSizeConfig from './useStepSizeConfig';

type PickedStepProps = 'color' | 'colorMode' | 'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase';
type UseStepClassesProps<Element extends StepElement> = Pick<StepProps<Element>, PickedStepProps> & {
	isFocused: boolean;
};
type UseStepClassesReturn = Record<'step' | 'topDivider' | 'bottomDivider' | 'label', ClassName>;

const useStepClasses = <Element extends StepElement>(props: UseStepClassesProps<Element>): UseStepClassesReturn => {
	const { colorMode: DEFAULT_STEP_COLORMODE } = useAppTheme();
	const { orientation } = useStepperContext();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_STEP_COLORMODE,
		isActive: isActiveProp = DEFAULT_STEP_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_STEP_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_STEP_IS_DISABLED,
		isUppercase: isUppercaseProp = DEFAULT_STEP_IS_UPPERCASE
	} = props;

	const { isActive, isCompact, isDisabled, isUppercase } = useStepResponsiveValues<Element>({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isUppercase: isUppercaseProp
	});

	const config = useStepSizeConfig<Element>({ isCompact });

	const stepClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.sizing.min_width.max,
			classes.interactivity.cursor[isActive || isDisabled ? 'default' : 'pointer'],
			classes.interactivity.pointer_events[isActive || isDisabled ? 'none' : 'auto'],
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.effects.opacity[isDisabled ? 50 : 100],
			classes.layout.display.focus_visible.outline,
			classes.borders.outline_style.focus_visible.dashed,
			classes.borders.outline_width.focus_visible[DEFAULT_OUTLINE_WIDTH],
			classes.borders.outline_offset.focus_visible[0],
			classes.borders.outline_color.focus_visible[color][outlineHue]
		);
	}, [color, colorMode, isActive, isDisabled]);

	const textColorClassname = useGetColor({
		color,
		colorMode,
		colorType: isActive && !isDisabled ? 'color' : 'default',
		hueType: isActive && !isDisabled ? 'color' : 'text.primary',
		classType: 'text'
	});
	const dividerColorClassname = useGetColor({
		color,
		colorMode,
		colorType: isActive && !isDisabled ? 'color' : 'default',
		hueType: isActive && !isDisabled ? 'color' : 'text.primary',
		classType: 'bg'
	});

	return {
		step: classNames(stepClasses),
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
			classes.typography.line_height[DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE],
			classes.typography.transform[isUppercase ? 'uppercase' : 'normal'],
			classes.typography.text_overflow.ellipsis,
			classes.typography.whiteSpace.nowrap
		)
	};
};

export default useStepClasses;
