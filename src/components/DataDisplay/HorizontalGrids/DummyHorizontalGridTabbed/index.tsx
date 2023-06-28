import { createContext, FC } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import DummyTabs from '../../../Navigation/Tabs/DummyTabs';
import DummyCard from '../../Cards/DummyCard';
import { spacing as defaultSpacing } from '../common/default/props';

import {
	DummyHorizontalGridTabbedContext as DummyHorizontalGridTabbedContextType,
	DummyHorizontalGridTabbedProps
} from './common/types';

export const DummyHorizontalGridTabbedContext = createContext<DummyHorizontalGridTabbedContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	spacing: defaultSpacing
});

const DummyHorizontalGridTabbed: FC<DummyHorizontalGridTabbedProps> = (props) => {
	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		dummyTabsProps = {},
		dummyCardProps = {},
		spacing = defaultSpacing
	} = props;

	return (
		<DummyHorizontalGridTabbedContext.Provider value={{ color, colorMode, spacing }}>
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
