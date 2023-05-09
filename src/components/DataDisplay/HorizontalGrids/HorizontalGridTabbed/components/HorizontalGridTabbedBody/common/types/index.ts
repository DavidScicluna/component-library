import { ReactElement } from 'react';

import { CardBodyProps } from '../../../../../../../DataDisplay/Cards/components/CardBody/common/types';
import { HorizontalScrollProps } from '../../../../../../HorizontalScroll/common/types';

export type HorizontalGridTabbedBodyProps = Omit<CardBodyProps, 'children'> & {
	children: ReactElement<Pick<HorizontalScrollProps, 'children'>>[];
};
