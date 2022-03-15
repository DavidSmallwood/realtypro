
jQuery(document).ready(function(){
  var startYearString = '#edit-custom-start-year-field',
      startMonthString = '#edit-custom-start-month-field',
      endYearString = '#edit-custom-end-year-field',
      endMonthString = '#edit-custom-end-month-field';
  //alert('hi');
  jQuery('#views-exposed-form-listings-new-page-1')
    .addClass('processed')
    .each(function(){
    // attach handlers to select list
    var $this = jQuery(this),
        Dates = {},
//          'start' : $this.find('#edit-field-sale-date-value'),
//          'end'   : $this.find('#edit-field-sale-date-value-1')
//        },
        $agent = $this.find('#edit-field-selling-agent-target-id');
        
/*
    $this.find(startMonthString)
      .bind('change', function(){
      var date = new Date(parseInt(parseInt($this.find(startYearString).val())), parseInt(jQuery(this).val()), 1);
      // just build new string for now
      // TODO modify existing month with regex
      //Dates.start.val(date.toISOString());
      Dates.start.val(moment(date).format('MM/DD/YYYY'));          
    });
    $this.find(startYearString)
      .bind('change', function(){
      var month = parseInt($this.find(startMonthString).val()),
      date = new Date(parseInt(jQuery(this).val()), month, 1);
      // just build new string for now
      // TODO modify existing month with regex
      //Dates.start.val(date.toISOString());
      var temp = moment(date).format('MM/DD/YYYY');
      console.log('startYearString change val=' + temp);
      Dates.start.val(moment(date).format('MM/DD/YYYY'));          
    });
    $this.find(endMonthString)
      .bind('change', function(){
      var date = new Date(parseInt(parseInt($this.find(endYearString).val())), parseInt(jQuery(this).val()) + 1, 0);
      //temp = date.toLocaleString();
      //Dates.end.val(date.toISOString());      
      Dates.end.val(moment(date).format('MM/DD/YYYY'));
    });
    $this.find(endYearString)
      .bind('change', function(){
      var month = parseInt($this.find(endMonthString).val()),
          date = new Date(parseInt(jQuery(this).val()), month + 1, 0);
      //temp = date.toLocaleString();
      //Dates.end.val(date.toISOString());
      var temp = moment(date).format('MM/DD/YYYY');
      console.log('endYearString change val=' + temp);
      Dates.end.val(moment(date).format('MM/DD/YYYY'));
    });
    $this.find('#edit-select-agent')
      .val($agent.val())
      .bind('change', function() {
      var agent = jQuery(this).val();
      $agent.val(agent);
    });
        // update select elements
    if ("" === Dates.start.val()) {
      // build jan 1 date
      //set both to first of the year
      $this.find(startYearString).val(moment().format('YYYY'));
      $this.find(startMonthString).val(0).change();
    }
    if ("" === Dates.end.val()) {
      //set both to this month
      $this.find(endYearString).val(moment().format('YYYY'));
      $this.find(endMonthString).val( parseInt(moment().format('M')) - 1).change();
    }
*/
  });
  //jQuery('.views-exposed-form.processed div.form-item-field-selling-agent-target-id input').prop('disabled', true);
});
