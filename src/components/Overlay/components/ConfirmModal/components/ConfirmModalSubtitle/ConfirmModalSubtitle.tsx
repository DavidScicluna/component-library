import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useConfirmModalContext } from '../../common/hooks';
import { getConfirmModalSubtitleID } from '../../common/utils';

import { __DEFAULT_CONFIRM_MODAL_SUBTITLE_AS__ } from './common/constants';
import { __KEYS_CONFIRM_MODAL_SUBTITLE_CLASS__ } from './common/keys';
import type { ConfirmModalSubtitleElement, ConfirmModalSubtitleProps, ConfirmModalSubtitleRef } from './common/types';

const ConfirmModalSubtitle = forwardRef(function ConfirmModalSubtitle<Element extends ConfirmModalSubtitleElement>(
	props: ConfirmModalSubtitleProps<Element>,
	ref: ConfirmModalSubtitleRef<Element>
): JSX.Element {
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
		as = __DEFAULT_CONFIRM_MODAL_SUBTITLE_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_CONFIRM_MODAL_SUBTITLE_COLOR__,
		fontSize = 'md',
		fontWeight = 'normal',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
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

// ConfirmModalSubtitle.displayName = 'ConfirmModalSubtitle';

export default ConfirmModalSubtitle;
