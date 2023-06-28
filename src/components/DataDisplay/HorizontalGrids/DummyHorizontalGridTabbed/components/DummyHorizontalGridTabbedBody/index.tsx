import { FC, Fragment } from 'react';

import DummyTabPanels from '../../../../../Navigation/Tabs/DummyTabs/components/DummyTabPanels';
import CardBody from '../../../../Cards/components/CardBody';

import { DummyHorizontalGridTabbedBodyProps } from './common/types';

const DummyHorizontalGridTabbedBody: FC<DummyHorizontalGridTabbedBodyProps> = ({ children, ...rest }) => (
	<CardBody {...rest}>
		<DummyTabPanels>
			{children.map((panel, index) => (
				<Fragment key={index}>{panel}</Fragment>
			))}
		</DummyTabPanels>
	</CardBody>
);

export default DummyHorizontalGridTabbedBody;
