import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';
import { getColorHex } from '@common/utils';

import type { DividerThemeAppAppearanceProps } from '@components/DataDisplay';
import { Divider } from '@components/DataDisplay';

import { useCardContext } from '../../common/hooks';

import { __KEYS_CARD_DIVIDER_CLASS__ } from './common/keys';
import type { CardDividerDefaultElement, CardDividerElement, CardDividerProps, CardDividerRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardDivider: PolymorphicComponentWithRef = forwardRef(function CardDivider<
	Element extends CardDividerElement = CardDividerDefaultElement
>(props: CardDividerProps<Element>, ref: CardDividerRef<Element>): ReactElement {
	const { colorMode: __DEFAULT_CARD_DIVIDER_COLORMODE__ } = useAppTheme();

	const {
		color: __DEFAULT_CARD_DIVIDER_COLOR__ = __DEFAULT_COLOR__,
		colorMode: __DEFAULT_CARD_COLORMODE__ = __DEFAULT_CARD_DIVIDER_COLORMODE__,
		variant
	} = useCardContext();

	const {
		children,
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
		<Divider<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CARD_DIVIDER_CLASS__, { [className]: !!className })}
			color={(color || c) as DividerThemeAppAppearanceProps['color']}
			colorMode={colorMode}
			orientation='horizontal'
		>
			{children}
		</Divider>
	);
});

export default <Element extends CardDividerElement = CardDividerDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CardDivider<Element> {...props} />;
