  module.exports = function(h, right) {
    return function(column) {

      if (!this.sortable(column)) return '';
      return <font-awesome-icon class="VueTables__sort-icon" icon={this.sortableChevronClass(column)} />

    }
  }
