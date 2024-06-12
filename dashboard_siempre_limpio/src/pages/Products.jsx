import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import img from '../assets/images/esponja.png'
import { useEffect, useState } from 'react';
import '../assets/css/products.css'
import { Button } from '@mui/material';

function Products() {

    let [products, setProducts] = useState([])

    let urlApiProducts = 'http://localhost:3030/api/products'

    useEffect(() => {
        fetch(urlApiProducts)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const prods = products.products || []

    console.log(prods);

    let rows = prods.map(p => ({
        id: p.id,
        name: p.name,
        price: `$ ${p.price}`,
        stock: p.stock,
        category: p.category.name,
        photo: img
    }))


    console.log(rows);



    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Nombre', flex: 1 },
        { field: 'price', headerName: 'Precio', flex: 1},
        { field: 'stock', headerName: 'Stock', flex: 1},
        { field: 'category', headerName: 'Categoria', flex: 1 },
        {
            field: 'photo',
            headerName: 'Imagen',
            flex: 1,
            renderCell: (params) => (
                <img src={params.value} alt={params.row.fullName} style={{ width: 'auto', height: '100%', padding: "7px" }} />
            ),
        },
        {
            field: 'actionEdit',
            headerName: 'Editar',
            flex: 1,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleButtonClick(params.row.id)}
                >
                    Editar
                </Button>
            ),
        },
        {
            field: 'actionDelete',
            headerName: 'Eliminar',
            flex: 1,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleButtonClick(params.row.id)}
                >
                    Eliminar
                </Button>
            ),
        }
    ];


    return (
        <div className='DataGridContainer'>
            <div style={{ height: '600', width: '100%', overflow: 'scroll' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={80}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default Products