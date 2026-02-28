import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../validation/RegisterSchema'

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
  return (
    <Box component={'section'} className='register-form'>
      <Typography component={'h1'} variant='h1'>Register</Typography>
      <Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'} gap={2} mt={3} alignItems={'center'}>
        <TextField {...register('userName')} label="user Name" fullWidth variant="outlined"
          error={errors.userName}
          helperText={errors.userName?.message}
        />
        <TextField {...register('fullName')} label="Full Name" fullWidth variant="outlined"
          error={errors.fullName}
          helperText={errors.fullName?.message}
        />
        <TextField {...register('email')} label="Email" fullWidth variant="outlined"
          error={errors.email}
          helperText={errors.email?.message}
        />
        <TextField {...register('password')} label="Password" fullWidth variant="outlined"
          error={errors.password}
          helperText={errors.password?.message}
        />
        <TextField {...register('phoneNumber')} label="Phone Number" fullWidth variant="outlined"
          error={errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <Button variant="contained" type='submit'>Register</Button>

      </Box>
    </Box>
  )
}
