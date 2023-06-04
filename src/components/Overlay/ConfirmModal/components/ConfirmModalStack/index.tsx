import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { padding as defaultPadding } from '../../common/default/props';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalStackProps } from './common/types';

const ConfirmModalStack: FC<ConfirmModalStackProps> = (props) => {
	const { colorMode, spacing: defaultSpacing } = useConfirmModalContext();

	const { children, spacing = defaultSpacing, p = defaultPadding, ...rest } = props;

	const background = useGetColor({ color: 'gray', colorMode, type: 'background' });

	return (
		<VStack
			{...rest}
			width='100%'
			height='auto'
			backgroundColor={background}
			borderRadius='xl'
			overflow='hidden'
			spacing={spacing}
			p={p || spacing}
		>
			{children}
		</VStack>
	);
};

export default ConfirmModalStack;
