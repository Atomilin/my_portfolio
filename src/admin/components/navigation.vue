<template lang="pug">
  section.navigation
        .container.navigation__container       
            nav.tabs        
              ul.tabs__list
                li.tabs__item(v-for="tab in tabs")
                  router-link(
                    :data-text="tab.title" 
                    :to="tab.href"
                    exact-active-class="active"
                  ).tabs__link

</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/aboutme" },
        { title: "Работы", href: "/myworks" },
        { title: "Отзывы", href: "/reviews" }
      ]
    };
  }
};
</script>

<style lang="postcss">
.navigation {
  background-color: #ffffff;
  color: #414c63;
}
.navigation__container {
  height: 75px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 320px) {
    justify-content: center;
  }
}
.tabs {
  height: 20px;
}
.tabs__list {
  display: flex;   
}
.tabs__item {
  height: 100%;
  margin-right: 30px;
  
  &:last-child {
    margin-right: 0;
  }
}
.tabs__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  
  &:before {
    content: attr(data-text);
  }
  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}
</style>