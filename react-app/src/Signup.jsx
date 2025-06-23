import React,{useState} from 'react'
import {Container,Box,Paper,TextField,Button} from "@mui/material";

function Signup() {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <>
      <Container maxWidth="xs" display='flex'>
        <Paper elevation={0}>
          <Box
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <h2>Sign In</h2>
            </div>
            <p>
              New User?
              <a href="#" style={{ color: "Green", textDecoration: "none" }}>
                Create an account
              </a>
            </p>
          </Box>
          <TextField
            label="Email Adress"
            variant="outlined"
            margin="normal"
            value={inputValue}
            onChange={handleChange}
            style={{ width: "100%" }}
          ></TextField>
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            value={inputValue}
            onChange={handleChange}
            style={{ width: "100%" }}
          ></TextField>
          <Box display="flex" justifyContent="flex-end">
            <a href="#" style={{ color: "black", marginTop: "5px" }}>
              Forgot Password?
            </a>
          </Box>
          <Button variant="contained" color="primary" style={{width:'100%',marginTop:'4%',color:'White',background:'black',borderRadius:'8px'}}>
            Login
          </Button>
        </Paper>
      </Container>
    </>
  );
}
export default Signup