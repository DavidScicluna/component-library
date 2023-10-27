import type { ElementType } from 'react';
import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { MessageContext } from '../../Message';
import type { MessageContext as MessageContextType } from '../types';

const useMessageContext = <Element extends ElementType = PolymorphicDefaultElement>(): MessageContextType<Element> => {
	const { color, colorMode, spacing = __DEFAULT_SPACING__ } = useContext<MessageContextType<Element>>(MessageContext);

	return { color, colorMode, spacing };
};

export default useMessageContext;
