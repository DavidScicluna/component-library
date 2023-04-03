import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { TagProps } from '../../types';

export type TagStyleProps = {
	theme: Theme;
} & Pick<TagProps, 'color' | 'colorMode' | 'isFullWidth' | 'isClickable' | 'size' | 'variant'>;

export type TagStyleReturn = {
	tag: Style;
	active: Style;
	disabled: Style;
};
