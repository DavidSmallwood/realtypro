// theme javascript
var expenseFields = ['#edit-field-fmls-0-value',
                     '#edit-field-e-and-o-insurance-0-value',
                     '#edit-field-transaction-fee-0-value',
                     '#edit-field-accounts-receivable-0-value',
                     '#edit-field-comp-commission-0-value',
                     '#edit-field-other-amount-0-value'],
  allFields = expenseFields.join(', ');


function subTotalFees() {
  var count = expenseFields.length,
  talley = 0, value = 0;
  for (var i=0; i < count; i++) {
    value = parseFloat( jQuery(expenseFields[i]).val() );
    if (!isNaN(value)){
      talley += value;
    }
  }
  return talley;
}

function calcDueAgent () {
  
    jQuery('#total-fee-calc').html(subTotalFees());
    jQuery('#edit-field-due-agent-0-value').val(parseFloat(jQuery('#edit-field-commission-0-value').val()) - parseFloat(jQuery('#total-fee-calc').html()));
  
  }


jQuery(document).ready(function() {

  jQuery('#edit-field-mdrt-credit-0-value').parent().addClass('calc-container')
              .prepend('<div class="calc-field" id="mdrt-calc">--</div>');
  jQuery('#edit-field-sale-price-0-value').change(function(){
    var newValue = jQuery(this).val();
    jQuery('#mdrt-calc').html(parseFloat(parseFloat(newValue) / 2 ).toLocaleString());
  });
  
  jQuery('#edit-field-due-agent-wrapper').addClass('calc-container')
    .prepend('<div class="form-item"><label>Total Fees</label><div class="calc-field" id="total-fee-calc">--</div>')
    .find('#edit-field-due-agent-0-value').attr('readonly','readonly').addClass('calc-field');
  
  //watch for change on  expense fields
  jQuery(allFields).change(calcDueAgent);

  var $agents = jQuery('.agent-accordion');
  $agents.each(function() {
    jQuery(this).find('h2').click(function () {
      var $parent = jQuery(this).parent();
      if ($parent.hasClass('open')) {
        $parent.removeClass('open').find('.node__content').slideUp();
      } else {
        $agents.filter('.open').removeClass('open').find('.node__content').slideUp();
        $parent.addClass('open').find('.node__content').slideDown();
      }
    });
  });
  
  calcDueAgent();


});
