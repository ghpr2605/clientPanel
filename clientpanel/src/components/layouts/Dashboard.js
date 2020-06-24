import React from 'react';
import Clients from '../client/Clients';
import Sidebar from '../layouts/Sidebar';


export default function Dashboard() {
    return (
        <div className="row">
            <div className="col-md-10">
                <Clients></Clients>
            </div>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}
