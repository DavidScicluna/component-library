import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useCardContext } from '../../common/hooks';

import { DEFAULT_CARD_TITLE_AS } from './common/constants';
import { KEYS_CARD_TITLE_CLASS } from './common/keys';
import type { CardTitleElement, CardTitleProps, CardTitleRef } from './common/types';

const CardTitle = forwardRef(function CardTitle<Element extends CardTitleElement>(
	props: CardTitleProps<Element>,
	ref: CardTitleRef<Element>
): JSX.Element {
	const { colorMode } = useCardContext();

	const DEFAULT_CARD_TITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_CARD_TITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		color = DEFAULT_CARD_TITLE_COLOR,
		fontSize = 'xl',
		fontWeight = 'bold',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_CARD_TITLE_CLASS, { [className]: !!className })}
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
