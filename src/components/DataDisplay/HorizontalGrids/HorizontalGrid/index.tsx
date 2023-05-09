import { createContext, FC } from 'react';

import { method as defaultMethod } from '../../../../common/default/props';
import Card from '../../../DataDisplay/Cards/OriginalCard/';
import { useSetHorizontalScrollAPIContext } from '../../../HorizontalScroll/common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	scroll as defaultScroll,
	spacing as defaultSpacing
} from '../common/default/props';

import { HorizontalGridContext as HorizontalGridContextType, HorizontalGridProps } from './common/types';

export const HorizontalGridContext = createContext<HorizontalGridContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	scroll: defaultScroll,
	onSetScroll: defaultMethod,
	spacing: defaultSpacing
});

const HorizontalGrid: FC<HorizontalGridProps> = (props) => {
	const [scroll, setScroll] = useSetHorizontalScrollAPIContext();

	const { children, color = defaultColor, colorMode = defaultColorMode, spacing = defaultSpacing, ...rest } = props;

	return (
		<HorizontalGridContext.Provider
			value={{ color, colorMode, scroll, onSetScroll: (scroll) => setScroll(scroll), spacing }}
		>
			<Card {...rest} color={color} colorMode={colorMode}>
				{children}
			</Card>
		</HorizontalGridContext.Provider>
	);
};

export default HorizontalGrid;
