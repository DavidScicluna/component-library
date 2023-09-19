import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';
import { Text } from '@components/Typography';

import { __KEYS_MODAL_SUBTITLE_CLASS__ } from './common/keys';
import type {
	ModalSubtitleDefaultElement,
	ModalSubtitleElement,
	ModalSubtitleProps,
	ModalSubtitleRef
} from './common/types';

const ModalSubtitle = forwardRef(function ModalSubtitle<
	Element extends ModalSubtitleElement = ModalSubtitleDefaultElement
>(props: ModalSubtitleProps<Element>, ref: ModalSubtitleRef<Element>): ReactElement {
	const { colorMode } = useModalContext();

	const __DEFAULT_MODAL_SUBTITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_MODAL_SUBTITLE_COLOR__,
		fontSize = 'sm',
		fontWeight = 'normal',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_MODAL_SUBTITLE_CLASS__, { [className]: !!className })}
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

ModalSubtitle.displayName = 'ModalSubtitle';

export default ModalSubtitle;
