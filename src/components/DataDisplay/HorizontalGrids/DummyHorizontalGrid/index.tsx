import { createContext, FC } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import DummyCard from '../../../DataDisplay/Cards/DummyCard';
import { spacing as defaultSpacing } from '../common/default/props';

import { DummyHorizontalGridContext as DummyHorizontalGridContextType, DummyHorizontalGridProps } from './common/types';

export const DummyHorizontalGridContext = createContext<DummyHorizontalGridContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	spacing: defaultSpacing
});

const DummyHorizontalGrid: FC<DummyHorizontalGridProps> = (props) => {
	const { children, color = defaultColor, colorMode = defaultColorMode, spacing = defaultSpacing, ...rest } = props;

	return (
		<DummyHorizontalGridContext.Provider value={{ color, colorMode, spacing }}>
			<DummyCard {...rest} color={color} colorMode={colorMode} spacing={spacing}>
				{children}
			</DummyCard>
		</DummyHorizontalGridContext.Provider>
	);
};

export default DummyHorizontalGrid;
