import { Nullable } from '../../../../../../common/types';
import { CommonCardProps } from '../../../common/types';

export type CardProps = CommonCardProps;

export type CardRef = Nullable<HTMLDivElement>;

export type CardContext = Pick<CardProps, 'color' | 'colorMode' | 'spacing' | 'variant'>;
