import React, {  useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import "./CompanyInfo.scss"
import message from '../../images/tabler_message.png';


export default function CompanyInfo(props) {
 
  const [image, setImage] = useState(false)
  const inputref = useRef(null)
  const handleImageClick=()=>{
    inputref.current.click();
  }

  const uploadimage=(e)=>{
    const file=e.target.files[0]
    console.log(file)
    setImage(e.target.files[0])
  }



return <>


<div className="CompanyInfo">
  <div className="container-fluid ">
    <div className="row">

      <div className="col-md-12 ">


      <div className='CompanyInfo-page '>
    
<div>
  <h2>Company Info</h2>
  <p>Describe your company in details</p>
 


 
  <div className='CompanyInfo-form'>
  
      <form>
      <label htmlFor="image-input">Add Company Logo</label>
      <div >
      {image?  <img src={URL.createObjectURL(image)} alt="company-logo" className='iamge' onClick={handleImageClick} />:
      <div className='addimage'>
      <i className="fa-solid fa-plus fa-2x" onClick={handleImageClick}></i>
     
      </div>}
     
       
       <input type="file" className="form-control image-input" ref={inputref} id='image-input' onChange={uploadimage} />
          
     </div>
<label htmlFor="name-input">Company Name</label>
 <input type="text" placeholder='Enter Your Name' className='form-control' id='name-input' />

 <label htmlFor="number-input">Contact Phone</label>
 <input type="text" placeholder='Enter Your Number' className='form-control' id='number-input' />
        
        

 <label htmlFor="email-input">Contact Email</label>
 <input type="email" placeholder='Enter Your Email' className='form-control' id='email-input' />
 
 <label htmlFor="number-input">Registration NO.</label>
 <input type="text" placeholder='Enter Your Number' className='form-control' id='number-input' />
        

 <label htmlFor="location-input">Location</label>
 <input type="text" placeholder='Enter Your Location' className='form-control mb-5' id='location-input' />
      </form>
      
 <label htmlFor="details-input">Details</label>
<textarea name="review" placeholder='About your company' id="details-input" cols="30" rows="4" className='form-control'></textarea>
      
      <Link to='companyPaymentOffers'>
      <button className='btn-login'>Save</button>

      </Link>
    
  </div>


 

</div>

</div>

</div>

   

    </div>
  </div>

</div>
</>
}
