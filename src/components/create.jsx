import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [textError, setTextError] = useState("");
  const [userid, setUserid] = useState("");
  const [useridError, setUseridError] = useState("");
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length<5) {
      setTextError("Please enter a valid name");
      return;
    }
    if (!title.match(/^[a-zA-Z\s]+$/)) {
      setTextError("Please enter a valid name");
      return;
    }
     else {
      setTextError("");
    }

    if (isNaN(userid) || userid < 1) {
      setUseridError("Please enter a valid ID number:");
      return;
    } else {
      setUseridError("");
    }
console.log(typeof(body));
    if (!body) {
      setBodyError("Sorry, enter data");
      return;
    } else if (body.length > 500) {
      setBodyError("Sorry, your limit exceeded:");
      return;
    } else {
      setBodyError("");
    }
    setloader(true);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        userId: userid,
        body: body,
      })
      .then((response) => {
        setloader(false);
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  const enterWords = body.split(/\s/).filter((words) => words !== "").length;

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="container-fluid">
          <div className="container">
            <div className="mt-2 mb-2 ">
              <Link to="/">Read Data</Link>
            </div>
            <div className="text-center">
              <h1>Post Data</h1>
              <p className="lead">Fill out the form to post data...</p>
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
                  placeholder="e.g. awais"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <p style={{ color: "red" }}>{textError}</p>
                <label htmlFor="" className="form-label">
                  userId:
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="form-control"
                  value={userid}
                  onChange={(e) => setUserid(e.target.value)}
                />
                <p style={{ color: "red" }}>{useridError}</p>
                <label htmlFor="" className="form-label">
                  Textarea
                </label>
                <textarea
                  name=""
                  id=""
                  className="form-control"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  style={{ height: 130 }}
                ></textarea>
                <p>{enterWords}/500</p>
                <p style={{ color: "red" }}>{bodyError}</p>
                <div className="mt-4 text-center">
                  <button className="btn btn-secondary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
