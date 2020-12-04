<template>
  <div id="app">
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        default-active="1"
        router="true"
      >

        <el-menu-item index="1" :route="{name: 'Sql2Go'}">SQL转Struct</el-menu-item>
        <el-menu-item index="2" :route="{name: 'Json2Go'}">Json转Struct</el-menu-item>
        <el-menu-item index="3" :route="{name:'FormatJson'}">Json格式化</el-menu-item>
      </el-menu>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'App'
  }
</script>

<style>
  #app {

  }

  a {
    text-decoration: blink;
  }
</style>
