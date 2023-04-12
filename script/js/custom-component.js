const productItem = (name, imageSrc) => {
  const component = document.createElement("div");
  component.classList = "shadow product-item";
  
  const nameOverlay = document.createElement("div");
  nameOverlay.classList = "product-item-name z-2 w-auto h-auto mx-auto position-absolute p-2 text-light"
  nameOverlay.innerHTML = name;

  const imageItem = document.createElement("img");
  imageItem.classList = "object-fit-cover position-relative h-100 z-1 img-fluid";
  imageItem.src = imageSrc;

  component.appendChild(nameOverlay);
  component.appendChild(imageItem);

  return component;
}
