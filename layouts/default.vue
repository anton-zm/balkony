<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <go-up />
  </div>
</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';
import goUpBtn from '@/components/ui/goUpBtn';
export default {
  components: {
    Header,
    Footer,
    'go-up': goUpBtn,
  },
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
