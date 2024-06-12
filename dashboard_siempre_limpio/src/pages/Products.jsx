import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import '../assets/css/products.css'
import { Button } from '@mui/material';

function Products() {

    let [products, setProducts] = useState([])

    const urlApiProducts = 'http://localhost:3030/api/products'
    const urlApiImage = 'http://localhost:3030/api/products/image/'

    useEffect(() => {
        fetch(urlApiProducts)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const prods = products.products || []

    const handleButtonDetail = (id) => {
        const url = 'http://localhost:3030/productos/detalle/' + id
        window.open(url, '_blank')
    }

    const handleButtonEdit = (id) => {
        const url = 'http://localhost:3030/admin/dashboard/editar/' + id
        window.open(url, '_blank')
    }


    let rows = prods.map(p => ({
        id: p.id,
        name: p.name,
        price: `$ ${p.price}`,
        stock: p.stock,
        category: p.category.name,
        photo: urlApiImage + p.image
    }))

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Nombre', flex: 1 },
        {
            field: 'price', headerName: 'Precio', width: 100,
            renderCell: (params) => (
                <div style={{ width: '100%', textAlign: 'center' }}>
                    {params.value}
                </div>
            ),
        },
        { field: 'stock', headerName: 'Stock', width: 100 },
        { field: 'category', headerName: 'Categoria', flex: 1 },
        {
            field: 'photo',
            headerName: 'Imagen',
            width: 200,
            renderCell: (params) => (
                <img src={params.value} alt={params.row.fullName} style={{ width: 'auto', height: '100%', padding: "7px" }} />
            ),
        },
        {
            field: 'ver',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => handleButtonDetail(params.row.id)}
                    >
                        Ver
                    </Button>
                </div>
            ),
        },
        {
            field: 'actionEdit',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleButtonEdit(params.row.id)}
                    >
                        Editar
                    </Button>
                </div>
            ),
        },
        {
            field: 'actionDelete',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleButtonClick(params.row.id)}
                    >
                        Eliminar
                    </Button>
                </div>
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