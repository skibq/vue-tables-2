module.exports = function(h) {

    return (right) => {
        var sortControl = require('./sort-control')(h, right);

         var headings = [];

         if (this.hasChildRow && this.opts.childRowTogglerFirst) headings.push(<th></th>);

         this.allColumns.map(function(column) {
          headings.push(<th on-click={this.orderByColumn.bind(this,column)}
            class={this.sortableClass(column)}>
            <div class="VueTables__heading cell" title={this.getHeadingTooltip(column, h)}>{this.getHeading(column, h)}</div>
            {sortControl.call(this, column)}
            </th>)
        }.bind(this))

         if (this.hasChildRow && !this.opts.childRowTogglerFirst) headings.push(<th></th>);

         return headings;
        }
    }
