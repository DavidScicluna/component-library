import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useConfirmModalContext } from '../../common/hooks';

import { __DEFAULT_CONFIRM_MODAL_ICON_AS__ } from './common/constants';
import { __KEYS_CONFIRM_MODAL_ICON_CLASS__ } from './common/keys';
import type { ConfirmModalIconElement, ConfirmModalIconProps, ConfirmModalIconRef } from './common/types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ConfirmModalIcon = forwardRef(function ConfirmModalIcon<Element extends ConfirmModalIconElement>(
	props: ConfirmModalIconProps<Element>,
	ref: ConfirmModalIconRef<Element>
): ReactElement {
	const { color: __DEFAULT_CONFIRM_MODAL_ICON_COLOR__, colorMode: __DEFAULT_CONFIRM_MODAL_ICON_COLORMODE__ } =
		useConfirmModalContext();

	const {
		as = __DEFAULT_CONFIRM_MODAL_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_CONFIRM_MODAL_ICON_COLOR__,
		colorMode = __DEFAULT_CONFIRM_MODAL_ICON_COLORMODE__,
		...rest
	} = props;

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			// TODO: Maybe create a function that generates class names
			className={classNames(__KEYS_CONFIRM_MODAL_ICON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
		/>
	);
});

// ConfirmModalIcon.displayName = 'ConfirmModalIcon';

export default ConfirmModalIcon;
