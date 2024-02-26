import { useContext } from 'react';

import { DEFAULT_SPACING } from '@common/constants';

import { MessageContext } from '../../Message';
import type { MessageContext as MessageContextType, MessageElement } from '../types';

import useMessageResponsiveValues from './useMessageResponsiveValues';

const useMessageContext = <Element extends MessageElement>() => {
	const {
		color,
		colorMode,
		spacing: spacingProp = DEFAULT_SPACING
	} = useContext<MessageContextType<Element>>(MessageContext);

	const { spacing } = useMessageResponsiveValues<Element>({ spacing: spacingProp });

	return { color, colorMode, spacing };
};

export default useMessageContext;
