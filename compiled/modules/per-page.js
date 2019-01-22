'use strict';

module.exports = function (h) {
  var _this = this;

  return function (perpageValues, cls, id) {
    cls = cls + ' VueTables__select-per-page';
    return perpageValues.length > 1 ? h(
      'el-select',
      { 'class': cls,
        attrs: { value: _this.limit,
          size: 'mini'
        },
        on: {
          'change': _this.setLimit.bind(_this)
        }
      },
      [perpageValues]
    ) : '';
  };
};