import { memoize } from 'lodash';

import { Accordion, OpenedAccordion, OpenedAccordions } from '../../types';

type ToggleAccordionProps<D> = {
	id: OpenedAccordion<D>;
	opened: OpenedAccordions<D>;
};

export const toggleAccordion = memoize(<D>({ id, opened = [] }: ToggleAccordionProps<D>): OpenedAccordions<D> => {
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
	<D>({ accordions = [], opened = 0 }: ToggleAllAccordionsProps<D>): OpenedAccordions<D> => {
		if (accordions.length === opened) {
			return [];
		} else {
			return accordions.map((accordion) => accordion.id);
		}
	}
);
