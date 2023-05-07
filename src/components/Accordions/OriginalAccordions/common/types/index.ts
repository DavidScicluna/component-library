import { CommonAccordionsProps } from '../../../common/types';

export type AccordionID = string;
export type Accordion<D> = {
	id: AccordionID;
	title: string;
	subtitle?: string;
	data: D;
};

export type OpenedAccordion = AccordionID;
export type OpenedAccordions = OpenedAccordion[];

export type AccordionsProps<D> = {
	accordions: Accordion<D>[];
	isDisabled?: boolean;
} & CommonAccordionsProps;

export type AccordionsContext<D> = {
	opened: OpenedAccordions;
	onSetOpened: (opened: OpenedAccordions) => void;
} & Pick<AccordionsProps<D>, 'accordions' | 'color' | 'colorMode' | 'isDisabled' | 'spacing'>;
