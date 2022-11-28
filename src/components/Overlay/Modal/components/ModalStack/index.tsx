import { FC } from 'react';

import { useMediaQuery, VStack } from '@chakra-ui/react';

import Divider from '../../../../Divider';
import { getColor } from '../../../../../common/utils/color';
import { useTheme } from '../../../../../common/hooks';
import { useModalContext } from '../../common/hooks';

import { ModalStackProps } from './types';

const ModalStack: FC<ModalStackProps> = ({ children, isDivisible = true, p, ...rest }) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { colorMode, size, spacing } = useModalContext();

	return (
		<VStack
			{...rest}
			width='100%'
			height='auto'
			divider={isDivisible ? <Divider colorMode={colorMode} /> : undefined}
			backgroundColor={getColor({ theme, colorMode, type: 'background' })}
			borderRadius={size === 'full' || isSm ? 'none' : 'xl'}
			overflow='hidden'
			spacing={spacing}
			p={p || spacing}
		>
			{children}
		</VStack>
	);
};

export default ModalStack;
