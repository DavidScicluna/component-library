import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { DummyCardProps } from '../../types';

export type DummyCardStyleProps = {
	theme: Theme;
} & Pick<DummyCardProps, 'color' | 'colorMode' | 'isFullWidth' | 'isLight' | 'variant'>;

export type DummyCardStyleReturn = {
	card: Style;
};
