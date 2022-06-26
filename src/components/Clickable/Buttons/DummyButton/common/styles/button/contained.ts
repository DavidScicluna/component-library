import { DummyButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

export default ({ theme, size = defaultSize }: DummyButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	return {
		borderWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
