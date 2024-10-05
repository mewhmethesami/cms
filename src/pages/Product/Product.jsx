import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'
import Chart from '../../components/Chart.jsx/Chart'
import {productsData} from '../../datas'
import PublishIcon from '@mui/icons-material/Publish';
function Product() {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
            <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale In Mounth" data={productsData} dataKey="Sales" />
        </div>
        <div className="productTopRight">
          <div className='productInfoTop'>
            <img src="./pics/react.png" alt="" className='productInfoImg'/>
            <span className='productName'>Dell Laptaop</span>
          </div>
        
          <div className='productInfoButtom'>
            <div className='productInfoItem'>
              <div className='productInfoKey'>ID: </div>
              <div className='productInfoValue'>132</div>
            </div>
            <div className='productInfoItem'>
              <div className='productInfoKey'>Name: </div>
              <div className='productInfoValue'>Dell Laptaop</div>
            </div>
            <div className='productInfoItem'>
              <div className='productInfoKey'>Sales: </div>
              <div className='productInfoValue'>$190000</div>
            </div>
            <div className='productInfoItem'>
              <div className='productInfoKey'>Active: </div>
              <div className='productInfoValue'>yes</div>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder='Dell Laptop' />
            <label htmlFor="">In stock</label>
            <select name="" id="inStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>

            <label htmlFor="">Active</label>
            <select name="" id="inStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUploader'>
              <img src="./pics/react.png" alt="" className='productUploaderImg' />
              <label >
                <PublishIcon/>
              </label>
              <input type="file" style={{display:"none"}} />
            </div>
            <button className='productButton'>Upload(edit)</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
