import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { FormControlProps } from '../../../FormControl/common/types';

export type FormDescriptionStyleProps = Pick<FormControlProps, 'colorMode' | 'size'> & {
	theme: Theme;
};

export type FormDescriptionStyleReturn = {
	formDescription: Style;
};
