import { FC, useState } from 'react';

import { HStack } from '@chakra-ui/react';

import { useUpdateEffect } from 'usehooks-ts';

import { useDebounce } from '../../../common/hooks';
import Divider from '../../Divider';
import Icon from '../../Icon';
import Form from '../Form';
import Input from '../Input';
import { InputChangeEvent } from '../Input/types';

import { SearchBarProps } from './types';

const SearchBar: FC<SearchBarProps> = (props) => {
	const {
		color,
		colorMode,
		renderClear,
		renderSubmit,
		initialQuery = '',
		isDisabled = false,
		isFullWidth = false,
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
		<Form width={isFullWidth ? '100%' : 'auto'} onSubmit={handleSubmit}>
			<Input
				{...rest}
				color={color}
				colorMode={colorMode}
				autoComplete='off'
				isDisabled={isDisabled}
				isFullWidth={isFullWidth}
				isReadOnly={isReadOnly}
				onChange={(event: InputChangeEvent) => handleQuery(event.target.value)}
				renderLeftPanel={({ color, colorMode, ...rest }) => (
					<Icon {...rest} colorMode={colorMode} icon='search' category='outlined' skeletonColor={color} />
				)}
				renderRightPanel={
					renderSubmit && onSubmit
						? ({ colorMode }) => (
								<HStack
									alignItems='stretch'
									justifyContent='stretch'
									divider={<Divider colorMode={colorMode} orientation='vertical' />}
									spacing={1}
								>
									{hasClear &&
										renderClear({
											colorMode,
											icon: 'clear',
											category: 'outlined',
											onClick: handleClear,
											variant: 'icon'
										})}

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
								hasClear &&
								renderClear({
									colorMode,
									icon: 'clear',
									category: 'outlined',
									onClick: handleClear,
									variant: 'icon'
								})
				}
				type='text'
				value={query}
			/>
		</Form>
	);
};

export default SearchBar;