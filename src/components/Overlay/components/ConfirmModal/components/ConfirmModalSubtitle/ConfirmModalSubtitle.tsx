import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useConfirmModalContext } from '../../common/hooks';
import { getConfirmModalSubtitleID } from '../../common/utils';

import { DEFAULT_CONFIRM_MODAL_SUBTITLE_AS } from './common/constants';
import { KEYS_CONFIRM_MODAL_SUBTITLE_CLASS } from './common/keys';
import type { ConfirmModalSubtitleElement, ConfirmModalSubtitleProps, ConfirmModalSubtitleRef } from './common/types';

const ConfirmModalSubtitle = forwardRef(function ConfirmModalSubtitle<Element extends ConfirmModalSubtitleElement>(
	props: ConfirmModalSubtitleProps<Element>,
	ref: ConfirmModalSubtitleRef<Element>
): JSX.Element {
	const { colorMode, id } = useConfirmModalContext();

	const DEFAULT_CONFIRM_MODAL_SUBTITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_CONFIRM_MODAL_SUBTITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'center',
		color = DEFAULT_CONFIRM_MODAL_SUBTITLE_COLOR,
		fontSize = 'md',
		fontWeight = 'normal',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			id={getConfirmModalSubtitleID(id)}
			className={classNames(KEYS_CONFIRM_MODAL_SUBTITLE_CLASS, { [className]: !!className })}
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
