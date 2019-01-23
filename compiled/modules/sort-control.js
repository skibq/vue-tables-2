"use strict";

module.exports = function (h, right) {
  return function (column) {

    if (!this.sortable(column)) return '';
    return h("font-awesome-icon", { "class": "VueTables__sort-icon", attrs: { icon: this.sortableChevronClass(column) }
    });
  };
};