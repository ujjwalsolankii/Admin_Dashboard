import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";

export default function userList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200 , renderCell: (params)=>{
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
            <button className="userListEdit">Edit</button>
            <DeleteOutline className="userListDelete"/>
          </>
        )
      }
    }
  ];
  
  const rows = [
    { id: 1, userName: 'Jon Snow', avatar: "https://fashionsuggest.in/wp-content/uploads/2018/05/womens-formal-tops-for-office-banner-compressed.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 2, userName: 'Cersei Lannister', avatar: "https://jooinn.com/images/office-worker-3.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 3, userName: 'Jaime Lannister', avatar: "https://elcerebrohabla.com/wp-content/uploads/photodune-2567774-happy-businessman-l.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 4, userName: 'Arya Stark', avatar: "https://www.franklinshopper.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-20-at-9.55.20-AM.png", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 5, userName: 'Daenerys Targaryen', avatar: "https://hairstylecamp.com/wp-content/uploads/professional-hairstyles-for-men-11.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 6, userName: 'Sansa Stark', avatar: "http://www.understandingrelationships.com/wp-content/uploads/Fotolia_63579279_Subscription_Monthly_M.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 7, userName: 'Tyrion Lannister', avatar: "https://scportal.bccolleges.co.uk/images/courses/great_leadership/leadership_excellence2.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 8, userName: 'Missandei', avatar: "https://www.risingtidevermont.org/wp-content/uploads/2020/10/shutterstock_446643181.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 9, userName: 'Theon Greyjoy', avatar: "https://www.business-analysis.com.au/wp-content/uploads/2019/11/photo-of-man-wearing-eyeglasses-3184611-scaled.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    { id: 10, userName: 'Petyr Baelish', avatar: "https://g.foolcdn.com/editorial/images/524325/woman-smiling-while-working-on-a-laptop.jpg", email:"jon@gmail.com" ,status:"active" ,transaction:"$120.00" },
    
  ];
  return (
    <div className="userList">
        <DataGrid
        rows={rows}
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
    