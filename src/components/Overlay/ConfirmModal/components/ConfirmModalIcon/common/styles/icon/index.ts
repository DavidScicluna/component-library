import { Style } from '../../../../../../../../common/types';

import { ConfirmModalIconStyleProps } from './types';

export default ({ theme }: ConfirmModalIconStyleProps): Style => ({
	cursor: 'default',

	pointerEvents: 'auto',

	borderWidth: '2px',
	borderStyle: 'solid',
	borderRadius: theme.radii.full,

	userSelect: 'none'
});
