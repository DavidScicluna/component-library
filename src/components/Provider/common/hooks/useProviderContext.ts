import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { NoUndefinedField } from '../../../../common/types';
import { ProviderContext } from '../..';
import { iconFontStatus as defaultIconFontStatus } from '../default/props';
import { ProviderContext as ProviderContextType } from '../types';

const useProviderContext = (): NoUndefinedField<ProviderContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		iconFontStatus = defaultIconFontStatus
	} = useContext<ProviderContextType>(ProviderContext);

	return { color, colorMode, iconFontStatus };
};

export default useProviderContext;
