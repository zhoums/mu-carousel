<template>
<div v-show="ready" class="mu-carousel__item" :class="{
      'is-active': active,
      'el-carousel__item--card': $parent.type === 'card',
      'is-in-stage': inStage,
      'is-hover': hover,
      'is-animating': animating
    }" @click="handleItemClick"
  :style="itemStyle">
  <!-- <div v-if="$parent.type === 'card'" v-show="!active" class="el-carousel__mask">
  </div> -->
  <slot></slot>
</div>
</template>

<script>
import {
  autoprefixer
} from 'element-ui/src/utils/util';
const CARD_SCALE = 0.83;
export default {
  name: 'muCarouselItem',
  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      inStage: false,
      animating: false
    };
  },
  methods: {
    processIndex(index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) {
        return -1;
      } else if (activeIndex === length - 1 && index === 0) {
        return length;
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1;
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2;
      }
      return index;
    },
    calcCardTranslate(index, activeIndex) {
      const parentWidth = this.$parent.$el.offsetWidth;
      if (this.inStage) {
        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
      } else if (index < activeIndex) {
        return -(1 + CARD_SCALE) * parentWidth / 4;
      } else {
        return (3 + CARD_SCALE) * parentWidth / 4;
      }
    },
    calcTranslate(index, activeIndex, isVertical) {
      const distance = this.$parent.$el[isVertical ? 'offsetHeight' : 'offsetWidth'];
      let narmalDis = distance * (index - activeIndex)
      console.log("90909", narmalDis, index, activeIndex)
      return narmalDis > 0 ? narmalDis - distance * 0.1 : narmalDis == 0 ? narmalDis + distance * 0.1 : narmalDis + distance * 0.3;
    },
    translateItem(index, activeIndex, oldIndex) {
      console.log("----000000", index, activeIndex, oldIndex)
      const parentType = this.$parent.type;
      const parentDirection = this.parentDirection;
      const length = this.$parent.items.length;
      if (parentType !== 'card' && oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex;
      }
      if (index !== activeIndex && length > 2 && this.$parent.loop) {
        index = this.processIndex(index, activeIndex, length);
      }
      if (parentType === 'card') {
        if (parentDirection === 'vertical') {
          console.warn('[Element Warn][Carousel]vertical directionis not supported in card mode');
        }
        this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
        this.active = index === activeIndex;
        this.translate = this.calcCardTranslate(index, activeIndex);
        this.scale = this.active ? 1 : CARD_SCALE;
      } else {
        this.active = index === activeIndex;
        const isVertical = parentDirection === 'vertical';
        this.translate = this.calcTranslate(index, activeIndex, isVertical);
      }
      this.ready = true;
    },
    handleItemClick() {
      const parent = this.$parent;
      if (parent && parent.type === 'card') {
        const index = parent.items.indexOf(this);
        parent.setActiveItem(index);
      }
    }
  },
  computed: {
    parentDirection() {
      return this.$parent.direction;
    },
    itemStyle() {
      const translateType = this.parentDirection === 'vertical' ? 'translateY' : 'translateX';
      const value = `${translateType}(${ this.translate }px) scale(${ this.scale })`;
      const style = {
        transform: value
      };
      return autoprefixer(style);
    }
  },
  created() {
    this.$parent && this.$parent.updateItems();
  },
  destroyed() {
    this.$parent && this.$parent.updateItems();
  }
};
</script>

<style>
.mu-carousel__item {
  display: inline-block;
  position: absolute;
  width: 80%;
  height: 100%;
  transition: all 2s ease;
}

.mu-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.mu-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
