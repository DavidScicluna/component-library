import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useConfirmModalContext } from '../../common/hooks';
import { getConfirmModalSubtitleID } from '../../common/utils';

import { __KEYS_CONFIRM_MODAL_SUBTITLE_CLASS__ } from './common/keys';
import type {
	ConfirmModalSubtitleDefaultElement,
	ConfirmModalSubtitleElement,
	ConfirmModalSubtitleProps,
	ConfirmModalSubtitleRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ConfirmModalSubtitle = forwardRef(function ConfirmModalSubtitle<
	Element extends ConfirmModalSubtitleElement = ConfirmModalSubtitleDefaultElement
>(props: ConfirmModalSubtitleProps<Element>, ref: ConfirmModalSubtitleRef<Element>): ReactElement {
	const { colorMode, id } = useConfirmModalContext();

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
			id={getConfirmModalSubtitleID(id)}
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

ConfirmModalSubtitle.displayName = 'ConfirmModalSubtitle';

export default ConfirmModalSubtitle;
