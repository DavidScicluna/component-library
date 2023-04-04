import { Style } from '../../../../../../common/types';

import { TagDisabledStylingProps } from './types';

export default ({ theme }: TagDisabledStylingProps): Style => ({
	borderTopWidth: '0px',
	borderBottomWidth: '0px',
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
