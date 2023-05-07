import { CommonAccordionsProps } from '../../../common/types';

export type DummyAccordion = number;
export type DummyAccordions = DummyAccordion[];

export type DummyAccordionsProps = {
	accordions: DummyAccordions;
} & CommonAccordionsProps;

type Picked = 'accordions' | 'color' | 'colorMode' | 'spacing';

export type DummyAccordionsContext = Pick<DummyAccordionsProps, Picked>;
