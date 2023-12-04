import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import  { useState } from 'react';
import axios from 'axios';


const BlogWrite = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [cloudinary_id, setCloudinary_id] = useState(null);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      let newData={
        title,
        description,
        author,
        category,
        cloudinary_id: cloudinary_id
      }
      const response = await axios.post('https://elonatech.onrender.com/api/v1/blog/create', newData, { headers:{"Content-Type": "multipart/form-data"}});
     
      console.log(response.data)
     
    } catch (error) {
      console.error('Error creating blog post:', error);

    }
  };


    return (
        <div>
       
<div className="container" style={{marginTop:"50px"}}>

<form className=" " >
  <div className="container  mb-5">
    <div className="row">
      <div className="col-md-8">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e) => setTitle(e.target.value)}/>
          </div>

          <div class="mb-3" style={{}}>
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            {/* <textarea style={{overflowY:"scroll"}} class="form-control" id="exampleFormControlTextarea1" rows="14"></textarea> */}
            <ReactQuill theme="snow"   style={{ height:"30vh"}}  onChange={(value) => setDescription(value)}/>
          </div>
      </div>
    <div className="col-md-4">
        <div class="mb-3 mt-2">
          <label for="formFile" class="form-label"></label>
          <input class="form-control" type="file" id="formFile"  onChange={(e)=>setCloudinary_id(e.target.files[0])}/>
        </div>  

        {/*  */}
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Author</label>
            <input type="text" class="form-control" id="exampleInputPassword1"  onChange={(e) => setAuthor(e.target.value)}/>
        </div>



        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => setCategory(e.target.value)}/>
          <label class="form-check-label" for="flexCheckDefault">
          Trends
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={(e) => setCategory(e.target.value)}/>
          <label class="form-check-label" for="flexCheckChecked">
          News
          </label>
        </div>

    </div>
    <div className="col-md-5 mt-3">
  <button type="submit" class="btn btn-primary" onClick={handleSumbit}>Publish</button>
    </div>
    </div>
  </div>
</form> 
</div>
</div>
    );
}

export default BlogWrite;
