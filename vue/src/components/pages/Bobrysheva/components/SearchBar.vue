<template>
  <input type="text" v-model="searchQuery" placeholder="Search..." @input="emitSearchQuery" class="search-input">
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    emitSearchQuery() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style lang="less">
.search-input {
  width: 200px;
  padding: 8px 12px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  text-align: center;
}
</style>
