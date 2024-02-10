import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useCardContext } from '../../common/hooks';

import { __DEFAULT_CARD_TITLE_AS__ } from './common/constants';
import { __KEYS_CARD_TITLE_CLASS__ } from './common/keys';
import type { CardTitleElement, CardTitleProps, CardTitleRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardTitle = forwardRef(function CardTitle<Element extends CardTitleElement>(
	props: CardTitleProps<Element>,
	ref: CardTitleRef<Element>
): JSX.Element {
	const { colorMode } = useCardContext();

	const __DEFAULT_CARD_TITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		as = __DEFAULT_CARD_TITLE_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_CARD_TITLE_COLOR__,
		fontSize = 'xl',
		fontWeight = 'bold',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CARD_TITLE_CLASS__, { [className]: !!className })}
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

// CardTitle.displayName = 'CardTitle';

export default CardTitle;
