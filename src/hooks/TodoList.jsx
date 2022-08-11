import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Todo from "../components/Todo";
const TodoList = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(()=>{
     return JSON.parse(localStorage.getItem("TODO")) || [];
  });
  const [edit, setEdit] = useState(0);
  const handleAdd = () => {
    if (edit) {
      const find = todo.find((item) => item.id === edit);
      console.log("hihi");
      const updateTodo = todo.map((item) =>
        item.id === find.id
          ? (item = { id: item.id, input})
          : { id: item.id, input: item.name }
      );
      setTodo(updateTodo);
    }
    if(input!==""){
        setTodo((prev) => [
            ...prev,
            {
              id: Math.ceil(Math.random() * 10),
              name: input
            },
          ]);
          JSON.stringify(localStorage.setItem("TODO",todo));
          setInput("");

    }   
  };
  const handleDelete = (id) => {
    console.log(id);

    const newTodo =todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };
  const handleEdit = (id) => {
    const findEdit = todo.find((item) => item.id === id);
    
    setInput(findEdit.name);
    setEdit(id);
  };
  return (
    <div>
      <Input input={input} setInput={setInput} />
      <Todo todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Button handleAdd={handleAdd} edit={edit} />
    </div>
  );
};

export default TodoList;
