import { useMemo } from 'react';

import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetAmount, useTheme } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';
import { filterColorHex, getColorHue } from '@common/utils';

import {
	DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
	DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
	DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
	DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
	DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE,
	DEFAULT_PUSHABLE_OVERLAY_VARIANT
} from '../constants';
import type { PushableOverlayProps } from '../types';

import usePushableOverlayResponsiveValues from './usePushableOverlayResponsiveValues';

type PickedPushableOverlayProps =
	| 'color'
	| 'colorMode'
	| 'isActive'
	| 'isDisabled'
	| 'isFixed'
	| 'isPushable'
	| 'variant';
type UsePushableOverlayStylesProps<Element extends PolymorphicElementType> = Pick<
	PushableOverlayProps<Element>,
	PickedPushableOverlayProps
>;
type UsePushableOverlayStylesReturn = Style;

const usePushableOverlayStyles = <Element extends PolymorphicElementType>(
	props: UsePushableOverlayStylesProps<Element>
): UsePushableOverlayStylesReturn => {
	const theme = useTheme();

	const { colorMode: DEFAULT_PUSHABLE_OVERLAY_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_PUSHABLE_OVERLAY_COLORMODE,
		isActive: isActiveProp = DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
		isDisabled: isDisabledProp = DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
		isFixed: isFixedProp = DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
		isPushable: isPushableProp = DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
		variant: variantProp = DEFAULT_PUSHABLE_OVERLAY_VARIANT
	} = props;

	const amount = useGetAmount({ colorMode, types: ['active', 'back', 'hover'] });

	const { isActive, isDisabled, isFixed, isPushable, variant } = usePushableOverlayResponsiveValues<Element>({
		isActive: isActiveProp,
		isDisabled: isDisabledProp,
		isFixed: isFixedProp,
		isPushable: isPushableProp,
		variant: variantProp
	});

	const containedDefaultStyles = useMemo<Style>(() => {
		const { pushable, hover, active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
								borderColor: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.hover
								}),
								background: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.hover
								}),
								boxShadow: `0 ${hover}px 0 0 ${filterColorHex({
									color: theme.colors[color][shadowHue],
									colorMode,
									amount: amount.back
								})}`
							},

							'&:active': {
								'color': theme.colors.gray[colorHue],

								'&::before': {
									borderColor: filterColorHex({
										color: theme.colors[color][backgroundHue],
										colorMode,
										amount: amount.active
									}),
									background: filterColorHex({
										color: theme.colors[color][backgroundHue],
										colorMode,
										amount: amount.active
									}),
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
								borderColor: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.active
								}),
								background: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.active
								}),
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
						}
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const containedActiveStyles = useMemo<Style>(() => {
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { pushable, hover, active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
							'color': filterColorHex({
								color: theme.colors[color][colorHue],
								colorMode,
								amount: amount.hover
							}),

							'&::before': {
								borderColor: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.hover
								}),
								background: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.hover
								}),
								boxShadow: `0 ${hover}px 0 0 ${filterColorHex({
									color: theme.colors[color][shadowHue],
									colorMode,
									amount: amount.back
								})}`
							},

							'&:active': {
								'color': filterColorHex({
									color: theme.colors[color][colorHue],
									colorMode,
									amount: amount.active
								}),

								'&::before': {
									borderColor: filterColorHex({
										color: theme.colors[color][backgroundHue],
										colorMode,
										amount: amount.active
									}),
									background: filterColorHex({
										color: theme.colors[color][backgroundHue],
										colorMode,
										amount: amount.active
									}),
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
						}
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': filterColorHex({
								color: theme.colors[color][colorHue],
								colorMode,
								amount: amount.active
							}),

							'&::before': {
								borderColor: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.active
								}),
								background: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.active
								}),
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
						}
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const lightActiveStyles = useMemo<Style>(() => {
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { pushable, hover, active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
							'color': filterColorHex({
								color: theme.colors[color][colorHue],
								colorMode,
								amount: amount.hover
							}),

							'&::before': {
								borderColor: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.hover
								}),
								background: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.hover
								}),
								boxShadow: `0 ${hover}px 0 0 ${filterColorHex({
									color: theme.colors[color][shadowHue],
									colorMode,
									amount: amount.back
								})}`
							},

							'&:active': {
								'color': filterColorHex({
									color: theme.colors[color][colorHue],
									colorMode,
									amount: amount.active
								}),

								'&::before': {
									borderColor: filterColorHex({
										color: theme.colors[color][backgroundHue],
										colorMode,
										amount: amount.active
									}),
									background: filterColorHex({
										color: theme.colors[color][backgroundHue],
										colorMode,
										amount: amount.active
									}),
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
						}
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': filterColorHex({
								color: theme.colors[color][colorHue],
								colorMode,
								amount: amount.active
							}),

							'&::before': {
								borderColor: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.active
								}),
								background: filterColorHex({
									color: theme.colors[color][backgroundHue],
									colorMode,
									amount: amount.active
								}),
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
						}
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const darkActiveStyles = useMemo<Style>(() => {
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { pushable, hover, active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
							'color': filterColorHex({
								color: theme.colors[color][colorHue],
								colorMode,
								amount: amount.hover
							}),

							'&::before': {
								borderColor: filterColorHex({
									color: theme.colors[color][colorHue],
									colorMode,
									amount: amount.hover
								}),
								background: theme.colors.transparent,
								boxShadow: `0 ${hover}px 0 0 ${filterColorHex({
									color: theme.colors[color][colorHue],
									colorMode,
									amount: amount.hover
								})}`
							},

							'&:active': {
								'color': filterColorHex({
									color: theme.colors[color][colorHue],
									colorMode,
									amount: amount.active
								}),

								'&::before': {
									borderColor: filterColorHex({
										color: theme.colors[color][colorHue],
										colorMode,
										amount: amount.active
									}),
									background: theme.colors.transparent,
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
						}
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': filterColorHex({
								color: theme.colors[color][colorHue],
								colorMode,
								amount: amount.active
							}),

							'&::before': {
								borderColor: filterColorHex({
									color: theme.colors[color][colorHue],
									colorMode,
									amount: amount.active
								}),
								background: theme.colors.transparent,
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
						}
					: {}
		};
	}, [amount, color, colorMode, isPushable, isFixed]);

	const outlinedActiveStyles = useMemo<Style>(() => {
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { pushable, hover, active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
							'color': filterColorHex({
								color: theme.colors.gray[colorHue],
								colorMode,
								amount: amount.hover
							}),

							'&::before': {
								borderColor: filterColorHex({
									color: theme.colors.gray[borderHue],
									colorMode,
									amount: amount.hover
								}),
								background: theme.colors.transparent,
								boxShadow: `0 ${hover}px 0 0 ${filterColorHex({
									color: theme.colors.gray[borderHue],
									colorMode,
									amount: amount.hover
								})}`
							},

							'&:active': {
								'color': filterColorHex({
									color: theme.colors.gray[colorHue],
									colorMode,
									amount: amount.active
								}),

								'&::before': {
									borderColor: filterColorHex({
										color: theme.colors.gray[borderHue],
										colorMode,
										amount: amount.active
									}),
									background: theme.colors.transparent,
									boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
								}
							}
						}
					: {},

			'&:active':
				isPushable && !isFixed
					? {
							'color': filterColorHex({
								color: theme.colors.gray[colorHue],
								colorMode,
								amount: amount.active
							}),

							'&::before': {
								borderColor: filterColorHex({
									color: theme.colors.gray[borderHue],
									colorMode,
									amount: amount.active
								}),
								background: theme.colors.transparent,
								boxShadow: `0 ${active}px 0 0 ${theme.colors.transparent}`
							}
						}
					: {}
		};
	}, [colorMode, isPushable, isFixed]);

	const monochromeActiveStyles = useMemo<Style>(() => {
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		const { active } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
							'color': filterColorHex({
								color: theme.colors[color][colorHue],
								colorMode,
								amount: amount.hover
							}),

							'&::before': {
								borderColor: theme.colors.transparent,
								background: theme.colors.transparent,
								boxShadow: 'none'
							},

							'&:active': {
								'color': filterColorHex({
									color: theme.colors[color][colorHue],
									colorMode,
									amount: amount.active
								}),

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
							'color': filterColorHex({
								color: theme.colors[color][colorHue],
								colorMode,
								amount: amount.active
							}),

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
		case 'unstyled':
			return {};
		default:
			return isDisabled ? containedDisabledStyles : isActive ? containedActiveStyles : containedDefaultStyles;
	}
};

export default usePushableOverlayStyles;
