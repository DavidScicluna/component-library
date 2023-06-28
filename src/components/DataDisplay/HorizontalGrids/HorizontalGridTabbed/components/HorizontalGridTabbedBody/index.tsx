import { FC, Fragment } from 'react';

import TabPanels from '../../../../../Navigation/Tabs/OriginalTabs/components/TabPanels';
import CardBody from '../../../../Cards/components/CardBody';

import { HorizontalGridTabbedBodyProps } from './common/types';

const HorizontalGridTabbedBody: FC<HorizontalGridTabbedBodyProps> = ({ children, ...rest }) => (
	<CardBody {...rest}>
		<TabPanels>
			{children.map((panel, index) => (
				<Fragment key={index}>
					{panel.props.children && panel.props.children.length > 0 ? panel.props.children : panel}
				</Fragment>
			))}
		</TabPanels>
	</CardBody>
);

export default HorizontalGridTabbedBody;
