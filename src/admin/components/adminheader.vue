<template lang="pug">
  header.header
    .container.header__container
      .header__left
        .user
          img.user__pic(src='../../images/content/user.jpg')
          .user__name Аркадий Томилин
        .admin-name Панель администрирования
      .header__right
        a(href="#").exit Выйти
</template>

<style lang="postcss">
.header {
  height: 80px;
  background-image: linear-gradient(to right, #3e3e59, #454573);
  display: flex;
}
.header__container {
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
.header__left {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.user__name {
  font-weight: 600;
  font-size: 18px;
}
.user__pic {
  border-radius: 50%;
  width: 45px;
  margin-right: 20px;
}
.admin-name {
  font-size: 14px;
  color: #afafb9;
  @media screen and (max-width: 480px) {
    display: none;
  }
}
.exit {
  font-size: 16px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
}
</style>
