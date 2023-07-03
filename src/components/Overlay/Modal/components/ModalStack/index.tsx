import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import Divider from '../../../../DataDisplay/Divider';
import { useModalContext } from '../../common/hooks';

import { ModalStackProps } from './common/types';

const ModalStack: FC<ModalStackProps> = (props) => {
	const { colorMode, size, spacing: defaultSpacing } = useModalContext();

	const { children, isDivisible = true, p, spacing = defaultSpacing, ...rest } = props;

	const background = useGetColor({ color: 'gray', colorMode, type: 'background' });

	return (
		<VStack
			{...rest}
			width='100%'
			height='auto'
			minHeight={size === 'full' ? 'inherit' : undefined}
			divider={isDivisible ? <Divider color='gray' colorMode={colorMode} /> : undefined}
			backgroundColor={background}
			borderRadius={size === 'full' ? 'none' : 'xl'}
			overflow='hidden'
			spacing={spacing}
			p={p || spacing}
		>
			{children}
		</VStack>
	);
};

export default ModalStack;
