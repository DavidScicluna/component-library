import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { HorizontalGridFooterProps } from './common/types';

const HorizontalGridFooter: FC<HorizontalGridFooterProps> = ({ children, ...rest }) => (
	<Center {...rest} width='100%'>
		{children}
	</Center>
);

export default HorizontalGridFooter;
