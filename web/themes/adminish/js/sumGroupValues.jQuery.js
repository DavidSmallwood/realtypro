
jQuery.fn.sumGroupValues = function (options) {
  // properties
  var groupSums = [],
  settings = jQuery.extend({
    rowClass: ".views-row",
    cellClass: ".field--type-decimal"
    }, options );
  $this = jQuery(this),
  groups = $this.length,
  $rows = {},
  rowCount = 0,
  currentFields = {},
  colClount = 0,
  sumCells = [],
  groupDivs = [];
  
  // methods  
  
  // init
  
  if (groups) {
    for (var g=0; g < groups; g++) {
     $rows = $this.eq(g).find(settings.rowClass);
     rowCount = $rows.length;
      // check for any rows
      if (rowCount) {
        // zero out groupSums
        colCount = $rows.eq(0).find(settings.cellClass).length;
        for (var i=0; i<colCount; i++) {
          groupSums[i] = 0;
        }
        // with rows find div
        $rows.each (function () {
          var $thisRow = jQuery(this);
          // find divs
          $currentFields = $thisRow.find(settings.cellClass);
          // with results add to values
          for (i=0; i < $currentFields.length; i++) {
            groupSums[i] += parseFloat ( $currentFields.eq(i).html() );
          }
        });
        groupDivs = [];
        for (i=0; i < groupSums.length; i++) {
          groupDivs.push('<div class="column-sum">' + groupSums[i] + '</div>');
        }
        $this.eq(g).append(jQuery('<div>').addClass('group-totals').html(groupDivs.join('')))
      }
      //finish with rows
    }
  }
  
  // maintain the chain
  return this;
}
