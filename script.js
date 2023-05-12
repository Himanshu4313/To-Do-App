// Target HTML element
const addTaskInputField = document.querySelector("#inputTask");
const addTaskButton = document.querySelector("#Addtaskbtn");
const displayTaskBox = document.querySelector("#taskBox");
const removeButton = document.querySelector("#removeBtn");

let taskArray = [];
//in click button
addTaskButton.addEventListener("click", () => {
  let taskValue = addTaskInputField.value;
  taskArray.push(taskValue);
  displayTask();
  console.log(taskArray);
  addTaskInputField.value = "";
});

// display task
const displayTask = () => {
  let statement = "";
  taskArray.forEach((task, i) => {
    statement += ` <div id="SaveTaskBox">
      <p id="taskTextContainer">
    ${task}
  </p>
  <!-- //delete icon  -->
  <i class="fa-solid fa-xmark" style="color:red; font-size: 30px; cursor: pointer;" id="removeBtn" onclick='remove(${i})'></i>
 </div> `;
  });
  displayTaskBox.innerHTML = statement;
};

// remove task
const remove = (id) => {
  taskArray.splice(id, 1);
  displayTask();
};
