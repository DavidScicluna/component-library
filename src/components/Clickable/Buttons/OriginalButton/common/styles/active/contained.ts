
import { Style } from '../../../../../../../common/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

import { ButtonActiveStyleProps } from './types';

export default ({ theme, size = defaultSize }: ButtonActiveStyleProps): Style => {
	const config = getSizeConfig({ size });
	const transform = config.transform.contained;

	return {
		borderTopWidth: `${transform}px`,
		borderBottomWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
