import { Container, Ball, Box, Shadow } from "./Loader.styled";

const Loader = () => {
  return (
    <Container>
      <Box>
        <Ball></Ball>
        <Ball></Ball>
        <Ball></Ball>
        <Shadow></Shadow>
        <Shadow></Shadow>
        <Shadow></Shadow>
      </Box>
    </Container>
  );
};
export default Loader;
