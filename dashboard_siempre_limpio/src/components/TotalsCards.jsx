import React from 'react'

function TotalsCards({ color, title, count, icon }) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xl font-weight-bold text-primary text-uppercase mb-1">{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{count}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`${icon} fa-2x text-black-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalsCards