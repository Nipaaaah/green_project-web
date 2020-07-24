import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { GetTips, GetTip, AddTip, EditTip, DeleteTip } from '../../services/tips.service'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tips = () => {

  const [tipList, setTipList] = useState([])

  const getAllTips = async () => {
    const res = await GetTips();
    setTipList(res.data.tips);
  }

  const getTip = async () => {
    const test = await GetTip(1)
  }

  const edit = async (id) => {
    console.log(id)
    // const test = await EditTip(1)
  }

  const del = (id) => {
    console.log(id)
    // const test = await DeleteTip(1)
  }


  useEffect(() => {
    setTimeout(
      () => {
        getAllTips();
      }
      , 1000)
  },
    [],
  )

  const add = () => {
    const test = AddTip()
  }

  const FilterComponent = ({ filterText, onFilter }) => (
    <>
      <Button onClick={add}><FontAwesomeIcon icon={faPlus} /></Button>
      <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
    </>
  );

  const BasicTable = () => {
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = tipList.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = React.useMemo(() => {
      const handleClear = () => {
        if (filterText) {
          setResetPaginationToggle(!resetPaginationToggle);
          setFilterText('');
        }
      };

      return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    }, [filterText, resetPaginationToggle]);

    return (
      <DataTable
        title="Tip List"
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
    );
  };

  const columns = [
    {
      name: 'Id',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Description',
      selector: 'desc',
      sortable: true,
    },
    {
      name: 'Edit',
      cell: (row) => <FontAwesomeIcon onClick={(e) => edit(row.id)} icon={faEdit} />,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      right: true,
    },
    {
      name: 'Delete',
      cell: (row) => <FontAwesomeIcon icon={faTrash} onClick={ (e) => del(row.id)} />,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      right: true,
    },
    {
      name: 'Status',
      cell: () => <Button>Change</Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      right: true,
    },
  ];

  if (tipList.length === 0) {
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
          <BasicTable></BasicTable>
        </Container>
      </div >
    )
  }
}


const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default Tips;