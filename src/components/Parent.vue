<template>
  <div class="parent-cmp">
    <pre>{{ JSON.stringify(value, null, 2) }}</pre>
    <br />
    <hr />
    <child :value="value" />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data () {
    return {
      value: { names: ['init'] }
    }
  }
}
</script>

<style lang="less" scoped>
.parent-cmp {
  outline: 1px solid red;
}
</style>
