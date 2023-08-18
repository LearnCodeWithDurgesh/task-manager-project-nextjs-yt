"use client";
import UserContext from "@/context/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);
  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function deleteTaskParent(tasksId) {
    try {
      const result = await deleteTask(tasksId);
      console.log(result);
      const newTasks = tasks.filter((item) => item._id != tasksId);
      setTasks(newTasks);
      toast.success("Your task is deleted ");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting task !!");
    }
  }

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3 ">Your tasks ( {tasks.length} )</h1>

        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
