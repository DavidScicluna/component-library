import { ReactNode } from 'react';

import { CardBodyProps } from '../../../../../Cards/components/CardBody/types';

export type DummyHorizontalGridTabbedBodyProps = Omit<CardBodyProps, 'children'> & {
	children: ReactNode[];
};
