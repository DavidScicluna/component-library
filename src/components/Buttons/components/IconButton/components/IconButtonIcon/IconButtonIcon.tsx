import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Icon } from '@components/DataDisplay';

import { useIconButtonContext, useIconButtonFontSize } from '../../common/hooks';

import { __KEYS_ICON_BUTTON_ICON_CLASS__ } from './common/keys';
import type {
	IconButtonIconDefaultElement,
	IconButtonIconElement,
	IconButtonIconProps,
	IconButtonIconRef
} from './common/types';

const IconButtonIcon = forwardRef(function IconButtonIcon<
	Element extends IconButtonIconElement = IconButtonIconDefaultElement
>(props: IconButtonIconProps<Element>, ref: IconButtonIconRef<Element>): ReactElement {
	const {
		color: __DEFAULT_ICON_BUTTON_ICON_COLOR__,
		colorMode: __DEFAULT_ICON_BUTTON_ICON_COLORMODE__,
		size
	} = useIconButtonContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_ICON_BUTTON_ICON_COLOR__,
		colorMode = __DEFAULT_ICON_BUTTON_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useIconButtonFontSize({ size });

	return (
		<Icon
			{...rest}
			ref={ref}
			className={classNames(__KEYS_ICON_BUTTON_ICON_CLASS__, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant='unstyled'
		/>
	);
});

IconButtonIcon.displayName = 'IconButtonIcon';

export default IconButtonIcon;
