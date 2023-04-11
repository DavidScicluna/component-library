import { FC } from 'react';

import CardBody from '../../../../../Cards/components/CardBody';

import { DummyHorizontalGridBodyProps } from './types';

const DummyHorizontalGridBody: FC<DummyHorizontalGridBodyProps> = ({ children, ...rest }) => {
	return (
		<CardBody {...rest} alignItems='stretch' justifyContent='stretch'>
			{children}
		</CardBody>
	);
};

export default DummyHorizontalGridBody;
