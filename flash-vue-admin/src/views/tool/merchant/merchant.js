import { createMerchantFile, createATMFile, createPOSFile,  clearBatchTable, clearMerchantTable } from '@/api/tool/merchant'
import permission from '@/directive/permission/index.js'

export default {
  directives: { permission },
  name: 'merchent',
  data() {
    return {
      fileInfo: {
        total: 100,
        },
    }
  },
  methods: {
    createMerchantFile() {
      createMerchantFile(this.fileInfo).then(response => {
        this.$message({
          message: 'Merchant批量文件生成完成',
          type: 'success'
        })
      }).catch(function (err) {
          console.log(err);
      })
    },

    createATMFile() {
      createATMFile(this.fileInfo).then(response => {
        this.$message({
          message: 'ATM批量文件生成完成',
          type: 'success'
        })
      }).catch(function (err) {
          console.log(err);
      })
    },

    createPOSFile() {
      createPOSFile(this.fileInfo).then(response => {
        this.$message({
          message: 'POS批量文件生成完成',
          type: 'success'
        })
      }).catch(function (err) {
          console.log(err);
      })
    },

    clearBatch() {
      clearBatchTable().then(response => {
        this.$message({
          message: '商户Batch表清理完成',
          type: 'success'
        })
      }).catch(function (err) {
          console.log(err);
      })
    },

    clearMerchant() {
      clearMerchantTable().then(response => {
        this.$message({
          message: '商户Merchant表清理完成',
          type: 'success'
        })
      }).catch(function (err) {
        console.log(err);
      })
    },
  }
}
