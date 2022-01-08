const a = document.querySelector(".addRowBtn");
const content = document.querySelector(".gridContainer");

a.addEventListener("click", function () {
  const newRow = document.createElement("div");
  newRow.setAttribute("class", "row");
//if grid is empty
  if (content.children.length == 0) {
    const b = document.createElement("div");
    b.setAttribute("class", "col-sm border border-dark box white");
    newRow.appendChild(b);
  } else {
    const numOfCol = document.querySelector(".row").querySelectorAll(".box");

    for (let i = 0; i < numOfCol.length; i++) {
      const b = document.createElement("div");
      b.setAttribute("class", "col-sm border border-dark box white");
      newRow.appendChild(b);
    }
  }

  content.appendChild(newRow);
});
