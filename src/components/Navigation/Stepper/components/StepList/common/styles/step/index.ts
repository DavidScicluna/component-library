import { Style, Radius } from '@davidscicluna/component-library';

import { status as defaultStatus } from '../../../components/Step/common/data/defaultPropValues';

import { StepStyleProps } from './types';

export default ({ theme, status = defaultStatus }: StepStyleProps): Style => {
	const radius: Radius = 'none';

	return {
		cursor: status !== 'active' ? 'pointer' : 'default',

		pointerEvents: status !== 'active' ? 'auto' : 'none',

		position: 'relative',

		display: 'inline-flex',

		userSelect: 'none',
		willChange: 'auto',

		opacity: 1,

		background: 'none',
		borderBottomWidth: '2px',
		borderBottomStyle: 'solid',
		borderRadius: theme.radii[radius],

		WebkitTapHighlightColor: theme.colors.transparent,

		px: 3,
		py: 1
	};
};
