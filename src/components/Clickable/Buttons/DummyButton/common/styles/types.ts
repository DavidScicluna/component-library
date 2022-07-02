import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { DummyButtonProps } from '../../types';

type Picked = 'colorMode' | 'isFullWidth' | 'size' | 'variant';

export type DummyButtonStyleProps = {
	theme: Theme;
} & Pick<DummyButtonProps, Picked>;

export type DummyButtonStyleReturn = {
	button: Style;
};
