import { Person } from '@/types/Person'

export type SortColumn = 'name' | 'birthdate' | 'title' | 'license'
export type SortDirection = 'asc' | 'desc'

export const sortPersons = (
  persons: Person[],
  sortColumn: SortColumn,
  sortDirection: SortDirection
): Person[] =>
  structuredClone(persons).sort((a: Person, b: Person) => {
    const referenceString =
      sortDirection === 'asc' ? String(a[sortColumn]) : String(b[sortColumn])
    const compareString =
      sortDirection === 'asc' ? String(b[sortColumn]) : String(a[sortColumn])

    return referenceString.localeCompare(compareString, 'sv', {
      sensitivity: 'base',
    })
  })
