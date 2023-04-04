import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { TagActiveStyleProps } from './types';

export default ({ theme, size = defaultSize }: TagActiveStyleProps): Style => {
	const config = getSizeConfig({ size });
	const transform = config.transform;

	return {
		borderTopWidth: `${transform}px`,
		borderBottomWidth: '0px',
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
