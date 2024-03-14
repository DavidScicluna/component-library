import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_COLOR } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import { getColorHex } from '@common/utils';

import type { DividerThemeAppearanceProps } from '@components/DataDisplay';
import { DEFAULT_CARD_DIVIDER_AS, Divider } from '@components/DataDisplay';

import { useCardContext } from '../../common/hooks';

import { KEYS_CARD_DIVIDER_CLASS } from './common/keys';
import type { CardDividerElement, CardDividerProps, CardDividerRef } from './common/types';

const CardDivider = forwardRef(function CardDivider<Element extends CardDividerElement>(
	props: CardDividerProps<Element>,
	ref: CardDividerRef<Element>
): JSX.Element {
	const { colorMode: DEFAULT_CARD_DIVIDER_COLORMODE } = useAppTheme();

	const {
		color: DEFAULT_CARD_DIVIDER_COLOR = DEFAULT_COLOR,
		colorMode: DEFAULT_CARD_COLORMODE = DEFAULT_CARD_DIVIDER_COLORMODE,
		variant
	} = useCardContext();

	const {
		children,
		as = DEFAULT_CARD_DIVIDER_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode = DEFAULT_CARD_COLORMODE,
		...rest
	} = props;

	const c = useMemo<string>(() => {
		switch (variant) {
			case 'light':
			case 'dark':
			case 'outlined':
			case 'transparent':
				return getColorHex({ color: DEFAULT_CARD_DIVIDER_COLOR, colorMode, hueType: 'color' });
			case 'monochrome':
			default:
				return getColorHex({ color: 'gray', colorMode, hueType: 'divider' });
		}
	}, [color, colorMode, variant]);

	return (
		<Divider
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_CARD_DIVIDER_CLASS, { [className]: !!className })}
			color={(color || c) as DividerThemeAppearanceProps['color']}
			colorMode={colorMode}
			orientation='horizontal'
		>
			{children}
		</Divider>
	);
});

export default CardDivider;
