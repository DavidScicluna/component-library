import disabled from './disabled';
import link from './link';
import { LinkStyleProps } from './types';

import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';

type LinkStyle = {
	link: Style;
	disabled: Style;
};

export default (theme: Theme, { color, colorMode, isFullWidth, isString }: LinkStyleProps): LinkStyle => ({
	link: link(theme, color, colorMode, isFullWidth, isString),
	disabled: disabled()
});
