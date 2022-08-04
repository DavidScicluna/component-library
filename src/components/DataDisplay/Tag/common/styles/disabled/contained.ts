
import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { TagDisabledStylingProps } from './types';

export default ({ theme, size = defaultSize }: TagDisabledStylingProps): Style => {
	const config = getSizeConfig({ size });
	const transform = config.transform;

	return {
		borderTopWidth: `${transform}px`,
		borderBottomWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
