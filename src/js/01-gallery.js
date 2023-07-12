import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}
const onContainerClick = (galleryItems) => {
  galleryItems.preventDefault();

  if (galleryItems.target.classList.contains("gallery")) return;
  const source = galleryItems.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};

galleryContainer.addEventListener("click", onContainerClick);
