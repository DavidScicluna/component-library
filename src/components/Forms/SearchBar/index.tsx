import { FC, useState } from 'react';

import { HStack } from '@chakra-ui/react';

import { useUpdateEffect } from 'usehooks-ts';

import { useDebounce } from '../../../common/hooks';
import Icon from '../../DataDisplay/Icon';
import Divider from '../../Divider';
import Form from '../Form';
import Input from '../Input';
import { InputChangeEvent } from '../Input/common/types';

import { SearchBarProps } from './common/types';

const SearchBar: FC<SearchBarProps> = (props) => {
	const {
		color,
		colorMode,
		renderClear,
		renderSubmit,
		w,
		width,
		h,
		height,
		maxW,
		maxWidth,
		maxH,
		maxHeight,
		initialQuery = '',
		isDisabled = false,
		isReadOnly = false,
		onClear,
		onFilter,
		onSubmit,
		...rest
	} = props;

	const [query, setQuery] = useState(initialQuery);
	const debouncedQuery = useDebounce(query, 'slow');

	const hasClear = !(isDisabled || isReadOnly) && query.length > 0 && renderClear;

	const handleClear = (): void => {
		setQuery('');

		if (onClear) {
			onClear();
		}
	};

	const handleFilter = (): void => {
		if (!!debouncedQuery && onFilter && !onSubmit) {
			onFilter(debouncedQuery);
		}
	};

	const handleSubmit = (): void => {
		if (!!debouncedQuery && !onFilter && onSubmit) {
			onSubmit(debouncedQuery);
		}
	};

	const handleQuery = (query: string): void => {
		if (query) {
			setQuery(query);
		} else {
			handleClear();
		}
	};

	useUpdateEffect(() => handleFilter(), [debouncedQuery]);

	useUpdateEffect(() => handleQuery(initialQuery), [initialQuery]);

	return (
		<Form
			w={w}
			width={width}
			h={h}
			height={height}
			maxW={maxW}
			maxWidth={maxWidth}
			maxH={maxH}
			maxHeight={maxHeight}
			onSubmit={handleSubmit}
		>
			<Input
				{...rest}
				w={w}
				width={width}
				h={h}
				height={height}
				maxW={maxW}
				maxWidth={maxWidth}
				maxH={maxH}
				maxHeight={maxHeight}
				color={color}
				colorMode={colorMode}
				autoComplete='off'
				isDisabled={isDisabled}
				isReadOnly={isReadOnly}
				onChange={(event: InputChangeEvent) => handleQuery(event.target.value)}
				renderLeft={({ color, colorMode, ...rest }) => (
					<Icon
						{...rest}
						color={color}
						colorMode={colorMode}
						icon='search'
						category='outlined'
						variant='transparent'
					/>
				)}
				renderRight={
					renderSubmit && onSubmit
						? ({ colorMode }) => (
								<HStack
									alignItems='stretch'
									justifyContent='stretch'
									divider={<Divider colorMode={colorMode} orientation='vertical' />}
									spacing={1}
								>
									{hasClear
										? renderClear({
												colorMode,
												icon: 'clear',
												category: 'outlined',
												onClick: handleClear,
												variant: 'icon'
										  })
										: null}

									{renderSubmit({
										children: 'Submit',
										color,
										colorMode,
										isDisabled: isDisabled || isReadOnly || query.length === 0,
										isRound: true,
										type: 'submit',
										variant: 'contained'
									})}
								</HStack>
						  )
						: ({ colorMode }) =>
								hasClear
									? renderClear({
											colorMode,
											icon: 'clear',
											category: 'outlined',
											onClick: handleClear,
											variant: 'icon'
									  })
									: null
				}
				type='text'
				value={query}
			/>
		</Form>
	);
};

export default SearchBar;
