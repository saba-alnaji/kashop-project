import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../../validation/LoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';

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
    <>
      <Box component={'section'} className='login-form'>
        <Typography component={'h1'} variant='h1'>Login</Typography>
        <Box component={'form'} onSubmit={handleSubmit(loginForm)} display={'flex'} flexDirection={'column'} gap={2} mt={3} alignItems={'center'}>
          <TextField {...register('email')} label="email" fullWidth variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
          />
          <TextField {...register('password')} label="password" fullWidth variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
          />
          <Button variant="contained" type='submit'>Login</Button>
        </Box>
      </Box>
    </>)
}
