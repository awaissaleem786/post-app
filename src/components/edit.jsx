import axios from "axios";
import React, { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router";

const Edit = () => {


  // const location = useLocation();
  // const post = location.state?.mydata;
  // console.log(post);
  const {id}=useParams();

  const [post,setpost]=useState(null)
  const [title, setitle] = useState("");
  const [texterror, settexterror] = useState("");
  const [userid, setuserid] = useState("");
  const [useriderror, setuseriderror] = useState("");
  const [body, setbody] = useState("");
  const [bodyerror, setbodyerro] = useState("");
  const [loader, setloader] = useState(false);
  // const [data, setdata] = useState();
  const navigate = useNavigate();
      
  function getdata()
  {
    setloader(true)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>{
      setpost(response.data);
      setitle(response.data.title);
      setuserid(response.data.userId);
      setbody(response.data.body);
      setloader(false)        
    })
  }

  useEffect(() => {
    getdata()
  }, [])
  
  const handlesubmit = (e) => {
    e.preventDefault();

    if(!title)
    {
      settexterror("please field must requird:")
      return;
    }

    if (title.length < 5) {
      settexterror("please enter the vaild name");
      return;
    }
    if(!title.match(/^[a-zA-Z\s]+$/))
    {
            settexterror("Number not And character not allowed:")
            return;
    }
     else {
      settexterror("");
    }

    if (isNaN(userid) || userid < 1) {
      setuseriderror("please enter the valid id number:");
      return;
    } else {
      setuseriderror("");
    }
    if(!body)
    {
      setbodyerro("Field must requird")
      return;
    }
    if (body.length < 1) {
      setbodyerro("sorry enter data");
      return;
    } else if (body.length > 500) {
      setbodyerro("sorry your limits exceeded:");
      return;
    } else {
      setbodyerro("");
    }
    setloader(true);
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        title: title,
        userID: userid,
        body: body,
      })
      .then((response) => {
        console.log(response);
        setloader(false);
        navigate("/");
      });
  };
  const goto = () => {
    navigate("/");
  };
  const enterwords = body.split(/\s/).filter((words) => words !== "").length;
  return (
    <div>
      <div className="mt-2 mb-2 ">
        <button className="btn btn-primary" onClick={goto}>
          Read Data
        </button>
      </div>
      <form action="" onSubmit={handlesubmit}>
        <div className="container-fluid">
          <div className="container">
            <div className="text-center">
              <h1>Edit in Touch</h1>
              <p className="lead">
                Question to ask? Fill out the form to contact me directly...
              </p>
            </div>
            <div className="flex justify-center items-center">
              {loader && (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              )}
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-lg-6">
                <label htmlFor="" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={title}
                  placeholder="e.g. awais"
                  className="form-control"
                  onChange={(e) => {
                    setitle(e.target.value);
                  }}
                />
                <p style={{ color: "red" }}>{texterror}</p>
                <label htmlFor="" className="form-label">
                  userId:
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  value={userid}
                  className="form-control"
                  onChange={(e) => {
                    setuserid(e.target.value);
                  }}
                />
                {useriderror && <p style={{ color: "red" }}>{useriderror}</p>}
                <label htmlFor="" className="form-label">
                  Textarea
                </label>
                <textarea
                  name=""
                  id=""
                  value={body}
                  className="form-control"
                  onChange={(e) => setbody(e.target.value)}
                  style={{ height: 130 }}
                ></textarea>
                <p>{enterwords}/500</p>
                <p style={{ color: "red" }}>{bodyerror}</p>
                <div className="mt-4 text-center">
                  <button className="btn btn-secondary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
