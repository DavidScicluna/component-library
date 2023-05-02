import { createContext, forwardRef, ReactElement } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import PushableOverlay from '../../Overlay/PushableOverlay';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDivisible as defaultIsDivisible,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../common/default/props';
import useStyles from '../common/styles';

import { DummyCardContext as DummyCardContextType, DummyCardProps, DummyCardRef } from './common/types';
import DummyCardDivider from './components/DummyCardDivider';

export const DummyCardContext = createContext<DummyCardContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	spacing: defaultSpacing,
	variant: defaultVariant
});

const DummyCard = forwardRef<DummyCardRef, DummyCardProps>(function DummyCard(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isDivisible = defaultIsDivisible,
		spacing = defaultSpacing,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, isClickable: false, isDisabled: true, isFixed: false });

	return (
		<DummyCardContext.Provider value={{ color, colorMode, spacing, variant }}>
			<PushableOverlay
				{...rest}
				ref={ref}
				as='div'
				tabIndex={0}
				borderRadius={variant === 'transparent' ? 'none' : 'xl'}
				color={color}
				colorMode={colorMode}
				isDisabled
				isPushable={false}
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
					divider={isDivisible ? <DummyCardDivider /> : undefined}
					spacing={spacing}
				>
					{children}
				</VStack>
			</PushableOverlay>
		</DummyCardContext.Provider>
	);
});

export default DummyCard;
