import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, TextField, Typography, Paper,Link } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../validation/RegisterSchema'
import { Link as RouterLink } from 'react-router-dom';
export default function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onTouched"
  });

  const registerForm = async (values) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log("response", response)
    } catch (error) {
      console.log("catch error", error);
    }
  }

  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#d7ccc8"
      },
      '&:hover fieldset': {
        borderColor: "#7a4a35"
      },
      '&.Mui-focused fieldset': {
        borderColor: "#7a4a35"
      }
    },
    '& .MuiInputLabel-root': {
      color: "#7a4a35"
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: "#7a4a35"
    }
  }

  return (
    <Box component={'section'} className='register-form'
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f5f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} >

      <Paper
        elevation={2}
        sx={{
          width: "600px",
          padding: 6,
          borderRadius: "20px",
          backgroundColor: "#ffffff"
        }}
      >

        <Typography
          variant='h2'
          textAlign={"center"}
          sx={{ color: "#7a4a35", fontWeight: 600 }}
        >
          Register
        </Typography>

        <Box
          component={'form'}
          onSubmit={handleSubmit(registerForm)}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          mt={4}
        >

          <TextField {...register('userName')} label="User Name" fullWidth
            error={errors.userName}
            helperText={errors.userName?.message}
            sx={inputStyle}
          />

          <TextField {...register('fullName')} label="Full Name" fullWidth
            error={errors.fullName}
            helperText={errors.fullName?.message}
            sx={inputStyle}
          />

          <TextField {...register('email')} label="Email" fullWidth
            error={errors.email}
            helperText={errors.email?.message}
            sx={inputStyle}
          />

          <TextField {...register('password')} type="password" label="Password" fullWidth
            error={errors.password}
            helperText={errors.password?.message}
            sx={inputStyle}
          />

          <TextField {...register('phoneNumber')} label="Phone Number" fullWidth
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            sx={inputStyle}
          />

          <Button
            variant="contained"
            type='submit'
            sx={{
              backgroundColor: "#7a4a35",
              paddingY: 1.5,
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "16px",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: "#633826",

              }
            }}
          >
            Register
          </Button>
          <Typography textAlign={"center"}>
            you have an account?{" "}
            <Link component={RouterLink} to="/login" sx={{ color: "#7a4a35", fontWeight: 500 }}>
              login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}