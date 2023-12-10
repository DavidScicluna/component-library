import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';

import { MessageContext } from '../../Message';
import type { MessageContext as MessageContextType } from '../types';

import useMessageResponsiveValues from './useMessageResponsiveValues';

const useMessageContext = (): MessageContextType => {
	const {
		color,
		colorMode,
		spacing: spacingProp = __DEFAULT_SPACING__
	} = useContext<MessageContextType>(MessageContext);

	const { spacing } = useMessageResponsiveValues({ spacing: spacingProp });

	return { color, colorMode, spacing };
};

export default useMessageContext;
