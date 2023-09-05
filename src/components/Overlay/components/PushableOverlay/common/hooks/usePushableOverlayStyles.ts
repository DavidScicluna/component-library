import { type ElementType, useMemo } from 'react';

import { darken, lighten } from 'color2k';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetAmount, useGetResponsiveValue, useTheme } from '@common/hooks';
import type { Style, ThemeColorMode } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
} from '../constants';
import type { PushableOverlayProps, PushableOverlayVariant } from '../types';

type UsePushableOverlayStylesProps<Element extends ElementType> = Pick<
	PushableOverlayProps<Element>,
	'color' | 'colorMode' | 'isActive' | 'isDisabled' | 'isFixed' | 'isPushable' | 'variant'
>;
type UsePushableOverlayStylesReturn = Style;

const formatColor = (colorMode: ThemeColorMode, color: string, amount: number): string => {
	switch (colorMode) {
		case 'dark':
			return lighten(color, amount);
		default:
			return darken(color, amount);
	}
};

const usePushableOverlayStyles = <Element extends ElementType>(
	props: UsePushableOverlayStylesProps<Element>
): UsePushableOverlayStylesReturn => {
	const theme = useTheme();

	const { colorMode: __DEFAULT_PUSHABLE_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_PUSHABLE_OVERLAY_COLORMODE__,
		isActive: active = __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
		isDisabled: disabled = __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
		isFixed: fixed = __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
		isPushable: pushable = __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
		variant: v = __DEFAULT_PUSHABLE_OVERLAY_VARIANT__
	} = props;

	const amount = useGetAmount({ colorMode, types: ['active', 'back', 'hover'] });

	const isActive = useGetResponsiveValue<boolean>(active);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isFixed = useGetResponsiveValue<boolean>(fixed);
	const isPushable = useGetResponsiveValue<boolean>(pushable);

	const variant = useGetResponsiveValue<PushableOverlayVariant>(v);

	const containedDefaultStyles = useMemo<Style>(() => {
		const { pushable, hover, active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'background' });
		const backgroundHue = getColorHue({ colorMode, type: 'color' });
		const shadowHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'dark' : 'light' });

		return {
			'color': theme.colors.gray[colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: isPushable ? `0 ${pushable}px 0 0 ${theme.colors[color][shadowHue]}` : 'none'
			},

			'&:hover':
				isPushable && !isFixed
					? {
							'color': theme.colors.gray[colorHue],

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors[color][backgroundHue], amount.hover),
								background: formatColor(colorMode, theme.colors[color][backgroundHue], amount.hover),
								boxShadow: `0 ${hover}px 0 0 ${formatColor(
									colorMode,
									theme.colors[color][shadowHue],
									amount.back
								)}`
							},

							'&:active': {
								'color': theme.colors.gray[colorHue],

								'&::before': {
									borderColor: formatColor(
										colorMode,
										theme.colors[color][backgroundHue],
										amount.active
									),
									background: formatColor(
										colorMode,
										theme.colors[color][backgroundHue],
										amount.active
									),
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
					  }
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': theme.colors.gray[colorHue],

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors[color][backgroundHue], amount.active),
								background: formatColor(colorMode, theme.colors[color][backgroundHue], amount.active),
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
					  }
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const containedActiveStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'background' });
		const backgroundHue = getColorHue({ colorMode, type: 'color' });

		return {
			'color': theme.colors.gray[colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [color, colorMode]);

	const containedDisabledStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'background' });
		const backgroundHue = getColorHue({ colorMode, type: 'color' });

		return {
			'color': theme.colors.gray[colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [color, colorMode]);

	const lightDefaultStyles = useMemo<Style>(() => {
		const { pushable, hover, active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'dark' });
		const backgroundHue = getColorHue({ colorMode, type: 'light' });
		const shadowHue = getColorHue({ colorMode, type: 'lighter' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: isPushable ? `0 ${pushable}px 0 0 ${theme.colors[color][shadowHue]}` : 'none'
			},

			'&:hover':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors[color][colorHue], amount.hover),

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors[color][backgroundHue], amount.hover),
								background: formatColor(colorMode, theme.colors[color][backgroundHue], amount.hover),
								boxShadow: `0 ${hover}px 0 0 ${formatColor(
									colorMode,
									theme.colors[color][shadowHue],
									amount.back
								)}`
							},

							'&:active': {
								'color': formatColor(colorMode, theme.colors[color][colorHue], amount.active),

								'&::before': {
									borderColor: formatColor(
										colorMode,
										theme.colors[color][backgroundHue],
										amount.active
									),
									background: formatColor(
										colorMode,
										theme.colors[color][backgroundHue],
										amount.active
									),
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
					  }
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors[color][colorHue], amount.active),

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors[color][backgroundHue], amount.active),
								background: formatColor(colorMode, theme.colors[color][backgroundHue], amount.active),
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
					  }
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const lightActiveStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'darker' });
		const backgroundHue = getColorHue({ colorMode, type: 'lighter' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [color, colorMode]);

	const lightDisabledStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'darker' });
		const backgroundHue = getColorHue({ colorMode, type: 'lighter' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [color, colorMode]);

	const darkDefaultStyles = useMemo<Style>(() => {
		const { pushable, hover, active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'light' });
		const backgroundHue = getColorHue({ colorMode, type: 'dark' });
		const shadowHue = getColorHue({ colorMode, type: 'darker' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: isPushable ? `0 ${pushable}px 0 0 ${theme.colors[color][shadowHue]}` : 'none'
			},

			'&:hover':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors[color][colorHue], amount.hover),

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors[color][backgroundHue], amount.hover),
								background: formatColor(colorMode, theme.colors[color][backgroundHue], amount.hover),
								boxShadow: `0 ${hover}px 0 0 ${formatColor(
									colorMode,
									theme.colors[color][shadowHue],
									amount.back
								)}`
							},

							'&:active': {
								'color': formatColor(colorMode, theme.colors[color][colorHue], amount.active),

								'&::before': {
									borderColor: formatColor(
										colorMode,
										theme.colors[color][backgroundHue],
										amount.active
									),
									background: formatColor(
										colorMode,
										theme.colors[color][backgroundHue],
										amount.active
									),
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
					  }
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors[color][colorHue], amount.active),

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors[color][backgroundHue], amount.active),
								background: formatColor(colorMode, theme.colors[color][backgroundHue], amount.active),
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
					  }
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const darkActiveStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'lighter' });
		const backgroundHue = getColorHue({ colorMode, type: 'darker' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [color, colorMode]);

	const darkDisabledStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'lighter' });
		const backgroundHue = getColorHue({ colorMode, type: 'darker' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][backgroundHue],
				background: theme.colors[color][backgroundHue],
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [color, colorMode]);

	const outlinedDefaultStyles = useMemo<Style>(() => {
		const { pushable, hover, active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'color' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][colorHue],
				background: theme.colors.transparent,
				boxShadow: isPushable ? `0 ${pushable}px 0 0 ${theme.colors[color][colorHue]}` : 'none'
			},

			'&:hover':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors[color][colorHue], amount.hover),

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors[color][colorHue], amount.hover),
								background: theme.colors.transparent,
								boxShadow: `0 ${hover}px 0 0 ${formatColor(
									colorMode,
									theme.colors[color][colorHue],
									amount.hover
								)}`
							},

							'&:active': {
								'color': formatColor(colorMode, theme.colors[color][colorHue], amount.active),

								'&::before': {
									borderColor: formatColor(colorMode, theme.colors[color][colorHue], amount.active),
									background: theme.colors.transparent,
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
					  }
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors[color][colorHue], amount.active),

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors[color][colorHue], amount.active),
								background: theme.colors.transparent,
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
					  }
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const outlinedActiveStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'color' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][colorHue],
				background: theme.colors.transparent,
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [color, colorMode]);

	const outlinedDisabledStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'color' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors[color][colorHue],
				background: theme.colors.transparent,
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [color, colorMode]);

	const monochromeDefaultStyles = useMemo<Style>(() => {
		const { pushable, hover, active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'text.primary' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return {
			'color': theme.colors.gray[colorHue],

			'&::before': {
				borderColor: theme.colors.gray[borderHue],
				background: theme.colors.transparent,
				boxShadow: isPushable ? `0 ${pushable}px 0 0 ${theme.colors.gray[borderHue]}` : 'none'
			},

			'&:hover':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors.gray[colorHue], amount.hover),

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors.gray[borderHue], amount.hover),
								background: theme.colors.transparent,
								boxShadow: `0 ${hover}px 0 0 ${formatColor(
									colorMode,
									theme.colors.gray[borderHue],
									amount.hover
								)}`
							},

							'&:active': {
								'color': formatColor(colorMode, theme.colors.gray[colorHue], amount.active),

								'&::before': {
									borderColor: formatColor(colorMode, theme.colors.gray[borderHue], amount.active),
									background: theme.colors.transparent,
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
					  }
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors.gray[colorHue], amount.active),

							'&::before': {
								borderColor: formatColor(colorMode, theme.colors.gray[borderHue], amount.active),
								background: theme.colors.transparent,
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
					  }
					: {}
		};
	}, [colorMode, isPushable, isFixed]);

	const monochromeActiveStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'text.primary' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return {
			'color': theme.colors.gray[colorHue],

			'&::before': {
				borderColor: theme.colors.gray[borderHue],
				background: theme.colors.transparent,
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [colorMode]);

	const monochromeDisabledStyles = useMemo<Style>(() => {
		const { active } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const colorHue = getColorHue({ colorMode, type: 'text.primary' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return {
			'color': theme.colors.gray[colorHue],

			'&::before': {
				borderColor: theme.colors.gray[borderHue],
				background: theme.colors.transparent,
				boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
			}
		};
	}, [colorMode]);

	const transparentDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors.transparent,
				background: theme.colors.transparent,
				boxShadow: 'none'
			},

			'&:hover':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors[color][colorHue], amount.hover),

							'&::before': {
								borderColor: theme.colors.transparent,
								background: theme.colors.transparent,
								boxShadow: 'none'
							},

							'&:active': {
								'color': formatColor(colorMode, theme.colors[color][colorHue], amount.active),

								'&::before': {
									borderColor: theme.colors.transparent,
									background: theme.colors.transparent,
									boxShadow: 'none'
								}
							}
					  }
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': formatColor(colorMode, theme.colors[color][colorHue], amount.active),

							'&::before': {
								borderColor: theme.colors.transparent,
								background: theme.colors.transparent,
								boxShadow: 'none'
							}
					  }
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const transparentActiveStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors.transparent,
				background: theme.colors.transparent,
				boxShadow: 'none'
			}
		};
	}, [color, colorMode]);

	const transparentDisabledStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return {
			'color': theme.colors[color][colorHue],

			'&::before': {
				borderColor: theme.colors.transparent,
				background: theme.colors.transparent,
				boxShadow: 'none'
			}
		};
	}, [color, colorMode]);

	switch (variant) {
		case 'light':
			return isDisabled ? lightDisabledStyles : isActive ? lightActiveStyles : lightDefaultStyles;
		case 'dark':
			return isDisabled ? darkDisabledStyles : isActive ? darkActiveStyles : darkDefaultStyles;
		case 'outlined':
			return isDisabled ? outlinedDisabledStyles : isActive ? outlinedActiveStyles : outlinedDefaultStyles;
		case 'monochrome':
			return isDisabled ? monochromeDisabledStyles : isActive ? monochromeActiveStyles : monochromeDefaultStyles;
		case 'transparent':
			return isDisabled
				? transparentDisabledStyles
				: isActive
				? transparentActiveStyles
				: transparentDefaultStyles;
		default:
			return isDisabled ? containedDisabledStyles : isActive ? containedActiveStyles : containedDefaultStyles;
	}
};

export default usePushableOverlayStyles;
