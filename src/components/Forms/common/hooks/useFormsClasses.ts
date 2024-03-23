import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_BORDER_STYLE, DEFAULT_BORDER_WIDTH, DEFAULT_COLOR, DEFAULT_OUTLINE_WIDTH } from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	DEFAULT_FORMS_IS_COMPACT,
	DEFAULT_FORMS_IS_DISABLED,
	DEFAULT_FORMS_IS_ERROR,
	DEFAULT_FORMS_IS_OUTLINED,
	DEFAULT_FORMS_IS_READONLY,
	DEFAULT_FORMS_IS_SUCCESS,
	DEFAULT_FORMS_IS_WARNING,
	DEFAULT_FORMS_LINE_HEIGHT_SIZE,
	DEFAULT_FORMS_SIZE,
	DEFAULT_FORMS_VARIANT
} from '../constants';
import type { FormsUniqueProps } from '../types';

import useFormsResponsiveValues from './useFormsResponsiveValues';
import useFormsSizeConfig from './useFormsSizeConfig';

type PickedFormsUniqueProps =
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
	| 'variant';
type UseFormsClassesProps = Pick<FormsUniqueProps, PickedFormsUniqueProps>;
type UseFormsClassesReturn = Record<'container' | 'element', ClassName>;

const useFormsClasses = (props: UseFormsClassesProps): UseFormsClassesReturn => {
	const { colorMode: DEFAULT_FORMS_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_FORMS_COLORMODE,
		isCompact: isCompactProp = DEFAULT_FORMS_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_FORMS_IS_DISABLED,
		isError: isErrorProp = DEFAULT_FORMS_IS_ERROR,
		isOutlined: isOutlinedProp = DEFAULT_FORMS_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORMS_IS_READONLY,
		isSuccess: isSuccessProp = DEFAULT_FORMS_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORMS_IS_WARNING,
		size: sizeProp = DEFAULT_FORMS_SIZE,
		variant: variantProp = DEFAULT_FORMS_VARIANT
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
				[classes.typography.line_height[DEFAULT_FORMS_LINE_HEIGHT_SIZE]]: variant !== 'unstyled',
				[classes.typography.transform.normal]: variant !== 'unstyled',
				[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
				[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled',
				[classes.borders.border_width[DEFAULT_BORDER_WIDTH]]: variant === 'outlined',
				[classes.borders.border_b_width[DEFAULT_BORDER_WIDTH]]: variant === 'underline',
				[classes.borders.border_style[DEFAULT_BORDER_STYLE]]: variant !== 'unstyled',
				[classes.borders.border_radius[config.radius]]: variant === 'outlined',
				[classes.borders.border_radius_t[config.radius]]: variant === 'underline'
			}
		);
	}, [config.fontSize, config.radius, isDisabled, isReadOnly, variant]);

	const outlineColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.layout.display.outline,
			classes.borders.outline_width[DEFAULT_OUTLINE_WIDTH],
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
