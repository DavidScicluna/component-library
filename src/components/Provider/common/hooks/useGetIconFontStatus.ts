import { useInterval } from 'usehooks-ts';

import { useBoolean } from '../../../../common/hooks';
import { IconCategory } from '../../../DataDisplay/Icon/common/types';
import {
	hasFilledIconLoaded as defaultHasFilledIconLoaded,
	hasOutlinedIconLoaded as defaultHasOutlinedIconLoaded
} from '../default/props';

type useGetIconFontStatusReturn = Record<IconCategory, boolean>;

const checkFontStatus = (category: IconCategory): boolean => {
	return !!document.fonts.check(`1rem 'Material Icons${category === 'outlined' ? ' Outlined' : ''}'`);
};

const useGetIconFontStatus = (): useGetIconFontStatusReturn => {
	const [hasFilledIconsLoaded, setHasFilledIconsLoaded] = useBoolean(defaultHasFilledIconLoaded);
	const [hasOutlinedIconsLoaded, setHasOutlinedIconsLoaded] = useBoolean(defaultHasOutlinedIconLoaded);

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

	return { filled: hasFilledIconsLoaded, outlined: hasOutlinedIconsLoaded };
};

export default useGetIconFontStatus;
