import React from 'react'
import { Input } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

function EditProduct() {
    return (
        <Box
            sx={{ width: '90%', maxWidth: '700px', display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
                <h1 style={{width: '100%', textAlign: 'center'}}> Editar Producto</h1>
            <TextField
                id="outlined-required"
                label="Nombre del producto"
                defaultValue="Hello World"
                sx={{ width: '95%', margin: '2.5%', }}
            />
            <TextField
                id="outlined-required"
                label="Precio"
                defaultValue={"1234"}
                type="number"
                sx={{ width: '45%', margin: '2.5%' }}
            />
            <TextField
                id="outlined-required"
                label="Stock"
                defaultValue={"1234"}
                type="number"
                sx={{ width: '45%', margin: '2.5%' }}
            />
            <FormControl sx={{width: '45%', margin: '2.5%'}}>
                <InputLabel id="demo-simple-select-label" sx={{margin: '2.5%'}} >Categoria</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Categoria"
                    value={'detergentes'}
                    sx={{ width: '100%'}}
                >
                    <MenuItem value={'detergentes'}>Detergentes</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Input
                id="file-upload"
                type="file"
                // onChange={handleFileChange}
                inputProps={{ accept: 'image/*' }}
                sx={{ width: 230, margin: '10px' }}
            />
            <TextField
                id="outlined-multiline-static"
                label="Descripción"
                multiline
                rows={4}
                defaultValue="Default Value"
                sx={{ width: '95%', margin: '2.5%'}}
            />
        </Box>
    )
}

export default EditProduct