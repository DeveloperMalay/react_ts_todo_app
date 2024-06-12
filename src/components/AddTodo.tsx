import { useEffect, useRef, useState } from "react";

export default function AddTodo() {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form has been submitted");
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
      <form onSubmit={handleSubmission}>
        <input
          ref={inputRef}
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className=""
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
