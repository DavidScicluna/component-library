import { FC, useContext } from 'react';

import { useMediaQuery, ModalContent, VStack } from '@chakra-ui/react';

import {
	colorMode as defaultColorMode,
	size as defaultSize,
	spacing as defaultSpacing
} from '../../common/data/defaultPropValues';
import Divider from '../../../../Divider';
import { getColor } from '../../../../../common/utils/color';
import { useTheme } from '../../../../../common/hooks';
import { ModalContext } from '../..';
import { ModalContext as ModalContextType } from '../../types';

import { ModalStackProps } from './types';

const ModalStack: FC<ModalStackProps> = ({ children, isDivisible = true, p, ...rest }) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const {
		colorMode = defaultColorMode,
		size = defaultSize,
		spacing = defaultSpacing
	} = useContext<ModalContextType>(ModalContext);

	return (
		<ModalContent
			backgroundColor={getColor({ theme, colorMode, type: 'background' })}
			borderRadius={size === 'full' || isSm ? 'none' : 'xl'}
		>
			<VStack
				{...rest}
				width='100%'
				divider={isDivisible ? <Divider colorMode={colorMode} /> : undefined}
				backgroundColor={getColor({ theme, colorMode, type: 'background' })}
				borderRadius={size === 'full' || isSm ? 'none' : 'xl'}
				spacing={spacing}
				p={p || spacing}
			>
				{children}
			</VStack>
		</ModalContent>
	);
};

export default ModalStack;
