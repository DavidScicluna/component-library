import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { spacing as defaultSpacing } from '../../common/data/defaultPropValues';

import { ConfirmModalStackProps } from './types';

const ConfirmModalStack: FC<ConfirmModalStackProps> = ({ children, spacing = defaultSpacing, ...rest }) => {
	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			{children}
		</VStack>
	);
};

export default ConfirmModalStack;
