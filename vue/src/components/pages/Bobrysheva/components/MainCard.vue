<template>
  <div class="cards-container">
    <div class="main-card">
      <img :src="card.image" alt="Card Image" class="main-image">
      <div class="card-content">
        <p class="card-title">{{ card.title }}</p>
        <div class="hashtags-wrapper">
          <span v-for="(hashtag, index) in card.hashtags" :key="index" class="card-hashtag">{{ hashtag }}</span>
        </div>
        <p class="card-reading-time"><i class="far fa-clock"></i> {{ card.readingTime }}</p>
      </div>
      <div class="card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
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
  }
};
</script>

<style lang="less">
.cards-container {
  display: inline-block;
  margin-right: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.main-card {
  width: 360px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 25px;
  overflow: hidden;
  margin: 20px;
  position: relative;
  border: 1px solid rgba(185, 185, 185, 0.65);
  text-align: left;

  .main-image {
    width: 360px;
    height: 200px;
    object-fit: cover;
    border-radius: 25px;
  }

  .card-content {
    padding: 10px;

    .card-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .hashtags-wrapper {
      display: flex;
      flex-wrap: wrap;

      .card-hashtag {
        padding: 5px 10px;
        background-color: rgba(206, 206, 206, 0.5);
        font-size: 12px;
        color: #7a7a7a;
        border-radius: 25px;
        margin-right: 5px;
        margin-bottom: 5px;
      }
    }

    .card-reading-time {
      position: absolute;
      top: 0;
      right: 10px;
      padding: 5px 10px;
      background-color: rgba(70, 70, 70, 0.5);
      font-size: 14px;
      color: #ffffff;
      border-radius: 25px;
    }
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
}
</style>
