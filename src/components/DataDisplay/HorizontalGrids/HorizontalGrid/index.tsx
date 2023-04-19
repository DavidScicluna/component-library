import { createContext, FC, useState } from 'react';

import { method as defaultMethod } from '../../../../common/default/props';
import { useDebounce } from '../../../../common/hooks';
import Card from '../../../Cards/OriginalCard/';
import { HorizontalScrollAPIContext } from '../../../HorizontalScroll/types';
import { color as defaultColor, colorMode as defaultColorMode, scroll as defaultScroll } from '../common/default/props';

import { HorizontalGridContext as HorizontalGridContextType, HorizontalGridProps } from './types';

export const HorizontalGridContext = createContext<HorizontalGridContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	scroll: defaultScroll,
	onSetScroll: defaultMethod
});

const HorizontalGrid: FC<HorizontalGridProps> = (props) => {
	const [scroll, setScroll] = useState<HorizontalScrollAPIContext>(defaultScroll);
	const scrollDebounced = useDebounce(scroll, 'ultra-fast');

	const { children, color = defaultColor, colorMode = defaultColorMode, ...rest } = props;

	return (
		<HorizontalGridContext.Provider
			value={{ color, colorMode, scroll: scrollDebounced, onSetScroll: (scroll) => setScroll(scroll) }}
		>
			<Card {...rest} color={color} colorMode={colorMode}>
				{children}
			</Card>
		</HorizontalGridContext.Provider>
	);
};

export default HorizontalGrid;
