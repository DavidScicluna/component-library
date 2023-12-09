import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Text } from '@components/Typography';

import { useCardContext } from '../../common/hooks';

import { __KEYS_CARD_SUBTITLE_CLASS__ } from './common/keys';
import type {
	CardSubtitleDefaultElement,
	CardSubtitleElement,
	CardSubtitleProps,
	CardSubtitleRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardSubtitle: PolymorphicComponentWithRef = forwardRef(function CardSubtitle<
	Element extends CardSubtitleElement = CardSubtitleDefaultElement
>(props: CardSubtitleProps<Element>, ref: CardSubtitleRef<Element>): ReactElement {
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

export default <Element extends CardSubtitleElement = CardSubtitleDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CardSubtitle<Element> {...props} />;
