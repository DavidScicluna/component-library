import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { CollapsibleCardBodyProps } from './common/types';

const CollapsibleCardBody: FC<CollapsibleCardBodyProps> = ({ children, ...rest }) => {
	return (
		<Center {...rest} width='100%'>
			{children}
		</Center>
	);
};

export default CollapsibleCardBody;
