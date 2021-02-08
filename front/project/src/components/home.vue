<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6">
        <div class="grid-content">
          <el-upload
            drag
            action="http://localhost:8080/CSCS/upload"
            :before-upload="beforeImageUpload"
            :on-success="afterImageUpload"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg文件，且不超过20MB
            </div>
          </el-upload>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <el-image 
            id="img" 
            style="width: 358px; height: 178px; border: 1px dashed lightgray; border-radius:5px;"
            :src="url" 
            fit="corver"
            :preview-src-list="srcList"
          >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "漫画样稿上色系统",
      url:require('../assets/initial.jpeg'),
      srcList: [require('../assets/initial.jpeg')],
    };
  },
  methods: {
    beforeImageUpload: (file) => {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 20;

      if (!isJPG) {
        this.$message.error("只能上传 JPG 格式的图片!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 20MB!");
      }
      return isJPG && isLt2M;
    },
    afterImageUpload(response, file, fileList){
      this.url=response["url"];
      this.srcList[0] = response["url"];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content {
  min-height: 180px;
}
</style>
