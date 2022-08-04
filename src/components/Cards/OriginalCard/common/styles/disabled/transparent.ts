import { Style } from '../../../../../../common/types';

import { CardDisabledStylingProps } from './types';


export default ({ theme }: CardDisabledStylingProps): Style => ({
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
