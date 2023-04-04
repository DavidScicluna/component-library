import { ReactElement, createContext, forwardRef } from 'react';

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
import { TabBarContext as TabBarContextType, TabBarRef, TabBarProps } from './types';

export const TabBarContext = createContext<TabBarContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	direction: defaultDirection
});

const TabBar = forwardRef<TabBarRef, TabBarProps>(function TabBar(props, ref): ReactElement {
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

	return (
		<TabBarContext.Provider value={{ color, colorMode, direction }}>
			<HStack
				{...rest}
				ref={ref}
				width='100%'
				justify='space-between'
				spacing={0}
				sx={{
					...merge(
						{
							borderTopWidth: `${direction === 'bottom' ? 2 : 0}px`,
							borderBottomWidth: `${direction === 'top' ? 2 : 0}px`,
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
});

export default TabBar;
