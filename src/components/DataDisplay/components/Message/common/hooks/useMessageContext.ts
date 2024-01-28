import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';

import { MessageContext } from '../../Message';
import type { MessageContext as MessageContextType, MessageElement } from '../types';

import useMessageResponsiveValues from './useMessageResponsiveValues';

const useMessageContext = <Element extends MessageElement>() => {
	const {
		color,
		colorMode,
		spacing: spacingProp = __DEFAULT_SPACING__
	} = useContext<MessageContextType<Element>>(MessageContext);

	const { spacing } = useMessageResponsiveValues<Element>({ spacing: spacingProp });

	return { color, colorMode, spacing };
};

export default useMessageContext;
