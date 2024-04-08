<template>
  <div class="slide-menu">
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(${translateValue}px)` }">
        <div v-for="(card, index) in cards" :key="index" class="card">
          <img :src="card.image" alt="Card Image">
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
    <button class="prev" @click="prevSlide">&#10094;</button>
    <button class="next" @click="nextSlide">&#10095;</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cards: [
          [
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
      readingTime: '2 min'
    }
  ]
        ],
        currentIndex: 0,
        slideWidth: 300,
        translateValue: 0
      };
    },
    methods: {
      nextSlide() {
        if (this.currentIndex < this.cards.length - 1) {
          this.currentIndex++;
          this.translateValue -= this.slideWidth;
        }
      },
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.translateValue += this.slideWidth;
        }
      }
    }
  };
</script>

<style lang="less">
  .slide-menu {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .slider {
    display: flex;
  }

  .slides {
    display: flex;
    transition: transform 0.5s ease;
  }

  .card {
    width: 300px;
    margin-right: 20px;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
</style>
