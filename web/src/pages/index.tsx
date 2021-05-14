import Button from '@components/elements/Button';
import Box from '@components/layout/Box';
import Container from '@components/layout/Container';
import Flex from '@components/layout/Flex';
import Icon from '@components/elements/Icon';

const Index = () => {
  return (
    <div>
      <Box>asd</Box>
      <Flex>Flexbox</Flex>
      <Container>This is container</Container>
      <Container mt={5}>
        <h1>Buttons</h1>
        <Box>
          <Button>Gray</Button>
        </Box>
        <Box mt={2}>
          <Button isPrimary>Create account</Button>
        </Box>
        <Box mt={2}>
          <Button isLoading isPrimary>
            Create account
          </Button>
        </Box>
        <Box mt={2}>
          <Button leftIcon={<Icon name='close' />} isPrimary>
            Create account
          </Button>
        </Box>
        <Box mt={2}>
          <Button rightIcon={<Icon name='close' />} isPrimary>
            Create account
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Index;
