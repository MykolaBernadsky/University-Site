<template>
  <div class="homepage">
      <navbar></navbar>
      <Mainsection></Mainsection>
      <Footersection></Footersection>
  </div>
</template>

<script>
    import Navbar from '../components/homepage/Navbar'
    import Mainsection from '../components/homepage/Mainsection'
    import Footersection from '../components/homepage/Footersection'

    export default {
        name: 'home',
        components: { Navbar, Mainsection, Footersection }
    }
</script>