import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { getIconFontFamily } from '@common/utils';

import { Skeleton } from '@components/Feedback';
import { Center } from '@components/Layout';
import useIconFontContext from '@components/Provider/common/hooks/useIconFontContext';

import {
	__DEFAULT_ICON_CATEGORY__,
	__DEFAULT_ICON_RADIUS__,
	__DEFAULT_ICON_SIZE__,
	__DEFAULT_ICON_VARIANT__
} from './common/constants';
import { useIconClasses } from './common/hooks';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from './common/types';

const Icon = forwardRef(function Icon<Element extends IconElement = IconDefaultElement>(
	props: IconProps<Element>,
	ref: IconRef<Element>
): ReactElement {
	const fonts = useIconFontContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		w = 'auto',
		h = 'auto',
		color,
		colorMode,
		icon,
		category = __DEFAULT_ICON_CATEGORY__,
		radius = __DEFAULT_ICON_RADIUS__,
		size = __DEFAULT_ICON_SIZE__,
		variant = __DEFAULT_ICON_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const hasIcon = !children && !!icon;

	const classes = useIconClasses<Element>({ color, colorMode, radius, size, variant });

	return (
		<Skeleton color={color} colorMode={colorMode} isLoaded={hasIcon ? fonts[category] : true} radius='full'>
			<Center<Element>
				{...rest}
				ref={ref}
				className={classNames(`${__DEFAULT_CLASS_PREFIX__}-icon`, classes, {
					[className]: !!className
				})}
				w={w}
				h={h}
				sx={
					hasIcon
						? merge(
								{
									fontFamily: getIconFontFamily(category),
									fontSize: hasIcon && !fonts[category] ? '0px' : null
								},
								sx
						  )
						: sx
				}
			>
				{children || icon || null}
			</Center>
		</Skeleton>
	);
});

export default Icon;
