import {useEffect,useState} from 'react'
import axios from 'axios'
import { Box, Table, TableHead, TableCell, TableContainer,Paper, Button,TableRow,TableBody} from "@mui/material";
import { useNavigate } from "react-router-dom";
function Users() {
    const [users,setUsers]=useState([])
    const [Total,setTotal]=useState()
    const navigate=useNavigate();
    useEffect(() => {
      fetchUsers();
    }, []);

    const fetchUsers = () => {
      axios
        .get("http://localhost:8080/Users")
        .then((res) => {
          setUsers(res.data.users);
          setTotal(res.data.users.length);
        })
        .catch((err) => console.log(err));
    };
    const handleDelete=(email)=>{
      axios.delete(`http://localhost:8080/Users/${email}`)
      .then(()=>fetchUsers())
      .catch((err)=>console.log(err));
    }
    const handleEdit=(email)=>{
      navigate(`/Edit/${email}`)
    }
  return (
    <>
      <h2>Total numbers of users is {Total}</h2>
      <TableContainer component={Paper}>
        <Box display="flex" justifyContent="center" alignContent="center">
          <Table sx={{ minWidth: 700 }} maxwidth="xs">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Password</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user,idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell align="center">{user.Name}</TableCell>
                    <TableCell align="center">{user.Email}</TableCell>
                    <TableCell align="center">{user.Pass}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleEdit(user.Email)}
                        sx={{ marginRight: "10px" }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(user.Email)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </>
  );
}

export default Users