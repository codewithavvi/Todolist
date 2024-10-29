"use client";
import { Input } from "postcss";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (elem) => {
    elem.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between w-2/3 mb-5">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-5xl font-bold text-center p-5">
        Avinash's Todolist
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-zinc-800 text-2xl border-5 m-8 px-4 py-2"
          placeholder="Enter Title here"
          value={title}
          onChange={(elem) => {
            settitle(elem.target.value);
          }}
        />
        <input
          type="text"
          className="border-zinc-800 text-2xl border-5 m-8 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(elem) => {
            setdesc(elem.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;