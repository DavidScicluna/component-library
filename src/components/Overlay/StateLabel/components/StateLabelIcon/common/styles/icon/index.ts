import { Style } from '../../../../../../../../common/types';

import { StateLabelIconStyleProps } from './types';

export default ({ theme }: StateLabelIconStyleProps): Style => ({
	cursor: 'default',

	pointerEvents: 'auto',

	borderWidth: '2px',
	borderStyle: 'solid',
	borderRadius: theme.radii.full,

	userSelect: 'none'
});
