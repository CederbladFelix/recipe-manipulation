export function part1() {
  const name = document.querySelector("#recipe-name")?.textContent;
  console.log(name);

  const displayNameTag = document.querySelector("#recipe-name")?.tagName;
  console.log(displayNameTag);

  const p = document.querySelector("p.description")!;
  const pStyle = getComputedStyle(p);
  console.log(pStyle.fontSize);

  const image = document.querySelector("img")!;
  const url = image?.getAttribute("src");
  const imageStyle = getComputedStyle(image);
  const height = imageStyle.height;
  const width = imageStyle.width;

  const obj = { url, height, width };
  console.log(obj);

  const pasteIngredientContainer = document.querySelector(
    ".ingredients-list-paste"
  );
  const totalIngredientsInPaste = pasteIngredientContainer?.childElementCount;
  console.log(totalIngredientsInPaste);

  const pasteIngredientContainerChildren = pasteIngredientContainer?.children!;
  const fourthElement = pasteIngredientContainerChildren[3];
  console.log(fourthElement);

  const instrucitonsArray: { order: number; text: string }[] = [];
  const instructions = document.querySelector(".instructions-list")!.children;
  for (let i = 0; i < instructions.length; i++) {
    instrucitonsArray.push({
      order: i + 1,
      text: instructions[i].textContent,
    });
  }
  console.log(instrucitonsArray);

  return;
}
