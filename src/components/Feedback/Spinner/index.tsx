import { FC, useMemo } from 'react';
import { PuffLoader, PulseLoader, SyncLoader } from 'react-spinners';

import { useTheme } from '../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../common/utils';

import { SpinnerProps } from './common/types';

const Spinner: FC<SpinnerProps> = (props) => {
	const theme = useTheme();

	const { color, speed = 0.75, mode = 'sync', size = 'xl' } = props;

	const fontSize = useMemo((): number => {
		return typeof size === 'number'
			? size
			: convertREMToPixels(convertStringToNumber(theme.fontSizes[size], 'rem')) / 4;
	}, [size]);

	switch (mode) {
		case 'puff':
			return <PuffLoader color={color} speedMultiplier={speed} loading size={fontSize} />;
		case 'sync':
			return <SyncLoader color={color} speedMultiplier={speed} loading size={fontSize} />;
		case 'pulse':
			return <PulseLoader color={color} speedMultiplier={speed} loading size={fontSize} />;
	}
};

export default Spinner;
