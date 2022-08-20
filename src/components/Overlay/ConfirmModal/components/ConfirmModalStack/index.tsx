import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { spacing as defaultSpacing, padding as defaultPadding } from '../../common/data/defaultPropValues';

import { ConfirmModalStackProps } from './types';

const ConfirmModalStack: FC<ConfirmModalStackProps> = (props) => {
	const { children, spacing = defaultSpacing, p = defaultPadding, ...rest } = props;

	return (
		<VStack width='100%' spacing={spacing} p={p} {...rest}>
			{children}
		</VStack>
	);
};

export default ConfirmModalStack;
