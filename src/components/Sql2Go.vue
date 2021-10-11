<template>
  <el-main class="Sql2Go">
    <el-row :gutter="24">
      <h2>
        <!--el-col :span="2" style="margin-left: 50px;">
          <span style="float:right">Options:</span>
        </el-col-->

        <el-col :span="20">
          <el-checkbox v-model="useGorm" label="gorm" border>gorm</el-checkbox>
          <el-checkbox v-model="useJson" label="json" border>json</el-checkbox>
          <el-checkbox v-model="useForm" label="form" border>form</el-checkbox>
        </el-col>
      </h2>
    </el-row>
    <!--el-divider></el-divider-->
    <el-row :gutter="24" style="margin-top:10px">
      <el-col :span="12">
          <el-input type="textarea" placeholder="建表语句" :rows="32" v-model="sqlContent"></el-input>
      </el-col>
      <el-col :span="12">
          <el-input type="textarea" placeholder="Golang Struct 语句" :rows="32" :value="structContent"></el-input> </el-col>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'Sql2Go',
    data() {
      return {
        msg: 'sql convert to golang struct',
        useGorm: true,
        useJson: true,
        useForm: true,
        sqlContent: '',
      }
    },
    watch: {
    },
    computed: {
      structContent() {
        return this.sql2go(this.sqlContent, this.useGorm, this.useJson, this.useForm)
      }
    },
    methods: {
      sql2go: function (val, useGorm, useJson, useForm) {
        let typeMaps = {
          'tinyint': 'int64', 'smallint': 'int64', 'int': 'int64', 'mediumint': 'int64', 'bigint': 'int64',
          'float': 'float64', 'double': 'float64', 'decimal': 'float64', 'char': 'string',
          'varchar': 'string', 'text': 'string', 'mediumtext': 'string', 'longtext': 'string',
          'time': 'time.Time', 'date': 'time.Time', 'datetime': 'time.Time', 'timestramp': 'int64',
          'enum': 'string', 'set': 'string', 'blob': 'string'
        }

        function titleCase(str) {
          const array = str.toLowerCase().split("_");
          for (let i = 0; i < array.length; i++) {
            array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
          }
          return array.join("");
        }

        function toProperCase(str) {
          // https://github.com/golang/lint/blob/5614ed5bae6fb75893070bdc0996a68765fdd275/lint.go#L771-L810
          const commonInitialisms = [
            "ACL", "API", "ASCII", "CPU", "CSS", "DNS", "EOF", "GUID", "HTML", "HTTP",
            "HTTPS", "ID", "IP", "JSON", "LHS", "QPS", "RAM", "RHS", "RPC", "SLA",
            "SMTP", "SQL", "SSH", "TCP", "TLS", "TTL", "UDP", "UI", "UID", "UUID",
            "URI", "URL", "UTF8", "VM", "XML", "XMPP", "XSRF", "XSS"
          ];

          return str.replace(/(^|[^a-zA-Z])([a-z]+)/g, function (unused, sep, frag) {
            if (commonInitialisms.indexOf(frag.toUpperCase()) >= 0)
              return sep + frag.toUpperCase();
            else
              return sep + frag[0].toUpperCase() + frag.substr(1).toLowerCase();
          }).replace(/([A-Z])([a-z]+)/g, function (unused, sep, frag) {
            if (commonInitialisms.indexOf(sep + frag.toUpperCase()) >= 0)
              return (sep + frag).toUpperCase();
            else
              return sep + frag;
          });
        }

        if (val.trim() === "") {
          return ''
        }

        let res = /CREATE\sTABLE\s`([\w_]+)\`\s\(/igm.exec(val)

        if (!res) {
          return 'invalid sql'
        }
        let structName = titleCase(res[1].trim()), fields = val.substring(res[0].length).trim(), structArr

        let structResult = 'type ' + structName + " struct {";
        for (; ;) {
          res = /^\`([\w_]+)\`\s+(tinyint|smallint|int|mediumint|bigint|float|double|decimal|varchar|char|text|mediumtext|longtext|datetime|time|date|enum|set|blob)?.*[^`]+/.exec(fields)
          if (!res) {
            break
          }
          let fieldName = titleCase(res[1]);
          const fieldType = typeMaps[res[2]];
          let fieldJsonName = res[1].toLowerCase();
          fieldName = toProperCase(fieldName)

          structResult += '\n\t' + fieldName + ' ' + fieldType + ' '
          structArr = []
          if (useGorm) {
            structArr.push('gorm:"column:' + fieldJsonName + '"')
          }
          if (useJson) {
            structArr.push('json:"' + fieldJsonName + '"')
          }
          if (useForm) {
            structArr.push('form:"' + fieldJsonName + '"')
          }


          if (structArr.length > 0) {
            structResult += '`' + structArr.join(' ') + '`'
          }

          fields = fields.substring(res[0].length)

          res = /COMMENT\s+['"](.*)['"]/ig.exec(res[0])

          if (res) {
            structResult += "  // " + res[1]
          }
        }
        structResult += '\n}'
        return structResult;
      },
    }
  }
</script>
