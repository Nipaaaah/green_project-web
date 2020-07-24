import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { GetTips } from '../../services/tips.service'
import DataTable, { defaultThemes } from 'react-data-table-component';
import styled from 'styled-components';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tips = () => {

  const [tipList, setTipList] = useState([])

  const getAllTips = async () => {
    const res = await GetTips();
    setTipList(res.data.tips);
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

  const edit = () => {
    console.log('Edit')
  }

  const del = () => {
    console.log('Delete')
  }

  const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
      <ClearButton type="button" onClick={onClear}>X</ClearButton>
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
        selectableRows
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
      cell: () => <FontAwesomeIcon onClick={edit} icon={faEdit} />,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      right: true,
    },
    {
      name: 'Delete',
      cell: () => <FontAwesomeIcon icon={faTrash} onClick={del} />,
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


const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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