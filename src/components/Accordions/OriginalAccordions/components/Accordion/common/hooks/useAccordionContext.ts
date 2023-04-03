import { useContext } from 'react';

import { AccordionContext } from '../..';
import { NoUndefinedField } from '../../../../../../../common/types';
import { isDisabled as defaultIsDisabled } from '../../../../common/data/defaultPropValues';
import { AccordionContext as AccordionContextType } from '../../types';
import { isLight as defaultIsLight, isOpen as defaultIsOpen } from '../data/defaultPropValues';

const useAccordionContext = <D>(): NoUndefinedField<AccordionContextType<D>> => {
	const {
		isDisabled = defaultIsDisabled,
		isLight = defaultIsLight,
		isOpen = defaultIsOpen
	} = useContext<AccordionContextType<D>>(AccordionContext);

	return { isDisabled, isLight, isOpen };
};

export default useAccordionContext;
