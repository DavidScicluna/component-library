import { ButtonActiveStyleProps } from './types';

import { Style } from '../../../../../../common/types';

export default ({ theme }: ButtonActiveStyleProps): Style => ({
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
