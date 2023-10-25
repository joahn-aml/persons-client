import { Client, Provider, fetchExchange } from 'urql'
import { ReactNode } from 'react'

const client = new Client({
  url: import.meta.env.VITE_GRAPHQL_API,
  exchanges: [fetchExchange],
})

export const ApiProvider = ({ children }: { children: ReactNode }) => (
  <Provider value={client}>{children}</Provider>
)
