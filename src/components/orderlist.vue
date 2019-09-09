<template>
  <div class="orderlist">
    <el-tabs v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick">
      <el-tab-pane v-for="item in statusArr" :label="item.label" :name="item.name" v-bind:key="item.id">
        <div class="swiper-container foodcate">
          12312312312312313
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name:"orderlist",
    data(){
      return {
        activeName:"1",
        tabPosition: 'top',
        statusArr:[
          {
            label:"未支付",
            name:"0",
          },
          {
            label:"已支付",
            name:"1",
          },
          {
            label:"已取消",
            name:"2",
          },
          {
            label:"就餐",
            name:"3",
          },
          {
            label:"评价",
            name:"4",
          },
          {
            label:"已完成",
            name:"5",
          }
        ]
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(123123); 
      },
    }
  }
</script>