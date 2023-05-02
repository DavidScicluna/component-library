import { FC } from 'react';

import CardBody from '../../../../../DataDisplay/Cards/components/CardBody';

import { HorizontalGridBodyProps } from './common/types';

const HorizontalGridBody: FC<HorizontalGridBodyProps> = ({ children, ...rest }) => {
	return <CardBody {...rest}>{children}</CardBody>;
};

export default HorizontalGridBody;
