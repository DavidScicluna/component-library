import { Style } from '../../../../../../common/types';

import { TagDisabledStylingProps } from './types';


export default ({ theme }: TagDisabledStylingProps): Style => ({
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
