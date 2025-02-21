import { useState } from "react";
import styles from "./ChildComponent.module.css";

const ChildComponent = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div className={styles.child}>
      <p>Значення: {count}</p>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
    </div>
  );
};

export default ChildComponent;
