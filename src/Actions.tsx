import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import RefreshIcon from '@mui/icons-material/Refresh'
import GroupRemoveIcon from '@mui/icons-material/GroupRemove'
import { usePersons } from '@/state/persons'

export const Actions = () => {
  const { getPersons, removeAllPersons, createRandomPerson } = usePersons()

  return (
    <Stack spacing={2} direction="row" sx={{ pb: '21px', pt: '13px' }}>
      <Button
        variant="contained"
        disableElevation
        color="secondary"
        startIcon={<PersonAddIcon />}
        size="small"
        onClick={createRandomPerson}
      >
        Skapa en ny person
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<RefreshIcon />}
        size="small"
        onClick={getPersons}
      >
        Ladda om personer
      </Button>
      <Button
        variant="text"
        color="primary"
        startIcon={<GroupRemoveIcon />}
        size="small"
        onClick={removeAllPersons}
      >
        Ta bort alla personer
      </Button>
    </Stack>
  )
}
