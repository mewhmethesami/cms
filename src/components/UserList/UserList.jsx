import React,{useState} from 'react'
import {userRows} from'./../../datas'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './UserList.css'
function UserList() {
    const [userDatas,setUserdatas]=useState(userRows)
    const userDelete=(userId)=>{
      setUserdatas(userDatas.filter(user=>user.id != userId))
    }
    const columns = [
        { field: 'id', 
          headerName: 'ID',
          width: 90 ,
        },
        { field: 'email', 
          headerName: 'Email',
          width: 100 ,
        },
        { field: 'user', 
            headerName: 'User',
            width: 200 ,
            renderCell:(params)=>{
                return (
                  <>
                  <Link to={`/user/${params.row.id}`} className='link'>
                    <div className='userListUser'>
                      <img src={params.row.avatar} alt="" className='userListImg' />
                      {params.row.username}
                    </div>
                  
                  </Link>
                  
                  </>
                )
            }
        },

        { field: 'status', 
          headerName: 'Status',
          width: 120 ,
        },
        { field: 'action', 
          headerName: 'Action',
          width: 200 ,
          renderCell:(params)=>{
            
              return (
                <>
                  <Link to={`/user/${params.row.id}`} className='link'>
                  <button className='userListEdit'>Edit</button>
                  </Link>    
                  <DeleteOutlineIcon onClick={()=>userDelete(params.row.id)}
                  
                  className='userListDelete'/>
                </>
              )
          }
      },

    ]
  return (
      <DataGrid className='userList'
        rows={userDatas}
        columns={columns}
        disableRowSelectionOnClick
      />
  )
}

export default UserList
