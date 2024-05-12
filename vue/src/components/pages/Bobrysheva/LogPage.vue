<template>
<div class="theme-switcher">
  <div :class="{ 'light-theme': isLightTheme, 'dark-theme': !isLightTheme }">
    <header>
      <nav class="navbar">
        <div class="left-menu">
        <span class="logo">relocate*</span>
        </div>

        <div class="center-content">
        <button>Countries</button>
        <button>About us</button>
        <button>Cases</button>
        <button>FAQ</button>
        </div>

        <div class="right-menu">
        <i class="fa-regular fa-moon"></i>
        <label class="switch">
          <input type="checkbox" @change="() => toggleTheme()" :checked="isLightTheme">
          <span class="slider round"></span>
        </label>
        <i class="fa-regular fa-sun"></i>
        <MenuButton></MenuButton>
        </div>
      </nav>
    </header>

    <div class="main-info">
    <form class="form">
      <div class="title">Welcome,<br><span>sign up to continue</span></div>
      <input type="email" placeholder="Email" name="email" class="input">
      <input type="password" placeholder="Password" name="password" class="input">
      <div class="login-with">
        <div class="button-log"></div>
        <div class="button-log">
          <i class="fab fa-instagram"></i>
        </div>
        <div class="button-log">
          <i class="fab fa-facebook-f"></i></div>
      </div>
      <div class="center-content">
        <button class="center-content">Let`s go →</button>
      </div>
    </form>
  </div>
    <footer>
      <nav class="navbar">
        <div class="container">
          <p><span class="logo">relocate*</span><br>A place where you<br>will feel at home</p>
        </div>

        <div class="container">
          <div class="column">
            <h2>About us</h2>
            <p>Our cases</p>
            <p>Contact us</p>
          </div>

          <div class="column">
            <h2>FAQ</h2>
            <p>Personal</p>
            <p>Group</p>
            <p>Payment rules</p>
          </div>

          <div class="column">
            <h2>Info</h2>
            <p>Terms of use</p>
            <p>Safety</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </nav>

      <div class="horizontal-line"></div>

      <div class="grid-container">
        <div class="grid-item-left">Copyright 2024 relocateLLC-1101 12th, Helsinki, Finland</div>
        <div class="grid-item-right"><i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>

    </footer>
    <br>
  </div>
</div>
</template>

<script>
  import MenuButton from "@/components/pages/Bobrysheva/components/MenuButton.vue";

  export default {
    components: {
      MenuButton
    },
    data() {
        return {
        isLightTheme: true,
        }
    },
    methods: {
      toggleTheme() {
        this.isLightTheme = !this.isLightTheme;
      }
    }
  };
</script>

<style scoped lang="less">

@font-face {
  font-family: 'Poppins-Medium';
  src: url('~@/components/pages/Bobrysheva/fonts/CinaGEO Medium.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins-Regular';
  src: url('~@/components/pages/Bobrysheva/fonts/CinaGEO Regular.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins-ExLight';
  src: url('~@/components/pages/Bobrysheva/fonts/CinaGEO ExtraLight.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins-SeBold';
  src: url('~@/components/pages/Bobrysheva/fonts/CinaGEO SemiBold.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.grid-container {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding-bottom: 10px;
}

.grid-item-left {
  text-align: left;
}
.grid-item-right {
  text-align: right;
}
.grid-item-right i {
  margin-right: 15px;
}

.logo {
  font-size: 25px;
  font-family: "Poppins-Medium", sans-serif;
  display: flex;
}

.main-info {
  min-height: 500px;
  padding: 60px 40%;
  box-sizing: border-box;
  text-align: center;
  .form {
    .title {
      font-size: 24px;
      margin-bottom: 20px;
      span {
        font-size: 16px;
        color: #999;
      }
    }
    .input {
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .login-with {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .button-log {
        width: 40px;
        height: 40px;
        background-color: #ccc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .icon {
          width: 20px;
          height: 20px;
          fill: #fff;
        }
      }
    }
    .button-confirm {
      width: 100%;
      height: 40px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: #0056b3;
      }
    }
  }
}

body h1 {
  margin-top: 40px;
  font-family: "Poppins-SeBold", sans-serif;
  font-size: 40px;
  text-align: left;
  color: #000000;
  padding-left: 130px;
}

.left-foot {
  text-align: left;
  display: flex;
  align-items: flex-start;
}

.left-foot p {
  margin-top: 0;
}

.right-foot {
  text-align: right;
  display: flex;
  justify-content: right;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.horizontal-line {
  height: 1px;
  background-color: #737373;
  margin: 20px 0;
}

.tools {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tools button {
  margin-right: 10px;
}

.card-arrow:hover {
  cursor: pointer;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  transition: .4s;
  border-radius: 10px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: #fff;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #bbb;
}

input:checked + .slider:before {
  transform: translateX(20px);
}


.slider.round {
  border-radius: 20px;
}

.slider.round:before {
  border-radius: 50%;
}

.light-theme {
  background-color: #ffffff;
  color: #040303;
  transition: all 0.5s ease;
}

.dark-theme {
  transition: all 0.5s ease;
  background-color: #2f2f2f;
  color: #ffffff;

.article-form .plus {
  background-color: #ffffff;
  color: #000000;
}

.center-content button {
  font-size: 15px;
  margin-right: 10px;
  color: #ffffff;
}

.icon {
  color: #ffffff;
}

h1 {
  color: #ffffff;
}

footer {
  background-color: #464646;
}

.btn-templ {
  background-color: #2f2f2f;
  color: #ffffff;
}

.btn-templ.bordered {
  border-color: #ffffff;
}

.btn-templ:hover {
  background-color: rgb(115, 115, 115);
  color: rgb(255, 255, 255);
}

.btn-templ.bordered:hover {
  border-color: rgb(255, 255, 255);
}

.btn-templ:active {
  background-color: #a1a1a1;
  color: rgb(255, 255, 255);
}

.btn-templ.pressed {
  color: #ffffff;
}

.btn-templ:focus {
  color: rgb(255, 255, 255);
}


.column h2 {

  color: #ffffff;
}

.main-card {
  background-color: #464646;

.card-arrow {
  background-color: #ffffff;
  color: #000000;
}

.hashtags-wrapper {
.card-hashtag {
  color: #dddddd;
}
}
}

.slide-card {
  background-color: #464646;

.card-arrow {
  background-color: #ffffff;
  color: #000000;
}
}

.search-input {
  color: #b0b0b0;
  background-color: #212121;
  border: 1px solid rgba(155, 155, 155, 0.5);
}

.article-form .modal-content .content{
    color: #000000;
}
}

body {
  margin: 0;
  padding: 0;
  text-align: center;
  align-content: center;
  font-family: "Poppins-Regular", sans-serif;
  font-weight: lighter;
}

header{
  padding: 25px;
  z-index: 99;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-menu {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.center-content {
  flex: 2;
  text-align: center;
}

.center-content button {
  font-size: 15px;
  margin-right: 10px;
  color: #000000;
  border: 1px solid rgba(255, 255, 255, 0);
  cursor: pointer;
  font-family: "Poppins-Regular", sans-serif;
  width: auto;
  background-color: rgba(255, 255, 255, 0);
}

.right-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.menu-icon{
  margin-left: 20px;
}

.container {
  display: flex;
  align-items: start;
  text-align: left;
}

.column {
  text-align: left;
  margin-top: 20px;
  padding: 0 50px;
  min-height: 100px;
  align-items: start;
}

.column h2 {
  font-family: "Poppins-Medium", sans-serif;
  font-size: 15px;
  border-top: 20px;
  color: #000000;
}

.column p {
  font-size: 15px;
}

footer {
  text-align: center;
  background-color: #ececec;
  padding: 10px 50px;
  border-radius: 20px;
  margin: 0 20px;
  font-family: "Poppins-ExLight", sans-serif;
}
</style>
