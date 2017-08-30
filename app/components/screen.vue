<template>
  <div id="screen" class="hero is-primary is-fullheight">
    <header class="hero-head" v-if="$slots.header">
      <slot name="header"></slot>
    </header>

    <div class="hero-body has-text-centered">
      <div class="container">
        <slot></slot>
      </div>
    </div>

    <footer class="hero-foot" v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'screen'
}
</script>
