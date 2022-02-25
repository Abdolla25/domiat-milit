<template>
  <div class="carousel">
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="slide in slides" :key="slide.id"
        :caption="slide.caption"
        :text="slide.text"
        :img-src="slide.img"
      >
      <b-button variant="primary">{{ slide.button }}</b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
    name: 'carousel',
    data() {
    return {
        slide: 0,
        sliding: null,
        slides: [
          {
            caption: 'المستشفى العسكري ... صحتك تهمنا',
            text: 'نحن نقدم الرعاية الصحية على أعلى مستوى من الجودة والأمان فى مصر وإفريقيا والشرق الأوسط.',
            img: 'https://picsum.photos/1024/420/?image=51',
            button: 'سجل اليوم',
          },
          {
            caption: 'رعاية صحية متميزة',
            text: 'يقدم أطباؤنا وموظفونا المرموقون لمرضانا العناية الطبية والجراحية النادرة لتدعيم أعلى مستويات الصحة والراحة.',
            img: 'https://picsum.photos/1024/420/?image=52',
            button: 'اعرف أكثر',
          },
          {
            caption: 'كوادر طبية مميزة',
            text: 'تضم المستشفى العسكري بدمياط الجديدة نخبة من أفضل الأطباء الحاصلين على أعلى الشهادات الجامعية المصرية والأجنبية في مختلف التخصصات.',
            img: 'https://picsum.photos/1024/420/?image=53',
            button: 'تصفح المعرض',
          },
        ]
    }
    },
    methods: {
    onSlideStart(slide) {
        this.sliding = true
    },
    onSlideEnd(slide) {
        this.sliding = false
    }
    }
}
</script>

<style>
.carousel-control-prev {right:0;left:unset;transform: rotateZ(180deg)}
.carousel-control-next {left:0;right:unset;transform: rotateZ(180deg)}
.carousel-indicators {padding-right: 0}
.carousel {margin-bottom: 4rem;}
</style>