import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Icon } from '@components/DataDisplay';

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_ICON_CLASS__ } from './common/keys';
import type {
	ConfirmModalIconDefaultElement,
	ConfirmModalIconElement,
	ConfirmModalIconProps,
	ConfirmModalIconRef
} from './common/types';

const ConfirmModalIcon = forwardRef(function ConfirmModalIcon<
	Element extends ConfirmModalIconElement = ConfirmModalIconDefaultElement
>(props: ConfirmModalIconProps<Element>, ref: ConfirmModalIconRef<Element>): ReactElement {
	const { color: __DEFAULT_CONFIRM_MODAL_ICON_COLOR__, colorMode: __DEFAULT_CONFIRM_MODAL_ICON_COLORMODE__ } =
		useConfirmModalContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_CONFIRM_MODAL_ICON_COLOR__,
		colorMode = __DEFAULT_CONFIRM_MODAL_ICON_COLORMODE__,
		...rest
	} = props;

	return (
		<Icon
			{...rest}
			ref={ref}
			// TODO: Maybe create a function that generates class names
			className={classNames(__KEYS_CONFIRM_MODAL_ICON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
		/>
	);
});

export default ConfirmModalIcon;
