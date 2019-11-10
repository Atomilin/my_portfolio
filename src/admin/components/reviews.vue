<template lang="pug">
  section.comment  
    .container.comment__container          
      h2.title.comment-title Блок "Отзывы"
      .comment-content
        .comment-content__title
          h3.comment-content__text Новый отзыв
        .comment-info
          .userpic
            .userpic__photo-container
              .userpic__avatar
            button.userpic__btn Добавить фото
          .comment__form
            form.form(@submit.prevent="commentForm")                    
              .form__row.form__row-rewiews
                label.form__block.form__block-rewiewsup 
                    div.form__block-title Имя автора
                    input.form__imput.nameuser(type='text' name='name' v-model="comment.name" placeholder="Иван Иванов")
                    span.error {{this.validation.firstError('comment.name')}}
                label.form__block.form__block-rewiews 
                    div.form__block-title Титул автора
                    input.form__imput.posts(type='text' name='name' v-model="comment.posts" placeholder="Должность")
                    span.error {{this.validation.firstError('comment.posts')}}
              .form__row.form__row-rewiew                    
                label.form__block.form__comments
                    div.form__block-title Отзыв
                    textarea.form__imput.form__imput--texteria.comments(name='comment' v-model="comment.comments" placeholder="Комментарий")
                    span.error {{this.validation.firstError('comment.comments')}}                    
              .form__row.form__row-btn
                .form__btn
                  button#order.btn-cancel Отмена                          
                  button#order.btn-save Сохранить  
</template>


<script>
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
import axios from "axios";
export default {
  data:function() {
    return {
      comment: {
        name: '',
        posts: '',
        comments: ''        
      },
      works: []
    };
  },
  
  validators: {
    "comment.name": function(value) {
      return Validator.value(value).required("Укажите имя");
    },
    "comment.posts": function(value) {
      return Validator.value(value).required("Укажите должность");
    },
    "comment.comments": function(value) {
      return Validator.value(value).required("Добавьте описание");
    }    
  },
   computed: {
        titleError() {
            return this.validation.firstError('comment.name')
        },
        linkError() {
            return this.validation.firstError('comment.posts')
        },
        commentError() {
            return this.validation.firstError('comment.comments')
        }        
    },
/*   methods: {
    async commentForm() {
      const success = await this.$validate();
      console.log("success", success);
      if (success) {        
        console.log("Форма заполнена!");
      } else {
        console.log("Ошибка в заполнении формы!");
      }
    }
  } */
};
</script>

<style lang="postcss">
.comment {
  background-color: rgba(255, 255, 255, 0.9);
  min-height: 850px;
}
.comment__container {
  padding-top: 61px;
  display: flex;
  flex-direction: column;
}
.comment-title {
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 61px;
}
.comment-info {
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 748px) {
    flex-direction: column;
    align-items: center;
  }
}
.comment-content {
  width: 100%;
  min-height: 510px;
  background-color: white;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  @media screen and (max-width: 1143px) {
    width: 708px;
  }
  @media screen and (max-width: 748px) {
    width: 100%;
  }
}
.comment-content__title {
  width: 97%;
  margin-left: 20px;
  display: flex;
  height: 73px;
  border-bottom: 1px solid #adb0b8;
  @media screen and (max-width: 1143px) {
    width: 678px;
  }
  @media screen and (max-width: 748px) {
    width: 88%;
  }
}
.comment-content__text {
  font-weight: 600;
  font-size: 18px;
  padding-top: 30px;
}
.userpic {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 33px;
  @media screen and (max-width: 748px) {
    margin-left: 0px;
    justify-content: center;
    align-items: center;
  }
}
.userpic__photo-container {
  width: 185px;
  height: 185px;
  border-radius: 50%;
  background-color: #dee4ed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.userpic__avatar {
  content: svg-load(
    "../../images/icons/user.svg" width=113px,
    height=113px,
    fill=#fff
  );
}
.userpic__btn {
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  background-color: transparent;
  color: #383bcf;
  text-align: center;
}
.comment__form {
  width: 615px;
  margin-left: 30px;
  margin-top: 50px;
  @media screen and (max-width: 1143px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 748px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 95%;
  }
}
.form__row-rewiews {
  flex-direction: inherit;
  @media screen and (max-width: 1143px) {
    flex-direction: column;
  }
}
.form__row-rewiew {
  margin-bottom: 0px;
}
.form__block-rewiews {
  margin-left: 30px;
  margin-top: 0px;
  @media screen and (max-width: 1143px) {
    margin-left: 0px;
  }
}
.form__block-rewiewsup {
  @media screen and (max-width: 1143px) {
    margin-bottom: 10px;
  }
}
</style>