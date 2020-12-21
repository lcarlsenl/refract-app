import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Agenda() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Schedule Repair
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Event</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Information below.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="date"
                        type="date"
                        
                    />
                    <br />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Customer Name"
                        type="text"
                        
                    />
                    <br />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Bicycle Type"
                        type="text"
                        
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Apply
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}