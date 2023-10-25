import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { App } from './App.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { theme } from './lib/theme'
import { ApiProvider } from '@/state/api.tsx'
import { PersonsProvider } from '@/state/persons'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApiProvider>
        <PersonsProvider>
          <App />
        </PersonsProvider>
      </ApiProvider>
    </ThemeProvider>
  </React.StrictMode>
)
