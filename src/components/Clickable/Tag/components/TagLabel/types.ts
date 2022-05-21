import { CenterProps } from '@chakra-ui/react';

import { TagProps } from '../../types';

type Picked = 'children';

type Omitted = 'children';

export type TagLabelProps = Omit<CenterProps, Omitted> & Pick<TagProps, Picked>;
