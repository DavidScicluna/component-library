import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';
import { isRound as defaultIsRound, size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

import { DummyButtonStyleProps } from './types';

export default ({ theme, isRound = defaultIsRound, size = defaultSize }: DummyButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	const buttonRadius: Radius = isRound
		? 'full'
		: size === 'xs' || size === 'sm'
		? 'xs'
		: size === 'lg' || size === 'xl'
		? 'lg'
		: 'base';
	const skeletonRadius: Radius = isRound
		? 'full'
		: size === 'xs' || size === 'sm'
		? 'xs'
		: size === 'xl'
		? 'base'
		: 'sm';

	return {
		'borderWidth': `${border}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[buttonRadius],

		'& .ds-cl-dummy-button-skeleton-icon': {
			borderRadius: theme.radii[skeletonRadius]
		}
	};
};
