import { SwitchProps } from '../../../../common/types';

export type SwitchThumbProps = Pick<SwitchProps, 'color' | 'colorMode' | 'renderThumbIcon' | 'isChecked' | 'size'> & {
	isHovered?: boolean;
};
