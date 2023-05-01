import { FC, Fragment } from 'react';

import CardBody from '../../../../../Cards/components/CardBody';
import TabPanels from '../../../../../Navigation/Tabs/components/TabPanels';

import { DummyHorizontalGridTabbedBodyProps } from './common/types';

const DummyHorizontalGridTabbedBody: FC<DummyHorizontalGridTabbedBodyProps> = ({ children, ...rest }) => {
	return (
		<CardBody {...rest}>
			<TabPanels>
				{children.map((panel, index) => (
					<Fragment key={index}>{panel}</Fragment>
				))}
			</TabPanels>
		</CardBody>
	);
};

export default DummyHorizontalGridTabbedBody;
