import { FC, useState } from 'react';

import { Center, HStack } from '@chakra-ui/react';

import { useUpdateEffect } from 'usehooks-ts';

import { useDebounce } from '../../../common/hooks';
import Divider from '../../DataDisplay/Divider';
import Icon from '../../DataDisplay/Icon';
import Fade from '../../Transitions/Fade';
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

	const hasClear = !(isDisabled || isReadOnly) && query.length > 0 && renderClear && onClear;

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
		<Form onSubmit={handleSubmit}>
			<Input
				{...rest}
				color={color}
				colorMode={colorMode}
				autoComplete='off'
				isDisabled={isDisabled}
				isReadOnly={isReadOnly}
				onChange={(event: InputChangeEvent) => handleQuery(event.target.value)}
				renderLeft={({ colorMode, height }) => (
					<Center width='100%' height='100%'>
						<Icon
							width={`${height}px`}
							height={`${height}px`}
							fontSize={`${height}px`}
							color='gray'
							colorMode={colorMode}
							icon='search'
							category='outlined'
							variant='transparent'
						/>
					</Center>
				)}
				renderRight={
					renderSubmit && onSubmit
						? ({ colorMode }) => (
								<HStack
									alignItems='stretch'
									justifyContent='stretch'
									divider={<Divider color='gray' colorMode={colorMode} orientation='vertical' />}
									spacing={1}
								>
									{renderClear && onClear ? (
										<Fade in={!!hasClear} unmountOnExit={false}>
											{renderClear({
												color: 'gray',
												colorMode,
												icon: 'clear',
												category: 'outlined',
												onClick: handleClear,
												variant: 'icon'
											})}
										</Fade>
									) : null}

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
						: renderClear && onClear
						? ({ colorMode }) => (
								<Fade in={!!hasClear} unmountOnExit={false}>
									{renderClear({
										color: 'gray',
										colorMode,
										icon: 'clear',
										category: 'outlined',
										onClick: handleClear,
										variant: 'icon'
									})}
								</Fade>
						  )
						: undefined
				}
				type='text'
				value={query}
			/>
		</Form>
	);
};

export default SearchBar;
