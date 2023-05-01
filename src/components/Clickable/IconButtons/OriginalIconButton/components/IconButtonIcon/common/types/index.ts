import { BoxLayout } from '../../../../../../../../common/types/box';
import { IconProps } from '../../../../../../../Icon/types';

export type IconButtonIconProps = Omit<IconProps, BoxLayout | 'color' | 'colorMode' | 'skeletonColor' | 'fontSize'>;