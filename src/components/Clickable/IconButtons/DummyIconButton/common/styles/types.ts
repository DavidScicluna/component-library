import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { DummyIconButtonProps } from '../../types';

type Picked = 'colorMode' | 'isRound' | 'size' | 'variant';

export type DummyIconButtonStyleProps = {
	theme: Theme;
} & Pick<DummyIconButtonProps, Picked>;

export type DummyIconButtonStyleReturn = {
	iconbutton: Style;
};
