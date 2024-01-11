import { Box, Typography, TextField, Button } from "@mui/material";

const Register = () => {
  return (
    <>
      <Box
        maxWidth={450}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        boxShadow="10px 10px 20px #ccc"
        padding={3}
        borderRadius={5}
      >
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase" }}
          padding={3}
          textAlign="center"
        >
          Register
        </Typography>
        <TextField
          placeholder="Name"
          name="name"
          margin="normal"
          type={"text"}
          required
        />
        <TextField
          placeholder="Email"
          name="email"
          margin="normal"
          type={"email"}
          required
        />
        <TextField
          placeholder="Password"
          name="password"
          margin="normal"
          type={"password"}
          required
        />
        <Button
          type="submit"
          sx={{ borderRadius: 3, marginTop: 3 }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        <Button sx={{ borderRadius: 3, marginTop: 3 }}>
          Already Registerd ? Please Login
        </Button>
      </Box>
    </>
  );
};

export default Register;
