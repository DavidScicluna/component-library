import { Style } from '../../../../../../common/types';

import { CardActiveStyleProps } from './types';

export default ({ theme }: CardActiveStyleProps): Style => ({
	borderTopWidth: '0px',
	borderBottomWidth: '0px',
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
