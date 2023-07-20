import UserContext from "@/context/userContext";
import React, { useContext } from "react";

const Task = ({ task }) => {
  const { user } = useContext(UserContext);
  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        task.status == "completed" ? "bg-green-800" : "bg-gray-800"
      }`}
    >
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{task.title}</h1>
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status: <span className="font-bold">{task.status}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
