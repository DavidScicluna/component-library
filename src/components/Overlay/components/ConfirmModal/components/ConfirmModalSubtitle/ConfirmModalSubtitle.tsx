import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_SUBTITLE_CLASS__ } from './common/keys';
import type {
	ConfirmModalSubtitleDefaultElement,
	ConfirmModalSubtitleElement,
	ConfirmModalSubtitleProps,
	ConfirmModalSubtitleRef
} from './common/types';

const ConfirmModalSubtitle = forwardRef(function ConfirmModalSubtitle<
	Element extends ConfirmModalSubtitleElement = ConfirmModalSubtitleDefaultElement
>(props: ConfirmModalSubtitleProps<Element>, ref: ConfirmModalSubtitleRef<Element>): ReactElement {
	const { colorMode } = useConfirmModalContext();

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
			className={classNames(__KEYS_CONFIRM_MODAL_SUBTITLE_CLASS__, { [className]: !!className })}
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
