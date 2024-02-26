import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useCardContext } from '../../common/hooks';

import { DEFAULT_CARD_SUBTITLE_AS } from './common/constants';
import { KEYS_CARD_SUBTITLE_CLASS } from './common/keys';
import type { CardSubtitleElement, CardSubtitleProps, CardSubtitleRef } from './common/types';

const CardSubtitle = forwardRef(function CardSubtitle<Element extends CardSubtitleElement>(
	props: CardSubtitleProps<Element>,
	ref: CardSubtitleRef<Element>
): JSX.Element {
	const { colorMode } = useCardContext();

	const DEFAULT_CARD_SUBTITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_CARD_SUBTITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		color = DEFAULT_CARD_SUBTITLE_COLOR,
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
			className={classNames(KEYS_CARD_SUBTITLE_CLASS, { [className]: !!className })}
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

// CardSubtitle.displayName = 'CardSubtitle';

export default CardSubtitle;
