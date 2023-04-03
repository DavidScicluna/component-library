import { CommonCardProps } from '../common/types';

export type DummyCardRef = HTMLDivElement | null;

export type DummyCardProps = CommonCardProps;

export type DummyCardContext = Pick<DummyCardProps, 'color' | 'colorMode' | 'isLight' | 'spacing'>;
