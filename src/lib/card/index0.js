import Carousel from './src/main';
import ItemCarousel from './src/item';

/* istanbul ignore next */
Carousel.install = function(Vue) {
  Vue.component(Carousel.name, Carousel);
  Vue.component(ItemCarousel.name, ItemCarousel);
};

export default Carousel;
