import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Details = () => {
  const [apidata, setApidata] = useState({});
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setApidata(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  }, [id]);
 const navigate=useNavigate()
 const goto=()=>{
    navigate('/')
 }
  return (
    <>
      
      <div className="mt-2 mb-2 float-right "><button className="btn btn-primary" onClick={goto}>&#x1F3F9;Home page</button></div>
      <h1 className="pt-8 p-10 text-center">Details page {id}</h1>
      <div className="flex justify-center items-center">
        {loader && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>

      <div
        key={apidata.id}
        className="grid pt-8 pb-12 place-items-center bg-gray-900 font-mono"
      >
        <div className="rounded-md bg-gray-800 bg-white shadow-lg">
          <div className="max-w-4xl px-4 leading-none md:flex">
            <div className="flex-col text-gray-700">
              <p className="pt-4 text-2xl font-bold">
                {apidata.title && apidata.title.toUpperCase()}
              </p>
              <hr className="hr-text" data-content="" />
              <div className="text-md my-2 flex justify-between px-4">
                <span className="font-bold">
                  ID No: {apidata.id} || UserID: {apidata.userId}
                </span>
              </div>
              <p className="my-4 hidden px-4 text-left text-sm md:block">
                {apidata.body}
              </p>
              <p className="text-md my-2 flex px-4">
                Rating: 9.0/10
                <span className="px-2 font-bold">|</span>
                Mood: Dark
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
