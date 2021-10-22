<template>
  <el-main class="Json2Go">
    <el-row :gutter="24">
      <h2>

        <el-col :span="20">
          <el-checkbox v-model="sortObjectKeys" label="sortKeys" border></el-checkbox>
          <el-checkbox v-model="escapeUnicode" label="escapeUnicode" border></el-checkbox>
        </el-col>
      </h2>
    </el-row>

    <el-row :gutter="24" class="textareatitle">
      <el-col :span="12">
          <h3> Json</h3>
      </el-col>
      <el-col :span="12" >
          <h3> Result</h3>
      </el-col>
    </el-row>

    <el-row :gutter="24" style="padding:0;">
      <el-col :span="12">
              <el-input type="textarea" placeholder="输入 Json 语句" :rows="32" v-model="jsonContent" class="leftinput"></el-input>
      </el-col>
      <el-col :span="12" style="height: 600px">
              <div id="jsoneditor" v-show="jsonPatternOk"></div>
              <el-input type="textarea" :rows="32" v-model="jsonFormat" v-show="!jsonPatternOk"></el-input>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
/* eslint-disable */
//  import JSONEditor from "jsoneditor"
//  import 'jsoneditor/dist/jsoneditor.min.css'

  export default {
    name: 'FormatJson',
    data() {
      return {
        msg: '格式化json',
        jsonContent: '',
        escapeUnicode: true,
        sortObjectKeys: true,
        jsonPatternOk: true,
        jsonFormat: '',
      }
    },
    watch: {
      jsonContent(val) {
        let _self = this
        this.$options.methods.formatJson(_self, val, this.escapeUnicode, _self.sortObjectKeys)
      },
      escapeUnicode(val) {
        let _self = this
        this.$options.methods.formatJson(_self, this.jsonContent, val, _self.sortObjectKeys)
      },
      sortObjectKeys(val) {
        let _self = this
        this.$options.methods.formatJson(_self, this.jsonContent, this.escapeUnicode, val)
      }
    },
    methods: {
      formatJson(_self, val, escapeUnicode, sortObjectKeys) {
        if (_self.jsonPatternOk) {
          document.getElementById("jsoneditor").innerHTML = ""
        }
        _self.jsonPatternOk = true
        _self.jsonFormat = ''

        if (val === ""){
          return
        }
        try {
          let obj = JSON.parse(val)
          let options = {
            mode: "view",
            escapeUnicode: escapeUnicode,
            sortObjectKeys: sortObjectKeys,
            navigationBar: false
          }
          let editor = new JSONEditor(document.getElementById("jsoneditor"), options, obj)
          editor.expandAll()
          _self.jsonFormat = ""

          _self.jsonContent = JSON.stringify(obj, null, "  ")
        } catch (e) {
          _self.jsonPatternOk = false
          _self.jsonFormat = e.message
        }
      }
    }
  }

</script>
