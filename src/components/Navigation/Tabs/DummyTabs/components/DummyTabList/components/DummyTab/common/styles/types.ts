import { Style } from '../../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../../theme/types';
import { DummyTabsProps } from '../../../../../../common/types';
import { DummyTabProps } from '../types';

export type DummyTabStyleProps = Pick<DummyTabsProps, 'color' | 'colorMode' | 'size'> & {
	theme: Theme;
	isFullWidth: boolean;
} & Pick<DummyTabProps, 'isSelected'>;

export type DummyTabStyleReturn = {
	tab: Style;
};
