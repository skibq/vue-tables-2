import merge from 'merge';

module.exports = function(h, modules, classes, slots) {

  var filterId = 'VueTables__search_' + this.id;
  var ddpId = 'VueTables__dropdown-pagination_' + this.id;
  var perpageId = 'VueTables__limit_' + this.id;
  var perpageValues = require('../modules/per-page-values').call(this,h);

  var genericFilter = this.hasGenericFilter ?
  <el-col class="VueTables__search-field">
  <label for={filterId} class={classes.label}>{this.display('filter')}</label>
  {modules.normalFilter(classes, filterId)}
  </el-col> : '';

  var perpage =  perpageValues.length>1?<div class="VueTables__limit-field input-group">
  <label class={classes.label} for={perpageId}>{this.display('limit')}</label>
  {modules.perPage(perpageValues, classes.select, perpageId)}
  </div>:'';

  var dropdownPagination = this.opts.pagination && this.opts.pagination.dropdown?
  <div class="VueTables__pagination-wrapper">
  <div class={`${classes.field} ${classes.inline} ${classes.right} VueTables__dropdown-pagination`}
  v-show={this.totalPages>1}
  >
  <label for={ddpId}>{this.display('page')}</label>
  {modules.dropdownPagination(classes.select, ddpId)}
  </div>
  </div>:'';

  var columnsDropdown = this.opts.columnsDropdown?
  <div class="VueTables__columns-dropdown-wrapper">
  {modules.columnsDropdown(classes)}
  </div>:'';

  var footerHeadings = this.opts.footerHeadings?
  <tfoot><tr>{modules.headings(classes.right)}</tr></tfoot>:'';

  var shouldShowTop = perpage ||
    genericFilter ||
    dropdownPagination ||
    columnsDropdown ||
    slots.beforeFilter ||
    slots.afterFilter ||
    slots.beforeLimit ||
    slots.afterLimit;

  var tableTop = <div class={classes.row} v-show={shouldShowTop}>
    <el-row gutter={20} type="flex" justify="space-between" class={classes.column}>
    <el-col xs={24} sm={8} md={8} lg={4} xl={4}
            className={`${classes.field} ${classes.inline} ${classes.right} VueTables__limit`}>
      {slots.beforeLimit}
      {perpage}
      {slots.afterLimit}
    </el-col>
    <el-col xs={24} sm={18} md={16} lg={14} xl={12} class={`VueTables__search`}>
    {slots.beforeFilter}
    {genericFilter}
    {slots.afterFilter}
    </el-col>
    {dropdownPagination}
    {columnsDropdown}
    </el-row>
    </div>;

    return <div class={"VueTables VueTables--" + this.source}>
    {tableTop}
    {slots.beforeTable}
    <div class="table-responsive">
    <table class={`VueTables__table ${this.opts.skin?this.opts.skin:classes.table}`}>
    <thead>
    <tr>
    {modules.headings(classes.right)}
    </tr>
    {slots.beforeFilters}
    {modules.columnFilters(classes)}
    {slots.afterFilters}
    </thead>
    {footerHeadings}
    {slots.beforeBody}
    <tbody>
    {slots.prependBody}
    {modules.rows(classes)}
    {slots.appendBody}
    </tbody>
    {slots.afterBody}
    </table>
    </div>
    {slots.afterTable}
    {modules.pagination(merge(classes.pagination, {
      wrapper:`${classes.row} ${classes.column} ${classes.contentCenter}`,
      nav:`${classes.pagination.nav}`,
      count:`${classes.center} ${classes.column}`
    }))}
    {modules.dropdownPaginationCount()}

    </div>
  }

