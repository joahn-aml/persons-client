import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import RefreshIcon from '@mui/icons-material/Refresh'
import GroupRemoveIcon from '@mui/icons-material/GroupRemove'
import { usePersons } from '@/state/persons'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'

export const Actions = () => {
  const { getPersons, removeAllPersons, createRandomPerson } = usePersons()
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
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
          onClick={() => setOpenDialog(true)}
        >
          Ta bort alla personer
        </Button>
      </Stack>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{'Ta bort alla personer?'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Är du helt säker på att du vill ta bort alla personer?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Avbryt</Button>
          <Button
            disableElevation
            variant="contained"
            color="warning"
            onClick={async () => {
              await removeAllPersons()
              setOpenDialog(false)
            }}
            autoFocus
          >
            Ta bort
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
