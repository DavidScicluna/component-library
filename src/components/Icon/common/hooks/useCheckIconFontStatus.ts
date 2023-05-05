import { useBoolean } from '@chakra-ui/react';

import { useInterval } from 'usehooks-ts';

import { IconCategory } from '../../../Icon/common/types';

type useCheckIconFontStatusReturn = Record<IconCategory, boolean>;

export const defaultHasFilledIconsLoaded = false;
export const defaultHasOutlinedIconsLoaded = false;

const checkFontStatus = (category: IconCategory): boolean => {
	if (document.fonts.check(`1rem 'Material Icons${category === 'outlined' ? ' Outlined' : ''}'`)) {
		return true;
	} else {
		return false;
	}
};

const useCheckIconFontStatus = (): useCheckIconFontStatusReturn => {
	const [hasFilledIconsLoaded, setHasFilledIconsLoaded] = useBoolean(defaultHasFilledIconsLoaded);
	const [hasOutlinedIconsLoaded, setHasOutlinedIconsLoaded] = useBoolean(defaultHasOutlinedIconsLoaded);

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

export default useCheckIconFontStatus;
