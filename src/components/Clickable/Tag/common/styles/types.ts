import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { TagProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isFullWidth' | 'isClickable' | 'size' | 'variant';

export type TagStyleProps = {
	theme: Theme;
} & Pick<TagProps, Picked>;

export type TagStyleReturn = {
	tag: Style;
	active: Style;
	disabled: Style;
};
