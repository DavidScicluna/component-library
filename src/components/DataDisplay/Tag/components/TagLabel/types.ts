import { CenterProps } from '@chakra-ui/react';

import { TagProps } from '../../types';

export type TagLabelProps = Omit<CenterProps, 'children'> & Pick<TagProps, 'children'>;
