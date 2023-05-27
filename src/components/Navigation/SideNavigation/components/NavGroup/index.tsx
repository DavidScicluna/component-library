import { FC } from 'react';

import { Text, VStack } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useSideNavigationContext } from '../../common/hooks';

import { NavGroupProps } from './types';

const NavGroup: FC<NavGroupProps> = ({ children, title, ...rest }) => {
	const { colorMode, mode } = useSideNavigationContext();

	const color = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });

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
				color={color}
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
