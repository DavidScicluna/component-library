import { Style } from '../../../../../../common/types';

import { CardActiveStyleProps } from './types';

export default ({ theme }: CardActiveStyleProps): Style => ({
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
