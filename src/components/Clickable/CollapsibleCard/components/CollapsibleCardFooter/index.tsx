import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { CollapsibleCardFooterProps } from './types';

const CollapsibleCardFooter: FC<CollapsibleCardFooterProps> = ({ children, ...rest }) => {
	return (
		<Center {...rest} width='100%'>
			{children}
		</Center>
	);
};

export default CollapsibleCardFooter;
