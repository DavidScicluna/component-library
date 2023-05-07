import { CommonAccordionsProps } from '../../../common/types';

export type DummyAccordionID = number;
export type DummyAccordion = {
	id: DummyAccordionID;
	title: string;
	subtitle?: string;
};
export type DummyAccordions = DummyAccordion[];

export type DummyAccordionsProps = {
	accordions: DummyAccordions;
} & CommonAccordionsProps;

type Picked = 'accordions' | 'color' | 'colorMode' | 'spacing';

export type DummyAccordionsContext = Pick<DummyAccordionsProps, Picked>;
