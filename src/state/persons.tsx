import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { Person } from '@/types/Person'
import { gql, useClient } from 'urql'

const GET_PERSONS = gql`
  query GetPersons {
    persons {
      id
      name
      birthdate
      title
      license
    }
  }
`

const CREATE_RANDOM_PERSON = gql`
  mutation CreateRandomPerson {
    createRandomPerson {
      id
      name
      birthdate
      title
      license
    }
  }
`

const REMOVE_PERSON = gql`
  mutation RemovePerson($personId: String!) {
    removePerson(personId: $personId)
  }
`

const REMOVE_ALL_PERSONS = gql`
  mutation RemoveAllPersons {
    removeAllPersons {
      id
    }
  }
`

type PersonsState = {
  persons: Person[]
  getPersons: () => Promise<void>
  createRandomPerson: () => Promise<void>
  removePerson: (personId: string) => Promise<void>
  removeAllPersons: () => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PersonsContext = createContext<PersonsState>(undefined as any)

type PersonsProviderProps = {
  children: ReactNode
}

export const PersonsProvider = ({ children }: PersonsProviderProps) => {
  const apiClient = useClient()
  const [persons, setPersons] = useState<Person[]>([])

  const getPersons = async () => {
    const { data } = await apiClient.query(GET_PERSONS, {}).toPromise()

    setPersons(data.persons)
  }

  const createRandomPerson = async () => {
    const { data } = await apiClient
      .mutation(CREATE_RANDOM_PERSON, {})
      .toPromise()

    const { id, name, birthdate, title, license } =
      data.createRandomPerson as Person

    setPersons((persons) => [
      ...persons,
      { id, name, birthdate, title, license },
    ])
  }

  const removePerson = async (personId: string) => {
    await apiClient.mutation(REMOVE_PERSON, { personId }).toPromise()

    setPersons((persons) => persons.filter((p) => p.id !== personId))
  }

  const removeAllPersons = async () => {
    await apiClient.mutation(REMOVE_ALL_PERSONS, {}).toPromise()

    setPersons([])
  }

  useEffect(() => {
    getPersons()
  }, [])

  return (
    <PersonsContext.Provider
      value={{
        persons,
        getPersons,
        createRandomPerson,
        removePerson,
        removeAllPersons,
      }}
    >
      {children}
    </PersonsContext.Provider>
  )
}

export const usePersons = () => useContext(PersonsContext)
