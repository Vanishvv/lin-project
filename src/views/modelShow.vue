<template>
    <div class="model-show">
      <img class="logo" :src="pageData.logoUrl">
      <div class="house-3d">
        <img class="spin" :src="pageData.spinUrl">
        <img class="house" :src="pageData.houseUrl">
        <p>{{pageData.houseTip}}</p>
      </div>
      <div class="room-choose">
        <p class="room-list-title">{{pageData.roomListTitle}}</p>
        <div :class="roomItem.roomName" v-for="(roomItem,index) in pageData.roomListData" :key="index">
          <img :src="roomItem.roomUrl">
          <p class="title">{{roomItem.roomTitle}}</p>
        </div>
      </div>
      <div class="brand-list">
        <p class="title">{{pageData.brandTitle}}</p>
        <button v-for="(brandItem,index) in pageData.brandListData" :key="index">{{brandItem.name}}</button>
      </div>
      <div class="furniture">
        <div v-for="(furnitureItem,index) in pageData.furnitureListData" :key="index">
          <img :class="furnitureItem.name" :src="furnitureItem.url" @click="showModel">
        </div>
        <p>{{pageData.furnitureTip}}</p>
      </div>
      <div class="icon-list">
        <div v-for="(iconItem,index) in pageData.iconListData" :key="index">
          <i :class="iconItem.iconName"></i>
        </div>
      </div>
      <div class="fullscreen-show" v-if="isModelShow">
        <div class="model">
          <model-obj :src="pageData.modelUrl" :width="pageData.width" :height="pageData.height"></model-obj>
        </div>
        <i class="el-icon-close"  @click="hideModel"></i>
        <div class="intro">
          <p v-for="(introItem,index) in pageData.introListData" :key="index">{{introItem.intro}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  import { ModelObj } from 'vue-3d-model';
  import modelShowInfo from '../../static/modelShowData'
  export default {
    name: "",
    data(){
      return{
        pageData:modelShowInfo.data,
        isModelShow:false
      }
    },
    methods:{
      showModel() {
        this.isModelShow=true
      },
      hideModel(){
        this.isModelShow=false
      }
    },
     components: { ModelObj }
  }
</script>

<style scoped>

  .el-icon-close{
    color: white;
    font-size: 30px;
    position: absolute;
    right: 50px;
    top: 50px;
  }

  .fullscreen-show{
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0,0,0,0.6);
    top:0;
  }

  .fullscreen-show p{
    font-family: HeitiStd;
    font-size: 32px;
    color:white;
  }

  .intro{
    position: absolute;
    left: 1100px;
    top:150px;
  }

  .model{
    position: absolute;
    left: 300px;
    top:150px;
  }

  .logo{
    height: 80px;
    margin-left: 80px;
  }

  .house{
    height: 550px;
    padding-left: 100px;
    padding-top: 10px;
  }

  .house-3d{
    height: 600px;
    width: 960px;
    background-color: #f5f5f5;
    margin-left: 80px;
    margin-top: 20px;
  }

  .house-3d p{
    text-align: right;
    font-family:'YouYuan';
    font-size: 20px;
    padding-right: 80px;
    margin-top: 0;
  }

  .room-list-title{
    font-family:'YouYuan';
    font-size: 23px;
  }

  .room-choose .title{
    font-family: 'YouYuan';
    font-size: 20px;
    text-align: center;
  }

  .room-choose img{
    height: 120px;
  }

  .room-choose div{
    float: left;
    margin-right: 75px;
    cursor: pointer;
  }

  .room-choose{
    margin-left: 80px;
  }

  .spin{
    height: 100px;
    position: absolute;
    top:150px;
    left: 120px;
  }

  .brand-list{
    position: absolute;
    top:80px;
    left: 1250px;
    width: 150px;
  }

  .brand-list .title{
    font-family: HeitiStd;
    font-size: 30px;
    color: #4a4a4a;
    text-align: center;
  }

  .brand-list button{
    background-color: #f8f8f8;
    border: none;
    border-radius: 15px;
    width: 150px;
    height: 50px;
    font-family: 'YTJ';
    font-weight: 600;
    font-size: 22px;
    color: #4a4a4a;
    margin-bottom: 27px;
    box-shadow: 0 10px 15px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.19);
    cursor: pointer;
  }

  .brand-list button:focus{
    outline: none;
    background-color: #4a4a4a;
    color: white;
  }

  .furniture{
    position: absolute;
    width: 370px;
    top: 120px;
    left: 1550px;
  }

  .furniture div{
    text-align: center;
    background-color: #f5f5f5;
    margin-bottom: 30px;
    width: 370px;
    height: 160px;
    cursor: pointer;
  }

  .furniture p{
    font-size: 20px;
    font-family: 'YouYuan';
    text-align: center;
  }

  .sofa{
    width: 250px;
    padding-top: 25px;
  }

  .desk{
    width: 220px;
  }

  .table{
    width: 250px;
    padding-top: 25px;
  }

  .cabinet{
    width: 120px;
    padding-top: 5px;
  }

  .iconfont{
    font-size: 40px;
    text-indent:20px;
  }

  .icon-list{
    position: absolute;
    left: 2000px;
    width: 45px;
    top:120px;
  }

  .icon-list div{
    margin-bottom: 20px;
    cursor: pointer;
  }

</style>
