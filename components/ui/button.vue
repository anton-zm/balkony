<template>
  <button class="callme-button" @click="$emit('popup')">{{ btnText }}</button>
</template>

<script>
export default {
  props: ['btnText'],
};
</script>

<style scoped>
.callme-button {
  background-color: transparent;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  font-weight: 100;
  padding: 10px 30px;
  cursor: pointer;
  outline: none;
}
</style>
