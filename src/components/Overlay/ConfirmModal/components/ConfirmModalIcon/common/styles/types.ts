import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { ConfirmModalProps } from '../../../../common/types';
import { ConfirmModalIconProps } from '../types';

export type ConfirmModalIconStyleProps = Pick<ConfirmModalProps, 'colorMode'> & {
	theme: Theme;
} & Pick<ConfirmModalIconProps, 'color' | 'variant'>;

export type ConfirmModalIconStyleReturn = {
	icon: Style;
};
