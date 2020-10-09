import React, { useState, useEffect } from 'react';
import { EditUser, GetUsers } from '../../services/users.service';
import { getStatusButtonText, getStatusColor } from '../../services/design.service'
import { actualDate, isTokenValid, tokenDate } from '../../services/token.service';
import { BasicTable } from '../../components/Table';
import { ResultModal } from '../../components/ModalReturn';
import { Row, Container, Col, Button } from 'react-bootstrap';

const Users = props => {
    const [userList, setUserList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    useEffect(() => {
        setTimeout(
            () => {
                if (localStorage.getItem('token') !== null && isTokenValid(actualDate, tokenDate)) {
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
     * Retrieve and dislay all users
     */
    const getAllUsers = async () => {
        const res = await GetUsers();
        setUserList(res.data.users);
    }

    /**
     * Update user status
     * @param {array} row 
     */
    const changeStatus = async (row) => {
        let status;
        if (row.userStatus === 1) {
            status = 0;
        }
        else {
            status = 1;
        };

        let dataToEdit = {
            userStatus: status,
        }

        let newItemData = {
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
            alias: row.alias,
            level: row.level,
            exp: row.exp,
            address: row.address,
            city: row.city,
            postalCode: row.postalCode,
            phone: row.phone,
            birthday: row.birthday,
            sexe: row.minsexeLevel,
            userStatus: status
        };

        await EditUser(row.id, dataToEdit)
            .then((res) => {
                let newUserList = userList.map((item) => {
                    if (item.id === row.id) {
                        return newItemData;
                    }
                    else
                        return item;
                })
                setUserList(newUserList);
                displayStatus(res.data.msg);
            }, (error) => {
                console.log(error.response.data)
                displayStatus(error.response.data.message)
            });
    }

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
            name: 'Status',
            selector: 'userStatus',
            right: true,
            sortable: true,
        },
        {
            name: 'Status',
            cell: (row) => <Button variant={getStatusColor(row, "userStatus")} onClick={(e) => changeStatus(row)} >{getStatusButtonText(row, "userStatus")}</Button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            right: true,
        },
    ];

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
                    <BasicTable title="Users List" columns={columns} array={userList} nameToFilter="firstName" />
                </Container>
            </div >
        )
    }
}

export default Users;