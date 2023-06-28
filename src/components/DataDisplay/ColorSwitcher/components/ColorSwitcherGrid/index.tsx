import { forwardRef, Fragment, ReactElement } from 'react';

import { SimpleGrid } from '@chakra-ui/react';

import { useColorSwitcherContext } from '../../common/hooks';
import { ColorSwitcherOnChangeProps } from '../../common/types';

import { ColorSwitcherGridProps, ColorSwitcherGridRef } from './common/types';

const ColorSwitcherGrid = forwardRef<ColorSwitcherGridRef, ColorSwitcherGridProps>(
	function ColorSwitcherGrid(props, ref): ReactElement {
	const { color, colors, colorMode, onChange } = useColorSwitcherContext();

	const { renderItem, columns = [1, 2, 3], spacing = 2, ...rest } = props;

	const handleChange = ({ color }: ColorSwitcherOnChangeProps): void => {
		if (typeof onChange === 'function') {
			onChange(color);
		}
	};

	return (
		<SimpleGrid {...rest} ref={ref} columns={columns} spacing={spacing}>
			{colors.map((c) => (
				<Fragment key={c}>
					{renderItem({
						color: c,
						colorMode,
						isActive: c === color,
						onChange: () => handleChange({ color: c })
					})}
				</Fragment>
			))}
		</SimpleGrid>
	);
});

export default ColorSwitcherGrid;
