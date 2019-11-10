<template lang="pug">
  section.login
    .login__bg
      .container.login__container
        .login__block
          .login__block-container
            h2.login__block--title Авторизация
            form.login__form
            label.login__block--input
              .login-name Логин
              input.login-form.nameuser(type='text' name='name' placeholder="Admin")
              .login-name Пароль
              input.login-form(type='text' name='name' placeholder="#######")
          button.send отправить
          button.close-login
</template>

<style lang="postcss">
.login {
  min-height: 1300px;
  background: url("../../images/content/bg/bg_4.png") center cover no-repeat;
  position: relative;
  display: none;
}
.login__bg {
  background: rgba(236, 161, 75, 0.7);
  min-height: 1300px;
}
.login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1300px;
}
.login__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login__block {
  width: 570px;
  height: 520px;
  background-color: #222427;
  color: white;
  &--input {
    flex: 1;
    display: block;
  }
  &--title {
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    margin-bottom: 45px;
  }
}
.login__block-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
}
.login-name {
  font-weight: 600;
  font-size: 14px;
  margin-left: 50px;
}
.login-form {
  background: none;
  border: transparent;
  border-bottom: 1px solid white;
  padding: 20px 50px;
  width: 100%;
  height: 63px;
  color: white;
  outline: none;
  background-repeat: no-repeat;
  background-position: 7px 12px;
  font-weight: 600;
  font-size: 18px;
  &::placeholder {
    color: #636465;
    font-weight: 600;
    font-size: 18px;
  }
  &:focus {
    border-bottom: 1px solid #d5821e;
  }
}
.nameuser {
  background-image: svg-load(
    "../../images/icons/user.svg" fill=#636465,
    width=32px,
    height=32px
  );
}
</style>