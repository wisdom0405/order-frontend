<template>
  <h1> hello world </h1>
  <Helloworld/>
</template>
<script>
// export default를 통해 해당 화면을 다른 화면에서 사용가능한 컴포넌트로 만듦
import Helloworld from './components/Helloworld.vue'
export default {
  name : 'App',
  components : {
    Helloworld
  }

};
</script>
