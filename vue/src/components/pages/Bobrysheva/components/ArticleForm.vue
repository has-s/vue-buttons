<template>
  <div class="article-form">
    <button class="plus" @click="showModal = true"><i class="fa-solid fa-plus"></i></button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>

        <div class="content">
          <p>Создание статьи</p>
          <form @submit.prevent="submitArticle">
            <div v-for="(field, key) in formFields" :key="key">
              <input :type="field.type" :placeholder="field.placeholder" v-model="field.value" :required="field.required">
            </div>
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
      formFields: {
        photo: { type: 'text', placeholder: 'Ссылка на фото', value: '', required: true },
        title: { type: 'text', placeholder: 'Заголовок', value: '', required: true },
        hashtagsInput: { type: 'text', placeholder: 'Хештеги (разделите запятыми)', value: '' },
        readingTime: { type: 'text', placeholder: 'Время чтения', value: '' },
        articleLink: { type: 'text', placeholder: 'Ссылка на статью', value: '', required: true }
      },
      showModal: false
    };
  },
  methods: {
    submitArticle() {
      const newArticle = {
        image: this.formFields.photo.value,
        title: this.formFields.title.value,
        hashtags: this.formFields.hashtagsInput.value.split(','),
        readingTime: this.formFields.readingTime.value,
        articleLink: this.formFields.articleLink.value
      };
      this.$emit('articleCreated', newArticle);
      this.clearForm();
    },
    clearForm() {
      for (let key in this.formFields) {
        this.formFields[key].value = '';
      }
      this.showModal = false;
    },
    closeModal() {
      this.clearForm();
    }
  },
  mounted() {
    setTimeout(this.closeModal, 30000);
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

  &:hover, &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
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
    cursor: pointer;
  }
</style>
