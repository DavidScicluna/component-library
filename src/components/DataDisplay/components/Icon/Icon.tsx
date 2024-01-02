import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';
import { getIconFontFamily } from '@common/utils';

import { Skeleton } from '@components/Feedback';
import { Center } from '@components/Layout';
import useIconFontContext from '@components/Provider/common/hooks/useIconFontContext';

import {
	__DEFAULT_ICON_CATEGORY__,
	__DEFAULT_ICON_ICON__,
	__DEFAULT_ICON_RADIUS__,
	__DEFAULT_ICON_SIZE__,
	__DEFAULT_ICON_VARIANT__
} from './common/constants';
import { useIconClasses, useIconResponsiveValues, useIconStyles } from './common/hooks';
import { __KEYS_ICON_CLASS__ } from './common/keys';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Icon: PolymorphicComponentWithRef = forwardRef(function Icon<Element extends IconElement = IconDefaultElement>(
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
		icon: iconProp = __DEFAULT_ICON_ICON__,
		category: categoryProp = __DEFAULT_ICON_CATEGORY__,
		radius: radiusProp = __DEFAULT_ICON_RADIUS__,
		size: sizeProp = __DEFAULT_ICON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const { icon, category, radius, size, variant } = useIconResponsiveValues({
		icon: iconProp,
		category: categoryProp,
		radius: radiusProp,
		size: sizeProp,
		variant: variantProp
	});

	const hasIcon = !children && !!icon;

	const classes = useIconClasses({ color, colorMode, radius, size, variant });
	const styles = useIconStyles({ size });

	return (
		<Skeleton color={color} colorMode={colorMode} isLoaded={hasIcon ? fonts[category] : true} radius='full'>
			<Center<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_ICON_CLASS__, classes, { [className]: !!className })}
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

Icon.displayName = 'Icon';

export default <Element extends IconElement = IconDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Icon<Element> {...props} />;
