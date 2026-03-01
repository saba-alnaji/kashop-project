import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../../validation/LoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography, Paper, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched"
  });

  const loginForm = async (values) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`, values);
      console.log("response", response)
    } catch (error) {
      console.log("catch error", error);
    }
  }

  return (
    <Box component={'section'} className='login-form'
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
          height: "500px",
          padding: 6,
          borderRadius: "20px",
          
        }}
      >

        <Typography
          variant='h2'
          textAlign={"center"}
          sx={{ color: "#7a4a35", fontWeight: 600 }}
        >
          Login
        </Typography>

        <Box
          component={'form'}
          onSubmit={handleSubmit(loginForm)}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          mt={4}
        >


          <TextField
            {...register('email')}
            label="Email"
            fullWidth
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
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
            }

          />

          < TextField {...register('password')} label="Password" fullWidth variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
             sx={{
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
            }
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
              '&:hover': {
                backgroundColor: "#633826"
              }
            }}
          >
            Login
          </Button>

          <Typography textAlign={"center"}>
            Don’t have an account?{" "}
            <Link component={RouterLink} to="/register" sx={{ color: "#7a4a35", fontWeight: 500 }}>
              Register
            </Link>
          </Typography>

        </Box>
      </Paper>
    </ Box>

  )
}