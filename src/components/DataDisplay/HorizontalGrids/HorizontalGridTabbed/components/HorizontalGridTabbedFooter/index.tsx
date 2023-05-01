import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { HorizontalGridTabbedFooterProps } from './common/types';

const HorizontalGridTabbedFooter: FC<HorizontalGridTabbedFooterProps> = ({ children, ...rest }) => {
	return (
		<Center {...rest} width='100%'>
			{children}
		</Center>
	);
};

export default HorizontalGridTabbedFooter;
