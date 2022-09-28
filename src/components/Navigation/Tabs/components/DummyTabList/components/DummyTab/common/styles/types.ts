import { Style } from '../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../theme/types';
import { TabsProps } from '../../../../../../types';

export type DummyTabStyleProps = Pick<TabsProps, 'colorMode' | 'size'> & {
	theme: Theme;
	isFullWidth: boolean;
};

export type DummyTabStyleReturn = {
	tab: Style;
};
