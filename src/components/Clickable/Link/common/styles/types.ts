import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { LinkProps } from '../types';

export type LinkStyleProps = {
	theme: Theme;
	isString: boolean;
} & Pick<LinkProps, 'color' | 'colorMode' | 'isFullWidth'>;

export type LinkStyleReturn = {
	link: Style;
	disabled: Style;
};
