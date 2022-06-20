import { QuickTogglesProps } from '../../../OriginalAccordions/components/QuickToggles/types';
import { DummyAccordionsProps } from '../../types';

export type DummyQuickTogglesProps = Pick<DummyAccordionsProps, 'spacing'> & Pick<QuickTogglesProps, 'color' | 'size'>;
