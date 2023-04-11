import { FC, createContext } from 'react';

import DummyCard from '../../../Cards/DummyCard';
import DummyTabs from '../../../Navigation/Tabs/DummyTabs';
import { color as defaultColor, colorMode as defaultColorMode } from '../common/default/props';

import {
	DummyHorizontalGridTabbedContext as DummyHorizontalGridTabbedContextType,
	DummyHorizontalGridTabbedProps
} from './types';

export const DummyHorizontalGridTabbedContext = createContext<DummyHorizontalGridTabbedContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const DummyHorizontalGridTabbed: FC<DummyHorizontalGridTabbedProps> = (props) => {
	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		dummyTabsProps = {},
		dummyCardProps = {}
	} = props;

	return (
		<DummyHorizontalGridTabbedContext.Provider value={{ color, colorMode }}>
			<DummyTabs
				{...dummyTabsProps}
				color={color !== 'white' && color !== 'black' && color !== 'gray' ? color : dummyTabsProps.color}
				colorMode={colorMode}
				isFitted
			>
				<DummyCard {...dummyCardProps} color={color} colorMode={colorMode}>
					{children}
				</DummyCard>
			</DummyTabs>
		</DummyHorizontalGridTabbedContext.Provider>
	);
};

export default DummyHorizontalGridTabbed;
