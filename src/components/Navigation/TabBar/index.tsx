import { FC, createContext } from 'react';

import { useColorMode, HStack } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	direction as defaultDirection
} from './common/data/defaultPropValues';
import Tab from './components/Tab';
import { TabBarContext as TabBarContextType, TabBarProps } from './types';


export const TabBarContext = createContext<TabBarContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	direction: defaultDirection
});

const TabBar: FC<TabBarProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = 'light' } = useColorMode();

	const {
		activeTab,
		color,
		colorMode = colorModeHook,
		direction = 'bottom',
		tabs = [],
		onChange,
		sx,
		...rest
	} = props;

	// TODO: Add context and pass colorMode
	return (
		<TabBarContext.Provider value={{ color, colorMode, direction }}>
			<HStack
				width='100%'
				justify='space-between'
				{...rest}
				spacing={0}
				sx={{
					...merge(
						{
							borderTopWidth: direction === 'bottom' ? '2px' : 0,
							borderBottomWidth: direction === 'top' ? '2px' : 0,
							borderColor: getColor({ theme, colorMode, type: 'divider' }),
							borderStyle: 'solid'
						},
						sx
					)
				}}
			>
				{tabs.map(({ onClick, ...tab }, index: number) => (
					<Tab
						{...tab}
						key={tab.label}
						isActive={activeTab === index}
						onClick={() => {
							onChange(index);

							if (onClick) {
								onClick();
							}
						}}
					/>
				))}
			</HStack>
		</TabBarContext.Provider>
	);
};

export default TabBar;
