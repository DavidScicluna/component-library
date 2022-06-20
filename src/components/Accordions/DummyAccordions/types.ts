import { AccordionsProps } from '../OriginalAccordions/types';

export type DummyAccordionsProps = Omit<AccordionsProps, 'accordions' | 'isDisabled'>;

export type DummyAccordionsContext = Pick<AccordionsProps, 'color' | 'colorMode' | 'isFullWidth' | 'spacing'>;
