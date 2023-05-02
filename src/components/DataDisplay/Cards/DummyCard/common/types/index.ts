import { Nullable } from '../../../../../../common/types';
import { CommonCardProps } from '../../../common/types';

export type DummyCardProps = Omit<CommonCardProps, 'isActive' | 'isDisabled' | 'isClickable' | 'isFixed'>;

export type DummyCardRef = Nullable<HTMLDivElement>;

export type DummyCardContext = Pick<DummyCardProps, 'color' | 'colorMode' | 'spacing' | 'variant'>;
