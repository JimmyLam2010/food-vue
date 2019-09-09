<template>
  <div id="foodMap">
      <baidu-map class="map"
        :center="{lng: 113.3178172909, lat: 23.1019875330}"
        :zoom="15">
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-marker :position="{lng: 113.3178172909, lat: 23.1019875330}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
          <bm-label content="XXXX餐厅" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
        </bm-marker>
      </baidu-map>
  </div>
</template>

<script>
export default {
  name:"foodMap",
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

#app{
  width:100%!important;
  height:100%!important;
}
#foodMap,.map {
  width: 100%;
  height: 100%;
}
</style>