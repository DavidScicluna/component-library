import { Space } from '../../../../../../../../theme/types';
import { HorizontalScrollProps } from '../../../../../../../HorizontalScroll/common/types';

export type HorizontalGridScrollProps = {
	spacing?: Space;
} & Pick<HorizontalScrollProps, 'children'>;
