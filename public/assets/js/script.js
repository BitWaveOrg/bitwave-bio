let firstTime = localStorage.getItem('firstTime');

function loader() {
  if (firstTime === null) {
    localStorage.setItem('firstTime', false);
    setTimeout(showPage, 3000);
  } else {
    showPage();
  };
};

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("bg-ellipse").style.display = "block";
  document.getElementById("bg-ellipse2").style.display = "block";
  document.getElementById("mainContainer").style.display = "flex";
  writing();
}

const textContainer = document.querySelector('#textWriter');
async function writing() {
  const text = textContainer.textContent;

  // Clear text before "typing"
  textContainer.textContent = '';

  const arrayedText = text.split('');
  console.log(arrayedText);
  
  for (i = 0; i < text.length; i++) {
    let interval = 0;
    if (arrayedText[i] === '.') {interval = 400}
    else {interval = 50};

    textContainer.textContent += arrayedText[i];
    await new Promise(resolve => setTimeout(resolve, interval));
  };
};