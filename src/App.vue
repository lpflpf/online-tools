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
        <el-menu-item style="float:right"><a target="_blank" href="https://github.com/lpflpf"><svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="#409eff"></path></svg></a></el-menu-item>
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
