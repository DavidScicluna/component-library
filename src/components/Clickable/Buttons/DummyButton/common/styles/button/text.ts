
import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

import { DummyButtonStyleProps } from './types';

export default ({ theme, size = defaultSize }: DummyButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	const buttonRadius: Radius = 'none';
	const skeletonRadius: Radius = size === 'xs' || size === 'sm' ? 'xs' : size === 'xl' ? 'base' : 'sm';

	return {
		'borderWidth': `${border}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[buttonRadius],

		'visibility': 'visible',

		'& .ds-cl-dummy-button-skeleton-icon': {
			borderRadius: theme.radii[skeletonRadius]
		},

		'*, *::before, *::after': {
			visibility: 'visible'
		}
	};
};
