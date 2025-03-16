document.getElementById("highlight-btn").addEventListener("click", function () {
  const commands = document.querySelectorAll("#commands-list li");
  commands.forEach((cmd) => (cmd.style.backgroundColor = "#ffe599"));
});
