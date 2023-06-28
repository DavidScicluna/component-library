import { FC } from 'react';

import CardBody from '../../../../Cards/components/CardBody';

import { HorizontalGridBodyProps } from './common/types';

const HorizontalGridBody: FC<HorizontalGridBodyProps> = ({ children, ...rest }) => (
	<CardBody {...rest}>{children}</CardBody>
);

export default HorizontalGridBody;
