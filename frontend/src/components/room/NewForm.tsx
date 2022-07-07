
import React, { useState } from "react";

const TodoForm = (props) => {

    const onChangeTaskTitle = (event: React.ChangeEvent<HTMLInputElement>): void => props.setNewTaskTitle(event.target.value);
    const onChangeTaskDescription = (event: React.ChangeEvent<HTMLTextAreaElement>): void => props.setNewTaskDescription(event.target.value);
    const onClickedSubmitButton = () => {
        props.submitNewTask()
    }
    return(
        <div>
            <div>
                <div>
                    <label htmlFor="newTodo">Todoを追加</label>
                </div>
                <div>
                    <input 
                    type="text" 
                    id="newTodo" 
                    name="newTodo" 
                    placeholder="新しいTodoを追加"
                    onChange={onChangeTaskTitle}
                    />
                </div>
                <div>
                    <textarea
                    id="newTodo" 
                    name="newTodo" 
                    placeholder="Todoの中身"
                    onChange={onChangeTaskDescription}
                    ></textarea>
                </div>
                <button type="submit" onClick={() => onClickedSubmitButton()}>Submit</button>
            </div>
        </div>
    )
}

export default TodoForm
