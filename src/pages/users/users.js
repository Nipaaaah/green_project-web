import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { GetTips, DeleteTip, EditTip } from '../../services/tips.service';
import { getStatusButtonText, getStatusColor } from '../../services/design.service'
import { BasicTable } from '../../components/Table';
import { ResultModal } from '../../components/ModalReturn';
import { GetUsers } from '../../services/users.service';

const Users = props => {
    const [userList, setUserList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    console.log(userList);

    useEffect(() => {
        setTimeout(
            () => {
                if (localStorage.getItem('token') !== null) {
                    getAllUsers();
                    if (props.location.state !== undefined) {
                        //Everytime there's an api call, display status
                        if (props.location.state.msg !== undefined) {
                            displayStatus(props.location.state.msg);
                            window.history.replaceState(null, null, "/"); //Empty status after display
                        }
                    }
                } else {
                    window.location = "/login"
                }
            }
            , 1000)
    }, [])

    /**
     * Retrieve and dislay all tips
     */
    const getAllUsers = async () => {
        const res = await GetUsers();
        setUserList(res.data.users);
    }

    // /**
    //  * Delete a tips
    //  * @param {int} id 
    //  */
    // const del = async (id) => {
    //     await DeleteTip(id)
    //         .then((res) => {
    //             let list = tipList.filter(list => list.id !== id);
    //             setTipList(list);
    //             displayStatus(res.data.msg);
    //         }, (error) => {
    //             displayStatus(error);
    //         });
    // }

    // /**
    //  * Update tips status
    //  * @param {array} row 
    //  */
    // const changeStatus = async (row) => {
    //     let status;
    //     if (row.userStatus === 1) {
    //         status = 0;
    //     }
    //     else {
    //         status = 1;
    //     }
    //     let data = {
    //         id: row.id,
    //         name: row.name,
    //         desc: row.desc,
    //         tipStatus: status
    //     }
    //     await EditTip(row.id, data)
    //         .then((res) => {
    //             let newTipList = tipList.map((item) => {
    //                 if (item.id === row.id) {
    //                     return data;
    //                 }
    //                 else
    //                     return item;
    //             })
    //             setTipList(newTipList);
    //             displayStatus(res.data.msg);
    //         }, (error) => {
    //             displayStatus(error.response.data.message)
    //         });
    // }

    /**
     * Display api return message to modal
     * @param {string} msg 
     */
    const displayStatus = (msg) => {
        setResultMessage(msg);
        setModalShow(true);
        setTimeout(() => {
            setModalShow(false);
        }, 3000);
    }

    /**
     * Column definition for datatable
     */
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'First name',
            selector: 'firstName',
            sortable: true,
        },
        {
            name: 'Last name',
            selector: 'lastName',
            sortable: true,
        },
        {
            name: 'Alias',
            selector: 'alias',
            sortable: true,
        },
        {
            name: 'Level',
            selector: 'level',
            sortable: true,
        },
        {
            name: 'Adress',
            selector: 'address',
            sortable: true,
        },
        {
            name: 'City',
            selector: 'city',
            sortable: true,
        },
        {
            name: 'Postal code',
            selector: 'postalCode',
            sortable: true,
        },
        {
            name: 'Phone number',
            selector: 'phone',
            sortable: true,
        },
        {
            name: 'Birth date',
            selector: 'birthday',
            sortable: true,
        },
        {
            name: 'Exp points',
            selector: 'exp',
            sortable: true,
        },
        {
            name: 'Sex',
            selector: 'sexe',
            sortable: true,
        },
        {
            name: 'Delete',
            // cell: (row) => <Button variant="outline-danger"><FontAwesomeIcon icon={faTrash} onClick={(e) => del(row.id)} /></Button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            right: true,
        },
        {
            name: 'Status',
            selector: 'userStatus',
            right: true,
            sortable: true,
        },
        {
            name: 'Status',
            // cell: (row) => <Button variant={getStatusColor(row, "userStatus")} onClick={(e) => changeStatus(row)} >{getStatusButtonText(row, "userStatus")}</Button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            right: true,
        },
    ];

    // const addButton = <Button style={{ marginRight: '1em' }} variant="outline-success" onClick={goToAddTip}><FontAwesomeIcon icon={faPlus} /> Add</Button>;

    if (userList.length === 0) {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            Loading...
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
    else {
        return (
            <div>
                <Container fluid>
                    <ResultModal
                        msg={resultMessage}
                        show={modalShow}
                        animation={false}
                        onHide={() => setModalShow(false)}
                    />
                    <BasicTable title="Users List" columns={columns} array={userList}></BasicTable>
                </Container>
            </div >
        )
    }
}

export default Users;