import { useContext } from 'react';

import { ButtonGroupContext } from '../..';
import { NoUndefinedField } from '../../../../../common/types';
import { ButtonGroupContext as ButtonGroupContextType } from '../../types';
import { isAttached as defaultIsAttached, size as defaultSize } from '../data/defaultPropValues';

const useButtonGroupContext = (): NoUndefinedField<ButtonGroupContextType> => {
	const { isAttached = defaultIsAttached, size = defaultSize } =
		useContext<ButtonGroupContextType>(ButtonGroupContext);

	return { isAttached, size };
};

export default useButtonGroupContext;