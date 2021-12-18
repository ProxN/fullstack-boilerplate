import Link from 'next/link';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import { useMeQuery, useLogoutMutation } from '@lib/graphql';
import { client } from '@lib/utility/graphqlClient';
import { Button } from '@components/elements/Button';
import { Heading } from '@components/elements/Heading';
import { Box } from '@components/layout/Box';
import { Center } from '@components/layout/Center';
import { Space } from '@components/layout/Space';
import { Loader } from '@components/elements/Loader';
import {
  Modal,
  ModalOverylay,
  ModalContent,
  ModalHeading,
  CloseModalButton,
  ModalBody,
  ModalFooter,
} from '@components/elements/Modal';
import { useDisclosure } from '@lib/hooks/useDisclosure';

const Index = () => {
  const queryClient = useQueryClient();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: user, isLoading } = useMeQuery(client, undefined, {
    staleTime: 1000 * 60 * 60 * 24,
  });

  const { mutate, isLoading: logoutLoading } = useLogoutMutation(client, {
    onSuccess: (data) => {
      if (data.logout) {
        queryClient.invalidateQueries('Me');
        toast.success('Successfully logged out!');
      }
    },
  });

  return (
    <Box>
      <Center minH='100vh'>
        {isLoading ? (
          <Loader />
        ) : user?.me ? (
          <Box>
            <Heading mb={2} as='h1' size={{ xs: '2xl', md: '3xl' }}>
              Hello, {user?.me.name}!
            </Heading>
            <Center>
              <Button
                isLoading={logoutLoading}
                onClick={() => mutate({})}
                variant='outline'
              >
                logout
              </Button>
            </Center>
          </Box>
        ) : (
          <Box>
            <Heading as='h1' size={{ xs: '3xl', md: '4xl' }}>
              Welcome to the Fullstack boilerplate
            </Heading>
            <Space mt='1rem' justifyContent='center'>
              <Link passHref href='/login'>
                <Button as='a' variant='ghost'>
                  Log in
                </Button>
              </Link>
              <Link passHref href='/signup'>
                <Button as='a' color='violet'>
                  Sign up
                </Button>
              </Link>
            </Space>
          </Box>
        )}
        <Button onClick={onOpen}>Open Modal</Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverylay />
        <ModalContent>
          <ModalHeading>Modal Title</ModalHeading>
          <CloseModalButton />
          <ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
            nostrud ad veniam.
          </ModalBody>
          <ModalFooter>
            <Button>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
