import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { LinkProps } from '../types';

export type LinkStyleProps = {
	theme: Theme;
} & Pick<LinkProps, 'color' | 'colorMode' | 'isFullWidth' | 'hasUnderline'>;

export type LinkStyleReturn = {
	link: Style;
	disabled: Style;
};
