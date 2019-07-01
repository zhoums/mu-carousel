import carousel from './carousel.vue'
import carouselItem from './carouselItem.vue'

const muCarousel = {
  install(Vue) {
    Vue.component(carouselItem.name, carouselItem)
    Vue.component(carousel.name, carousel)
  }
}

export default muCarousel;