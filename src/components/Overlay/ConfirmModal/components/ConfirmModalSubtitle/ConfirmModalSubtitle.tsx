import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';
import { Text } from '@components/Typography';

import type {
	ConfirmModalSubtitleDefaultElement,
	ConfirmModalSubtitleElement,
	ConfirmModalSubtitleProps,
	ConfirmModalSubtitleRef
} from './common/types';

const ConfirmModalSubtitle = forwardRef(function ConfirmModalSubtitle<
	Element extends ConfirmModalSubtitleElement = ConfirmModalSubtitleDefaultElement
>(props: ConfirmModalSubtitleProps<Element>, ref: ConfirmModalSubtitleRef<Element>): ReactElement {
	const { colorMode } = useModalContext();

	const __DEFAULT_CONFIRM_MODAL_SUBTITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_CONFIRM_MODAL_SUBTITLE_COLOR__,
		fontSize = 'md',
		fontWeight = 'normal',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-confirm-modal-subtitle`, { [className]: !!className })}
			align={align}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineClamp={lineClamp}
		>
			{children}
		</Text>
	);
});

export default ConfirmModalSubtitle;
