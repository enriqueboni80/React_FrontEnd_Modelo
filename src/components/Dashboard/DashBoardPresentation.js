import React from "react"
import { Link } from "react-router-dom"

const DashboardPresentation = (props) => {
    return (
        <div className="container-fluid">
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Primary Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <Link className="small text-white stretched-link" to="#">View Details</Link>
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                        <div className="card-body">Warning Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <Link className="small text-white stretched-link" to="#">View Details</Link>
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                        <div className="card-body">Success Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <Link className="small text-white stretched-link" to="#">View Details</Link>
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                        <div className="card-body">Danger Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <Link className="small text-white stretched-link" to="#">View Details</Link>
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header"><i className="fas fa-chart-area mr-1"></i>Area Chart Example</div>
                        <div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header"><i className="fas fa-chart-bar mr-1"></i>Bar Chart Example</div>
                        <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header"><i className="fas fa-table mr-1"></i>DataTable Example</div>
                <div className="card-body">
                </div>
            </div>
        </div>
    )
}

export default DashboardPresentation