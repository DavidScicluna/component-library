import { Transition } from 'framer-motion';

import { convertEasingsToArray, convertStringToNumber } from '../../../../common/utils';
import { Theme, Duration, Ease } from '../../../../theme/types';

type GetDurationProps = { theme: Theme; duration?: Duration };

export const getDuration = ({ theme, duration = 'normal' }: GetDurationProps): number => {
	return convertStringToNumber(theme.transition.duration[duration], 'ms') / 1000;
};

type GetEasingsProps = { theme: Theme; easing?: Ease };

export const getEasings = ({ theme, easing = 'ease-in-out' }: GetEasingsProps): number[] => {
	return convertEasingsToArray({ easing: theme.transition.easing[easing] });
};

type GetConfigProps = { theme: Theme };

export const getConfig = ({ theme }: GetConfigProps): Partial<Transition> => {
	const duration: number = getDuration({ theme });
	const easings: number[] = getEasings({ theme });

	return { duration, easings };
};
