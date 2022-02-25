<template>
  <div class="home">
    <carousel class="d-none d-md-block"/>
    <main-icons/>
    <hr class="m-5">
    <time-table/>
  </div>
</template>

<script>
// @ is an alias to /src
import carousel from '@/components/Home/carousel.vue'
import MainIcons from '@/components/Home/mainIcons.vue'
import TimeTable from '@/components/Home/timeTable.vue'

export default {
  name: 'Home',
  components: {
    carousel,
    MainIcons,
    TimeTable,
  }
}
</script>
