import { Heading } from './Heading'
import Container from '@mui/material/Container'
import { Actions } from './Actions'
import { List } from './List'

export const App = () => (
  <Container sx={{ py: '34px' }} maxWidth="lg">
    <Heading />
    <Actions />
    <List />
  </Container>
)
