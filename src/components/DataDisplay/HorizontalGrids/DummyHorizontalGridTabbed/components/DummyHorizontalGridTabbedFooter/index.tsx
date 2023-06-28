import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { DummyHorizontalGridTabbedFooterProps } from './common/types';

const DummyHorizontalGridTabbedFooter: FC<DummyHorizontalGridTabbedFooterProps> = ({ children, ...rest }) => (
	<Center {...rest} width='100%'>
		{children}
	</Center>
);

export default DummyHorizontalGridTabbedFooter;
