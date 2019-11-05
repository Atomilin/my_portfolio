<template lang="pug">
  section.navigation
        .container.navigation__container                   
            - var section = [{"text": 'Обо мне', 'link': "/"}, {"text": 'Работы', 'link': "/myworks"}, {"text": 'Отзывы', 'link': "/comments"}]
              nav.nav        
                ul.nav__list          
                  each sec in section                  
                    li.nav__item                                                                                             
                      router-link(tag="button" to=sec.link :data-text="Кнопка") 

</template>

<style lang="postcss">
.router-link-active {
  width: 20px;
  height: 10px;
  background-color: blue;
}
.router-link-exact-active {
  width: 20px;
  height: 10px;
  background-color: blue;
}
.navigation {
  background-color: #fcd097;
}
.navigation__container {
  height: 75px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 320px) {
    justify-content: center;
  }
}
.nav {
  height: 20px;
}
.nav__list {
  display: flex;
}
.nav__item {
  margin-right: 25px;
  position: relative;
  &:last-child {
    margin-left: 0px;
  }
  &:hover {
    &:after {
      content: "";
      height: 3px;
      background: #d7861f;
      display: block;
      &:hover {
        transition: width 0.3s ease-out;
      }
    }
  }
}
</style>
