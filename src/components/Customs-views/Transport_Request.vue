<template>
    <div>
        <header>
            <Navbar/>
        </header>

        <body class="ma-2">
            <Maps />        
        </body>
    </div>
</template>

<script>
import Navbar from '../../views/share-nav/Navbar'
import Maps from '../../views/share-nav/Maps'
export default {
    name: 'Transport_Request',
    components:{
        Navbar,
        Maps
    }

}
</script>

<style>

</style>