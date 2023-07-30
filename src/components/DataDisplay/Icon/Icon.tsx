import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { getIconFontFamily } from '@common/utils';

import Skeleton from '@components/Feedback/Skeleton';
import { Center } from '@components/Layout';
import useIconFontContext from '@components/Provider/common/hooks/useIconFontContext';

import { __DEFAULT_ICON_CATEGORY__, __DEFAULT_ICON_VARIANT__ } from './common/constants';
import { useGetIconClasses } from './common/hooks';
import type { IconElement, IconProps, IconRef } from './common/types';

const Icon = forwardRef(function Icon<Element extends IconElement>(
	props: IconProps<Element>,
	ref: IconRef<Element>
): ReactElement {
	const fonts = useIconFontContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		icon,
		category = __DEFAULT_ICON_CATEGORY__,
		variant = __DEFAULT_ICON_VARIANT__,
		sx,
		...rest
	} = props;

	const hasIcon = !children && !!icon;

	const classes = useGetIconClasses<Element>({ color, colorMode, category, variant });

	return (
		<Skeleton color={color} colorMode={colorMode} isLoaded={hasIcon ? fonts[category] : true} radius='full'>
			<Center<Element>
				{...rest}
				ref={ref}
				// TODO: Maybe add classnames to all component for example 'ds-cl-icon', 'ds-cl-box', etc
				className={classNames(classes, 'ds-cl-icon', {
					[className]: !!className
				})}
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
				// fontWeight='normal'
				// lineHeight='normal'
				// letterSpacing='normal'
				// textTransform='none'
				// textDecoration='none'
			>
				{children || icon || null}
			</Center>
		</Skeleton>
	);
});

export default Icon;
