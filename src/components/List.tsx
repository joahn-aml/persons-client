import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import CheckIcon from '@mui/icons-material/Check'
import differenceInYears from 'date-fns/differenceInYears'
import TableSortLabel from '@mui/material/TableSortLabel'
import { usePersons } from '@/state/persons'
import { useState, useMemo } from 'react'
import { sortPersons, SortColumn, SortDirection } from '@/lib/sorting'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#fae1ec',
    color: theme.palette.primary.main,
  },
}))

export const List = () => {
  const { persons, removePerson } = usePersons()
  const [sortColumn, setSortColumn] = useState<SortColumn>('name')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const sortedPersons = useMemo(
    () => sortPersons(persons, sortColumn, sortDirection),
    [persons, sortColumn, sortDirection]
  )

  const handleSortChange = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <TableSortLabel
                active={sortColumn === 'name'}
                direction={sortDirection}
                onClick={() => handleSortChange('name')}
              >
                Namn
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="right">
              <TableSortLabel
                active={sortColumn === 'birthdate'}
                direction={sortDirection}
                onClick={() => handleSortChange('birthdate')}
              >
                Ålder&nbsp;(år)
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell>
              <TableSortLabel
                active={sortColumn === 'title'}
                direction={sortDirection}
                onClick={() => handleSortChange('title')}
              >
                Titel
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="center">
              <TableSortLabel
                active={sortColumn === 'license'}
                direction={sortDirection}
                onClick={() => handleSortChange('license')}
              >
                Licens
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="center">{/* Delete */}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedPersons.map((person) => (
            <TableRow
              key={person.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {person.name}
              </TableCell>
              <TableCell align="right">
                {differenceInYears(new Date(), new Date(person.birthdate))}
              </TableCell>
              <TableCell>{person.title}</TableCell>
              <TableCell align="center" padding="checkbox">
                {person.license && <CheckIcon color="success" />}
              </TableCell>
              <TableCell align="center" padding="checkbox">
                <IconButton
                  color="primary"
                  title="Ta bort den här personen"
                  onClick={() => removePerson(person.id)}
                >
                  <PersonRemoveIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
