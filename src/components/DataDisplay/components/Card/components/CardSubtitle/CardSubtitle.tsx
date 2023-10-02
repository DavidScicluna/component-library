import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useCardContext } from '../../common/hooks';

import { __KEYS_CARD_SUBTITLE_CLASS__ } from './common/keys';
import type {
	CardSubtitleDefaultElement,
	CardSubtitleElement,
	CardSubtitleProps,
	CardSubtitleRef
} from './common/types';

const CardSubtitle = forwardRef(function CardSubtitle<Element extends CardSubtitleElement = CardSubtitleDefaultElement>(
	props: CardSubtitleProps<Element>,
	ref: CardSubtitleRef<Element>
): ReactElement {
	const { colorMode } = useCardContext();

	const __DEFAULT_CARD_SUBTITLE_COLOR__ = useGetColor({
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
		color = __DEFAULT_CARD_SUBTITLE_COLOR__,
		fontSize = 'sm',
		fontWeight = 'normal',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CARD_SUBTITLE_CLASS__, { [className]: !!className })}
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

CardSubtitle.displayName = 'CardSubtitle';

export default CardSubtitle;
