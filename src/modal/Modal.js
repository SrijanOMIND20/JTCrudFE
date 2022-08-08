import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useRef } from 'react';

const CustomModal = ({open,close,data}) =>{

    const FirstName = useRef(null);
    const LastName = useRef(null);
    const DOB = useRef(null);
    const Percent = useRef(null);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const updateValues = async () =>{
        const body={
            firstName: FirstName.current.value,
            lastName: LastName.current.value,
            dateOfBirth: DOB.current.value,
            Percentage: Percent.current.value
        }
        console.log("Body",body);

        // await axios.post
    }

    return(
        <div>
      <Button onClick={open}>Open modal</Button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            Student Details:
          </Typography>
                {
                    <div>
                        <TextField id='outlined-required' label='First Name' variant='standard' ref={FirstName} defaultValue={data.firstName} />
                        <TextField id='outlined-required' label='Last Name' variant='standard' ref={LastName} defaultValue={data.lastName} />
                        <TextField id='outlined-required' label='Date Of Birth' variant='standard' ref={DOB} defaultValue={data.dateOfBirth} />
                        <TextField id='outlined-required' label='Percentage %' variant='standard' ref={Percent} defaultValue={data.Percentage} />
                        <Button onClick={updateValues}> Update and Save </Button>
                    </div>
                }
        </Box>
      </Modal>
    </div>
    )
}

export default CustomModal;