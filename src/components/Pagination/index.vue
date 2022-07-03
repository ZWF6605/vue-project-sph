<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>···</button>
    <button>{{ totalPage }}</button>
    <button>下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    //总共多少页
    totalPage() {
      //向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    //连续的页码的起始的数字和结束的数字[连续页码的数字：至少是5]
    startNumAndEndNum() {
      //先定义两个变量存储起始数字与结束数字
      let start = 0,
        end = 0;
      //连续页码数字5【至少五页】，如果出现不正常现象【不够5页】
      //不正常现象【总页数没有连续页码多】
      if (this.continues > this.totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        //正常现象【连续页码5，但是你的总页数一定是大于5】
        //起始数据
        start = this.pageNo - parseInt(this.continues / 2);
        //结束数字
        end = this.pageNo + parseInt(this.continues / 2);
        //把出现不正常的现象【start数字出现0|负数】纠正
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        //把出现不正常的现象【end数字大于总页码】纠正
        if (end > this.totalPage) {
            end = this.totalPage
            start = this.totalPage - this.continues +1
        }
      }
      return {start,end}
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
