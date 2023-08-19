import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Icon } from '@components/DataDisplay';

import { useConfirmModalContext } from '../../common/hooks';

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
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-confirm-modal-icon`, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
		/>
	);
});

export default ConfirmModalIcon;
