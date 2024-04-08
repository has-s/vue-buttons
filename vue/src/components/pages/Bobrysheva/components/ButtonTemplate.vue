<template>
  <button
    class="btn-templ"
    :class="{ 'pressed': active, 'bordered': bordered }"
    :disabled="disabled"
    @click="click"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonTemplate',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang="less">
.btn-templ {
  background-color: #ffffff;
  color: #181c16;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 20px;
  padding: 12px 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: "Poppins-Medium", sans-serif;
  font-size: 15px;
  font-weight: initial;
  width: 150px;

  &:active {
    background-color: #ffffff;
    color: rgb(26, 30, 24);
  }

  &:focus {
    color: rgb(26, 30, 24);
  }

  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgba(26, 30, 24, 0.50);
    &.bordered{
      border-color: rgba(26, 30, 24, 0.50);
    }
  }

  &.pressed {
    background-color: #ffffff;
    color: #1a1e18;
  }

  &.bordered {
    border-color: #1a1e18;
  }

  &:disabled {
    color: #bbbbbb;
    cursor: not-allowed;
  }

}
</style>