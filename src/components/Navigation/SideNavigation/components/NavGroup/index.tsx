import { FC } from 'react';

import { Text,VStack } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { useSideNavigationContext } from '../../common/hooks';

import { NavGroupProps } from './types';

const NavGroup: FC<NavGroupProps> = ({ children, title, ...rest }) => {
	const theme = useTheme();

	const { colorMode, mode } = useSideNavigationContext();

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
