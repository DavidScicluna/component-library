import { BoxLayout } from '../../../../../../../../common/types/box';
import { IconProps } from '../../../../../../../Icon/types';

type Omitted = BoxLayout | 'color' | 'colorMode' | 'skeletonColor' | 'fontSize';

export type DummyIconButtonIconProps = Omit<IconProps, Omitted>;
