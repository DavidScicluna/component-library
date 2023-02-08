import { ChakraProviderProps } from '@chakra-ui/react';

export type ProviderProps = Omit<ChakraProviderProps, 'theme'> & Partial<Pick<ChakraProviderProps, 'theme'>>;
