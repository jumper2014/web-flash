import { setUserStatus } from '@/api/tool/portalbase'
import permission from '@/directive/permission/index.js'

export default {
  directives: { permission },
  name: 'portalbase',
  data() {
    return {
      userInfo: {
        userName: 'user027',
        status: undefined
        },
    }
  },
  methods: {
    lockUser() {
      this.userInfo.status = '03';
      setUserStatus(this.userInfo).then(response => {
         this.$message({
           message: '锁定成功',
           type: 'success'
         })
      }).catch(function (err) {
      console.log(err)
      })
    },
    unlockUser() {
      this.userInfo.status = '01';
        setUserStatus(this.userInfo).then(response => {
          this.$message({
            message: '解锁成功',
            type: 'success'
          })
        }).catch(function (err) {
        console.log(err);
        })
    }
  }
}
