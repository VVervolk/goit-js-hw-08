import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src= ${item.preview}
        data-source="${item.original}"
        alt=${item.description}
      />
    </a>
  </li>`
  )
  .join('');

gallery.innerHTML = markup;

gallery.addEventListener('click', openBigImage);

function openBigImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  let bigImageModal = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
  });

  bigImageModal.on('show.simplelightbox', function () {});
}
