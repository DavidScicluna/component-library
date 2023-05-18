import { Style } from '../../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../../theme/types';
import { DummyTabBarProps } from '../../../../../../common/types';
import { DummyTabProps } from '../types';

export type DummyTabStyleProps = Pick<DummyTabBarProps, 'color' | 'colorMode' | 'size'> & {
	theme: Theme;
} & Pick<DummyTabProps, 'isSelected'>;

export type DummyTabStyleReturn = {
	tab: Style;
};
