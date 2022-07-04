import { CommonAccordionsProps } from '../common/types';

export type Accordion<D> = {
	id: string;
	title: string;
	data: D;
};

export type OpenedAccordion<D> = Accordion<D>['id'];

export type OpenedAccordions<D> = OpenedAccordion<D>[];

export type AccordionsProps<D> = {
	accordions: Accordion<D>[];
	isDisabled?: boolean;
} & CommonAccordionsProps;

type Picked = 'accordions' | 'color' | 'colorMode' | 'isDisabled' | 'isFullWidth' | 'spacing';

export type AccordionsContext<D> = {
	opened: OpenedAccordions<D>;
	setOpened: (opened: OpenedAccordions<D>) => void;
} & Pick<AccordionsProps<D>, Picked>;
