import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useRef } from 'react';

const CreateStudent = ({open,close}) =>{

    const [Firstname,setFirstName] = React.useState("");
    const [LastName,setLastName] = React.useState("");
    const [DOB,setDOB] = React.useState("");
    const [Percent,setPercent] = React.useState("");
    //const [id,setId] = React.useState("");

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
            firstName: Firstname,
            lastName: LastName,
            dateOfBirth: DOB,
            Percentage: Percent
        }
        console.log("Body",body);
        await axios.post(`https://jtcrud-backend.herokuapp.com/api/create-student`,{data:body},{
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        .then(alert("Student Details Created!"));
        window.location.reload();
    }

    const handleFirstname = (e) =>{
        setFirstName(e.target.value);
    }

    const handleLastname = (e) =>{
        setLastName(e.target.value);
    }

    const handleDOB = (e) =>{
        setDOB(e.target.value);
    }

    const handlePercent = (e) =>{
        setPercent(e.target.value);
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
                        <TextField id='outlined-required' label='First Name' variant='standard' onChange={handleFirstname} defaultValue="" />
                        <TextField id='outlined-required' label='Last Name' variant='standard' onChange={handleLastname} defaultValue="" />
                        <TextField id='outlined-required' label='Date Of Birth' variant='standard' onChange={handleDOB} defaultValue="" />
                        <TextField id='outlined-required' label='Percentage %' variant='standard'onChange={handlePercent} defaultValue="" />
                        <Button onClick={updateValues}> Create </Button>
                    </div>
                }
        </Box>
      </Modal>
    </div>
    )
}


export default CreateStudent;