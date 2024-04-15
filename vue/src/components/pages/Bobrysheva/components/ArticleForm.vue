<template>
  <div class="article-form">
    <button class="plus" @click="showModal = true"><i class="fa-solid fa-plus"></i></button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showModal = false">&times;</span>

        <div class="content">

          <p>Создание статьи</p>

          <form @submit.prevent="submitArticle">

            <input type="text" id="photo" placeholder="Ссылка на фото" v-model="photo" required>
            <input type="text" id="title" placeholder="Заголовок" v-model="title" required>
            <input type="text" id="hashtags" placeholder="Хештеги (разделите запятыми)" v-model="hashtagsInput">
            <input type="text" id="readingTime" placeholder="Время чтения" v-model="readingTime">
            <input type="text" id="articleLink" placeholder="Ссылка на статью" v-model="articleLink" required>

            <button type="submit">Создать</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      photo: '',
      title: '',
      hashtagsInput: '',
      readingTime: '',
      articleLink: ''
    };
  },
  computed: {
    hashtags() {
      return this.hashtagsInput.split(',').map(tag => tag.trim());
    }
  },
  methods: {
    submitArticle() {
      const newArticle = {
        image: this.photo,
        title: this.title,
        hashtags: this.hashtags,
        readingTime: this.readingTime,
        articleLink: this.articleLink
      };

      this.$emit('articleCreated', newArticle);

      this.clearForm();
    },
    clearForm() {
      this.photo = '';
      this.title = '';
      this.hashtagsInput = '';
      this.readingTime = '';
      this.articleLink = '';
      this.showModal = false;
    }
  }
};
</script>

<style lang="less">

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  width: 40%;
  margin: 15% auto;

.content {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 25px;

p {
  font-family: "Poppins-SeBold", sans-serif;
  font-size: 32px;
}
}

.content input {
  display: inline-block;
  width: 80%;

  margin-bottom: 20px;
  text-align: left;

  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
}

.content button {
  display: block;
  width: 150px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
}

.close {
  top: 2px;
  right: 52px;
  position: relative;
  color: #3a3a3a;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.plus {
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: #000000;
    border-radius: 100%;
    border-color: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
</style>
