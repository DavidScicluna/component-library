import { Style } from '../../../../../../common/types';
import { ButtonStyleProps } from '../types';

export type ButtonDisabledGeneralStylingProps = { isLoading: ButtonStyleProps['isLoading'] };

export default ({ isLoading = false }: ButtonDisabledGeneralStylingProps): Style => {
	return {
		cursor: 'not-allowed',
		pointerEvents: 'none',

		opacity: isLoading ? 1 : 0.5
	};
};
