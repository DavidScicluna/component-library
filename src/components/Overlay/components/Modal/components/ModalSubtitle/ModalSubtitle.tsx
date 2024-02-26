import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useModalContext } from '../../common/hooks';
import { getModalSubtitleID } from '../../common/utils';

import { DEFAULT_MODAL_SUBTITLE_AS } from './common/constants';
import { KEYS_MODAL_SUBTITLE_CLASS } from './common/keys';
import type { ModalSubtitleElement, ModalSubtitleProps, ModalSubtitleRef } from './common/types';

const ModalSubtitle = forwardRef(function ModalSubtitle<Element extends ModalSubtitleElement>(
	props: ModalSubtitleProps<Element>,
	ref: ModalSubtitleRef<Element>
): JSX.Element {
	const { colorMode, id } = useModalContext();

	const DEFAULT_MODAL_SUBTITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_MODAL_SUBTITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		color = DEFAULT_MODAL_SUBTITLE_COLOR,
		fontSize = 'sm',
		fontWeight = 'normal',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			id={getModalSubtitleID(id)}
			className={classNames(KEYS_MODAL_SUBTITLE_CLASS, { [className]: !!className })}
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

// ModalSubtitle.displayName = 'ModalSubtitle';

export default ModalSubtitle;
