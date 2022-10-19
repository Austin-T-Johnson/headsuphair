import React from 'react'
import { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import Box from '@mui/material/Box'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    return (

        <Stack spacing={1}>
            <TextField label='Name' required value={name} onChange={e => setName(e.target.value)} helperText={!name ? 'Required' : ''}></TextField>
            <TextField label='Email' required type='email' value={email} onChange={e => setEmail(e.target.value)} helperText={!email ? 'Required' : ''}></TextField>
            <TextField label='Phone' required value={phone} onChange={e => setPhone(e.target.value)} helperText={!phone ? 'Required' : ''}></TextField>

            <Box sx={{ width: 500, maxWidth: '100%', }}>
                <TextField label='Message' required multiline fullWidth value={message} onChange={e => setMessage(e.target.value)} helperText={!message ? 'Required' : ''}></TextField>
            </Box>
        </Stack>
    )
}

export default Form