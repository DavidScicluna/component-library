
import { Style } from '../../../../../../../common/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

import { IconButtonActiveStyleProps } from './types';

export default ({ theme, size = defaultSize }: IconButtonActiveStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	return {
		borderWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
