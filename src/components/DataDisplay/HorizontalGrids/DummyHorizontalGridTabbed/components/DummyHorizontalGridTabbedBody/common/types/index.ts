import { ReactNode } from 'react';

import { CardBodyProps } from '../../../../../../../Cards/components/CardBody/common/types';

export type DummyHorizontalGridTabbedBodyProps = Omit<CardBodyProps, 'children'> & {
	children: ReactNode[];
};
