import * as React from 'react';
import DeleteIcone from '@mui/icons-material/Delete';
import EditIcone from '@mui/icons-material/Edit';
import {
  DataGridPro,
  GridActionsCellItem,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomEmail,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

export default function ColumnPinningWithCheckboxSelection() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        checkboxSelection
        initialState={{
          pinnedColumns: {
            left: [GRID_CHECKBOX_SELECTION_COL_DEF.field],
            right: ['actions'],
          },
        }}
      />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Nombre Producto', width: 200, editable: true },
  { field: 'category', headerName: 'Categoria', width: 200, editable: true },
  { field: 'price', headerName: 'Precio', type: 'number', width: 200, editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Imagen',
    type: 'img',
    width: 220,
    editable: true,
  },
  {
    field: 'actions',
    type: 'actions',
    width: 100,
    getActions: () => [
      <GridActionsCellItem icon={<EditIcone />} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcone />} label="Delete" />,
    ],
  },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    category: randomEmail(),
    price: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    category: randomEmail(),
    price: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    category: randomEmail(),
    price: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    category: randomEmail(),
    price: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    category: randomEmail(),
    price: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];