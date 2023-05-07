import { range } from 'lodash-es';

import { DummyAccordions } from '../../types';

export const accordions: DummyAccordions = range(5).map((accordion) => ({
	id: accordion,
	title: `Accordion #${accordion} title`,
	subtitle: `Accordion #${accordion} title`
}));
