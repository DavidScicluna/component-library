import { FC, useMemo } from 'react';
import { PulseLoader, SyncLoader } from 'react-spinners';

import { useTheme } from '../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../common/utils';

import { SpinnerProps } from './types';

const Spinner: FC<SpinnerProps> = (props) => {
	const theme = useTheme();

	const { color, speed = 0.75, mode = 'sync', size = 'xl' } = props;

	const fontSize = useMemo((): number => {
		return convertREMToPixels(convertStringToNumber(theme.fontSizes[size], 'rem')) / 4;
	}, [size]);

	switch (mode) {
		case 'sync':
			return <SyncLoader color={color} speedMultiplier={speed} loading size={fontSize} />;
		case 'pulse':
			return <PulseLoader color={color} speedMultiplier={speed} loading size={fontSize} />;
	}
};

export default Spinner;
