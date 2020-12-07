<template>
  <div class="child-cmp">
    <pre>{{ JSON.stringify(initVal, null, 2) }}</pre>
    <button @click="editValue">编辑</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: ['value'],
  data () {
    return {
      initVal: this.value
    }
  },
  methods: {
    editValue () {
      this.initVal.names[0] = 'updated'
    }
  }
}
</script>

<style lang="less" scoped>
.child-cmp {
  outline: 1px solid blue;
}
</style>
