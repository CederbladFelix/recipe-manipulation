import cheesecake from "./assets/frozen-cheesecake-slice.jpg";

export function part2() {
  //1
  const logoText = document.querySelector<HTMLParagraphElement>(".logo-text")!;
  logoText.style.color = "#384241";

  //2
  const header = document.querySelector<HTMLElement>("header")!;
  header.style.justifyContent = "flex-start";

  //3
  header.style.borderColor = "lightgray";

  //4
  const recipeName = document.querySelector<HTMLElement>("#recipe-name")!;
  recipeName.textContent = "Frozen Cheescake";

  //5
  const timeContainer =
    document.querySelector<HTMLDivElement>(".time-container")!;
  const span = timeContainer.querySelector("span")!;
  span.classList.add("material-symbols-outlined");

  //6
  timeContainer.querySelector(".time")!.textContent = "60+ min";

  //7
  document.querySelector("img")!.setAttribute("src", `${cheesecake}`);

  //8
  document.querySelector<HTMLElement>(
    ".ingredients-container"
  )!.style.backgroundColor = "#f9f9f9";

  //9
  const bottomIngredientsContainer = document.querySelector<HTMLElement>(
    ".ingredients-list-bottom"
  )!;

  if (bottomIngredientsContainer.childElementCount === 1) {
    bottomIngredientsContainer.removeChild(
      bottomIngredientsContainer.querySelector<HTMLElement>("p")!
    );
    const listElement1 = document.createElement("li");
    listElement1.textContent = "15st digistivetex";
    const listElement2 = document.createElement("li");
    listElement2.textContent = "Lite smör";

    bottomIngredientsContainer.append(listElement1, listElement2);
  }

  //10
  const pastIngredientsContainer = document.querySelector<HTMLElement>(
    ".ingredients-list-paste"
  )!;

  pastIngredientsContainer.children[2].textContent = "3tsk vaniljsocker";

  //11
  if (pastIngredientsContainer.childElementCount === 4) {
    const listElement = document.createElement("li");
    listElement.textContent = "400g naturell philadelphiaost";
    pastIngredientsContainer?.append(listElement);
  }

  //12
  document
    .querySelector<HTMLElement>(".instructions")
    ?.classList.remove("shadow");

  //13
  const instructionListcontainer =
    document.querySelector<HTMLElement>(".instructions-list")!;
  instructionListcontainer.children[1].textContent =
    "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
  instructionListcontainer.children[8].textContent =
    "Ställ in i frysen över natten.";
  return;
}
