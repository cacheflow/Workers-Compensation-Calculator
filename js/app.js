(function(angular) {
  'use strict';
angular.module('scopeCC', [])
  .controller('MainController', ['$scope', function($scope) {
    $scope.genders = [
    	{gen:'Male', id:'male'}, 
    	{gen:'Female', id:'female'}, 
    	{gen:'Not Specified',id:'not_specified'}
    ];
    $scope.types = [
  		{name:'Head', id:'head'},
  		{name:'Upper Body',id:'upper'}, 
  		{name:'Arms', id:'arm'},sftp://accidentes-staging:@accidentes.wpengine.com//wp-content/plugins/comp-calc_v2/js/app.js
  		{name:'Lower Body',id:'lower'},
  		{name:'Feet',id:'foot'}
  	];
  	$scope.head = [
  		{name:'Brain & Skull', id:'brain_skull', injuries:[
  			{name:'Post Traumatic Stress Disorder',id:'ptsd'}, 
  			{name:'Epilepsy',id:'epilepsy'},
  			{name:'Head Injury',id:'injury_head'},
  		]},
  		{name:'Injuries to the Senses', id:'senses', injuries:[
  			{name:'Injuries Affecting sight',id:'sight'}, 
  			{name:'Loss of Taste',id:'taste'},
  			{name:'Loss of Smell',id:'smell'},
  			{name:'Deafness',id:'deafness'},
  		]},
  		{name:'Face & Mouth', id:'face', injuries:[
  			{name:'Scarring',id:'scarring'}, 
  			{name:'Jaw Fracture',id:'jaw'},
  			{name:'Teeth Damage',id:'teeth'},
  			{name:'Nose Fracture',id:'nose'},
  			{name:'Cheekbone Fracture',id:'cheekbone'},
  		]},
  		{name:'Hair', id:'hair', injuries:[
  			{name:'Loss of hair/ damage to hair',id:'hair_loss'}, 
  		]}
  	]
  	$scope.upperBody =[
  		{name:'Neck Injuries', id:'neck', injuries:[
  				{injury:'Whiplash',injury_id:'whiplash'}, 
  				{injury:'Fracture/Dislocation',injury_id:'fracture_dislocation'},
  			]},
  		{name:'Shoulder Injuries', id:'shoulder', injuries:[
  				{injury:'Dislocated Shoulder', id:'dislocated_shoulder'}, 
  				{injury:'Soft Tissue Injury', id:'soft_tissue'},
  				{injury:'Fractured Clavicle', id:'clavicle'},
  				{injury:'Other Shoulder Injuries',injury_id:'other_shoulder'},
  			]},
  		{name:'Chest Injuries', type_id:'chest', injuries:[
  				{injury:'Injury to chest', id:'injury_chest'}, 
  				{injury:'Toxic fume/Smoke inhalation', id:'inhalation'},
  				{injury:'Penetrating wound to chest',id:'penetrating_chest'},
  				{injury:'Fractured ribs and muscular injuries',id:'ribs'},
  			]},
  		{name:'Asbestos Related Diseases', id:'asbestos', injuries:[
  				{injury:'Pleural Thickening',id:'pleural_thickening'}, 
  				{injury:'Mesothelioma',id:'mesothelioma'},
  				{injury:'Asbestosis',id:'asbestosis'},
  			]},
  		{name:'Other Upper Body Injuries', id:'other_upper_body', injuries:[
  				{injury:'Back Injury',id:'back'}, 
  				{injury:'Asthma',injury_id:'asthma'},
  				{injury:'Lung Disease',injury_id:'lung'},
  			]},
  	];
  	$scope.arms =[
  		{name:'Hand & Wrist Injuries', id:'hand_wrists', injuries:[
  				{name:'Fracture to fingers',id:'finger_fracture'}, 
  				{name:'Amputation of finger',id:'finger_amputation'},
  				{name: 'Carpal Tunnel Syndrome',id:'cts'},
  				{name:'Vibration White Finger/Other Work RSI',id:'white_finger'}, 
  				{name:'Partial Loss of Index Finger',id:'partial_index_loss'},
  				{name:'Hand Injury',id:'hand'},
  				{name:'Wrist Injury',id:'wrist'},
  			]},
  			{name:'Arm Injuries', id:'arm', injuries:[
  				{name:'Fracture to Arm',id:'arm_fracture'}, 
  				{name:'Amputation of Arm',id:'arm_amputation'},
  				{name:'Scarring',id:'scarring'},
  			]},
  	];
  	$scope.lowerBody = [
  		{name:'Abdominal & Reproductive System Injuries', id:'abs_rs', injuries:[
  			{name:'Traumatic Injury to Digestive System',id:'digestive'}, 
  			{name:'Hernia',id:'hernia'},
  			{name:'Sterility',id:'sterility'},
  			{name:'Food Poisoning Causing Digestive System Damage',id:'food_poisoning'}, 
  			{name:'Impotence',id:'impotence'},
  			{name:'Infertility',id:'infertility'},
  		]},
  		{name:'Hip & Leg Injuries', id:'hip_leg', injuries:[
  			{name:'Injury to Pelvis or Hip',id:'pelvis_hip'}, 
  			{name:'Leg Fracture',id:'leg_fracture'},
  			{name:'Knee Injury',id:'knee'},
  			{name:'Fracture to Hip',id:'hip'}, 
  			{name:'Amputation of Leg',id:'leg_amputation'},
  		]}
  	];
  	$scope.feet =[
  		{name:'Foot & Ankle Injuries', id:'foot_ankle', injuries:[
  			{name:'Foot Fracture',id:'foot_fracture'}, 
  			{name:'Amputation of Both Feet',id:'feet_amputation'},
  			{name:'Amputation of the Big Toe',id:'big_toe_amputation'},
  			{name:'Ankle Fracture',id:'ankle_fracture'}, 
  			{name:'Amputation of one foot',id:'foot_amputation'},
  			{name:'Toe Injuries',id:'toes'},
  			{name:'Amputation of ALL toes',id:'toe_amputation'},
  			{name:'Achilles Tendon',id:'achilles_tendon'},
  		]},
  	];
  	$scope.injuryNames = ['Brain']
  	/*$scope.parentInjury=['Head', 'Upper Body', 'Arms', 'Lower Body', 'Feet'];
  	$scope.headerID=['head_injury','upper_body_injury','arm_injury','lower_body_injury','foot_injury' ];
	$scope.parentInjuryID=['head','upper_body','arm','lower_body','foot' ];
	$scope.injuryType=[
		{
			'head': ;
		}
	];*/
	$scope.injuryParent = ['head','upper_body','arms','lower_body','feet'];
	$scope.injuryType =[
		{
			'head':'brain_skull',
			'upper_body':'neck',
			'arms':'face_mo',
			'lower_body':'three',
			'feet':'four',
		},
		{
			'head':'senses',
			'upper_body':'shoulder',
			'arms':'six',
			'lower_body':'seven',
			'feet':'eight',
		},
		{
			'head':'face',
			'upper_body':'five',
			'arms':'six',
			'lower_body':'seven',
			'feet':'eight',
		},
		{
			'head':'hair',
			'upper_body':'five',
			'arms':'six',
			'lower_body':'seven',
			'feet':'eight',
		}
	];
	$scope.injury2=[
		{
			'brain_skull': 'ptsd'
		},
		{
			'brain_skull': 'epilepsy'
		},
		{
			'brain_skull': 'injury_head'
		}
	];

  	
  	$scope.injurylist = [
  		{name:'Head', ids:'head', injury_type:[
  			{type:'Brain & Skull', type_id:'brain_skull', injuries:[
  				{injury:'Post Traumatic Stress Disorder',injury_id:'ptsd'}, 
  				{injury:'Epilepsy',injury_id:'epilepsy'},
  				{injury:'Head Injury',injury_id:'injury_head'},
  			]},
  			{type:'Injuries to the Senses', type_id:'senses', injuries:[
  				{injury:'Injuries Affecting sight',injury_id:'sight'}, 
  				{injury:'Loss of Taste',injury_id:'taste'},
  				{injury:'Loss of Smell',injury_id:'smell'},
  				{injury:'Deafness',injury_id:'deafness'},
  			]},
  			{type:'Face & Mouth', type_id:'face', injuries:[
  				{injury:'Scarring',injury_id:'scarring'}, 
  				{injury:'Jaw Fracture',injury_id:'jaw'},
  				{injury:'Teeth Damage',injury_id:'teeth'},
  				{injury:'Nose Fracture',injury_id:'nose'},
  				{injury:'Cheekbone Fracture',injury_id:'cheekbone'},
  			]},
  			{type:'Hair', type_id:'hair', injuries:[
  				{injury:'Loss of hair/ damage to hair',injury_id:'hair_loss'}, 
  			]},
  		]},
  		{name:'Upper Body', ids:'upper_body', injury_type:[
  			{type:'Neck Injuries', type_id:'neck', injuries:[
  				{injury:'Whiplash',injury_id:'whiplash'}, 
  				{injury:'Fracture/Dislocation',injury_id:'fracture_dislocation'},
  			]},
  			{type:'Shoulder Injuries', type_id:'shoulder', injuries:[
  				{injury:'Dislocated Shoulder',injury_id:'dislocated_shoulder'}, 
  				{injury:'Soft Tissue Injury',injury_id:'soft_tissue'},
  				{injury:'Fractured Clavicle',injury_id:'clavicle'},
  				{injury:'Other Shoulder Injuries',injury_id:'other_shoulder'},
  			]},
  			{type:'Chest Injuries', type_id:'chest', injuries:[
  				{injury:'Injury to chest',injury_id:'injury_chest'}, 
  				{injury:'Toxic fume/Smoke inhalation',injury_id:'inhalation'},
  				{injury:'Penetrating wound to chest',injury_id:'penetrating_chest'},
  				{injury:'Fractured ribs and muscular injuries',injury_id:'ribs'},
  			]},
  			{type:'Asbestos Related Diseases', type_id:'asbestos', injuries:[
  				{injury:'Pleural Thickening',injury_id:'pleural_thickening'}, 
  				{injury:'Mesothelioma',injury_id:'mesothelioma'},
  				{injury:'Asbestosis',injury_id:'asbestosis'},
  			]},
  			{type:'Other Upper Body Injuries', type_id:'other_upper_body', injuries:[
  				{injury:'Back Injury',injury_id:'back'}, 
  				{injury:'Asthma',injury_id:'asthma'},
  				{injury:'Lung Disease',injury_id:'lung'},
  			]},
  		]},
  		{name:'Arms', ids:'arms', injury_type:[
  			{type:'Hand & Wrist Injuries', type_id:'hand_wrists', injuries:[
  				{injury:'Fracture to fingers',injury_id:'finger_fracture'}, 
  				{injury:'Amputation of finger',injury_id:'finger_amputation'},
  				{injury:'Carpal Tunnel Syndrome',injury_id:'cts'},
  				{injury:'Vibration White Finger/Other Work RSI',injury_id:'white_finger'}, 
  				{injury:'Partial Loss of Index Finger',injury_id:'partial_index_loss'},
  				{injury:'Hand Injury',injury_id:'hand'},
  				{injury:'Wrist Injury',injury_id:'wrist'},
  			]},
  			{type:'Arm Injuries', type_id:'arm', injuries:[
  				{injury:'Fracture to Arm',injury_id:'arm_fracture'}, 
  				{injury:'Amputation of Arm',injury_id:'arm_amputation'},
  				{injury:'Scarring',injury_id:'scarring'},
  			]},
  		]},
  		{name:'Lower Body', ids:'lower_body', injury_type:[
  			{type:'Abdominal & Reproductive System Injuries', type_id:'abs_rs', injuries:[
  				{injury:'Traumatic Injury to Digestive System',injury_id:'digestive'}, 
  				{injury:'Hernia',injury_id:'hernia'},
  				{injury:'Sterility',injury_id:'sterility'},
  				{injury:'Food Poisoning Causing Digestive System Damage',injury_id:'food_poisoning'}, 
  				{injury:'Impotence',injury_id:'impotence'},
  				{injury:'Infertility',injury_id:'infertility'},
  			]},
  			{type:'Hip & Leg Injuries', type_id:'hip_leg', injuries:[
  				{injury:'Injury to Pelvis or Hip',injury_id:'pelvis_hip'}, 
  				{injury:'Leg Fracture',injury_id:'leg_fracture'},
  				{injury:'Knee Injury',injury_id:'knee'},
  				{injury:'Fracture to Hip',injury_id:'hip'}, 
  				{injury:'Amputation of Leg',injury_id:'leg_amputation'},
  			]},
  		]},
  		{name:'Feet', ids:'feet', injury_type:[
  			{type:'Foot & Ankle Injuries', type_id:'foot_ankle', injuries:[
  				{injury:'Foot Fracture',injury_id:'foot_fracture'}, 
  				{injury:'Amputation of Both Feet',injury_id:'feet_amputation'},
  				{injury:'Amputation of the Big Toe',injury_id:'big_toe_amputation'},
  				{injury:'Ankle Fracture',injury_id:'ankle_fracture'}, 
  				{injury:'Amputation of one foot',injury_id:'foot_amputation'},
  				{injury:'Toe Injuries',injury_id:'toes'},
  				{injury:'Amputation of ALL toes',injury_id:'toe_amputation'},
  				{injury:'Achilles Tendon',injury_id:'achilles_tendon'},
  			]},
  		]},
  	]
  }]);
})(window.angular);