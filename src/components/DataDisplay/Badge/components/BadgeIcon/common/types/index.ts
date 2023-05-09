import { IconProps } from '../../../../../Icon/common/types';

export type BadgeIconProps = Omit<IconProps, 'color' | 'colorMode' | 'width' | 'height' | 'fontSize' | 'variant'>;
