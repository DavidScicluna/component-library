import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { DummyCardProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isFullWidth' | 'isLight' | 'variant';

export type DummyCardStyleProps = {
	theme: Theme;
} & Pick<DummyCardProps, Picked>;

export type DummyCardStyleReturn = {
	card: Style;
};
