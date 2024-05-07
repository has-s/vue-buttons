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
      <h1>Article about...</h1>
      <div class="article-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie sed magna non laoreet. Duis maximus in massa nec elementum. In quis mattis diam. Praesent lobortis tellus eget sem auctor accumsan. Sed id mauris nec orci placerat blandit eu a libero. Pellentesque mollis velit vel velit mattis interdum. Cras ac volutpat lorem, at pellentesque tortor. Mauris erat diam, aliquam id scelerisque eu, lobortis nec turpis. Etiam consequat risus nec mi ultrices molestie.
Proin pellentesque dui non ligula fermentum blandit. Mauris lacus risus, efficitur sit amet semper eu, dapibus quis justo. Etiam rutrum augue a odio gravida, non imperdiet felis aliquet. Sed in placerat nunc. Nam dui mauris, condimentum vitae enim vitae, tempus congue erat. In a dignissim dolor. Quisque ac dolor ac urna vulputate tincidunt. Ut condimentum lectus tristique blandit auctor. Vivamus maximus consectetur lobortis. Cras fringilla nulla vitae ultrices sollicitudin. Fusce in tortor sapien. Suspendisse sed elit dapibus, eleifend sapien id, vestibulum magna. Sed viverra nisl vel bibendum sodales.
Fusce in viverra tortor, fringilla egestas lectus. Etiam volutpat placerat orci, vestibulum vehicula urna sodales id. Suspendisse ac neque mauris. Nullam sit amet consectetur lectus, id cursus libero. Donec facilisis eu dui in interdum. Etiam erat nisl, porta et magna eget, euismod aliquet neque. Sed quis leo orci. Sed quis malesuada est. Aenean auctor molestie egestas. Duis vitae erat rutrum, commodo nisi vel, congue justo.
Praesent vel ornare nulla, ut gravida nisi. Ut malesuada orci nec consequat tincidunt. Morbi urna velit, dignissim quis interdum ac, dapibus eu arcu. Curabitur fringilla aliquam nulla quis aliquam. Aenean sit amet faucibus arcu. Donec eleifend tellus erat, sed tempus augue tincidunt luctus. Aliquam erat volutpat. Donec molestie sapien eu justo tempus, ut convallis dolor sagittis. Praesent non finibus dui. Integer finibus ultrices diam, viverra blandit arcu tincidunt eu.
Fusce dictum felis erat, ut dignissim metus vestibulum sit amet. Pellentesque imperdiet, tellus non finibus tempor, erat mi condimentum ante, vitae volutpat nibh tortor id tellus. Ut feugiat tempus enim, id efficitur erat posuere vel. Nam interdum ipsum et lectus maximus, in tempus purus eleifend. Ut suscipit dapibus iaculis. Sed placerat eget justo nec aliquam. In mi lorem, interdum id nisi quis, tempor suscipit ex.
Maecenas ornare metus quis quam iaculis ultricies. Nulla facilisi. Suspendisse nec ultrices nisl, quis eleifend nisi. Praesent pretium ut tortor non laoreet. Phasellus tristique feugiat libero, sed molestie massa viverra non. Nulla nulla nisi, volutpat quis tortor vitae, ullamcorper luctus purus. Maecenas nec convallis nunc.
Etiam hendrerit dignissim sapien id viverra. Nunc quis massa sit amet ligula varius consectetur non eu ante. Etiam at interdum purus. Nunc consequat eros diam, vel tincidunt diam laoreet vel. Vivamus a lacus et purus ullamcorper rhoncus eu at metus. Nullam tempor tincidunt scelerisque. Phasellus at pharetra diam. Quisque ac lacinia eros. Sed aliquam libero nec urna auctor, ut consectetur felis pharetra. Fusce semper nisi ut lectus sagittis, a sollicitudin est eleifend. Duis sed justo vehicula, viverra urna ultricies, dapibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut arcu sit amet dui rhoncus volutpat et ut neque.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed blandit quis odio eget pellentesque. Curabitur convallis vulputate lacus sit amet euismod. Suspendisse pulvinar vehicula risus, at maximus enim elementum in. Sed at ornare diam, eget pretium metus. Maecenas consectetur orci quis tempor tristique. Sed at iaculis metus. Etiam mollis viverra tincidunt. Mauris sed orci quam. Fusce tortor neque, cursus sit amet blandit et, porttitor sit amet nunc. Vivamus vel dignissim purus.
Aliquam erat volutpat. Vestibulum varius lectus quis justo commodo, ac viverra dui maximus. Etiam malesuada, felis ullamcorper fermentum egestas, orci libero tempus elit, non interdum enim metus eu leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent ut nibh sed lorem porta viverra. Maecenas nisi justo, congue id ultrices id, ultricies ut erat. Phasellus quis tempus dui. Proin eu dolor luctus ex volutpat dignissim id sit amet tellus. Vivamus nec ex lorem. Ut suscipit purus a justo aliquet pellentesque. Proin ac ipsum sit amet justo gravida aliquet. Donec vestibulum mi vel eleifend scelerisque. Aenean in turpis condimentum, ultricies risus vulputate, eleifend nisi. Proin sagittis vitae quam et dignissim.
Curabitur placerat scelerisque turpis, nec maximus magna consequat at. Sed sed dui turpis. Nam luctus tellus in lectus posuere iaculis eget eu est. Proin pharetra pharetra ipsum, a sagittis augue tristique nec. In hac habitasse platea dictumst. Nam quis semper libero. Sed tristique varius pharetra. Duis placerat mauris et orci ornare interdum. Nam lectus massa, convallis non porttitor vitae, aliquam nec nibh.
      </div>
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
      };
    },
    computed: {
    },
    methods: {
      toggleTheme() {
        this.isLightTheme = !this.isLightTheme;
      },
    }
  };
</script>

<style lang="less">

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
  margin: 25px;
  margin-top: 0;
  text-align: center;
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

.article-content {
  max-width: 85%;
  margin: 20px auto 0;
  text-align: justify;
  line-height: 1.6;
}

</style>
