import { FC } from 'react';

import CardBody from '../../../../../DataDisplay/Cards/components/CardBody';

import { DummyHorizontalGridBodyProps } from './common/types';

const DummyHorizontalGridBody: FC<DummyHorizontalGridBodyProps> = ({ children, ...rest }) => {
	return (
		<CardBody {...rest} alignItems='stretch' justifyContent='stretch'>
			{children}
		</CardBody>
	);
};

export default DummyHorizontalGridBody;
