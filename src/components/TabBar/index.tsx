import { FC } from 'react';

import { ColorMode, useColorMode, HStack } from '@chakra-ui/react';

import { merge } from 'lodash';

import Tab from './components/Tab';
import { TabBarProps } from './types';

import { useTheme } from '../../common/hooks';
import { getColor } from '../../common/utils/color';

const TabBar: FC<TabBarProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const {
		activeTab,
		color,
		colorMode: colorModeProp,
		direction = 'bottom',
		tabs = [],
		width = '100%',
		justify = 'space-between',
		onChange,
		sx,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	return (
		<HStack
			{...rest}
			width={width}
			justify={justify}
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
