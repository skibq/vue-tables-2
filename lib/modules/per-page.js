module.exports = function(h) {

  return (perpageValues, cls, id) => {
    cls = cls + ' VueTables__select-per-page'
    return perpageValues.length > 1 ? <el-select class={cls}
    value={this.limit}
    size="mini"
    on-change={this.setLimit.bind(this)}
    >
    {perpageValues}
    </el-select>:'';
  }

}
