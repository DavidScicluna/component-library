import { memoize } from 'lodash';

import { Accordion, OpenedAccordion, OpenedAccordions } from '../../types';

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

type ToggleAllAccordionsProps = {
	accordions: Accordion[];
	opened: number;
};

export const toggleAllAccordions = memoize(
	({ accordions = [], opened = 0 }: ToggleAllAccordionsProps): OpenedAccordions => {
		if (accordions.length === opened) {
			return [];
		} else {
			return accordions.map((accordion) => accordion.id);
		}
	}
);
