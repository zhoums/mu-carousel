import carousel from './carousel.vue'
import carouselItem from './carouselItem.vue'
console.log(carouselItem)
const muCarousel = {
  install(Vue){
    Vue.component(carouselItem.name,carouselItem)
    Vue.component(carousel.name,carousel)
  }
}

export default muCarousel;
