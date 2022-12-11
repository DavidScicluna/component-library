import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { SideNavigationProps } from '../../../../types';
import { NavItemProps } from '../../types';

export type NavItemStyleProps = Pick<SideNavigationProps, 'color' | 'colorMode' | 'mode'> & {
	theme: Theme;
} & Pick<NavItemProps, 'isActive' | 'isChildActive'>;

export type NavItemStyleReturn = {
	navItem: Style;
	disabled: Style;
};
