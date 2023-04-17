<template>
  <div class="main">
    <div class="item-to">
      <ul>
        <li v-for="item in toplist" :key="item" :class="{ac:item==a}" @click="toggle(item)">
          <button>{{ item }}</button>
        </li>
      </ul>
    </div>
    <div class="item-ce">
      <span>我的音乐</span>
      <ul>
        <li v-for="item in centerlist" :key="item" :class="{ac:item==a}" @click="toggle(item)">
          <button>{{ item }}</button>
        </li>
      </ul>
    </div>
    <div class="item-bo">
      <el-collapse v-model="activeName">
        <el-collapse-item title="创建的歌单↓" name="1">
          <ul>
            <li v-for="item in datacj" :key="item" :class="{ac:item==a}" @click="toggle(item)">
              <button>{{ item }}</button>
            </li>
          </ul>
        </el-collapse-item>

        <el-collapse-item title="收藏的歌单↓" name="2">
          <ul>
            <li v-for="item in datasc" :key="item" :class="{ac:item==a}"  @click="toggle(item)">
              <button>{{ item }}</button>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toplist = ref([
  "发现音乐",
  "播客",
  "视频",
  "关注",
  "直播",
  "私人FM"
])

const centerlist = ref([
  "我喜欢的音乐",
  "本地与下载",
  "最近播放",
  "我的音乐月盘",
  "我的播客",
  "我的收藏"
])


const datacj = ref(["创建", "的", "歌单"]);

const datasc = ref(["我是", "收藏", "歌单"]);


const  a = ref("");

const toggle = (item)=>{
  a.value = item;
}
</script>

<style lang="scss" scoped>
.main {
  max-width: max-content;
  min-width: min-content;
  padding-left: 30px;
  border-right: 1px solid black;
}
.main > div {
  margin-bottom: 30px;
}
ul {
  width: 170px;
  display: flex;
  min-height: max-content;
  flex-direction: column;
  font-size: 40px;
  cursor: pointer;
  button {
    background-color: transparent;
    border: none;
    font-size: 20px;
  }
  li {
    min-height: max-content;
    height: 40px;
    line-height: 30px;
  }
  li:hover {
    background-color: rgba(191, 188, 188, 0.6);
  }
}

.item-ce {
  span {
    color: rgba(125, 125, 125, 0.8);
    display: inline-block;
    margin-bottom: 10px;
  }
}

.item-bo {
  //max-width: max-content;
  max-height: max-content;
}
.ac{
  background-color: rgba(191, 188, 188, 0.6);
}

::v-deep .el-collapse-item__content {
  max-height: max-content;
  min-height: 40px;
  padding: 0;
}
</style>
