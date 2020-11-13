<template>
  <div>
    <header>
    <Navbar/>
    </header>

    <body>
      <div class="about">
        <h1>This is an about page</h1>
      </div>      
    </body>

    <footer>
      <Footer/>
    </footer>
  </div>
</template>
<script>
import Navbar from '../Navbar'
import Footer from '../Footer'
export default {
  name: 'Team',
  components:{
    Navbar,
    Footer
  }
}
</script>