import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicComponentWithRef } from '@common/types';

import { Icon } from '@components/DataDisplay';

import { useButtonContext, useButtonFontSize } from '../../common/hooks';

import { __KEYS_BUTTON_ICON_CLASS__ } from './common/keys';
import type { ButtonIconDefaultElement, ButtonIconElement, ButtonIconProps, ButtonIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ButtonIcon: PolymorphicComponentWithRef = forwardRef(function ButtonIcon<
	Element extends ButtonIconElement = ButtonIconDefaultElement
>(props: ButtonIconProps<Element>, ref: ButtonIconRef<Element>): ReactElement {
	const {
		color: __DEFAULT_BUTTON_ICON_COLOR__,
		colorMode: __DEFAULT_BUTTON_ICON_COLORMODE__,
		size
	} = useButtonContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_BUTTON_ICON_COLOR__,
		colorMode = __DEFAULT_BUTTON_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useButtonFontSize({ size });

	return (
		<Icon
			{...rest}
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

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
