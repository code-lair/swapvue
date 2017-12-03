<template>
  <section class="gallery columns is-multiline">
      <gallery-image v-for="image in images" :image="image" :key="image.id"></gallery-image>
  </section>
</template>

<script>
import GalleryImage from './Image';
import { Swappable, Plugins } from '@shopify/draggable';
export default {
    name: 'gallery',
    data: () => {
        return {
            "images": [
                {id: 1, src: 'https://placeimg.com/128/128/nature'},
                {id: 2, src: 'https://placeimg.com/128/128/dog'},
                {id: 3, src: 'https://placeimg.com/128/128/cat'},
                {id: 4, src: 'https://placeimg.com/128/128/girl'},
                {id: 5, src: 'https://placeimg.com/128/128/architecture'},
                {id: 6, src: 'https://placeimg.com/128/128/test'},
                {id: 7, src: 'https://placeimg.com/128/128/auto'}
            ],
            swappable: null
        }
    },
    mounted: function () {
        this.swappable = new Swappable(this.$el, {
            draggable: '.image',
            swapAnimation: {
                duration: 200,
                easingFunction: 'ease-in-out',
            },
            plugins: [Plugins.SwapAnimation],
        });
    },
    components: {'gallery-image': GalleryImage}
}
</script>

<style>

</style>
