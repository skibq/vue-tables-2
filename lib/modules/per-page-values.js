module.exports = function(h) {
  var perpageValues = [];

  this.opts.perPageValues.every(value => {
    var isLastEntry = value >= this.count;
    var selected = this.limit==value || (isLastEntry && this.limit>value);
    perpageValues.push(<el-option value={value} key={value} selected={selected}>{value}</el-option>)
    return !isLastEntry;
  });

  return perpageValues;

}
