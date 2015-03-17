<?php
/**
 * Plugin Name: Comp Calculator
 * Plugin URI: http://panteradigital.com
 * Description: Find out how much your compensation claim is worth
 * Version: 2.0.0
 * Author URI: http://panteradigital.com
 * License:GPL2
 */
 
function cc_aj_enqueue(){
wp_enqueue_script('ajs','http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js');
wp_enqueue_script('ajs_app', plugins_url('/js/app2.js',__FILE__));
//wp_enqueue_script('cc_sticky',plugins_url('/js/jquery.sticky.js',__FILE__));
}
add_action('wp_enqueue_scripts','cc_aj_enqueue');
function cc_func_comp_calc(){
$splash_screen=<<<HTML
<form id="comp_calc_form" data-ng-app="scopeCC" data-ng-controller="MainController">
<script>
	function outputUpdate(severity) {
		document.querySelector('#severity').value = severity;
	}
	function outputUpdateFault(fault_level){
		document.querySelector('#fault_level').value= fault_level;
	}
	function cc_update_EstimatedCost(amount){
		
	}
</script>
<div class="splash_screen">
	<h2>Calcule el monto de su compensación</h2>
	<h3>Descubra el costo de su accidente, desde los gastos médicos hasta los legales</h3>
	<br/>
	<input type="button" class="question" value="COMENZAR" id="start">
</div>

<fieldset id="gender" class="inactive cc_page-0">
	<legend><h2>Sexo</h2></legend>
	<br/>
	<div data-ng-repeat="gender in genders" class="col_third" id={{gender.id}}>
  <input type="button" id="btn_{{gender.id}}" class="question" value={{gender.gen}}>
  </div>
</fieldset>
<fieldset id="known_costs"  class="inactive cc_page-1">
	<legend id="known_costs_legend"><h2>¿Sabe sus costos médicos?</h2></legend>
	<ul>
		<li class="cc_known_cost_selection" data-ng-repeat="kc in knownCosts"><input class="cc_known_cost_selection_button" type="button" name="{{kc.name}}[]" id="{{kc.id}}" value="{{kc.value}}" ></li>
	</ul>
	<input type="number" class="inactive" id="cc_known_medical_expenses" name="cc_known_medical_expenses" value="" pattern="^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$">
	<div class="cc_nav">
			<input type="button" id="cc_known_costs_back" class="cc_back" value="VOLVER"/>
			<input type="button" id="cc_known_costs_next" class="cc_next inactive" value="SIGUIENTE" />
	</div>
</fieldset>

<div id="injuries" class="inactive cc_page-2">
	<h2>¿Qué parte(s) del cuerpo sufrió lesiones?</h2>
	<br/>
	<div class="clear"></div>
	<div class="cc_container">
		<div class="col_fifth" data-ng-repeat="type in injuries">
			<input type="button" class="cc_question" value={{type.name}} id={{type.id}}_header>
		</div>
	</div>
	<div class="clear"></div>
	<div id="question_container">
	<br/>
		<ul data-ng-repeat="injuryType in injuries" id="{{injuryType.id}}" class="inactive">
			<fieldset data-ng-repeat="type in injuryType.injury" id="{{type.id}}_injury" class="chk-container col_fifth" id="{{type.id}}_container">
			<legend id="{{type.id}}_legend">{{type.name}}</legend>
			<li data-ng-repeat="injury in type.subInjury" class="cc_injury inactive" id="chk_{{injury.id}}_li">
				<span><input type="checkbox" name="{{injury.id}}[]" value="{{injury.name}}" amount="{{injury.value}}" id="chk_{{injury.id}}" ng-model="valInjury"><label for="chk_{{injury.id}}" >{{injury.name}}</label></span>
				<div class="clear"></div>
			</li>
			</fieldset>
		</ul>		
	</div>
	<div class="clear"></div>
	<div class="cc_nav">
			<input type="button" id="cc_injury_total_back" class="cc_back" value="VOLVER"/>
			<input type="button" id="cc_injury_total_next" class="cc_next inactive" value="SIGUIENTE" />
	</div>
</div>


<fieldset class="severity inactive cc_page-3" id="overallSeverity">
	<legend>Gravedad</legend><br/>
	<label style="text-align:left;" class="third">Not Bad</label>
	<label class="third" style="text-align:center;">Somewhat Severe</label>
	<label style="text-align:right;" class="third">Extremely Severe</label>
	<br/>
	<input type="range" name="overallSeverity" id="overallSeverityRange" value="1" min="1" max="5" step="0.5" onchange="outputUpdate(value)"><br/>
	<output for=overallSeverityRange id=severity>1</output>
	<div class="cc_nav">
			<input type="button" id="back_1" class="cc_back" value="VOLVER"/>
			<input type="button" id="next_3" class="cc_next" value="SIGUIENTE" />
	</div>
</fieldset>


<fieldset id="losses" class="inactive cc_page-4">
	<legend>&nbsp;</legend>
	<div data-ng-repeat="amount in losses" id={{amount.id}}>
		<div class="stacked" data-ng-repeat="subtype in amount.section">
			<input type="number" id="{{subtype.id}}" name="{{subtype.id}}" ng-model="subtype.value" pattern="{{subtype.pattern}}">
			<label for="{{subtype.id}}">{{subtype.name}}</label>
		</div>
	</div>
	<div class="cc_nav">
			<input type="button" id="back_2" class="cc_back" value="VOLVER"/>
			<input type="button" id="next_4" class="cc_next" value="SIGUIENTE" />
	</div>
</fieldset>

<fieldset id="degree_of_fault" class="inactive cc_page-5">
	<lenged><h2>Select your Degree of Fault</h2></legend>
	<label class="third" style="text-align:left;">Not my fault</label><label class="third" style="text-align:center">50% my fault</label><label class="third" style="text-align:right;">100% my fault</label>
	<input class="clear" type="range" name="fault" id="fault" value="0" min="0" max="100" onchange="outputUpdateFault(value)">
	<div id="fault_level_output"><output for=fault id=fault_level>0</output>
	</div>
	<div class="cc_nav">
			<input type="button" class="cc_back" value="VOLVER"/>
			<input type="button" class="cc_next" value="SIGUIENTE" />
	</div>
</fieldset>
<div id="grand_total" class="inactive cc_page-6">
	<h2>Your Grand Total is</h2><br/>
	<label id="grand_total_amount">0</label><br/>
	<input type="button" id="btnStartClaim" value="Start your claim" />
	<div class="cc_nav">
			<input type="button" class="cc_back" value="VOLVER"/>
	</div>
</div>
<div id="estimation_cost_container" class="inactive clear">
<div id="sub_estimation_cost_container">
	<label id="lblEstimationCost">Estimado:</label>
	<textarea readonly style="text-align:center;font-size:1.3em;background-color:transparent !important;" id="estimation_cost" value="0"></textarea>	
	<input type="number" id="cc_grand_total_estimate" value="" style="display:none;"/>
</div></div>
<fieldset id="contact_information" class="inactive cc_page-7">
	<legend><h2>Fill out this form for your free consultation</h2></legend>
	<p class="clear">Name:<br/>
	<span class="cc_form"><input type="text" name="usr_name" value="" size="40" required></span></p>
	<p>Email:<br/>
	<span class="cc_form"><input type="email" name="usr_email" value="" size="40" required></span></p>
	<p>Phone:<br/>
	<span class="cc_form"><input type="tel" name="usr_phone" value="" aria-required="true" required></span></p>
	<p>Zip Code:<br/>
	<span class="cc_form"><input type="text" name="usr_zip" pattern="[0-9]{5}" required></span></p>
	<br/>
	<input type="submit" value="Submit">	
</fieldset>
</form>
HTML;
$splash_screen2=<<<HTML
<form id="comp_calc_form" data-ng-app="scopeCC" data-ng-controller="MainController">
<script>
	function outputUpdate(severity) {
		document.querySelector('#severity').value = severity;
	}
	function outputUpdateFault(fault_level){
		document.querySelector('#fault_level').value= fault_level;
	}
	function cc_update_EstimatedCost(amount){
		
	}
</script>
<div class="splash_screen">
	<h2>Calcule el monto de su compensación</h2>
	<h3>Descubra el costo de su accidente, desde los gastos médicos hasta los legales</h3>
	<br/>
	<input type="button" class="question" value="COMENZAR" id="start">
</div>

<fieldset id="gender" class="inactive cc_page-0">
	<legend><h2>Sexo</h2></legend>
	<br/>
	<div data-ng-repeat="gender in genders" class="col_third" id={{gender.id}}>
  <input type="button" id="btn_{{gender.id}}" class="question" value={{gender.gen}}>
  </div>
</fieldset>
<fieldset id="known_costs"  class="inactive cc_page-1">
	<legend id="known_costs_legend"><h2>¿Sabe sus costos médicos?</h2></legend>
	<ul>
		<li class="cc_known_cost_selection" data-ng-repeat="kc in knownCosts"><input class="cc_known_cost_selection_button" type="button" name="{{kc.name}}[]" id="{{kc.id}}" value="{{kc.value}}" ></li>
	</ul>
	<input type="number" class="inactive" id="cc_known_medical_expenses" name="cc_known_medical_expenses" value="" pattern="^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$">
	<div class="cc_nav">
			<input type="button" id="cc_known_costs_back" class="cc_back" value="VOLVER"/>
			<input type="button" id="cc_known_costs_next" class="cc_next inactive" value="SIGUIENTE" />
	</div>
</fieldset>
<div id="injuries" class="inactive cc_page-2">
	<h2>¿Qué parte(s) del cuerpo sufrió lesiones?</h2>
	<br/>
	<div class="clear"></div>
	<!--<div class="cc_container">
		<div class="col_fifth" data-ng-repeat="type in injuries">
			<input type="button" class="cc_question" value="{{type.name}}" id="{{type.id}}_header" />
		</div>
	</div>-->
	<div class="clear"></div>
	<div id="question_container">
	<br/>
		<div data-ng-repeat="injuryType in injuries">
		<input type="button" class="cc_question" value={{injuryType.name}} id="{{injuryType.id}}_header"/>
		<ul id="{{injuryType.id}}" class="inactive">
			<fieldset data-ng-repeat="type in injuryType.injury" id="{{type.id}}_injury" class="chk-container col_fifth" id="{{type.id}}_container">
			<legend id="{{type.id}}_legend">{{type.name}}</legend>
			<li data-ng-repeat="injury in type.subInjury" class="cc_injury inactive" id="chk_{{injury.id}}_li">
				<span><input type="checkbox" name="{{injury.id}}[]" value="{{injury.name}}" amount="{{injury.value}}" id="chk_{{injury.id}}" ng-model="valInjury"><label for="chk_{{injury.id}}" >{{injury.name}}</label></span>
				<div class="clear"></div>
			</li>
			</fieldset>
		</ul>		
		</div>
	</div>
	<div class="clear"></div>
	<div class="cc_nav">
			<input type="button" id="cc_injury_total_back" class="cc_back" value="VOLVER"/>
			<input type="button" id="cc_injury_total_next" class="cc_next inactive" value="SIGUIENTE" />
	</div>
</div>


<fieldset class="severity inactive cc_page-3" id="overallSeverity">
	<legend>Gravedad</legend><br/>
	<label style="text-align:left;" class="third">Not Bad</label>
	<label class="third" style="text-align:center;">Somewhat Severe</label>
	<label style="text-align:right;" class="third">Extremely Severe</label>
	<br/>
	<input type="range" name="overallSeverity" id="overallSeverityRange" value="1" min="1" max="5" step="0.5" onchange="outputUpdate(value)"><br/>
	<output for=overallSeverityRange id=severity>1</output>
	<div class="cc_nav">
			<input type="button" id="back_1" class="cc_back" value="VOLVER"/>
			<input type="button" id="next_3" class="cc_next" value="SIGUIENTE" />
	</div>
</fieldset>


<fieldset id="losses" class="inactive cc_page-4">
	<legend>&nbsp;</legend>
	<div data-ng-repeat="amount in losses" id={{amount.id}}>
		<div class="stacked" data-ng-repeat="subtype in amount.section">
			<input type="number" id="{{subtype.id}}" name="{{subtype.id}}" ng-model="subtype.value" pattern="{{subtype.pattern}}">
			<label for="{{subtype.id}}">{{subtype.name}}</label>
		</div>
	</div>
	<div class="cc_nav">
			<input type="button" id="back_2" class="cc_back" value="VOLVER"/>
			<input type="button" id="next_4" class="cc_next" value="SIGUIENTE" />
	</div>
</fieldset>

<fieldset id="degree_of_fault" class="inactive cc_page-5">
	<lenged><h2>Select your Degree of Fault</h2></legend>
	<label class="third" style="text-align:left;">Not my fault</label><label class="third" style="text-align:center">50% my fault</label><label class="third" style="text-align:right;">100% my fault</label>
	<input class="clear" type="range" name="fault" id="fault" value="0" min="0" max="100" onchange="outputUpdateFault(value)">
	<div id="fault_level_output"><output for=fault id=fault_level>0</output>
	</div>
	<div class="cc_nav">
			<input type="button" class="cc_back" value="VOLVER"/>
			<input type="button" class="cc_next" value="SIGUIENTE" />
	</div>
</fieldset>
<div id="grand_total" class="inactive cc_page-6">
	<h2>Your Grand Total is</h2><br/>
	<label id="grand_total_amount">0</label><br/>
	<input type="button" id="btnStartClaim" value="Start your claim" />
	<div class="cc_nav">
			<input type="button" class="cc_back" value="VOLVER"/>
	</div>
</div>
<div id="estimation_cost_container" class="inactive clear">
<div id="sub_estimation_cost_container">
	<label id="lblEstimationCost">Estimado:</label>
	<textarea readonly style="text-align:center;font-size:1.3em;background-color:transparent !important;" id="estimation_cost" value="0"></textarea>	
	<input type="number" id="cc_grand_total_estimate" value="" style="display:none;"/>
</div></div>
<fieldset id="contact_information" class="inactive cc_page-7">
	<legend><h2>Fill out this form for your free consultation</h2></legend>
	<p class="clear">Name:<br/>
	<span class="cc_form"><input type="text" name="usr_name" value="" size="40" required></span></p>
	<p>Email:<br/>
	<span class="cc_form"><input type="email" name="usr_email" value="" size="40" required></span></p>
	<p>Phone:<br/>
	<span class="cc_form"><input type="tel" name="usr_phone" value="" aria-required="true" required></span></p>
	<p>Zip Code:<br/>
	<span class="cc_form"><input type="text" name="usr_zip" pattern="[0-9]{5}" required></span></p>
	<br/>
	<input type="submit" value="Submit">	
</fieldset>
</form>
HTML;
if (!cc_isMobile()){
echo $splash_screen;}
else if (cc_isMobile()){
echo $splash_screen2;
}
}
function cc_isMobile(){
$useragent=$_SERVER['HTTP_USER_AGENT'];
return(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4)));
}
function my_init(){
	wp_register_script('comp_calc_js', plugins_url('js/comp_calc.js',__FILE__), 'jquery', '4.8.1', TRUE);
	wp_register_style( 'comp_calc_css', plugins_url('css/comp_calc.css', __FILE__) );
	if (!is_admin()){
		wp_enqueue_script('jquery');
		wp_enqueue_script('comp_calc_js');
		wp_enqueue_style('comp_calc_css', get_stylesheet_uri() );
	}
}
add_action('init', 'my_init');
add_shortcode('comp_calc','cc_func_comp_calc');
?>