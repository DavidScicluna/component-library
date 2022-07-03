import { CommonAccordionsProps } from '../common/types';

export type DummyAccordionsProps = {
	accordions?: number[];
} & CommonAccordionsProps;

type Picked = 'accordions' | 'color' | 'colorMode' | 'isFullWidth' | 'spacing';

export type DummyAccordionsContext = Pick<DummyAccordionsProps, Picked>;
