import { CardActiveStyleProps } from './types';

import { Style } from '../../../../../common/types';

export default ({ theme }: CardActiveStyleProps): Style => ({
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
