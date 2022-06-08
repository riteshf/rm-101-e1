import React from "react";
import styles from "./task.module.css";

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text"></div>
      {/* Counter here */}
      <button data-testid="task-remove-button"></button>
    </li>
  );
};

export default Task;
