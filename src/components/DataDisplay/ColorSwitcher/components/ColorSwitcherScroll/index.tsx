import { forwardRef, Fragment, ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import HorizontalScroll from '../../../HorizontalScroll';
import { useColorSwitcherContext } from '../../common/hooks';
import { ColorSwitcherOnChangeProps } from '../../common/types';

import { ColorSwitcherScrollProps, ColorSwitcherScrollRef } from './common/types';

const ColorSwitcherScroll = forwardRef<ColorSwitcherScrollRef, ColorSwitcherScrollProps>(function ColorSwitcherScroll(
	props,
	ref
): ReactElement {
	const { color, colors, colorMode, onChange } = useColorSwitcherContext();

	const { renderItem, ...rest } = props;

	const handleChange = (props: ColorSwitcherOnChangeProps): void => {
		if (typeof onChange === 'function') {
			onChange(props);
		}
	};

	return (
		<HorizontalScroll
			{...rest}
			ref={ref}
			colorMode={colorMode}
			renderDivider={({ padding }) => <Box padding={padding} />}
		>
			{colors.map((c) => (
				<Fragment key={c}>
					{renderItem({
						color: c,
						colorMode,
						isActive: c === color,
						onChange: handleChange
					})}
				</Fragment>
			))}
		</HorizontalScroll>
	);
});

export default ColorSwitcherScroll;
