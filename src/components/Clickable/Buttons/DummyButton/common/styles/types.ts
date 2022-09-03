import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { DummyButtonProps } from '../../types';

export type DummyButtonStyleProps = {
	theme: Theme;
} & Pick<DummyButtonProps, 'colorMode' | 'isFullWidth' | 'size' | 'variant'>;

export type DummyButtonStyleReturn = {
	button: Style;
};
