import { DummyButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

export default ({ theme, size = defaultSize }: DummyButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	const buttonRadius: Radius = size === 'xs' || size === 'sm' ? 'xs' : size === 'lg' || size === 'xl' ? 'lg' : 'base';
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
