import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import {
	__DEFAULT_BORDER_STYLE__,
	__DEFAULT_BORDER_WIDTH__,
	__DEFAULT_COLOR__,
	__DEFAULT_OUTLINE_WIDTH__
} from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	__DEFAULT_FORMS_IS_COMPACT__,
	__DEFAULT_FORMS_IS_DISABLED__,
	__DEFAULT_FORMS_IS_ERROR__,
	__DEFAULT_FORMS_IS_OUTLINED__,
	__DEFAULT_FORMS_IS_READONLY__,
	__DEFAULT_FORMS_IS_SUCCESS__,
	__DEFAULT_FORMS_IS_WARNING__,
	__DEFAULT_FORMS_LINE_HEIGHT_SIZE__,
	__DEFAULT_FORMS_SIZE__,
	__DEFAULT_FORMS_VARIANT__
} from '../constants';
import type { FormsCommonProps } from '../types';

import useFormsResponsiveValues from './useFormsResponsiveValues';
import useFormsSizeConfig from './useFormsSizeConfig';

type UseFormsClassesProps = Pick<
	FormsCommonProps,
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isError'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant'
>;
type UseFormsClassesReturn = Record<'container' | 'element', ClassName>;

const useFormsClasses = (props: UseFormsClassesProps): UseFormsClassesReturn => {
	const { colorMode: __DEFAULT_FORMS_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_FORMS_COLORMODE__,
		isCompact: isCompactProp = __DEFAULT_FORMS_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_FORMS_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORMS_IS_ERROR__,
		isOutlined: isOutlinedProp = __DEFAULT_FORMS_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORMS_IS_READONLY__,
		isSuccess: isSuccessProp = __DEFAULT_FORMS_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORMS_IS_WARNING__,
		size: sizeProp = __DEFAULT_FORMS_SIZE__,
		variant: variantProp = __DEFAULT_FORMS_VARIANT__
	} = props;

	const { isCompact, isDisabled, isError, isOutlined, isReadOnly, isSuccess, isWarning, size, variant } =
		useFormsResponsiveValues({
			isCompact: isCompactProp,
			isDisabled: isDisabledProp,
			isError: isErrorProp,
			isOutlined: isOutlinedProp,
			isReadOnly: isReadOnlyProp,
			isSuccess: isSuccessProp,
			isWarning: isWarningProp,
			size: sizeProp,
			variant: variantProp
		});

	const config = useFormsSizeConfig({ isCompact, size, variant });

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
				[classes.typography.line_height[__DEFAULT_FORMS_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
				[classes.typography.transform.normal]: variant !== 'unstyled',
				[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
				[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled',
				[classes.borders.border_width[__DEFAULT_BORDER_WIDTH__]]: variant === 'outlined',
				[classes.borders.border_b_width[__DEFAULT_BORDER_WIDTH__]]: variant === 'underline',
				[classes.borders.border_style[__DEFAULT_BORDER_STYLE__]]: variant !== 'unstyled',
				[classes.borders.border_radius[config.radius]]: variant === 'outlined',
				[classes.borders.border_radius_t[config.radius]]: variant === 'underline'
			}
		);
	}, [config.fontSize, config.radius, isDisabled, isReadOnly, variant]);

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

	const formsClasses = useConst<ClassName>(
		classNames(
			classes.backgrounds.background_color.transparent,
			classes.borders.border_width[0],
			classes.borders.border_color.transparent,
			classes.borders.outline_width[0],
			classes.borders.outline_color.transparent
		)
	);

	return {
		container: classNames(rootClasses, { [outlineColorClasses]: isOutlined && variant !== 'unstyled' }),
		element: classNames(formsClasses)
	};
};

export default useFormsClasses;
