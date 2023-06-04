import { createContext, forwardRef, ReactElement } from 'react';

import { merge } from 'lodash-es';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { useTheme } from '../../../../common/hooks';
import PushableOverlay from '../../../Overlay/PushableOverlay';
import { useProviderContext } from '../../../Provider/common/hooks';
import {
	isDivisible as defaultIsDivisible,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../common/default/props';
import useStyles from '../common/styles';

import { DummyCardContext as DummyCardContextType, DummyCardProps, DummyCardRef } from './common/types';

export const DummyCardContext = createContext<DummyCardContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isDivisible: defaultIsDivisible,
	spacing: defaultSpacing,
	variant: defaultVariant
});

// TODO: Test out Dummy components props ... test if they contain props that should be only for original components
const DummyCard = forwardRef<DummyCardRef, DummyCardProps>(function DummyCard(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDivisible = defaultIsDivisible,
		spacing = defaultSpacing,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, isClickable: false, isDisabled: true, isFixed: false });

	return (
		<DummyCardContext.Provider value={{ color, colorMode, isDivisible, spacing, variant }}>
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
				{children}
			</PushableOverlay>
		</DummyCardContext.Provider>
	);
});

export default DummyCard;
