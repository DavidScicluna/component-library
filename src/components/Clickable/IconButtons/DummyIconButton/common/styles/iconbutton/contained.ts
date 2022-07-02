import { DummyIconButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';
import { isRound as defaultIsRound, size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

export default ({ theme, isRound = defaultIsRound, size = defaultSize }: DummyIconButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	const buttonRadius: Radius = isRound
		? 'full'
		: size === 'xs' || size === 'sm'
		? 'xs'
		: size === 'lg' || size === 'xl'
		? 'lg'
		: 'base';
	const skeletonRadius: Radius = size === 'xs' || size === 'sm' ? 'xs' : size === 'xl' ? 'base' : 'sm';

	return {
		'borderWidth': `${border}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[buttonRadius],

		'& .ds-cl-dummy-iconbutton-skeleton-icon': {
			borderRadius: theme.radii[skeletonRadius]
		}
	};
};
