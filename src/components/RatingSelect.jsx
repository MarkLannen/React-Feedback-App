import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.target.vaulue);
    select(+e.target.vaulue);
  };

  return <div>RatingSelect Component</div>;
}

export default RatingSelect;
