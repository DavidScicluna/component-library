import { CommonAccordionsProps } from '../common/types';

export type Accordion = {
	id: string;
	title: string;
};

export type OpenedAccordion = Accordion['id'];

export type OpenedAccordions = OpenedAccordion[];

export type AccordionsProps = {
	accordions: Accordion[];
	isDisabled?: boolean;
} & CommonAccordionsProps;

type Picked = 'accordions' | 'color' | 'colorMode' | 'isDisabled' | 'isFullWidth' | 'spacing';

export type AccordionsContext = {
	opened: OpenedAccordions;
	setOpened: (opened: OpenedAccordions) => void;
} & Pick<AccordionsProps, Picked>;

export type AccordionsRef = HTMLDivElement | null;
