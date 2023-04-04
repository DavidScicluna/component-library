import { Style } from '../../../../../../common/types';

import { TagActiveStyleProps } from './types';

export default ({ theme }: TagActiveStyleProps): Style => ({
	borderTopWidth: '0px',
	borderBottomWidth: '0px',
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
