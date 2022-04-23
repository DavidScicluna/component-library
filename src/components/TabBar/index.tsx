import { FC } from 'react';

import { ColorMode, useColorMode, HStack } from '@chakra-ui/react';

import Tab from './components/Tab';
import { TabBarProps } from './types';

const TabBar: FC<TabBarProps> = (props) => {
	const { colorMode: colorModeHook } = useColorMode();

	const { color, colorMode: colorModeProp, activeTab, tabs = [], onChange } = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	return (
		<HStack
			width='100%'
			justify='space-between'
			position='fixed'
			bottom={0}
			spacing={0}
			p={2}
			sx={{
				borderTopWidth: '2px',
				borderTopColor: `gray.${colorMode === 'light' ? 200 : 700}`,
				borderTopStyle: 'solid'
			}}
		>
			{tabs.map(({ onClick, ...tab }, index: number) => (
				<Tab
					{...tab}
					key={tab.label}
					color={color}
					colorMode={colorMode}
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
	);
};

export default TabBar;
