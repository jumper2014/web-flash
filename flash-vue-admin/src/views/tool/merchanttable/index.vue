<template>
<div class="app-container">
    <div id="merchant">
        <p>merchantId:</p>
        <input type="text" id="merchantId" />
        <button id="calculateMerchant" @click.native="calculateMerchant" >confirm</button>
    </div>

    <div id="pos">
        <p>termId:</p>
        <input type="text" id="termId" onkeyup="calculatePos()"/>
        <button id="calculatePos" onclick="calculatePos()">confirm</button>
    </div>

    <div id="res">
        <p>Table Name</p>
        <p id="result"></p>
    </div>
</div>
</template>

<script src="./merchanttable.js"></script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @import "src/styles/common.scss";
</style>
