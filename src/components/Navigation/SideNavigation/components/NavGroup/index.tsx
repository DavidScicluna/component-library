import { FC, useContext } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import { NavGroupProps } from './types';

import { SideNavigationContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode, mode as defaultMode } from '../../common/data/defaultPropValues';
import { SideNavigationContext as SideNavigationContextType } from '../../types';

const NavGroup: FC<NavGroupProps> = ({ children, title, ...rest }) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, mode = defaultMode } =
		useContext<SideNavigationContextType>(SideNavigationContext);

	return (
		<VStack
			width='100%'
			alignItems={mode === 'expanded' ? 'flex-start' : 'center'}
			justifyContent='center'
			spacing={2}
			{...rest}
		>
			<Text
				align={mode === 'expanded' ? 'left' : 'center'}
				color={getColor({ theme, colorMode, type: 'text.primary' })}
				fontSize='sm'
				fontWeight='semibold'
				textTransform='uppercase'
				lineHeight='base'
				letterSpacing='.6px'
				noOfLines={1}
			>
				{title}
			</Text>

			<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={1}>
				{children}
			</VStack>
		</VStack>
	);
};

export default NavGroup;
