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
          <input type="checkbox" @change="toggleTheme" :checked="isLightTheme">
          <span class="slider round"></span>
        </label>
        <i class="fa-regular fa-sun"></i>
        <MenuButton></MenuButton>
        </div>
      </nav>
    </header>

    <div class="main-info">
      <h1>Meanwhile in...</h1>

    <div class="tools">
      <SearchBar @search="handleSearch"></SearchBar>
      <ArticleForm @articleCreated="addArticleToCards" />
    </div>



      <div class="main-cards">
        <MainCard
        v-for="(card, index) in filteredCards"
        :key="index"
        :card="card"
        ></MainCard>
      </div>
        <ButtonTemplate :bordered = "true">See all</ButtonTemplate>

        <div class="slide-info">
          <h1>Choose your guide...</h1>
          <SlideMenu :cards="slides" :visible-cards="3" :scroll-step="1" />
          <ButtonTemplate>Book now</ButtonTemplate>
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
  import ButtonTemplate from "@/components/pages/Bobrysheva/components/ButtonTemplate.vue";
  import MainCard from "@/components/pages/Bobrysheva/components/MainCard.vue";
  import SearchBar from "@/components/pages/Bobrysheva/components/SearchBar.vue";
  import SlideMenu from "@/components/pages/Bobrysheva/components/SlideMenu.vue";
  import ArticleForm from "@/components/pages/Bobrysheva/components/ArticleForm.vue";

  export default {
    components: {
      ButtonTemplate,
      MenuButton,
      SearchBar,
      MainCard,
      SlideMenu,
      ArticleForm
    },
    data() {
        return {
        isLightTheme: true,
        cards: [
          {
            image: 'https://i.imgur.com/8YZQEpy.png',
            title: 'Finland',
            hashtags: ['Scandinavia', 'Cold', 'Schengen'],
            readingTime: '8 min'
          },
          {
            image: 'https://i.pinimg.com/564x/d4/2e/a9/d42ea91267309d843b81d98f3f6a3855.jpg',
            title: 'Japan',
            hashtags: ['Asia', 'Culture', 'Strange'],
            readingTime: '7 min'
          },
          {
            image: 'https://i.pinimg.com/564x/e0/1b/c0/e01bc01b10f88818788af3fc657bef10.jpg',
            title: 'Italy',
            hashtags: ['Europe', 'Sea', 'Talkative'],
            readingTime: '10 min'
          },
          {
            image: 'https://i.imgur.com/BcHudDK.png',
            title: 'USA',
            hashtags: ['America', 'Food', 'Big'],
            readingTime: '21 min'
          },
          {
            image: 'https://i.pinimg.com/564x/d4/42/70/d442704c57aca880894916e506c19d9f.jpg',
            title: 'German',
            hashtags: ['Europe', 'Beer', 'Autobahn'],
            readingTime: '15 min'
          },
          {
            image: 'https://i.imgur.com/EsDvuSX.png',
            title: 'North Korea',
            hashtags: ['Asia', 'Sea', 'Help'],
            readingTime: '2 min',
            articleLink: 'https://www.youtube.com/watch?v=FBnAZnfNB6U'
          }
        ],
        slides: [
          {
            image: 'https://i.pinimg.com/564x/9c/76/65/9c7665013145258e84917a49a053b9e8.jpg',
            title: 'Neckguy',
            rating: '3,4',
            price: '50'
          },
          {
            image: 'https://i.pinimg.com/564x/fd/41/0e/fd410e30216ade0804260a1e72dace5d.jpg',
            title: 'Historic man',
            rating: '4,5',
            price: '350'
          },
          {
            image: 'https://i.pinimg.com/564x/8b/7d/fb/8b7dfbad7cd2545da21004dbef28eb82.jpg',
            title: 'Boris',
            rating: '4,9',
            price: '20'
          },
          {
            image: 'https://i.pinimg.com/564x/b6/dd/3a/b6dd3ae29098083b275af4621c8d3009.jpg',
            title: 'Clerc Freestyler',
            rating: '2,3',
            price: '300'
          },
          {
            image: 'https://i.pinimg.com/564x/6b/be/31/6bbe3189c912f0274cd26b121536ec1a.jpg',
            title: 'LEGO',
            rating: '4,4',
            price: '90'
          },
          {
            image: 'https://i.pinimg.com/564x/4d/d4/67/4dd4677ac4da8be4728a837339ef0dd6.jpg',
            title: 'LikeMe',
            rating: '1,0',
            price: '150'
          },
          {
            image: 'https://i.pinimg.com/564x/79/3c/0c/793c0c45b6c5a758e8f7f222256dcd5d.jpg',
            title: 'Todd Howard',
            rating: '9,9',
            price: '3999'
          },
          {
            image: 'https://i.pinimg.com/564x/a0/12/b6/a012b67784ca39a513eca1d6bf698f12.jpg',
            title: 'Cone Patric',
            rating: '4,7',
            price: '50'
          },
          {
            image: 'https://i.pinimg.com/564x/f4/7b/bd/f47bbd5b7699b140bfbb5d661f921b61.jpg',
            title: 'Banana Emo',
            rating: '4,4',
            price: '20'
          },
          {
            image: 'https://i.pinimg.com/564x/7a/2e/a0/7a2ea0d0da2b7edba723e40f3fdda3c4.jpg',
            title: 'Carl',
            rating: '3,6',
            price: '2'
          },
          {
            image: 'https://i.pinimg.com/564x/92/b7/fa/92b7fa2cb2df5ac9e66f435e6a083f55.jpg',
            title: 'Drog',
            rating: '1,2',
            price: '10'
          },
          {
            image: 'https://i.pinimg.com/564x/4e/25/b8/4e25b89aa82442e0a18afc9f74c99a09.jpg',
            title: 'Boing',
            rating: '2,1',
            price: '10'
          },
        ],
        searchQuery: ''
      };
    },
    computed: {
      filteredCards() {
        return this.cards.filter(card =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        card.hashtags.some(hashtag => hashtag.toLowerCase().includes(this.searchQuery.toLowerCase()))
        );
      }
    },
    methods: {
      toggleTheme() {
        this.isLightTheme = !this.isLightTheme;
      },
      handleSearch(query) {
        this.searchQuery = query;
      },
      addArticleToCards(newArticle) {
        this.cards.push(newArticle); // Добавление новой статьи в массив cards
      }
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

</style>
