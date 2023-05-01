import { createContext, FC, useState } from 'react';

import { method as defaultMethod } from '../../../../common/default/props';
import { useDebounce } from '../../../../common/hooks';
import Card from '../../../Cards/OriginalCard/';
import { HorizontalScrollAPIContext } from '../../../HorizontalScroll/common/types';
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
	const [scroll, setScroll] = useState<HorizontalScrollAPIContext>(defaultScroll);
	const scrollDebounced = useDebounce(scroll, 'ultra-fast');

	const { children, color = defaultColor, colorMode = defaultColorMode, spacing = defaultSpacing, ...rest } = props;

	return (
		<HorizontalGridContext.Provider
			value={{ color, colorMode, scroll: scrollDebounced, onSetScroll: (scroll) => setScroll(scroll), spacing }}
		>
			<Card {...rest} color={color} colorMode={colorMode}>
				{children}
			</Card>
		</HorizontalGridContext.Provider>
	);
};

export default HorizontalGrid;
