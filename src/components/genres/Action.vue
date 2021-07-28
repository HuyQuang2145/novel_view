<template>
  <div class="container">

        <div class="column_left">
            <div class="article">
                <h3>Truyện mới cập nhật</h3>
            </div>
            <div class="item">
                <div class="col">
                    <div class="anh1">
                        <a href=""><img src=" " alt=""></a>
                        <div class="title-chinh">
                            <a v-for="data of datas" :key="data.id">
                                <h4> {{data.name}}</h4>
                            </a>
                            <a href="">
                                <p>Chương truyện ở đây</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="col">
                    <div class="anh1">
                        <a href=""><img src=" " alt=""></a>
                        <div class="title-chinh">
                            <a href="">
                                <h4>tên truyện ở đây</h4>
                            </a>
                            <a href="">
                                <p>Chương truyện ở đây</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="col">
                    <div class="anh1">
                        <a href=""><img src=" " alt=""></a>
                        <div class="title-chinh">
                            <a href="">
                                <h4>tên truyện ở đây</h4>
                            </a>
                            <a href="">
                                <p>Chương truyện ở đây</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="col">
                    <div class="anh1">
                        <a href=""><img src=" " alt=""></a>
                        <div class="title-chinh">
                            <a href="">
                                <h4>tên truyện ở đây</h4>
                            </a>
                            <a href="">
                                <p>Chương truyện ở đây</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="col">
                    <div class="anh1">
                        <a href=""><img src=" " alt=""></a>
                        <div class="title-chinh">
                            <a href="">
                                <h4>tên truyện ở đây</h4>
                            </a>
                            <a href="">
                                <p>Chương truyện ở đây</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        

        </div>

        <div class="column_right">
            <div class="article">
                <h3>Truyện hot</h3>
                <div class="article-phu">
                    <h4><a href="">Top ngày</a></h4>
                    <h4><a href="">Top Tháng</a></h4>
                    <h4><a href="">Top Tổng</a></h4>
                </div>
            </div>
          
            <div class="item-2">
                    <div class="anh2">
                        <a href=""><img src=" " alt=""></a>
                    </div>
                    <div class="title-phu">
                        <a href="">
                            <h4>tên truyện ở đây</h4>
                        </a>
                        <a href="">
                            <p>Chương truyện ở đây</p>
                        </a>
                    </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'action',
    datas(){
      return{
        datas:[]
      }
    },
    async created() {
    try {
      const res = await axios.get('http://localhost:3000/datas')

      this.datas = res.data;
    } catch(e) {
      console.error(e)
    }
  },
}
</script>

<style>

.container{
    width: 100%;
    margin: 0 auto;

}
.column_left{
    width: 80%;
    box-sizing: border-box;
    float: left;
}
.column_right{
    width: 20%;
    float: right;
}
.anh1{
    width: 100%;
    border-radius: 6px;
    background: #ebebeb;
    border: 1px solid #d8d8d8;
    box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.16);

}
img{
    width: 100%;
}
.article{
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    text-align: left;
    position: relative;
    box-sizing: border-box;
}
.item{
    max-width: 20%;
    padding: 15px;
    float: left;
    overflow: hidden;
    position: relative;
}

.article-phu{
    border-top: 1px solid blue;
}
.article-phu h4{
    float: left;
    margin-left: 15px;
    margin-top: 10px;
    padding: 15px;
    background-color: rgb(210 209 209);
  
}
.title-chinh{
    padding-left: 5px;
    padding-right: 5px;
    text-align: left;
}
a{
    text-decoration: none;
}

a:hover{
    color: #00ff99;
    text-decoration: underline;   
}
a:active{
    color: red;
    text-decoration: none;
}
.item-2{
    max-width: 100%;
    background: #fff;
    list-style: none;
    padding: 14px 24px 21px 0px;
    margin-bottom: 15px;
    margin-top: 10px;
}
.item-2 .anh2{
    float: left;
    position: relative;
    width: 50%;
    padding: 15px;
}
.item-2  img{
    float: left;
    width: 100%;
    margin-right: 15px;
}
.title-phu{
    float: left;
}
</style>