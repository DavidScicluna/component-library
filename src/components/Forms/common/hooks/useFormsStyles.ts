import { useMemo } from 'react';

import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetAmount, useTheme } from '@common/hooks';
import type { Style } from '@common/types';
import { filterColorHex, getColorHue } from '@common/utils';

import { DEFAULT_FORM_CONTROL_IS_FOCUSED } from '@components/Forms/components/FormControl/common/constants';

import {
	DEFAULT_FORMS_IS_DISABLED,
	DEFAULT_FORMS_IS_ERROR,
	DEFAULT_FORMS_IS_READONLY,
	DEFAULT_FORMS_IS_SUCCESS,
	DEFAULT_FORMS_IS_WARNING,
	DEFAULT_FORMS_VARIANT
} from '../constants';
import type { FormsUniqueProps } from '../types';

import useFormsResponsiveValues from './useFormsResponsiveValues';

type PickedFormsUniqueProps =
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isSuccess'
	| 'isWarning'
	| 'variant';
type UseFormsStylesProps = Pick<FormsUniqueProps, PickedFormsUniqueProps> & { element: 'input' | 'textarea' };
type UseFormsStylesReturn = Style;

const useFormsStyles = (props: UseFormsStylesProps): UseFormsStylesReturn => {
	const theme = useTheme();

	const { colorMode: DEFAULT_FORMS_COLORMODE } = useAppTheme();

	const {
		element,
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_FORMS_COLORMODE,
		isDisabled: isDisabledProp = DEFAULT_FORMS_IS_DISABLED,
		isError: isErrorProp = DEFAULT_FORMS_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORMS_IS_READONLY,
		isSuccess: isSuccessProp = DEFAULT_FORMS_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORMS_IS_WARNING,
		variant: variantProp = DEFAULT_FORMS_VARIANT
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
