import { DummyButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';

export default ({ theme }: DummyButtonStyleProps): Style => ({
	borderWidth: 0,
	borderStyle: 'solid',
	borderColor: theme.colors.transparent
});
