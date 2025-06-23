import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField,Paper,Button,Container,Typography,Box,Grid } from "@mui/material";

function Edit() {
  const {email}=useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Country: "",
    State: "",
    Pass: "",
    Address: "",
    Zip: "",
    Company: "",
    Role: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/Users/${email}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, [email]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8080/Users/${email}`,user)
    .then(()=>navigate("/Users"))
    .catch((err)=>console.log(err));
  };
  return (
    <Container maxWidth="sm" display="flex">
      <Paper elevation={2} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h5">Edit User Information</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Box display="flex" flexDirection="row">
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="Full Name"
                  name="Name"
                  value={user.Name || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="Phone Number"
                  name="Phone"
                  value={user.Phone || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
            </Box>
            <Box display="flex" flexDirection="row">
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="Country"
                  name="Country"
                  value={user.Country || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="State"
                  name="State"
                  value={user.State || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
            </Box>
            <Box display="flex" flexDirection="row">
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="City"
                  name="City"
                  value={user.City || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="Address"
                  name="Address"
                  value={user.Address || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
            </Box>
            <Box display="flex" flexDirection="row">
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="Zipcode"
                  name="Zip"
                  value={user.Zip || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="Company"
                  name="Company"
                  value={user.Company || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
            </Box>
            <Box display="flex" flexDirection="row">
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="Role"
                  name="Role"
                  value={user.Role || ""}
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6} margin={1}>
                <TextField
                  label="Email"
                  name="Email"
                  value={user.Email}
                  disabled
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
            </Box>
          </Grid>
          <Box textAlign="center">
            <Button variant="contained" type="submit">
              Update
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Edit