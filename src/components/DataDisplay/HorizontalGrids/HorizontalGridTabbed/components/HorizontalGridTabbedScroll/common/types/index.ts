import { Space } from '../../../../../../../../theme/types';
import { HorizontalScrollProps } from '../../../../../../HorizontalScroll/common/types';

export type HorizontalGridTabbedScrollProps = {
	spacing?: Space;
} & Pick<HorizontalScrollProps, 'children'>;
