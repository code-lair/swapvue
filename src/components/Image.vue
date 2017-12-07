<template>
<figure class="image is-128x128">
    <img :src="src" :alt="alt">
</figure>
</template>

<script>
export default {
    name: 'gallery-image',
    props: ['image'],
    data: function() {
        return {
            img: this.image,
        }
    },
    computed: {
        src: {
            get: function() {
                return this.image.src;
            }
        },
        alt: {
            get: function() {
                return `placeholder-${this.image.id}`;
            }
        }
    },
    methods: {
        enlarge: function(){
            this.img.src
        }
    }
}
</script>

<style>

</style>
