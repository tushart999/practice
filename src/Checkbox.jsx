import { useState } from "react";

function Checkbox() {
  const [skill, setSkill] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      // Add skill
      setSkill((prevSkills) => [...prevSkills, value]);
    } else {
      // Remove skill
      setSkill((prevSkills) => prevSkills.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h1>Select your skill broo</h1>

      <input type="checkbox" id="php" value="PHP" onChange={handleChange} />
      <label htmlFor="php">PHP</label>
      <br />

      <input type="checkbox" id="js" value="JS" onChange={handleChange} />
      <label htmlFor="js">JS</label>
      <br />

      <input type="checkbox" id="React" value="React" onChange={handleChange} />
      <label htmlFor="React">React</label>
      <br />

      <h1>{skill.toString()}</h1>
    </div>
  );
}

export default Checkbox;
