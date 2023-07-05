import './productList.css'
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data,setdata] = useState(productRows);

    const handelDelete = (id) => {
        setdata(data.filter(item=>item.id !== id));
    };
    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 90 },
        { 
            field: 'Product', 
            headerName: 'Product', 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            }
        },
        { 
            field: 'stock', 
            headerName: 'Stock', 
            width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action', 
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={'/product/'+params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                            <DeleteOutline className="productListDelete" onClick={() => handelDelete(params.row.id)} />
                    </>
                );
            }
        },
    ];


    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};