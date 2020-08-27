import DataTable, { createTheme } from 'react-data-table-component';
import React from 'react';
import styled from 'styled-components';

/**
 * Define datatable filter input
 * @param {string} filterText
 *  
 */
const FilterComponent = ({ filterText, onFilter }) => (
    <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
);

/**
 * Define datatable
 * @param {*} props 
 */
const BasicTable = props => {
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = props.array.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    }, [filterText, resetPaginationToggle]);

    createTheme('solarized', {
        secondary: '#2aa198',
        text: {
            primary: '#000000',
        },
        background: {
            default: '#',
        },
        context: {
            text: '#FFFFFF',
        },
        divider: {
            default: '#073642',
        },
    });

    return (
        <DataTable
            title={props.title}
            columns={props.columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
            theme="solarized"
        />
    );
};

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

export {
    BasicTable,
}
