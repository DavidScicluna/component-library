import { Style } from '../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../theme/types';
import { TabsProps } from '../../../../../../types';
import { DummyTabProps } from '../../types';

export type DummyTabStyleProps = Pick<TabsProps, 'color' | 'colorMode' | 'size'> & {
	theme: Theme;
	isFullWidth: boolean;
} & Pick<DummyTabProps, 'isSelected'>;

export type DummyTabStyleReturn = {
	tab: Style;
};
