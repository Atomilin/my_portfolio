<template lang="pug">
 .review#reviews
   .reviews__header
     .review-title
       | Что обо мне говорят
     .reviews__controls
       .reviews__control
         button(class="button_around button_deg" @click="previous()" ref="button-prev")
       .reviews__control
         button(class="button_around" @click="next()" ref="button-next")
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
