import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { StateLabelBodyProps } from './common/types';

const StateLabelBody: FC<StateLabelBodyProps> = ({ children, ...rest }) => {
	return (
		<VStack width='100%' alignItems='center' justifyContent='center' p={0} m={0} spacing={0} {...rest}>
			{children}
		</VStack>
	);
};

export default StateLabelBody;
