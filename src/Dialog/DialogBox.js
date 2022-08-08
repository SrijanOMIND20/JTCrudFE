import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';

const DialogBox = ({open,close,data}) => {

    const handleClose = async() =>{
        await axios.delete(`https://jtcrud-backend.herokuapp.com/api/delete-student/?id=${data._id}`).then(
            alert("Data Deleted Successfully!")
        )
        .catch((err)=>{
            console.log(err);
        }
        )
        window.location.reload();
    }

    return(
        <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete the data?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={close}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
    </Dialog>
    )

}

export default DialogBox;