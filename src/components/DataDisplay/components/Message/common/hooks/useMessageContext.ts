import type { ElementType } from 'react';
import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';

import { MessageContext } from '../../Message';
import type { MessageContext as MessageContextType } from '../types';

const useMessageContext = <Element extends ElementType>(): MessageContextType<Element> => {
	const { color, colorMode, spacing = __DEFAULT_SPACING__ } = useContext<MessageContextType<Element>>(MessageContext);

	return { color, colorMode, spacing };
};

export default useMessageContext;
