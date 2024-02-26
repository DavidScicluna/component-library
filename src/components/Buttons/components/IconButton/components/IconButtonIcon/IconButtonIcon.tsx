import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useIconButtonContext, useIconButtonFontSize } from '../../common/hooks';

import { DEFAULT_ICON_BUTTON_ICON_AS, DEFAULT_ICON_BUTTON_ICON_VARIANT } from './common/constants';
import { KEYS_ICON_BUTTON_ICON_CLASS } from './common/keys';
import type { IconButtonIconElement, IconButtonIconProps, IconButtonIconRef } from './common/types';

const IconButtonIcon = forwardRef(function IconButtonIcon<Element extends IconButtonIconElement>(
	props: IconButtonIconProps<Element>,
	ref: IconButtonIconRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_ICON_BUTTON_ICON_COLOR,
		colorMode: DEFAULT_ICON_BUTTON_ICON_COLORMODE,
		size
	} = useIconButtonContext();

	const {
		as = DEFAULT_ICON_BUTTON_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_ICON_BUTTON_ICON_COLOR,
		colorMode = DEFAULT_ICON_BUTTON_ICON_COLORMODE,
		variant = DEFAULT_ICON_BUTTON_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useIconButtonFontSize({ size });

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_ICON_BUTTON_ICON_CLASS, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant={variant}
		/>
	);
});

// IconButtonIcon.displayName = 'IconButtonIcon';

export default IconButtonIcon;
