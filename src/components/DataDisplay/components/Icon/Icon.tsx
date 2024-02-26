import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import { getIconFontFamily } from '@common/utils';

import { Skeleton } from '@components/Feedback';
import type { CenterProps } from '@components/Layout';
import { Center } from '@components/Layout';
import useIconFontContext from '@components/Provider/common/hooks/useIconFontContext';

import {
	DEFAULT_ICON_AS,
	DEFAULT_ICON_CATEGORY,
	DEFAULT_ICON_ICON,
	DEFAULT_ICON_RADIUS,
	DEFAULT_ICON_SIZE,
	DEFAULT_ICON_VARIANT
} from './common/constants';
import { useIconClasses, useIconResponsiveValues, useIconStyles } from './common/hooks';
import { KEYS_ICON_CLASS } from './common/keys';
import type { IconElement, IconProps, IconRef } from './common/types';

const Icon = forwardRef(function Icon<Element extends IconElement>(
	props: IconProps<Element>,
	ref: IconRef<Element>
): JSX.Element {
	const fonts = useIconFontContext();

	const {
		children,
		as = DEFAULT_ICON_AS,
		className = DEFAULT_CLASSNAME,
		w = 'auto',
		h = 'auto',
		color,
		colorMode,
		icon: iconProp = DEFAULT_ICON_ICON,
		category: categoryProp = DEFAULT_ICON_CATEGORY,
		radius: radiusProp = DEFAULT_ICON_RADIUS,
		size: sizeProp = DEFAULT_ICON_SIZE,
		variant: variantProp = DEFAULT_ICON_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const { icon, category, radius, size, variant } = useIconResponsiveValues<Element>({
		icon: iconProp,
		category: categoryProp,
		radius: radiusProp,
		size: sizeProp,
		variant: variantProp
	});

	const hasIcon = !children && !!icon;

	const classes = useIconClasses<Element>({ color, colorMode, radius, size, variant });
	const styles = useIconStyles<Element>({ size });

	return (
		<Skeleton color={color} colorMode={colorMode} isLoaded={hasIcon ? fonts[category] : true} radius='full'>
			<Center
				{...(rest as CenterProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEYS_ICON_CLASS, classes, { [className]: !!className })}
				w={w}
				h={h}
				sx={merge(
					hasIcon
						? {
								fontFamily: getIconFontFamily(category),
								fontSize: hasIcon && !fonts[category] ? '0px' : null
							}
						: {},
					styles,
					sx
				)}
			>
				{children || icon || null}
			</Center>
		</Skeleton>
	);
});

// Icon.displayName = 'Icon';

export default Icon;
