import { AppColor } from '../../../../../../../common/types';
import { DummyAccordionsProps } from '../../../../common/types';

export type DummyQuickTogglesSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DummyQuickTogglesProps = Pick<DummyAccordionsProps, 'spacing'> & {
	color?: AppColor;
	size?: DummyQuickTogglesSize;
};
