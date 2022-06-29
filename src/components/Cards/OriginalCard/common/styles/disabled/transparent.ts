import { CardDisabledStylingProps } from './types';

import { Style } from '../../../../../../common/types';

export default ({ theme }: CardDisabledStylingProps): Style => ({
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
