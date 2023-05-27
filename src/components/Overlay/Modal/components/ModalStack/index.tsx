import { FC } from 'react';

import { useMediaQuery, VStack } from '@chakra-ui/react';

import { useGetColor, useTheme } from '../../../../../common/hooks';
import Divider from '../../../../Divider';
import { useModalContext } from '../../common/hooks';

import { ModalStackProps } from './common/types';

const ModalStack: FC<ModalStackProps> = (props) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { colorMode, size, spacing: defaultSpacing } = useModalContext();

	const { children, isDivisible = true, p, spacing = defaultSpacing, ...rest } = props;

	const background = useGetColor({ color: 'gray', colorMode, type: 'background' });

	return (
		<VStack
			{...rest}
			width='100%'
			height='auto'
			minHeight={size === 'full' || isSm ? 'inherit' : undefined}
			divider={isDivisible ? <Divider colorMode={colorMode} /> : undefined}
			backgroundColor={background}
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
