import memoize from 'micro-memoize';

import { Accordion, OpenedAccordion, OpenedAccordions } from '../types';

type ToggleAccordionProps = {
	id: OpenedAccordion;
	opened: OpenedAccordions;
};

export const toggleAccordion = memoize(({ id, opened = [] }: ToggleAccordionProps): OpenedAccordions => {
	if (opened.some((accordion) => accordion === id)) {
		return opened.filter((accordion) => accordion !== id);
	} else {
		return [...opened, id];
	}
});

type ToggleAllAccordionsProps<D> = {
	accordions: Accordion<D>[];
	opened: number;
};

export const toggleAllAccordions = memoize(
	<D>({ accordions = [], opened = 0 }: ToggleAllAccordionsProps<D>): OpenedAccordions => {
		if (accordions.length === opened) {
			return [];
		} else {
			return accordions.map((accordion) => accordion.id);
		}
	}
);
