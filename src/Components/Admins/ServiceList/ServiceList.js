import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, ButtonGroup, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([]);
    const [status, setStatus] = useState("Pending");

    const handleStatus = (status, id) => {
        setStatus(status);
        fetch(`https://floating-crag-35103.herokuapp.com/updateOrders`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status, id})
        })
        .then(res => res.json())
        .then(data => {
            console.log("updated");
        })
        alert("Status updated successfully.");
    }

    useEffect(() => {
        fetch(`https://floating-crag-35103.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setServiceList(data);
            })
    }, [])

    return (
        <div style={{ borderRadius: 20 }} className="p-5 bg-white">
            <Table responsive size="sm">
                <thead style={{ backgroundColor: "#F4F7FC" }}>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Project Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        serviceList.map(service =>
                            <tr key={service._id}>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.project}</td>
                                <td>{service.details}</td>
                                <td>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="" className={service.status==="Pending"? "text-danger": service.status==="On going"? "text-warning":"text-success"}>{service.status}</Button>

                                        <Dropdown.Toggle split variant="" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="" onClick={() => {handleStatus("Pending", service._id)}}><Link to="/login" className="text-danger">Pending</Link></Dropdown.Item>
                                            <Dropdown.Item href=""  onClick={() => {handleStatus("On going", service._id)}}><Link to="/login" className="text-warning">On going</Link></Dropdown.Item>
                                            <Dropdown.Item href=""  onClick={() => {handleStatus("Done", service._id)}}><Link to="/login" className="text-success">Done</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ServiceList;