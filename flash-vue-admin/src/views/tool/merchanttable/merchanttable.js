import permission from '@/directive/permission/index.js'

export default {
  directives: { permission },
  name: 'merchenttable',
  
  methods: {
    calculateMerchant() {
      var merchantId = document.getElementById('merchantId').value;
      document.getElementById('result').innerHTML = "csmm_mchnt_" + (Math.abs(strHashCode(merchantId)%40) + 1);
  },
    calculatePos() {
      var termId = document.getElementById('termId').value;
      document.getElementById('result').innerHTML = "csmm_pos_" + (Math.abs(strHashCode(termId)%6 + 1));
  },
   strHashCode(str){
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
          var character = str.charCodeAt(i);
          hash = ((hash<<5)-hash)+character;
          hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    }
  }
}
