<template>
  <div class="cards-container">
  <div class="slide-card">
    <img :src="card.image" alt="Card Image" class="slide-image">
    <div class="card-content">
      <p class="card-title">{{ card.title }}</p>
      <div class="price">
        <p class="card-price"><b>${{ card.price }}</b> / week</p>
      </div>
      <p class="card-rating"><i class="far fa-star"></i> {{ card.rating }}</p>
    </div>
    <div class="card-arrow" @click="() => redirectToArticle(card.articleLink)"><i class="fa-solid fa-arrow-right"></i></div>
  </div>
  </div>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    methods: {
      redirectToArticle(articleLink) {
        window.open(articleLink, '_blank');
      }
    }
  };
</script>

<style>
.slide-card {
    width: 160px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 25px;
  overflow: hidden;
  margin: 20px;
  position: relative;
  border: 1px solid rgba(185, 185, 185, 0.65);
text-align: left;
}

.slide-image {
  width: 160px;
  height: 200px;
  object-fit: cover;
  border-radius: 25px;
}

.card-content {
  padding: 10px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-price b{
  font-family: Poppins-SeBold;
}

.card-rating {
  position: absolute;
  top: 0;
  right: 10px;
  padding: 5px 10px;
  background-color: rgba(70, 70, 70, 0.5);
  font-size: 14px;
  color: #ffffff;
  border-radius: 25px;
}

.card-arrow {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}

.cards-container {
  display: inline-block;
  margin-right: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
