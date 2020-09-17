<template>
  <div class="popup">
    <img src="/close.png" @click="$emit('closeClick')" alt="Закрыть" class="popup__close" />
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #fff;
  z-index: 2;
}
.popup__close {
  position: absolute;
  top: -40px;
  right: -40px;
  cursor: pointer;
}
</style>
