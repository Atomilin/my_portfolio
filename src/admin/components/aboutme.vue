<template lang="pug">    
    section.aboutme
      .container.aboutme__container
        .aboutme__control                  
          h2.title.aboutme__control-title Блок "Обо мне"
          button.aboutme__control-btn Добавить группу
        .aboutme__content
          .aboutme__content-newgroup
            .container-group
            .container-newgroup            
              .newgroup
                input.newgroup__imput(type='text' name='name' required='' placeholder="Название новой группы")
                .ti-re 
                  a.tick
                  a.remove
              .skills 
                  ul.skills__list
                    li.skill 
                      input.skill__imput(type='text' name='name' required='' placeholder="")
                      input.skill__percent(type='text' name='name' required='' placeholder="")
                      .pe-tr 
                        a.pencil
                        a.trash
              .newskill
                input.newskill__imput(type='text' name='name' required='' placeholder="Новый навык")
                input.newskill__percent(type='text' name='name' required='' placeholder="100%")
                button.plus           
</template>

<script>
export default {
  
}
</script>

<style lang="postcss">
</style>


<style lang="postcss">
.aboutme {
  background-color: rgba(255, 255, 255, 0.9);
  min-height: 1258px;
}
.aboutme__control {
  display: flex;
  align-items: center;
  padding-top: 61px;
  margin-bottom: 61px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: initial;
    font-size: 14px;
  }
}
.aboutme__control-btn {
  color: #383bcf;
  background: transparent;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 0px;
  &::before {
    content: "+";
    color: white;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 15px;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.aboutme__control-title {
  font-weight: 600;
  font-size: 21px;
  margin-right: 60px;
  @media screen and (max-width: 320px) {
    margin-right: 0px;
    margin-bottom: 30px;
  }
}
.aboutme__content {
  display: flex;
  flex-wrap: wrap;
}
.aboutme__content-newgroup,
.aboutme__content-workflow,
.aboutme__content-frontend {
  width: 525px;
  background-color: white;
  margin-right: 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  &:last-child {
    margin-left: 0px;
  }
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    width: 335px;
    margin-right: 20px;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    margin-right: 20px;
  }
}
.container-newgroup {
  width: 483px;
  min-height: 385px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    width: 305px;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
  }
}
.newgroup {
  display: flex;
  height: 73px;
  border-bottom: 1px solid #adb0b8;
}
.newskill {
  display: flex;
  margin-bottom: 35px;
  //margin-left: 36px;
  align-items: center;
  justify-content: space-around;
}
.plus {
  background: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 30px;
  &::before {
    content: "+";
    color: white;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    font-weight: 500;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.newgroup__imput,
.newskill__imput,
.newskill__percent {
  //margin-left: 30px;
  background: none;
  border: transparent;
  border-bottom: 1px solid black;
  padding: 0px 8px;
  width: 274px;
  height: 63px;
  color: black;
  outline: none;
  background-repeat: no-repeat;
  background-position: 7px 12px;
  &::placeholder {
    color: #adb0b8;
    vertical-align: bottom;
  }
  &:focus {
    border-bottom: 1px solid #3e3e59;
  }
  &--texteria {
    resize: none;
    height: 110px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
}
.newgroup__imput {
  font-weight: 600;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}
.newskill__imput {
  //width: 218px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    width: 100px;
    margin-left: 0px;
  }
}
.newskill__percent {
  width: 77px;
  @media screen and (max-width: 768px) {
    width: 50px;
  }
}
.ti-re {
  display: flex;
  margin-left: 142px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 5px;
    margin-right: 5px;
  }
}
.tick {
  content: svg-load(
    "../../images/icons/tick.svg" width=15px,
    height=15px,
    fill=#00d70a
  );
  @media screen and (max-width: 768px) {
    content: svg-load(
      "../../images/icons/pencil.svg" width=15px,
      height=15px,
      fill=#a0a5b1
    );
  }
}
.remove {
  margin-left: 20px;
  content: svg-load(
    "../../images/icons/remove.svg" width=13px,
    height=13px,
    fill=red
  );
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.skills {
  margin-top: 30px;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
}
.skill {
  display: flex;
}
.skill__imput,
.skill__percent {
  font-size: 16px;
  margin-left: 30px;
  background: none;
  border: transparent;
  width: 270px;
  height: 25px;
  margin-bottom: 28px;
  color: black;
  outline: none;
  background-repeat: no-repeat;
  background-position: 7px 12px;
  &::placeholder {
    color: black;
  }
  &:focus {
    border-bottom: 1px solid black;
  }
  &--texteria {
    resize: none;
    height: 110px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 10px;
  }
}
.skill__percent {
  width: 74px;
  @media screen and (max-width: 768px) {
    width: 40px;
  }
}
.pe-tr {
  margin-left: 25px;
}
.pencil {
  content: svg-load(
    "../../images/icons/pencil.svg" width=15px,
    height=15px,
    fill=#a0a5b1
  );
  &:hover {
    content: svg-load(
      "../../images/icons/tick.svg" width=15px,
      height=15px,
      fill=#00d70a
    );
  }
}
.trash {
  margin-left: 20px;
  content: svg-load(
    "../../images/icons/trash.svg" width=15px,
    height=15px,
    fill=#a0a5b1
  );
  &:hover {
    content: svg-load(
      "../../images/icons/remove.svg" width=13px,
      height=13px,
      fill=red
    );
  }
}
</style>