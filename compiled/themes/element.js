'use strict';

module.exports = function () {
    return {
        framework: 'element',
        table: 'el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition',
        row: 'row',
        column: 'col-md-12',
        label: 'input-label',
        input: 'el-input__inner',
        select: 'form-control',
        field: 'form-group',
        inline: 'form-inline',
        right: 'float-right',
        left: 'float-left',
        center: 'text-center',
        contentCenter: 'justify-content-center',
        nomargin: 'm-0',
        groupTr: 'table-info',
        small: '',
        button: 'btn btn-secondary',
        dropdown: {
            container: 'dropdown',
            trigger: 'dropdown-toggle',
            menu: 'dropdown-menu',
            content: '',
            item: 'dropdown-item',
            caret: 'caret'
        },
        pagination: {
            nav: 'el-pagination is-background',
            count: 'VuePagination--test-count',
            wrapper: 'VuePagination--test-wrapper',
            list: 'el-pager',
            item: 'number',
            link: 'VuePagination--test-link',
            next: 'VuePagination--test-next',
            prev: 'VuePagination--test-prev',
            active: 'active VuePagination--test-active',
            disabled: 'disabled VuePagination--test-disabled'
        }
    };
};