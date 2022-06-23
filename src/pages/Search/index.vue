<template>
  <div>
    <h1>params={{$route.params.keyword}}</h1>
    <h1>query={{$route.query.k}}</h1>
  </div>
</template>

<script>
export default {
  name:'Search',
  // 路由组件可以传递props
  // props:['keyword','k']
}
</script>

<style>

</style>