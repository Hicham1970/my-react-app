import { useState } from "react";

export default function MyForm2() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}
