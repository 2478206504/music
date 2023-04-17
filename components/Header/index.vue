<template>
  <header>
    <div class="mu-le">
      <!-- 左侧 -->
      <img src="../../assets/logo.png" />
      <span class="music-logo">网易云音乐</span>
    </div>
    <div class="mu-ce">
      <!-- 表示中间的区域 -->
      <button>
        <el-icon :size="20"><ArrowLeft /></el-icon>
      </button>
      <button>
        <el-icon :size="20"><ArrowRight /></el-icon>
      </button>

      <el-input v-model="input4" placeholder="搜索">
        <template #prefix>
          <el-icon><search /></el-icon>
        </template>
      </el-input>
    </div>
    <div class="mu-ri">
      <!-- 表示右侧的 -->
      <div class="avatar">
        <img src="../../assets/logo.png" />
        <span class="music-name">2020-无名</span>
      </div>
      <div class="icons">
        <span>
          <el-icon><Setting /></el-icon
        ></span>
        <span>
          <el-icon><Message /></el-icon>
        </span>
        <span>
          <el-icon><Minus /></el-icon>
        </span>
        <span>
          <el-icon><FullScreen /></el-icon>
        </span>
        <span>
          <el-icon><Close /></el-icon>
        </span>
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  Message,
  Setting,
  Minus,
  FullScreen,
  Close,
  ArrowLeft,
  ArrowRight,
} from "@element-plus/icons-vue";

import { ref } from "vue";

const input4 = ref("");
</script>
<style>
  body{
    min-width: max-content;
  }
</style>
<style lang="scss" scoped>

img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
header {
  color: white;
  display: flex;
  height: 50px;
  background-color: #ec4141;
  padding: 0 20px;

  .mu-le {
    width: 30%;
    height: 100%;
    line-height: 50px;
    display: flex;
    min-width: max-content;
    max-width: max-content;
    align-items: center;
    margin-right: 50px;
  }

  .mu-ce {
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;
    min-width: max-content;
    margin-right: 80px;
    button {
      background-color: rgba(197, 195, 195, 0.3);
      border: none;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      cursor: pointer;
      margin: 0 5px;
      color: white;
    }
  }

  .mu-ri {
    display: flex;
    height: 100%;
    line-height: 50px;
    display: flex;
    flex-grow: 2;
    align-items: flex-end;
    justify-content: end;
    min-width: max-content;
    .avatar {
      margin-right: 40px;
    }
    .icons {
      display: inline-flex;
      justify-content: space-between;
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>
