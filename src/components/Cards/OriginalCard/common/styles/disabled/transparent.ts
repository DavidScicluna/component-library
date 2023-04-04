import { Style } from '../../../../../../common/types';

import { CardDisabledStylingProps } from './types';

export default ({ theme }: CardDisabledStylingProps): Style => ({
	borderTopWidth: '0px',
	borderBottomWidth: '0px',
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
