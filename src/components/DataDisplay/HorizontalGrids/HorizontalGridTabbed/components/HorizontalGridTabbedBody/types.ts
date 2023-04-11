import { ReactElement } from 'react';

import { CardBodyProps } from '../../../../../Cards/components/CardBody/types';
import { HorizontalScrollProps } from '../../../../../HorizontalScroll/types';

export type HorizontalGridTabbedBodyProps = Omit<CardBodyProps, 'children'> & {
	children: ReactElement<Pick<HorizontalScrollProps, 'children'>>[];
};
