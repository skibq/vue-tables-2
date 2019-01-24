var debounce = require('debounce');

module.exports = function(h) {

    return (classes, id) => {

        var search = this.source=='client'?
                    this.search.bind(this, this.data):
                    this.serverSearch.bind(this);

        return <div class="el-input el-input--small el-input--prefix el-input--suffix form-control">
            <input class={`${classes.input} ${classes.small}`}
            autocomplete="off"
            type="text"
            value={this.query}
            placeholder={this.display('filterPlaceholder')}
            on-keyup={this.opts.debounce?debounce(search, this.opts.debounce):search}
            id={id}
            />
            <span class="el-input__prefix"><i class="el-input__icon el-icon-search" /></span>
        </div>
    }

}
