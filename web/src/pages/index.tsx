import Button from '@components/elements/Button';
import Box from '@components/layout/Box';
import Container from '@components/layout/Container';
import Flex from '@components/layout/Flex';
import Icon from '@components/elements/Icon';
import Space from '@components/layout/Space';
import IconButton from '@components/elements/IconButton';

const Index = () => {
  return (
    <div>
      <Box>asd</Box>
      <Flex>Flexbox</Flex>
      <Container>This is container</Container>
      <Container mt={5}>
        <h1>Buttons</h1>
        <Space>
          <Button>Gray</Button>
          <Button color='orange'>Orange</Button>
          <IconButton
            ariaLabel='Close Button'
            color='blue'
            icon={<Icon name='close' />}
          />
          <IconButton
            ariaLabel='Close Button'
            isCircle
            variant='light'
            color='blue'
            icon={<Icon name='close' />}
          />
        </Space>
      </Container>
    </div>
  );
};

export default Index;
