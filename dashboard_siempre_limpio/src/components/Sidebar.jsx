import React from 'react'
import logo from '../assets/images/logo.svg'
import ActionCard from './ActionCard';

function Sidebar(props) {

	const metrics = [
		{
			name: "Dashboard",
			href: "/dashboard",
		},
		{
			name: "Productos",
			href: "/products"
		},
		{
			name: "Usuarios",
			href: "/"
		},
		{
			name: "Editar Productos",
			href: "/"
		},
		{
			name: "Eliminar Producto",
			href: "/"
		}
	]

	return (
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Digital House" />
				</div>
			</a>

			<hr className="sidebar-divider my-0" />

			<li className="nav-item active">
				<a className="nav-link" href="/">
					<span>Dashboard - SIEMPRE LIMPIO</span></a>
			</li>

			<hr className="sidebar-divider" />

			{metrics.map((m) => {
				return <ActionCard name={m.name} href={m.href} key={m.name + 1} />
			})}

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	);
}

export default Sidebar;