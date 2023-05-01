import { useContext } from 'react';

import { NoUndefinedField } from '../../../../../common/types';
import { ButtonGroupContext } from '../..';
import {
	isAttached as defaultIsAttached,
	isCompact as defaultIsCompact,
	isRound as defaultIsRound
} from '../default/props';
import { ButtonGroupContext as ButtonGroupContextType } from '../types';

const useButtonGroupContext = (): NoUndefinedField<ButtonGroupContextType> => {
	const {
		isAttached = defaultIsAttached,
		isCompact = defaultIsCompact,
		isRound = defaultIsRound
	} = useContext<ButtonGroupContextType>(ButtonGroupContext);

	return { isAttached, isCompact, isRound };
};

export default useButtonGroupContext;
