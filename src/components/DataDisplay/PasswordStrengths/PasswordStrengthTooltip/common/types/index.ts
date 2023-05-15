import { PopperProps } from '../../../../../Overlay/Popper/common/types';

export type PasswordStrengthTooltipProps = Omit<PopperProps, 'children'> & {
	password: string;
};
