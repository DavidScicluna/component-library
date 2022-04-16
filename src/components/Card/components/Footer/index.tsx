import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { FooterProps } from './types';

const Footer: FC<FooterProps> = ({ children }) => {
	return <Center width='100%'>{children}</Center>;
};

export default Footer;
