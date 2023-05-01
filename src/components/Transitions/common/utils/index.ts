import { Transition, Tween } from 'framer-motion';

import { convertEasingsToArray, convertStringToNumber } from '../../../../common/utils';
import { Duration, Ease, Theme } from '../../../../theme/types';

type GetDelayDurationProps = { theme: Theme; duration?: Duration };

export const getDelay = ({ theme, duration = 'normal' }: GetDelayDurationProps): NonNullable<Transition['delay']> => {
	return convertStringToNumber(theme.transition.duration[duration], 'ms') / 1000;
};

export const getDuration = ({ theme, duration = 'normal' }: GetDelayDurationProps): NonNullable<Tween['duration']> => {
	return convertStringToNumber(theme.transition.duration[duration], 'ms') / 1000;
};

type GetEasingsProps = { theme: Theme; easing?: Ease };

export const getEasings = ({ theme, easing = 'ease-in-out' }: GetEasingsProps): number[] => {
	return convertEasingsToArray({ easing: theme.transition.easing[easing] });
};

type GetConfigProps = { theme: Theme };

export const getConfig = ({ theme }: GetConfigProps): Partial<Transition> => {
	const duration: Tween['duration'] = getDuration({ theme });
	const easings: number[] = getEasings({ theme });

	return { duration, easings };
};
