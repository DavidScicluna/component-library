import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import {
	__DEFAULT_BORDER_STYLE__,
	__DEFAULT_BORDER_WIDTH__,
	__DEFAULT_COLOR__,
	__DEFAULT_OUTLINE_WIDTH__
} from '@common/constants';
import { useAppTheme, useConst, useGetResponsiveValue } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	__DEFAULT_INPUT_IS_DISABLED__,
	__DEFAULT_INPUT_IS_ERROR__,
	__DEFAULT_INPUT_IS_OUTLINED__,
	__DEFAULT_INPUT_IS_READONLY__,
	__DEFAULT_INPUT_IS_SUCCESS__,
	__DEFAULT_INPUT_IS_WARNING__,
	__DEFAULT_INPUT_SIZE__,
	__DEFAULT_INPUT_VARIANT__
} from '../constants';
import type { InputDefaultElement, InputElement, InputProps, InputSize, InputVariant } from '../types';

import useInputSizeConfig from './useInputSizeConfig';

type UseInputClassesProps<Element extends InputElement = InputDefaultElement> = Pick<
	InputProps<Element>,
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant'
>;
type UseInputClassesReturn = Record<'container' | 'input', ClassName>;

const useInputClasses = <Element extends InputElement = InputDefaultElement>(
	props: UseInputClassesProps<Element>
): UseInputClassesReturn => {
	const { colorMode: __DEFAULT_INPUT_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_INPUT_COLORMODE__,
		isDisabled: disabled = __DEFAULT_INPUT_IS_DISABLED__,
		isError: error = __DEFAULT_INPUT_IS_ERROR__,
		isOutlined: outlined = __DEFAULT_INPUT_IS_OUTLINED__,
		isReadOnly: readOnly = __DEFAULT_INPUT_IS_READONLY__,
		isSuccess: success = __DEFAULT_INPUT_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_INPUT_IS_WARNING__,
		size: s = __DEFAULT_INPUT_SIZE__,
		variant: v = __DEFAULT_INPUT_VARIANT__
	} = props;

	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const size = useGetResponsiveValue<InputSize>(s);
	const variant = useGetResponsiveValue<InputVariant>(v);

	const config = useInputSizeConfig<Element>({ size });

	const rootClasses = useMemo<ClassName>(() => {
		return classNames(
			classes.layout.position.relative,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.interactivity.cursor[isDisabled || isReadOnly ? 'default' : 'text'],
			classes.interactivity.pointer_events[isDisabled || isReadOnly ? 'none' : 'auto'],
			{
				[classes.effects.opacity[50]]: isDisabled && variant !== 'unstyled',
				[classes.typography.align.left]: variant !== 'unstyled',
				[classes.typography.font_size[config.fontSize]]: variant !== 'unstyled',
				[classes.typography.font_weight.normal]: variant !== 'unstyled',
				[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
				[classes.typography.line_height.normal]: variant !== 'unstyled',
				[classes.typography.transform.normal]: variant !== 'unstyled',
				[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
				[classes.typography.whitespace.nowrap]: variant !== 'unstyled',
				[classes.borders.border_width[__DEFAULT_BORDER_WIDTH__]]: variant === 'outlined',
				[classes.borders.border_b_width[__DEFAULT_BORDER_WIDTH__]]: variant === 'underline',
				[classes.borders.border_style[__DEFAULT_BORDER_STYLE__]]: variant !== 'unstyled',
				[classes.borders.border_radius[config.radius]]: variant === 'outlined',
				[classes.borders.border_radius_t[config.radius]]: variant === 'underline'
			}
		);
	}, [config.fontSize, config.radius, isDisabled, isReadOnly, variant]);

	const inputClasses = useConst<ClassName>(
		classNames(
			classes.backgrounds.background_color.transparent,
			classes.borders.border_width[0],
			classes.borders.border_color.transparent,
			classes.borders.outline_width[0],
			classes.borders.outline_color.transparent
		)
	);

	const outlineColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.layout.display.outline,
			classes.borders.outline_width[__DEFAULT_OUTLINE_WIDTH__],
			classes.borders.outline_style.solid,
			classes.borders.outline_color.gray[outlineHue],
			classes.borders.outline_color.focus_visible[
				isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : color
			][outlineHue],
			classes.borders.outline_offset[0]
		);
	}, [color, colorMode, isError, isWarning, isSuccess]);

	return {
		container: classNames(rootClasses, { [outlineColorClasses]: isOutlined && variant !== 'unstyled' }),
		input: classNames(inputClasses)
	};
};

export default useInputClasses;
