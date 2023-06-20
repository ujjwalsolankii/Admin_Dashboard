import "./userList.css"
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";


const UserList = () => {

  const [data , setData] = useState(userRows);
  const handleDelete = ( id ) => {
      setData( data.filter((item) => item.id !== id)); // Excluimos de data aquellos items cuya id coincida con el id seleccionado
  }



  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200 , 
    renderCell: (params)=>{
      return (
        <div className="userListuser">
          <img className="userListimg" src={params.row.avatar} alt="" />
          {params.row.userName}
        </div>
      )
    }},
    { field: 'email', headerName: 'email', width: 200 },
    {
      field: 'status',
      headerName: 'status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'transaction volume',
      width: 160,
    },
    {
      field: 'action',headerName:'Action',width: 150, 
      renderCell: (params)=> {
        return (
          <>
            <Link to={"/user/"+params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.rows.id)}/>
          </>
        )
      }
    }
  ];
  return (
    <div className="userList">
        <DataGrid
          rows={data}
          disableRowSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
    </div>
  )
}
    
export default UserList