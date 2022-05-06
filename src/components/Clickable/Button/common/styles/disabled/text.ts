import { ButtonDisabledStylingProps } from './types';

import { Style } from '../../../../../../common/types';

export default ({ theme }: ButtonDisabledStylingProps): Style => ({
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
