const uList = document.querySelector("#listId");
const btn = document.querySelector(".btn");

const show = () => {
  uList.classList.toggle("is-active");
};
btn.addEventListener("click", show);
