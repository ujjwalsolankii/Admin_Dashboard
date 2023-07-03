import React from 'react'
import "./ProductList.css"


export default function ProductList() {
  return (
    <div className="productList">
        <DataGrid
                rows={data}
                disableRowSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
    </div>
  )
}
