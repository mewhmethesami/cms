import React,{useState} from 'react'
import {products} from'./../../datas'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Products.css'
function Products() {
    const [Products,setProducts]=useState(products)
    const productDelete=(Id)=>{
      setProducts(Products.filter(product=>product.id != Id))
    }
    const columns = [
        { field: 'id', 
          headerName: 'ID',
          width: 90 ,
        },
        { field: 'title', 
            headerName: 'Title',
            width: 200 ,
            renderCell:(params)=>{
              
                return (
                  <>
                  <Link to={`/product/${params.row.id}`} className='link'>
                    <div className='userListUser'>
                      <img src={params.row.avatar} alt="" className='userListImg' />
                      {params.row.title}
                    </div>
                  
                  </Link>
                  
                  </>
                )
            }
        },
        { field: 'price', 
          headerName: 'Price',
          width: 120 ,
        },
        { field: 'action', 
          headerName: 'Action',
          width: 150 ,
          renderCell:(params)=>{
            
              return (
                <>
                  <Link to={`/product/${params.row.id}`} className='link'>
                  <button className='userListEdit'>Edit</button>
                  </Link>    
                  <DeleteOutlineIcon onClick={()=>productDelete(params.row.id)}
                  className='userListDelete'/>
                </>
              )
          }
      },

    ]
  return (
      <DataGrid className='userList'
        rows={Products}
        columns={columns}
        disableRowSelectionOnClick
      />
  )
}

export default Products
