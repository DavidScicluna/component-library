import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useButtonContext, useButtonFontSize } from '../../common/hooks';

import { DEFAULT_BUTTON_ICON_AS, DEFAULT_BUTTON_ICON_VARIANT } from './common/constants';
import { KEYS_BUTTON_ICON_CLASS } from './common/keys';
import type { ButtonIconElement, ButtonIconProps, ButtonIconRef } from './common/types';

const ButtonIcon = forwardRef(function ButtonIcon<Element extends ButtonIconElement>(
	props: ButtonIconProps<Element>,
	ref: ButtonIconRef<Element>
): JSX.Element {
	const { color: DEFAULT_BUTTON_ICON_COLOR, colorMode: DEFAULT_BUTTON_ICON_COLORMODE, size } = useButtonContext();

	const {
		as = DEFAULT_BUTTON_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_BUTTON_ICON_COLOR,
		colorMode = DEFAULT_BUTTON_ICON_COLORMODE,
		variant = DEFAULT_BUTTON_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useButtonFontSize({ size });

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_BUTTON_ICON_CLASS, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant={variant}
		/>
	);
});

// ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
