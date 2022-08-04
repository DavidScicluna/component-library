import { Style } from '../../../../../../common/types';

import { TagActiveStyleProps } from './types';


export default ({ theme }: TagActiveStyleProps): Style => ({
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
