<template lang="pug">
 .review#reviews
   .reviews__header
     .review-title
       | Что обо мне говорят
     .buttons
       button(class="buttons__left" @click="previous()")
         svg.percentage-buttons(viewbox='0 0 100 100', preserveaspectratio='none')
           circle.skill__circle.skill__circle_under(cx='50', cy='50', r='40')
             .icon-arrow.icon-arrow--button-left
       button(class="buttons__right" @click="next()")
         svg.percentage-buttons(viewbox='0 0 100 100', preserveaspectratio='none')
           circle.skill__circle.skill__circle_under(cx='50', cy='50', r='40')
             .icon-arrow.icon-arrow--button-right
   .reviews__slider
     flickity(ref="flickity" :options="flickityOptions").reviews-slider__list
       .review-content(v-for="item in reviews")
         .review-content__desc
           .review-content__text {{item.text}}
             .review-content__info
               .review-info__left
                 img(:src="item.authorpic").user__img
               .review-info__right
                 .review-info__fio {{item.authorname}}
                 .review-info__position {{item.authorocc}}
</template>

<script>
import Flickity from 'vue-flickity';
export default {
  components: {
    Flickity
  },
  
  data() {
    return {
        reviews: [],
        flickityOptions: {
            groupCells: true,
            pageDots: false,
            prevNextButtons: false,
            resize: true
        }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
      console.log(this.$refs)
    },
    
    previous() {
      this.$refs.flickity.previous();
    },
    requirePhotos(){
        this.reviews.forEach(review => {
            review.authorpic = require(`../../images/content/avatar/${review.authorpic}`)
        })
    }
  },
  created(){
      this.reviews = require('../../data/reviews.json')
      this.requirePhotos()
  }
};
</script>

<style lang="postcss">

</style>
