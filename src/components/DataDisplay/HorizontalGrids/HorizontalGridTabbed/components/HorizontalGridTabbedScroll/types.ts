import { Space } from '../../../../../../theme/types';
import { HorizontalScrollProps } from '../../../../../HorizontalScroll/types';

export type HorizontalGridTabbedScrollProps = {
	spacing?: Space;
} & Pick<HorizontalScrollProps, 'children'>;
