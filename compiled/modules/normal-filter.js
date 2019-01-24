'use strict';

var debounce = require('debounce');

module.exports = function (h) {
    var _this = this;

    return function (classes, id) {

        var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

        return h(
            'div',
            { 'class': 'el-input el-input--small el-input--prefix el-input--suffix form-control' },
            [h('input', { 'class': classes.input + ' ' + classes.small,
                attrs: { autocomplete: 'off',
                    type: 'text',

                    placeholder: _this.display('filterPlaceholder'),

                    id: id
                },
                domProps: {
                    'value': _this.query
                },
                on: {
                    'keyup': _this.opts.debounce ? debounce(search, _this.opts.debounce) : search
                }
            }), h(
                'span',
                { 'class': 'el-input__prefix' },
                [h('i', { 'class': 'el-input__icon el-icon-search' })]
            )]
        );
    };
};