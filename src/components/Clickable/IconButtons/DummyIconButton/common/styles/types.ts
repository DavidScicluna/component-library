import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { DummyIconButtonProps } from '../../types';

export type DummyIconButtonStyleProps = {
	theme: Theme;
} & Pick<DummyIconButtonProps, 'colorMode' | 'isRound' | 'size' | 'variant'>;

export type DummyIconButtonStyleReturn = {
	iconbutton: Style;
};
