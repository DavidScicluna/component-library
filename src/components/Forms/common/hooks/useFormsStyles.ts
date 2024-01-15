import { useMemo } from 'react';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetAmount, useTheme } from '@common/hooks';
import type { Style } from '@common/types';
import { filterColorHex, getColorHue } from '@common/utils';

import { __DEFAULT_FORM_CONTROL_IS_FOCUSED__ } from '@components/Forms/components/FormControl/common/constants';

import {
	__DEFAULT_FORMS_IS_DISABLED__,
	__DEFAULT_FORMS_IS_ERROR__,
	__DEFAULT_FORMS_IS_READONLY__,
	__DEFAULT_FORMS_IS_SUCCESS__,
	__DEFAULT_FORMS_IS_WARNING__,
	__DEFAULT_FORMS_VARIANT__
} from '../constants';
import type { FormsCommonProps } from '../types';

import useFormsResponsiveValues from './useFormsResponsiveValues';

type UseFormsStylesProps = Pick<
	FormsCommonProps,
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isSuccess'
	| 'isWarning'
	| 'variant'
> & { element: 'input' | 'textarea' };
type UseFormsStylesReturn = Style;

const useFormsStyles = (props: UseFormsStylesProps): UseFormsStylesReturn => {
	const theme = useTheme();

	const { colorMode: __DEFAULT_FORMS_COLORMODE__ } = useAppTheme();

	const {
		element,
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_FORMS_COLORMODE__,
		isDisabled: isDisabledProp = __DEFAULT_FORMS_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORMS_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORMS_IS_READONLY__,
		isSuccess: isSuccessProp = __DEFAULT_FORMS_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORMS_IS_WARNING__,
		variant: variantProp = __DEFAULT_FORMS_VARIANT__
	} = props;

	const { isDisabled, isError, isFocused, isReadOnly, isSuccess, isWarning, variant } = useFormsResponsiveValues({
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isReadOnly: isReadOnlyProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		variant: variantProp
	});

	const amount = useGetAmount({ colorMode, types: ['active', 'focus', 'hover'] });

	const readOnlyStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'darker' : 'lighter' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });
		const backgroundHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'lighter' : 'darker' });

		return {
			color: filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.hover }),
			borderColor: filterColorHex({
				color: theme.colors.gray[borderHue],
				colorMode,
				amount: amount.hover
			}),
			background: filterColorHex({
				color: theme.colors.gray[backgroundHue],
				colorMode,
				amount: amount.hover
			})
		};
	}, [amount, colorMode]);

	const outlinedDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: colorMode == 'light' ? 'darker' : 'lighter' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });
		const backgroundHue = getColorHue({ colorMode, type: colorMode == 'light' ? 'lighter' : 'darker' });

		const selectionColorHue = getColorHue({ colorMode, type: 'background' });
		const selectionBackgroundHue = getColorHue({ colorMode, type: 'color' });

		const placeholderColorHue = getColorHue({ colorMode, type: 'default' });

		return {
			'color': theme.colors.gray[colorHue],
			'borderColor': theme.colors.gray[borderHue],
			'background': theme.colors.gray[backgroundHue],

			'&:hover': {
				'color': filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.hover }),
				'borderColor': filterColorHex({
					color: theme.colors.gray[borderHue],
					colorMode,
					amount: amount.hover
				}),
				'background': filterColorHex({
					color: theme.colors.gray[backgroundHue],
					colorMode,
					amount: amount.hover
				}),

				'&:active': {
					color: filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.active }),
					borderColor: filterColorHex({
						color: theme.colors.gray[borderHue],
						colorMode,
						amount: amount.active
					}),
					background: filterColorHex({
						color: theme.colors.gray[backgroundHue],
						colorMode,
						amount: amount.active
					})
				}
			},

			'&:active': {
				color: filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.active }),
				borderColor: filterColorHex({
					color: theme.colors.gray[borderHue],
					colorMode,
					amount: amount.active
				}),
				background: filterColorHex({
					color: theme.colors.gray[backgroundHue],
					colorMode,
					amount: amount.active
				})
			},

			'&:focus': {
				color: filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.focus }),
				borderColor: filterColorHex({
					color: theme.colors.gray[borderHue],
					colorMode,
					amount: amount.focus
				}),
				background: filterColorHex({
					color: theme.colors.gray[backgroundHue],
					colorMode,
					amount: amount.focus
				})
			},

			[`& ${element}::selection`]: {
				color: theme.colors.gray[selectionColorHue],
				background: theme.colors.gray[selectionBackgroundHue]
			},

			[`& ${element}::placeholder`]: {
				color: theme.colors.gray[placeholderColorHue]
			}
		};
	}, [amount, colorMode]);

	const outlinedColorStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: colorMode == 'light' ? 'darker' : 'lighter' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });
		const backgroundHue = getColorHue({ colorMode, type: colorMode == 'light' ? 'lighter' : 'darker' });

		const c = isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : color;

		const selectionColorHue = getColorHue({ colorMode, type: 'background' });
		const selectionBackgroundHue = getColorHue({ colorMode, type: 'color' });

		const placeholderColorHue = getColorHue({ colorMode, type: 'default' });

		return {
			'color': theme.colors[c][colorHue],
			'borderColor': theme.colors[c][borderHue],
			'background': theme.colors[c][backgroundHue],

			'&:hover': {
				'color': filterColorHex({ color: theme.colors[c][colorHue], colorMode, amount: amount.hover }),
				'borderColor': filterColorHex({
					color: theme.colors[c][borderHue],
					colorMode,
					amount: amount.hover
				}),
				'background': filterColorHex({
					color: theme.colors[c][backgroundHue],
					colorMode,
					amount: amount.hover
				}),

				'&:active': {
					color: filterColorHex({ color: theme.colors[c][colorHue], colorMode, amount: amount.active }),
					borderColor: filterColorHex({
						color: theme.colors[c][borderHue],
						colorMode,
						amount: amount.active
					}),
					background: filterColorHex({
						color: theme.colors[c][backgroundHue],
						colorMode,
						amount: amount.active
					})
				}
			},

			'&:active': {
				color: filterColorHex({ color: theme.colors[c][colorHue], colorMode, amount: amount.active }),
				borderColor: filterColorHex({
					color: theme.colors[c][borderHue],
					colorMode,
					amount: amount.active
				}),
				background: filterColorHex({
					color: theme.colors[c][backgroundHue],
					colorMode,
					amount: amount.active
				})
			},

			'&:focus': {
				color: filterColorHex({ color: theme.colors[c][colorHue], colorMode, amount: amount.focus }),
				borderColor: filterColorHex({
					color: theme.colors[c][borderHue],
					colorMode,
					amount: amount.focus
				}),
				background: filterColorHex({
					color: theme.colors[c][backgroundHue],
					colorMode,
					amount: amount.focus
				})
			},

			[`& ${element}::selection`]: {
				color: theme.colors[c][selectionColorHue],
				background: theme.colors[c][selectionBackgroundHue]
			},

			[`& ${element}::placeholder`]: {
				color: theme.colors[c][placeholderColorHue]
			}
		};
	}, [amount, color, colorMode, isError, isWarning, isSuccess]);

	const underlineDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: colorMode == 'light' ? 'darker' : 'lighter' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		const selectionColorHue = getColorHue({ colorMode, type: 'background' });
		const selectionBackgroundHue = getColorHue({ colorMode, type: 'color' });

		const placeholderColorHue = getColorHue({ colorMode, type: 'default' });

		return {
			'color': theme.colors.gray[colorHue],
			'borderColor': theme.colors.gray[borderHue],
			'background': theme.colors.transparent,

			'&:hover': {
				'color': filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.hover }),
				'borderColor': filterColorHex({
					color: theme.colors.gray[borderHue],
					colorMode,
					amount: amount.hover
				}),
				'background': theme.colors.transparent,

				'&:active': {
					color: filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.active }),
					borderColor: filterColorHex({
						color: theme.colors.gray[borderHue],
						colorMode,
						amount: amount.active
					}),
					background: theme.colors.transparent
				}
			},

			'&:active': {
				color: filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.active }),
				borderColor: filterColorHex({
					color: theme.colors.gray[borderHue],
					colorMode,
					amount: amount.active
				}),
				background: theme.colors.transparent
			},

			'&:focus': {
				color: filterColorHex({ color: theme.colors.gray[colorHue], colorMode, amount: amount.focus }),
				borderColor: filterColorHex({
					color: theme.colors.gray[borderHue],
					colorMode,
					amount: amount.focus
				}),
				background: theme.colors.transparent
			},

			[`& ${element}::selection`]: {
				color: theme.colors.gray[selectionColorHue],
				background: theme.colors.gray[selectionBackgroundHue]
			},

			[`& ${element}::placeholder`]: {
				color: theme.colors.gray[placeholderColorHue]
			}
		};
	}, [amount, colorMode]);

	const underlineColorStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: colorMode == 'light' ? 'darker' : 'lighter' });
		const borderHue = getColorHue({ colorMode, type: 'color' });

		const c = isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : color;

		const selectionColorHue = getColorHue({ colorMode, type: 'background' });
		const selectionBackgroundHue = getColorHue({ colorMode, type: 'color' });

		const placeholderColorHue = getColorHue({ colorMode, type: 'default' });

		return {
			'color': theme.colors[c][colorHue],
			'borderColor': theme.colors[c][borderHue],
			'background': theme.colors.transparent,

			'&:hover': {
				'color': filterColorHex({ color: theme.colors[c][colorHue], colorMode, amount: amount.hover }),
				'borderColor': filterColorHex({
					color: theme.colors[c][borderHue],
					colorMode,
					amount: amount.hover
				}),
				'background': theme.colors.transparent,

				'&:active': {
					color: filterColorHex({ color: theme.colors[c][colorHue], colorMode, amount: amount.active }),
					borderColor: filterColorHex({
						color: theme.colors[c][borderHue],
						colorMode,
						amount: amount.active
					}),
					background: theme.colors.transparent
				}
			},

			'&:active': {
				color: filterColorHex({ color: theme.colors[c][colorHue], colorMode, amount: amount.active }),
				borderColor: filterColorHex({
					color: theme.colors[c][borderHue],
					colorMode,
					amount: amount.active
				}),
				background: theme.colors.transparent
			},

			'&:focus': {
				color: filterColorHex({ color: theme.colors[c][colorHue], colorMode, amount: amount.focus }),
				borderColor: filterColorHex({
					color: theme.colors[c][borderHue],
					colorMode,
					amount: amount.focus
				}),
				background: theme.colors.transparent
			},

			[`& ${element}::selection`]: {
				color: theme.colors[c][selectionColorHue],
				background: theme.colors[c][selectionBackgroundHue]
			},

			[`& ${element}::placeholder`]: {
				color: theme.colors[c][placeholderColorHue]
			}
		};
	}, [amount, color, colorMode, isError, isWarning, isSuccess]);

	switch (variant) {
		case 'underline':
			return isReadOnly
				? readOnlyStyles
				: isError || isDisabled || isFocused || isWarning || isSuccess
					? underlineColorStyles
					: underlineDefaultStyles;
		case 'unstyled':
			return {};
		default:
			return isReadOnly
				? readOnlyStyles
				: isError || isDisabled || isFocused || isWarning || isSuccess
					? outlinedColorStyles
					: outlinedDefaultStyles;
	}
};

export default useFormsStyles;
