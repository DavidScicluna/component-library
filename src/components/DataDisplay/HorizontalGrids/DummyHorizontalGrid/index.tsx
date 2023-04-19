import { createContext,FC } from 'react';

import DummyCard from '../../../Cards/DummyCard';
import { color as defaultColor, colorMode as defaultColorMode } from '../common/default/props';

import { DummyHorizontalGridContext as DummyHorizontalGridContextType, DummyHorizontalGridProps } from './types';

export const DummyHorizontalGridContext = createContext<DummyHorizontalGridContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const DummyHorizontalGrid: FC<DummyHorizontalGridProps> = (props) => {
	const { children, color = defaultColor, colorMode = defaultColorMode, ...rest } = props;

	return (
		<DummyHorizontalGridContext.Provider value={{ color, colorMode }}>
			<DummyCard {...rest} color={color} colorMode={colorMode}>
				{children}
			</DummyCard>
		</DummyHorizontalGridContext.Provider>
	);
};

export default DummyHorizontalGrid;
