import * as React from 'react';
import ContainCategoryCards from '../components/ContainCategoryCards'
import TotalsCards from '../components/TotalsCards';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';



function Dashboard() {

  let [totalProducts, setTotalProducts] = useState([])
  let [categorys, setCategorys] = useState([])

  const urlApiProducts = 'http://localhost:3030/api/products'
  const urlApiCategorys = 'http://localhost:3030/api/categorys'


  useEffect(() => {
    fetch(urlApiProducts)
      .then(response => response.json())
      .then(data => setTotalProducts(data))
  }, [])

  useEffect(() => {
    fetch(urlApiCategorys)
        .then(response => response.json())
        .then(data => setCategorys(data))
}, [])

console.log(categorys);

  const metrics = [
    {
      color: "success",
      title: "Total de productos",
      count: totalProducts.count,
      icon: "fa-solid fa-user"
    },
    {
      color: "success",
      title: "Total de usuarios",
      count: 31,
      icon: "fa-solid fa-user"
    },
    {
      color: "success",
      title: "Total de Categorias",
      count: categorys.data?.length,
      icon: "fa-solid fa-user"
    }
  ]


  if (categorys < 1 || totalProducts < 1) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <CircularProgress color="inherit" />
        </div>
    )
} else {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel Administrador: SIEMPRE LIMPIO</h1>
      </div>

      <div className="row">
        {metrics.map(m => {
          return <TotalsCards key={m.count} color={m.color} title={m.title} count={m.count} icon={m.icon} />
        })}
      </div>


      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src alt=" Star Wars - Mandalorian " />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
              <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
            </div>
          </div>
        </div>

        <ContainCategoryCards />

      </div>
    </div>
  )}
}

export default Dashboard