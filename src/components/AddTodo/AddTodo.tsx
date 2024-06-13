import { useEffect, useRef, useState } from "react";
import { Input } from "../Custom-Input/Input";
import { useTodo } from "../../context/useTodo";
import toast from "react-hot-toast";
import "./AddTodo.css";
export default function AddTodo() {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();
  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
      toast.success("Todo added successfully!");
    } else {
      toast.error("Todo field cannot be empty!");
    }
    console.log("form has been submitted");
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="input-form">
      <form onSubmit={handleSubmission}>
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="start typing ..."
        />
        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
}
