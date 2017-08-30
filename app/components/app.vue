<template>
  <main id="app">
    <screen>
      <p>Welcome</p>
    </screen>
  </main>
</template>

<script>
import screen from 'components/screen'

export default {
  name: 'app',
  components: {
    screen
  }
}
</script>

<style lang="scss">
@import '~styles/app.scss';
</style>
