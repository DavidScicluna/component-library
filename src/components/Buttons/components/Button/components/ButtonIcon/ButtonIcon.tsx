import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useButtonContext, useButtonFontSize } from '../../common/hooks';

import { __DEFAULT_BUTTON_ICON_AS__ } from './common/constants';
import { __KEYS_BUTTON_ICON_CLASS__ } from './common/keys';
import type { ButtonIconElement, ButtonIconProps, ButtonIconRef } from './common/types';

const ButtonIcon = forwardRef(function ButtonIcon<Element extends ButtonIconElement>(
	props: ButtonIconProps<Element>,
	ref: ButtonIconRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_BUTTON_ICON_COLOR__,
		colorMode: __DEFAULT_BUTTON_ICON_COLORMODE__,
		size
	} = useButtonContext();

	const {
		as = __DEFAULT_BUTTON_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_BUTTON_ICON_COLOR__,
		colorMode = __DEFAULT_BUTTON_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useButtonFontSize({ size });

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_BUTTON_ICON_CLASS__, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant='unstyled'
		/>
	);
});

// ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
