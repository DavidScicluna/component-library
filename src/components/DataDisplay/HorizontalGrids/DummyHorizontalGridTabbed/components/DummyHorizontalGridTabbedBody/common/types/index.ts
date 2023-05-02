import { ReactNode } from 'react';

import { CardBodyProps } from '../../../../../../../DataDisplay/Cards/components/CardBody/common/types';

export type DummyHorizontalGridTabbedBodyProps = Omit<CardBodyProps, 'children'> & {
	children: ReactNode[];
};
