jQuery(document).ready(function($) {
var sensesActive = 0;
var sensesActiveMath =0;
var cc_currentPage = 1;
var initEstimate = 0;
var totalEstimate = 0;
var totalInjuries = 0;
var severityMultiplier = 1;
var faultMultiplier=1;
var additionalCosts=0;

//If at least one injury is selected display the next step
function checkChecked(formname) {
    var anyBoxesChecked = false;
    var lblHovered = '';
    $('#' + formname + ' input[type="checkbox"]').each(function() {
        lblHovered = '#'+ $(this).attr('id') +'_li';
        if ($(this).is(":checked")) {
            	anyBoxesChecked = true;
            	$(lblHovered).addClass("cc_selected");
       		 }
       		 else if ($(this).not(":checked")) {
       		 	$(lblHovered).removeClass("cc_selected");
       		 }
    	});
 
    	if (anyBoxesChecked == false) {
     		$("#estimation_cost_container").add('.cc_next').addClass("inactive");
    	}
   		 else if (anyBoxesChecked == true){
    		$("#estimation_cost_container").add('.cc_next').removeClass("inactive");
    	} 
	}
$('input[type="checkbox"]').click(function(){
		checkChecked('comp_calc_form');
		// START Calculate the amount based on injuries
		var newID = '#' + event.target.id;
		var obtainedAmount = parseInt($(newID).attr('amount'));
		if ($(newID).is(':checked')){
			initEstimate = initEstimate + obtainedAmount;
		}
		else
		{
			initEstimate = initEstimate - obtainedAmount;
		}
		$('#estimation_cost').html('$'+initEstimate);
		//END Calculation of amount based on injuries
});

checkChecked('comp_calc_form');

$('#cc_injury_total_next').click(function(){
	var updatedEstimateTotal = $('#estimation_cost')
	$('#cc_grand_total_estimate').val
});

//Severity Multiplier
$("#overallSeverityRange").on("input change", function(){
	var cc_multiplier = parseFloat($("#overallSeverityRange").attr("value"));
	var temp_value = parseFloat(cc_multiplier * initEstimate);
	$('#estimation_cost').html('$'+temp_value);
});
$("#fault").on("input change",function(){
	var cc_percentage = 1-(parseFloat($(this).attr("value"))/100);
	var temp_value = parseFloat(cc_percentage * initEstimate);
	$('#estimation_cost').html('$'+temp_value);
});
//Fault Multiplier


//Additional Losses
/*$('input[type="number"]').on("input change", function(){
	var cc_adder= parseFloat($(this).attr("value"));
	var temp_value2 = parseFloat(cc_adder + initEstimate);
	$('#estimation_cost').html('$'+temp_value2);
});*/

//Start Screen
$("#start").click(function(event) { 
		$(".splash_screen").addClass("inactive");
		$("#gender").removeClass("inactive");
});

//Gender
$("#btn_male").add("#btn_female").add("#btn_not_specified").click(function(event) { 
		$("#gender").addClass("inactive");
		$("#known_costs").removeClass("inactive");
});

//Known Costs
$("#known_costs_yes").click(function(event){
	$(".cc_known_cost_selection").addClass('inactive');
	$("#cc_known_medical_expenses").removeClass('inactive');
	$("#known_costs_legend").html("<h2>Ingrese sus gastos médicos</h2>");
});	

$("#known_costs_no").click(function(event){
	navigateNext();
});
//Parent Category	
$('.cc_container').click(function(event){
	var ccSelectedQuestionID = '#'+ event.target.id;
	var ccSelectedPartID = ccSelectedQuestionID.slice(0,-7);
	$(".cc_container").children('div').children('input:button').not(ccSelectedQuestionID).fadeTo("fast",0.33);
	$(ccSelectedQuestionID).fadeTo("fast",1);
	$(ccSelectedPartID).removeClass("inactive");
	$("#question_container").children("ul").not(ccSelectedPartID).addClass("inactive");
});

//Sub Category
$('.chk-container').click(function(event){
	var ccSelectedInjuryTypeID = "#" + event.target.id; //ID of Element which triggered click event
	var ccSelectedInjuryID = ccSelectedInjuryTypeID.slice(0,-7) + "_injury"; //ID of parent 
	var ccSelectedQuestionID = "#" + $(ccSelectedInjuryTypeID).parent().parent().attr('id');
	$(ccSelectedInjuryID).children("li").removeClass("inactive");
	
	$(ccSelectedQuestionID).children("fieldset").not(ccSelectedInjuryID).children("legend").fadeTo("fast",0.33);
	$(ccSelectedQuestionID).children("fieldset").not(ccSelectedInjuryID).children("li").addClass("inactive");
	$(ccSelectedInjuryTypeID).fadeTo("fast",1);
});

//Next and Back Buttons
function navigateNext(){
var cc_currentPageID = '.cc_page-'+cc_currentPage;
	var cc_newPage = cc_currentPage + 1;
	var cc_newPageID= '.cc_page-' +cc_newPage;
	var cc_estimationCost = $("#estimation_cost").html().slice(1);
	$(cc_currentPageID).addClass('inactive');
	$(cc_newPageID).removeClass('inactive');
	initEstimate=parseFloat(cc_estimationCost);
	cc_currentPage++;
}
$('.cc_next').click(function(){
	navigateNext();
});
function navigateBack(){
var cc_currentPageID = '.cc_page-'+cc_currentPage;
	var cc_newPage = cc_currentPage - 1;
	var cc_newPageID= '.cc_page-' +cc_newPage;
	$(cc_currentPageID).addClass('inactive');
	$(cc_newPageID).removeClass('inactive');
	cc_currentPage--;
}
$('.cc_back').click(function(){
	navigateBack();
});

//$('#estimation_cost_container').sticky({topSpacing:20,center:true});	
	
	
	
	
	
	
	/*$("#lgSenses").click(function(event) { 
		sensesActiveMath= sensesActive % 2;
		if (sensesActiveMath==0){
		$("#senses_container_sub").removeClass("inactive");
		}
		else {$("#senses_container_sub").addClass("inactive");}
		sensesActive++;
	});
	$("#lgBrainSkull").click(function(event){
		$("#cc_brain_skull_sub").removeClass("inactive");
	});
	
	
	
	
	$("#head_injury").click(function() {
		$("#head_injury").fadeTo("fast",1);
		$("#upper_body_injury").add("#arm_injury").add("#lower_body_injury").add("#foot_injury").fadeTo("fast", 0.33);
		$("#head").removeClass("inactive");
		$("#upper_body").add("#lower_body").add("#foot").add("#arm").addClass("inactive");
	});
	$("#upper_body_injury").click(function() {
		$("#upper_body_injury").fadeTo("fast",1);
		$("#head_injury").add("#arm_injury").add("#lower_body_injury").add("#foot_injury").fadeTo("fast", 0.33);
		$("#upper_body").removeClass("inactive");
		$("#head").add("#lower_body").add("#foot").add("#arm").addClass("inactive");
	});
	$("#lower_body_injury").click(function() {
		$("#lower_body_injury").fadeTo("fast",1);
		$("#head_injury").add("#arm_injury").add("#upper_body_injury").add("#foot_injury").fadeTo("fast", 0.33);
		$("#lower_body").removeClass("inactive");
		$("#upper_body").add("#head").add("#foot").add("#arm").addClass("inactive");
	});
	$("#arm_injury").click(function() {
		$("#arm_injury").fadeTo("fast",1);
		$("#head_injury").add("#lower_body_injury").add("#upper_body_injury").add("#foot_injury").fadeTo("fast", 0.33);
		$("#arm").removeClass("inactive");
		$("#upper_body").add("#head").add("#foot").add("#lower_body").addClass("inactive");
	});
	$("#foot_injury").click(function() {
		$("#foot_injury").fadeTo("fast",1);
		$("#head_injury").add("#lower_body_injury").add("#upper_body_injury").add("#arm_injury").fadeTo("fast", 0.33);
		$("#foot").removeClass("inactive");
		$("#upper_body").add("#head").add("#arm").add("#lower_body").addClass("inactive");
	});
	
	$("#btn_severity").click(function(event){
		$("#question_bottom").removeClass("inactive");
		$("#injuries").add("#injuries_next_step").addClass("inactive");
	});
	$("#btn_loss_of_earnings").click(function(event) { 
		$("#losses").removeClass("inactive");
		$("#question_bottom").hide();
	});
	
	$("#btn_degree_of_fault").click(function(event) { 
		$("#losses").addClass("inactive");
		$("#degree_of_fault").removeClass("inactive");
	});
	*/
	
	$("#btn_grand_total").click(function(event) { 
		$("#degree_of_fault").add("#lblEstimationCost").addClass("inactive");
		$("#grand_total").removeClass("inactive");
		$("#estimation_cost_container").addClass("grand_total_estimate");
	});
	
	$("#btnStartClaim").click(function(event) { 
		$("#grand_total").addClass("inactive");
		$("#contact_information").removeClass("inactive");
	});
});

