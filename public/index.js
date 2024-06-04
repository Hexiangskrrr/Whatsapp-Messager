const messageBtn = document.getElementById("messageBtn");
const linkBtn = document.getElementById("linkBtn");
const generatedLink = document.getElementById("link");
document.getElementById("result").style.visibility = "hidden";

function getLink() {
  const code = document.getElementById("code").value.replace(/[ +-]/g, "");
  const number = document.getElementById("number").value.replace(/[ +-]/g, "");

  return `https://wa.me/${code}${number}`;
}

messageBtn.addEventListener("click", () => {
  window.location.replace(getLink());
});

linkBtn.addEventListener("click", () => {
  document.getElementById("result").style.visibility = "visible";
  const link = getLink();
  generatedLink.innerHTML = `<a href=${link}>${link} </a> <button id="copyBtn">Copy to clipboard</button>`;
  const copyBtn = document.getElementById("copyBtn");
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(link);
  });
});
