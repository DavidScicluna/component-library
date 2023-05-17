import { FC, Fragment } from 'react';

import CardBody from '../../../../../DataDisplay/Cards/components/CardBody';
import DummyTabPanels from '../../../../../Navigation/Tabs/DummyTabs/components/DummyTabPanels';

import { DummyHorizontalGridTabbedBodyProps } from './common/types';

const DummyHorizontalGridTabbedBody: FC<DummyHorizontalGridTabbedBodyProps> = ({ children, ...rest }) => {
	return (
		<CardBody {...rest}>
			<DummyTabPanels>
				{children.map((panel, index) => (
					<Fragment key={index}>{panel}</Fragment>
				))}
			</DummyTabPanels>
		</CardBody>
	);
};

export default DummyHorizontalGridTabbedBody;
