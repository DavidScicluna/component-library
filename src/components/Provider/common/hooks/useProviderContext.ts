import { useContext } from 'react';

import { useBoolean } from '@chakra-ui/react';

import memoize from 'micro-memoize';
import { useInterval } from 'usehooks-ts';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { NoUndefinedField } from '../../../../common/types';
import { IconCategory } from '../../../Icon/common/types';
import { ProviderContext } from '../..';
import { ProviderContext as ProviderContextType } from '../types';

export const checkFontStatus = memoize((category: IconCategory): boolean => {
	if (document.fonts.check(`1rem 'Material Icons${category === 'outlined' ? ' Outlined' : ''}'`)) {
		return true;
	} else {
		return false;
	}
});

const useProviderContext = (): NoUndefinedField<ProviderContextType> => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<ProviderContextType>(ProviderContext);

	const [hasFilledIconsLoaded, setHasFilledIconsLoaded] = useBoolean(checkFontStatus('filled'));
	const [hasOutlinedIconsLoaded, setHasOutlinedIconsLoaded] = useBoolean(checkFontStatus('outlined'));

	const handleCheckFilledIconsStatus = (): void => {
		if (checkFontStatus('filled')) {
			setHasFilledIconsLoaded.on();
		} else {
			setHasFilledIconsLoaded.off();
		}
	};

	const handleCheckOutlinedIconsStatus = (): void => {
		if (checkFontStatus('outlined')) {
			setHasOutlinedIconsLoaded.on();
		} else {
			setHasOutlinedIconsLoaded.off();
		}
	};

	useInterval(() => handleCheckFilledIconsStatus(), !hasFilledIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckOutlinedIconsStatus(), !hasOutlinedIconsLoaded ? 1000 : null);

	return { color, colorMode, hasIconLoaded: { filled: hasFilledIconsLoaded, outlined: hasOutlinedIconsLoaded } };
};

export default useProviderContext;
