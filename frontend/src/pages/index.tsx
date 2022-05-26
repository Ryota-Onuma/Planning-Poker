import React, { useState, useEffect } from "react";
import Axios from "../lib/axios";

const IndexPage = () => {
  const [tasks, setTasks] = useState([])
    useEffect(() => {
    const fetch = async () => {
      const axios = new Axios
      const response:any = await axios.get("/api/rest/tasks",{})

      if (response && response.data) {
        const newTasks = [...tasks,...response.data.tasks]
        console.log(newTasks)
        setTasks(newTasks)
      }
    }
    fetch()
    }, [])
  
    return (
      <div>
         <h1>Hello Next.js 👋</h1>
         {/* {tasks} */}
         {tasks.length > 0 && tasks.map(task => {
           return(
            <div key={task.id}>
              <span>ID: {task.id}</span>&ensp; &ensp;
              <span>Name: {task.name}</span>
           </div>
           )
         })}
      </div>
    )
  }

export default IndexPage
