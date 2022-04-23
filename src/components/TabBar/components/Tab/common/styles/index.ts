import { merge } from 'lodash';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import tab from './tab';
import { TabStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';

type TabStyle = {
	tab: Style;
	disabled: Style;
};

export default (theme: Theme, props: TabStyleProps): TabStyle => {
	const { color, colorMode } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		tab: merge(tab(), scheme.tab(theme, color)),
		disabled: merge(disabled(), scheme.disabled(theme))
	};
};
