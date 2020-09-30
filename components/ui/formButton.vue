<template>
  <button class="button" type="submit">Отправить</button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background-color: #e99322;
  color: white;
  border: none;
  min-height: 32px;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;
  padding: 15px;
  box-sizing: border-box;
}
.button:active {
  background-color: #c97a14;
}
.button:focus {
  outline: none;
}
</style>
