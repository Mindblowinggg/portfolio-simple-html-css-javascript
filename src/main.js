const taskinput = document.getElementById("taskinput");

const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

addbtn.addEventListener("click", () => {
  const inputtext = taskinput.value;

  if (inputtext !== "") {
    const li = document.createElement("li");
    li.textContent = inputtext;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      tasklist.removeChild(li);
    });
    tasklist.appendChild(li);
    taskinput.value = "";
  }
});
