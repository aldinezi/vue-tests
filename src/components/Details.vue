<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>Vue unit tests Requirements</h4>
    <code>
      npm i -D @vue/test-utils @vue/server-test-utils vue-server-renderer babel-jest
    </code>
    <p :class="['message', { 'iAmEmpty': newMsg === ''}]">{{ newMsg }}</p>
    <h3></h3>
    <div>
      <button
        class="okay"
        @click="()=>{ newMsg = 'You are so OK! 😎' }">Okay!</button>
    </div>
    <br>
    <div>
      <button
        class="remove"
        @click="()=>{ newMsg = '' }">Clear!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      newMsg: '',
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
