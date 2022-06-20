const numbers=document.querySelectorAll('.num');

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});
