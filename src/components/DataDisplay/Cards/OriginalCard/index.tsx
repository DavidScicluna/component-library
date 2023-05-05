import { createContext, forwardRef, ReactElement } from 'react';

import { VStack } from '@chakra-ui/react';

import merge from 'lodash-es/merge';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { useTheme } from '../../../../common/hooks';
import PushableOverlay from '../../../Overlay/PushableOverlay';
import { useProviderContext } from '../../../Provider/common/hooks';
import {
	isActive as defaultIsActive,
	isClickable as defaultIsClickable,
	isDisabled as defaultIsDisabled,
	isDivisible as defaultIsDivisible,
	isFixed as defaultIsFixed,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../common/default/props';
import useStyles from '../common/styles';

import { CardContext as CardContextType, CardProps, CardRef } from './common/types';
import CardDivider from './components/CardDivider';

export const CardContext = createContext<CardContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	spacing: defaultSpacing,
	variant: defaultVariant
});

const Card = forwardRef<CardRef, CardProps>(function Card(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		isClickable = defaultIsClickable,
		isDivisible = defaultIsDivisible,
		isDisabled = defaultIsDisabled,
		isFixed = defaultIsFixed,
		spacing = defaultSpacing,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, isClickable, isDisabled, isFixed });

	return (
		<CardContext.Provider value={{ color, colorMode, spacing, variant }}>
			<PushableOverlay
				{...rest}
				ref={ref}
				as={isClickable ? 'button' : 'div'}
				tabIndex={0}
				borderRadius={variant === 'transparent' ? 'none' : 'xl'}
				color={color}
				colorMode={colorMode}
				isActive={isClickable && !isFixed && isActive}
				isDisabled={isClickable && isDisabled}
				isFixed={isClickable && isFixed}
				isPushable={isClickable}
				variant={variant}
				sx={merge(style.card, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<VStack
					width='100%'
					height='100%'
					overflowY='hidden'
					overflowX='hidden'
					divider={isDivisible ? <CardDivider /> : undefined}
					spacing={spacing}
				>
					{children}
				</VStack>
			</PushableOverlay>
		</CardContext.Provider>
	);
});

export default Card;
