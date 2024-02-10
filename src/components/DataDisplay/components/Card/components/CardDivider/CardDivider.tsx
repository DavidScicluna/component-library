import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import { getColorHex } from '@common/utils';

import type { DividerProps, DividerThemeAppearanceProps } from '@components/DataDisplay';
import { __DEFAULT_CARD_DIVIDER_AS__, Divider } from '@components/DataDisplay';

import { useCardContext } from '../../common/hooks';

import { __KEYS_CARD_DIVIDER_CLASS__ } from './common/keys';
import type { CardDividerElement, CardDividerProps, CardDividerRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardDivider = forwardRef(function CardDivider<Element extends CardDividerElement>(
	props: CardDividerProps<Element>,
	ref: CardDividerRef<Element>
): JSX.Element {
	const { colorMode: __DEFAULT_CARD_DIVIDER_COLORMODE__ } = useAppTheme();

	const {
		color: __DEFAULT_CARD_DIVIDER_COLOR__ = __DEFAULT_COLOR__,
		colorMode: __DEFAULT_CARD_COLORMODE__ = __DEFAULT_CARD_DIVIDER_COLORMODE__,
		variant
	} = useCardContext();

	const {
		children,
		as = __DEFAULT_CARD_DIVIDER_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode = __DEFAULT_CARD_COLORMODE__,
		...rest
	} = props;

	const c = useMemo<string>(() => {
		switch (variant) {
			case 'light':
			case 'dark':
			case 'outlined':
			case 'transparent':
				return getColorHex({ color: __DEFAULT_CARD_DIVIDER_COLOR__, colorMode, hueType: 'color' });
			case 'monochrome':
			default:
				return getColorHex({ color: 'gray', colorMode, hueType: 'divider' });
		}
	}, [color, colorMode, variant]);

	return (
		<Divider
			{...(rest as DividerProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CARD_DIVIDER_CLASS__, { [className]: !!className })}
			color={(color || c) as DividerThemeAppearanceProps['color']}
			colorMode={colorMode}
			orientation='horizontal'
		>
			{children}
		</Divider>
	);
});

export default CardDivider;
