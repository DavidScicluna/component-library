import { useMemo } from 'react';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetAmount, useGetResponsiveValue, useTheme } from '@common/hooks';
import type { Style } from '@common/types';
import { filterColorHex, getColorHue } from '@common/utils';

import { __DEFAULT_FORM_CONTROL_IS_FOCUSED__ } from '@components/Forms/components/FormControl/common/constants';

import {
	__DEFAULT_INPUT_IS_DISABLED__,
	__DEFAULT_INPUT_IS_ERROR__,
	__DEFAULT_INPUT_IS_READONLY__,
	__DEFAULT_INPUT_IS_SUCCESS__,
	__DEFAULT_INPUT_IS_WARNING__,
	__DEFAULT_INPUT_VARIANT__
} from '../constants';
import type { InputDefaultElement, InputElement, InputProps, InputVariant } from '../types';

type UseInputStylesProps<Element extends InputElement = InputDefaultElement> = Pick<
	InputProps<Element>,
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isSuccess'
	| 'isWarning'
	| 'variant'
>;
type UseInputStylesReturn = Style;

const useInputStyles = <Element extends InputElement = InputDefaultElement>(
	props: UseInputStylesProps<Element>
): UseInputStylesReturn => {
	const theme = useTheme();

	const { colorMode: __DEFAULT_INPUT_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_INPUT_COLORMODE__,
		isDisabled: disabled = __DEFAULT_INPUT_IS_DISABLED__,
		isError: error = __DEFAULT_INPUT_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isReadOnly: readOnly = __DEFAULT_INPUT_IS_READONLY__,
		isSuccess: success = __DEFAULT_INPUT_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_INPUT_IS_WARNING__,
		variant: v = __DEFAULT_INPUT_VARIANT__
	} = props;

	const amount = useGetAmount({ colorMode, types: ['active', 'focus', 'hover'] });

	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isFocused = useGetResponsiveValue<boolean>(focused);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const variant = useGetResponsiveValue<InputVariant>(v);

	const readOnlyStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'dark' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });
		const backgroundHue = getColorHue({ colorMode, type: 'lighter' });

		return {
			color: theme.colors.gray[colorHue],
			borderColor: theme.colors.gray[borderHue],
			background: theme.colors.gray[backgroundHue]
		};
	}, [colorMode]);

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

			'& input::selection': {
				color: theme.colors.gray[selectionColorHue],
				background: theme.colors.gray[selectionBackgroundHue]
			},

			'& input::placeholder': {
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

			'& input::selection': {
				color: theme.colors[c][selectionColorHue],
				background: theme.colors[c][selectionBackgroundHue]
			},

			'& input::placeholder': {
				color: theme.colors[c][placeholderColorHue]
			}
		};
	}, [amount, color, colorMode, isError, isWarning, isSuccess]);

	const underlineDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: colorMode == 'light' ? 'darker' : 'lighter' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });
		const backgroundHue = getColorHue({ colorMode, type: colorMode == 'light' ? 'lighter' : 'darker' });

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

			'& input::selection': {
				color: theme.colors.gray[selectionColorHue],
				background: theme.colors.gray[selectionBackgroundHue]
			},

			'& input::placeholder': {
				color: theme.colors.gray[placeholderColorHue]
			}
		};
	}, [amount, colorMode]);

	const underlineColorStyles = useMemo<Style>(() => {
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

			'& input::selection': {
				color: theme.colors[c][selectionColorHue],
				background: theme.colors[c][selectionBackgroundHue]
			},

			'& input::placeholder': {
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

export default useInputStyles;
