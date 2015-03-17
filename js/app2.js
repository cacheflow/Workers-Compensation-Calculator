(function(angular) {
  'use strict';
angular.module('scopeCC', [])
  .controller('MainController', ['$scope', function($scope) {
  	var _estimationCost = 0;
  	$scope.estimateCostAmount = {
  		value: function(newValue){
  				_estimationCost = newValue;
  			return _estimationCost;
  		}
  	};
  		/*var numToAdd = parseFloat($scope.losses.section.value);
  		var numToAddTo = 0;
  	}*/
  	$scope.knownCosts = [{name:'known_costs', value: 'Sí', id: 'known_costs_yes'},
  	{name:'known_costs', value: 'No', id: 'known_costs_no'}];
    $scope.genders = [
    	{gen:'Masculino', id:'male'}, 
    	{gen:'Femenino', id:'female'}, 
    	{gen:'No especificado',id:'not_specified'}
    ];
  	$scope.injuries =[
{name:'Cabeza', id:'head', 
  		injury: [
{name:'Cerebro y el cráneo', id:'brain_skull', 
  		subInjury:[
  		{name:'Trastorno de Estrés Postraumático',id:'ptsd', value:'100'}, 
  		{name:'Epilepsia',id:'epilepsy', value:'100'},
  		{name:'Lesión de cabeza',id:'injury_head', value:'100'},
  				]
  			},
{name:'Lesiones de los Sentidos', id:'senses', 
  		subInjury:[
  		{name:'Lesiones que afectan la vista',id:'sight', value:'100'}, 
  		{name:'Pérdida del sabor',id:'taste', value:'100'},
  		{name:'Pérdida del olfato',id:'smell', value:'100'},
  		{name:'Sordera',id:'deafness', value:'100'},
  				]
  			},
  	{name:'Cara y Boca', id:'face', 
  		subInjury:[
  		{name:'Cicatrización',id:'scarring', value:'100'}, 
  		{name:'Fractura de la mandíbula ',id:'jaw', value:'100'},
  		{name:'Daño a los dientes',id:'teeth', value:'100'},
  		{name:'Fractura de nariz',id:'nose', value:'100'},
  		{name:'Fractura al hueso de la mejilla',id:'cheekbone', value:'100'},
  				]
  			},
  	{name:'Pelo', id:'hair', 
  		subInjury:[
  		{name:'Pérdida de pelo/daño al pelo',id:'hair_loss'}, 
  				]
  			}
  			]
  		},
  {name:'Parte superior del cuerpo', id:'upper_body',
  		injury:[
  	{name:'Heridos del cuello', id:'neck', 
  		subInjury:[
  		{name:'Latigazo',id:'whiplash'}, 
  		{name:'Fractura/Dislocación',id:'fracture_dislocation'},
  					]
  				},
  				{name:'Heridos de hombro', id:'shoulder', 
  					subInjury:[
  					{name:'Hombro dislocado', id:'dislocated_shoulder'}, 
  					{name:'Lesión de tejidos blandos', id:'soft_tissue'},
  					{name:'Fractura de Clavícula', id:'clavicle'},
  					{name:'Otras lesiones de hombro',id:'other_shoulder'},
  					]
  				},
  				{name:'Lesiones de pecho', id:'chest', 
  					subInjury:[
  					{name:'Lesión al pecho ', id:'injury_chest'}, 
  					{name:'La inhalación del humo/humos tóxicos', id:'inhalation'},
  					{name:'Herida penetrante del pecho',id:'penetrating_chest'},
  					{name:'Costillas fracturadas y lesiones musculares',id:'ribs'},
  					]
  				},
  				{name:'Enfermedades como el Asbesto', id:'asbestos', 
  					subInjury:[
  					{name:'Engrosamiento pleural',id:'pleural_thickening'}, 
  					{name:'Mesothelioma',id:'mesothelioma'},
  					{name:'La Asbestosis',id:'asbestosis'},
  					]
  				},
  				{name:'Other Upper Body Injuries', id:'other_upper_body', 
  					subInjury:[
  					{name:'Lesión de espalda',id:'back'}, 
  					{name:'Asma',injury_id:'asthma'},
  					{name:'La Enfermedad Pulmonar',injury_id:'lung'},
  					]
  				}
  			]
  		},
  		{name:'Brazos', id:'arms',
  			injury:[
  				{name:'Lesiones de mano y muñeca', id:'hand_wrists', 
  					subInjury:[
  					{name:'Fractura a los dedos',id:'finger_fracture'}, 
  					{name:'Amputación de dedo',id:'finger_amputation'},
  					{name: 'Síndrome del túnel carpiano',id:'cts'},
  					{name:'Vibración de Dedos blancos / Otro Trabajo RSI',id:'white_finger'}, 
  					{name:'Pérdida parcial del dedo íncide',id:'partial_index_loss'},
  					{name:'Lesión de mano',id:'hand'},
  					{name:'Lesión de muñeca',id:'wrist'},
  					]
  				},
  				{name:'Lesiones de brazo', id:'arm', 
  					subInjury:[
  					{name:'Fractura al brazo',id:'arm_fracture'}, 
  					{name:'Amputación de brazo',id:'arm_amputation'},
  					{name:'La Cicatrización',id:'arm_scarring'},
  					]
  				},
  			]
  		},
  		{name:'Parte inferior del cuerpo', id:'lower_body',
  			injury:[
  				{name:'Lesiones a los músculos abdominales y a la sistema reproductivos', id:'abs_rs', 
  					subInjury:[
  					{name:'La lesión traumática al Sistema Digestivo',id:'digestive'}, 
  					{name:'Hernia',id:'hernia'},
  					{name:'esterilidad',id:'sterility'},
  					{name:'Intoxicación Alimentaria Causando daños al Sistema Digestivo',id:'food_poisoning'}, 
  					{name:'Impotencia',id:'impotence'},
  					{name:'esterilidad',id:'infertility'},
  					]
  				},
  				{name:'Lesiones de cadera y pierna', id:'hip_leg', 
  					subInjury:[
  					{name:'Lesión al pelvis o cadera',id:'pelvis_hip'}, 
  					{name:'Fractura de pierna',id:'leg_fracture'},
  					{name:'Lesión de rodilla',id:'knee'},
  					{name:'Fractura de cadera',id:'hip'}, 
  					{name:'Amputación de pierna',id:'leg_amputation'},
  					]
  				}
  			]
  		},
  		{name:'Pies', id:'feet',
  			injury:[
  				{name:'Lesiones de pie y tobillo', id:'foot_ankle', 
  					subInjury:[
  					{name:'Fractura de pie',id:'foot_fracture'}, 
  					{name:'Amputación de ambos pies',id:'feet_amputation'},
  					{name:'Amputación del dedo gordo del pie',id:'big_toe_amputation'},
  					{name:'Fractura de tobillo',id:'ankle_fracture'}, 
  					{name:'Amputación de pie',id:'foot_amputation'},
  					{name:'Lesiones de los dedos de pie',id:'toes'},
  					{name:'Amputación de todos los dedos de pie',id:'toe_amputation'},
  					{name:'Tendón de Aquiles',id:'achilles_tendon'},
  					]
  				}
  			]
  		}
  	];
  	
  	$scope.losses =[
  		{id:'lossEarningsA', 
  			section:[
  			{name:'Loss of Earnings', id:'loss_of_earnings', pattern:'^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$',value:0},
  			{name:'Loss of Future Earnings', id:'loss_of_future_earnings', pattern:'^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$',value:0}
  			]
  		},
  		{id:'lossEarningsB',
  			section:[
  			{name:'Future Medical Expenses', id:'future_medical_expenses', pattern:'^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$',value:0},
  			{name:'Property Damages', id:'property_damages', pattern:'^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$',value:0}
  			]
  		}
  	];
  }]);
})(window.angular);