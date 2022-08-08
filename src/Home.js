import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Button from '@mui/material/Button';
import CustomModal from './modal/Modal';
import DialogBox from './Dialog/DialogBox';

const Home = () =>{

    const [studentDetails, setStudentDetails] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  

    React.useEffect(()=>{
        getAllStudents()
    },[]);

    const getAllStudents = async () =>{
        return (
            await axios.get(`https://jtcrud-backend.herokuapp.com/api/get-student-details`)
            .then((res)=>{
                console.log(res.data.data);
                setStudentDetails(res.data.data);
            }
            )
        )
    }

    const setDelete = () =>{
        setDeleteOpen(!deleteOpen);
    }

    const showAllDetails = () =>{
        setOpen(!open);
    }

    return(
        <div>
             <Box sx={{ width: '100%' }}>
                <Typography variant="h3" component="div" gutterBottom align='center'>
                    Student Management System
                </Typography>
                <Typography variant="h5" component="div" gutterBottom align='justify'>
                    List of Students:
                        <ul>
                                {studentDetails.map((data)=><li>
                                {data.firstName +" "+data.lastName}<Button onClick={showAllDetails}>Show all details/Edit</Button>{open && <CustomModal open={open} close={showAllDetails} data={data} firstname={data.firstName} lastName={data.lastName} date={data.dateOfBirth}/>}
                                <Button onClick={setDelete}>Delete Info</Button> { deleteOpen &&  <DialogBox open={deleteOpen} close={setDelete} data={data}/>}
                                </li>)}
                        </ul>
                </Typography>
             </Box>
        </div>
    )
}

export default Home;