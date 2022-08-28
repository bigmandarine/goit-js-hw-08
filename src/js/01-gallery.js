import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const cardsGalleryMarkup = createMarkupGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsGalleryMarkup);

function createMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
      `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
