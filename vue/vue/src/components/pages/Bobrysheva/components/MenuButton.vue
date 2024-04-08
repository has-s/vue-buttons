<template>
  <div>
    <button @click="toggleMenu" class="menu-button">
      <i class="fas fa-bars icon"></i>
    </button>
    <transition name="fade">
      <div v-if="isOpen" class="overlay" @click="closeMenu"></div>
    </transition>
    <transition name="slide">
      <div v-if="isOpen" class="menu">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index" @click="handleMenuItemClick(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      menuItems: ['Home', 'Login', 'Register']
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    handleMenuItemClick(item) {
      console.log('Clicked on', item);
    }
  }
};
</script>

<style lang="less">
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .icon {
    color: #000000;
    font-size: 20px;
    padding: 0 10px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 98;
  }

  .menu {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: "Poppins-Medium", sans-serif;
    font-size: 15px;
    font-weight: initial;
    width: 150px;
    position: absolute;
    top: 75px;
    right: 20px;
    padding: 10px;
    z-index: 100;
  }

  .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .menu ul li {
    cursor: pointer;
    margin: 15px 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.7s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active {
    transition: transform 0.7s;
  }
  .slide-enter, .slide-leave-to {
    transform: translateY(-200%);
  }
</style>
