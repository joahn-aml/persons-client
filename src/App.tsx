import { Heading } from '@/components/Heading'
import Container from '@mui/material/Container'
import { Actions } from '@/components/Actions'
import { List } from '@/components/List'
import { ThemeProvider } from '@emotion/react'
import { theme } from './lib/theme'
import { CssBaseline } from '@mui/material'
import { ApiProvider } from '@/state/api.tsx'
import { PersonsProvider } from '@/state/persons'
import { SnackbarProvider } from 'notistack'

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SnackbarProvider
      maxSnack={3}
      transitionDuration={{ enter: 137, exit: 69 }}
      autoHideDuration={1337}
      hideIconVariant={true}
    >
      <ApiProvider>
        <PersonsProvider>
          <Container sx={{ py: '34px' }} maxWidth="lg">
            <Heading />
            <Actions />
            <List />
          </Container>
        </PersonsProvider>
      </ApiProvider>
    </SnackbarProvider>
  </ThemeProvider>
)
