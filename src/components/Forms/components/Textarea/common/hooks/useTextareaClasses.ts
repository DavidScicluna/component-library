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
import type { ClassName, ResizeClass } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	__DEFAULT_TEXTAREA_IS_DISABLED__,
	__DEFAULT_TEXTAREA_IS_ERROR__,
	__DEFAULT_TEXTAREA_IS_OUTLINED__,
	__DEFAULT_TEXTAREA_IS_READONLY__,
	__DEFAULT_TEXTAREA_IS_SUCCESS__,
	__DEFAULT_TEXTAREA_IS_WARNING__,
	__DEFAULT_TEXTAREA_RESIZE__,
	__DEFAULT_TEXTAREA_SIZE__,
	__DEFAULT_TEXTAREA_VARIANT__
} from '../constants';
import type { TextareaDefaultElement, TextareaElement, TextareaProps, TextareaSize, TextareaVariant } from '../types';

import useTextareaSizeConfig from './useTextareaSizeConfig';

type UseTextareaClassesProps<Element extends TextareaElement = TextareaDefaultElement> = Pick<
	TextareaProps<Element>,
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isSuccess'
	| 'isWarning'
	| 'resize'
	| 'size'
	| 'variant'
>;
type UseTextareaClassesReturn = Record<'container' | 'textarea', ClassName>;

const useTextareaClasses = <Element extends TextareaElement = TextareaDefaultElement>(
	props: UseTextareaClassesProps<Element>
): UseTextareaClassesReturn => {
	const { colorMode: __DEFAULT_TEXTAREA_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_TEXTAREA_COLORMODE__,
		isDisabled: disabled = __DEFAULT_TEXTAREA_IS_DISABLED__,
		isError: error = __DEFAULT_TEXTAREA_IS_ERROR__,
		isOutlined: outlined = __DEFAULT_TEXTAREA_IS_OUTLINED__,
		isReadOnly: readOnly = __DEFAULT_TEXTAREA_IS_READONLY__,
		isSuccess: success = __DEFAULT_TEXTAREA_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_TEXTAREA_IS_WARNING__,
		resize: r = __DEFAULT_TEXTAREA_RESIZE__,
		size: s = __DEFAULT_TEXTAREA_SIZE__,
		variant: v = __DEFAULT_TEXTAREA_VARIANT__
	} = props;

	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const resize = useGetResponsiveValue<ResizeClass>(r);

	const size = useGetResponsiveValue<TextareaSize>(s);
	const variant = useGetResponsiveValue<TextareaVariant>(v);

	const config = useTextareaSizeConfig<Element>({ size });

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
				[classes.borders.border_width[__DEFAULT_BORDER_WIDTH__]]: variant === 'outlined',
				[classes.borders.border_b_width[__DEFAULT_BORDER_WIDTH__]]: variant === 'underline',
				[classes.borders.border_style[__DEFAULT_BORDER_STYLE__]]: variant !== 'unstyled',
				[classes.borders.border_radius[config.radius]]: variant === 'outlined',
				[classes.borders.border_radius_t[config.radius]]: variant === 'underline'
			}
		);
	}, [config.fontSize, config.radius, isDisabled, isReadOnly, variant]);

	const textareaClasses = useMemo<ClassName>(() => {
		return classNames(
			classes.interactivity.resize[resize],
			classes.backgrounds.background_color.transparent,
			classes.borders.border_width[0],
			classes.borders.border_color.transparent,
			classes.borders.outline_width[0],
			classes.borders.outline_color.transparent
		);
	}, [resize]);

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
		textarea: classNames(textareaClasses)
	};
};

export default useTextareaClasses;
