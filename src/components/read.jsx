import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Read = () => {
  const [apidata, setApidata] = useState([]);
  const [loader,setloader]=useState(false)

  const getData = () => {
    setloader(true)
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        
        setApidata(response.data)
        setloader(false)
    })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleDelete = (id) => {
    setloader(true)
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((responce) => {
        console.log(responce)
        const deleteobj=apidata.filter((current)=>current.id!==id)
        setApidata(deleteobj)
        setloader(false)
    }) // Update data after deletion
      .catch((error) => console.error("Error deleting data:", error));
  };

  useEffect(() => {
    getData();
  }, []);
     const navigate=useNavigate()
  // const handleedit=(data)=>{
  //         navigate('/edit',{state:{ mydata:data }})
    
  // }

  return (
    <>
      <h1>Read Data</h1>
      <div className=" flex justify-center items-center">
      {
        loader&&( <div className="spinner-border text-primary " role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        )}
        </div>
      {apidata.map((item) => 
      (
        <div key={item.id} className="grid pt-8 pb-12 place-items-center bg-gray-900 font-mono">
          <div className="rounded-md bg-gray-800 bg-white shadow-lg">
            <div className="max-w-4xl px-4 leading-none md:flex">
              <div className="flex-col text-gray-700">
                <p className="pt-4 text-2xl font-bold">{item.title.toUpperCase()}</p>
                <hr className="hr-text" data-content="" />
                <div className="text-md my-2 flex justify-between px-4">
                  <span className="font-bold">
                    ID No: {item.id} || UserID: {item.userId}
                  </span>
                </div>
                <p className="my-4 hidden px-4 text-left text-sm md:block">{item.body}</p>
                <p className="text-md my-2 flex px-4">
                  Rating: 9.0/10
                  <span className="px-2 font-bold">|</span>
                  Mood: Dark
                </p>
                <div className="text-xs  float-right">
               <Link to={`/edit/${item.id}`}  > <button
                    type="button"
                    className="ease focus:shadow-outline m-2 select-none rounded-md border border-gray-400 px-4 py-2 text-gray-400 transition duration-500 hover:bg-gray-900 focus:outline-none"
                    // onClick={()=>handleedit(item)}
                  >
                    Edit
                  </button></Link>
                  <button
                    type="button"
                    className="ease focus:shadow-outline m-2 select-none rounded-md border border-gray-400 px-4 py-2 text-gray-400 transition duration-500 hover:bg-gray-900 focus:outline-none"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/details/${item.id}`}>
                  <button
                    type="button"
                    className="ease focus:shadow-outline m-2 select-none rounded-md border border-gray-400 px-4 py-2 text-gray-400 transition duration-500 hover:bg-gray-900 focus:outline-none">
                    Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Read;
