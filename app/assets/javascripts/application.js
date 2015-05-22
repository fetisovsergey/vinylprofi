// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require fancybox
//= require_tree .
$(document).ready(function() {
    $(".image_gallery").fancybox({
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		speedIn: 300,
		speedOut: 300,
    	centerOnScroll: true,
    	cyclic: true
    });

  
	//Start_function
	function start_choise()
	{
		//Reset
		$('.car_icon').removeClass('car_icon_active');
		////
		
		//Buttons_switching
  		$('.car_icon').addClass('car_icon_passive');
		//Remove "Choose car type" text
  	    $('#text_plenka').css("display", "none");
		
		//Hide Price
		$('#price').css("display", "none");

		//Hide car
		$('#car_top').css("display", "none");

		//Display plenka types
		$('.plenka').removeClass('active_button');
		$('.plenka').addClass('passive_button');
  	    $('#choose_plenka').css("display", "block");
	}



	//Function_to_count_price
	function price_to_window(frontprice,rearprice,frontbackprice,rearbackprice)
	{

		var count = 0;
		//Windows
		var front = 0;
		var rear = 0;
		var frontback = 0;
		var rearback = 0;
		//
		//Buttons_to_choose_window		
		$('.choose_window').css("background", "#000066");
		$('.choose_window').css("display", "inline-block");
		//
		//Show car
		$('.car_top').css("opacity", "0");
		$('#main_car').css("opacity", "1");
		$('#car_top').css("display", "block");
		price.innerHTML = count + ' р.';

		$('#price').css("display", "block");
		$('#front_button').bind('click', function()
		{
			if (front == 0)
			{
				count = count + frontprice;
				$('#front_button').css("background", "#A00000");
				front = 1;
				//Display updated_car
				$('#front').css("opacity", "1");
			}
			else
			{
				count = count - frontprice;
				$('#front_button').css("background", "#000066");
				front = 0;
				//Display updated_car
				$('#front').css("opacity", "0");
			}
			price.innerHTML = count + ' р.';
		});
			
		$('#frontback_button').bind('click', function()
		{
			if (frontback == 0)
			{
				count = count + frontbackprice;
				$('#frontback_button').css("background", "#A00000");
				frontback = 1;
				//Display updated_car
				$('#frontback').css("opacity", "1");
			}
			else
			{
				count = count - frontbackprice;
				$('#frontback_button').css("background", "#000066");
				frontback = 0;
				//Display updated_car
				$('#frontback').css("opacity", "0");
			}
			price.innerHTML = count + ' р.';				
		});
		$('#rear_button').bind('click', function()
		{
			if (rear == 0)
			{
				count = count + rearprice;
				$('#rear_button').css("background", "#A00000");
				rear = 1;
				//Display updated_car
				$('#rear').css("opacity", "1");
			}
			else
			{
				count = count - rearprice;
				$('#rear_button').css("background", "#000066");
				rear = 0;
				//Display updated_car
				$('#rear').css("opacity", "0");
			}
			price.innerHTML = count + ' р.';	
		});
		$('#rearback_button').bind('click', function()
		{
			if (rearback == 0)
			{
				count = count + rearbackprice;
				$('#rearback_button').css("background", "#A00000");
				rearback = 1;
				//Display updated_car
				$('#rearback').css("opacity", "1");
			}
			else
			{
				count = count - rearbackprice;
				$('#rearback_button').css("background", "#000066");
				rearback = 0;
				//Display updated_car
				$('#rearback').css("opacity", "0");
			}
			price.innerHTML = count + ' р.';	
		});	
	}

	//Function_to_count_price_udaroprochnaya_plenka
	function udar_to_window(frontbackprice,rearbackprice)
	{

		var count = 0;
		//Windows
		var frontback = 0;
		var rearback = 0;
		//
		//Buttons_to_choose_window		
		$('.choose_window').css("background", "#000066");
		$('#rear_button').css("display", "none");
		$('#front_button').css("display", "none");
		//

		//Show car
		$('.car_top').css("opacity", "0");
		$('#main_car').css("opacity", "1");
		$('#car_top').css("display", "block");
		price.innerHTML = count + ' р.';

		$('#price').css("display", "block");
			
		$('#frontback_button').bind('click', function()
		{
			if (frontback == 0)
			{
				count = count + frontbackprice;
				$('#frontback_button').css("background", "#A00000");
				frontback = 1;
				//Display updated_car
				$('#frontback').css("opacity", "1");
			}
			else
			{
				count = count - frontbackprice;
				$('#frontback_button').css("background", "#000066");
				frontback = 0;
				//Display updated_car
				$('#frontback').css("opacity", "0");
			}
			price.innerHTML = count + ' р.';				
		});

		$('#rearback_button').bind('click', function()
		{
			if (rearback == 0)
			{
				count = count + rearbackprice;
				$('#rearback_button').css("background", "#A00000");
				rearback = 1;
				//Display updated_car
				$('#rearback').css("opacity", "1");
			}
			else
			{
				count = count - rearbackprice;
				$('#rearback_button').css("background", "#000066");
				rearback = 0;
				//Display updated_car
				$('#rearback').css("opacity", "0");
			}
			price.innerHTML = count + ' р.';	
		});	
	}


	//Tonirovka_price

	//Средний класс
	$('#middle_class').bind('click', function() {

		start_choise();
  	  	$('#middle_class').removeClass('car_icon_passive');
  	  	$('#middle_class').addClass('car_icon_active');

		//Show car and pricecount
		$('#aswf_plenka').bind('click', function() {


			//ASWF prices
			var frontprice = 2000	//Лобовое стекло - 2000
			var rearprice = 1200	///Заднее стекло - 1200
			var frontbackprice = 1500	///Боковое переднее - 1500
			var rearbackprice = 1800	///Боковое заднее - 1800

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#aswf_plenka').removeClass('passive_button');
			$('#aswf_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#infinity_plenka').bind('click', function() {

			//Infinity prices
			var frontprice = 2000 * 1.4	//Лобовое стекло
			var rearprice = 1200 * 1.4	///Заднее стекло
			var frontbackprice = 1500 * 1.4	///Боковое переднее
			var rearbackprice = 1800 * 1.4	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#infinity_plenka').removeClass('passive_button');
			$('#infinity_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#atermal_plenka').bind('click', function() {


			//Atermal prices
			var frontprice = 3500	//Лобовое стекло
			var rearprice = 2500	///Заднее стекло
			var frontbackprice = 2500	///Боковое переднее
			var rearbackprice = 2500	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#atermal_plenka').removeClass('passive_button');
			$('#atermal_plenka').addClass('active_button');

			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#udar_plenka').bind('click', function() {

			//Udar prices
			var frontbackprice = 3000	///Боковое переднее
			var rearbackprice = 3000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#udar_plenka').removeClass('passive_button');
			$('#udar_plenka').addClass('active_button');
			udar_to_window(frontbackprice,rearbackprice);
		});
  	});
	$('#business_class').bind('click', function() {
		
		start_choise();
  	  	$('#business_class').removeClass('car_icon_passive');
  	  	$('#business_class').addClass('car_icon_active');
		//Show car and pricecount
		$('#aswf_plenka').bind('click', function() {

			//ASWF prices
			var frontprice = 2200	//Лобовое стекло
			var rearprice = 1500	///Заднее стекло
			var frontbackprice =1600	///Боковое переднее
			var rearbackprice = 2000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#aswf_plenka').removeClass('passive_button');
			$('#aswf_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#infinity_plenka').bind('click', function() {

			//Infinity prices
			var frontprice = 2200 * 1.4	//Лобовое стекло
			var rearprice = 1500 * 1.4	///Заднее стекло
			var frontbackprice =1600 * 1.4	///Боковое переднее
			var rearbackprice = 2000 * 1.4	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#infinity_plenka').removeClass('passive_button');
			$('#infinity_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#atermal_plenka').bind('click', function() {

			//Atermal prices
			var frontprice = 3700	//Лобовое стекло
			var rearprice = 2700	///Заднее стекло
			var frontbackprice = 2700	///Боковое переднее
			var rearbackprice = 2700	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#atermal_plenka').removeClass('passive_button');
			$('#atermal_plenka').addClass('active_button');

			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#udar_plenka').bind('click', function() {

			//Udar prices
			var frontbackprice = 3000	///Боковое переднее
			var rearbackprice = 3000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#udar_plenka').removeClass('passive_button');
			$('#udar_plenka').addClass('active_button');

			udar_to_window(frontbackprice,rearbackprice);
		});
  	});
	$('#premium_class').bind('click', function() {
		
		start_choise();
  	  	$('#premium_class').removeClass('car_icon_passive');
  	  	$('#premium_class').addClass('car_icon_active');
		//Show car and pricecount
		$('#aswf_plenka').bind('click', function() {

			//ASWF prices
			var frontprice = 2500	//Лобовое стекло
			var rearprice = 1700	///Заднее стекло
			var frontbackprice = 1800	///Боковое переднее
			var rearbackprice = 2000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#aswf_plenka').removeClass('passive_button');
			$('#aswf_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#infinity_plenka').bind('click', function() {

			//Infinity prices
			var frontprice = 2500 * 1.4	//Лобовое стекло
			var rearprice = 1700 * 1.4	///Заднее стекло
			var frontbackprice = 1800 * 1.4	///Боковое переднее
			var rearbackprice = 2000 * 1.4	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#infinity_plenka').removeClass('passive_button');
			$('#infinity_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#atermal_plenka').bind('click', function() {

			//Atermal prices
			var frontprice = 4000	//Лобовое стекло
			var rearprice = 3000	///Заднее стекло
			var frontbackprice = 3000	///Боковое переднее
			var rearbackprice = 3000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#atermal_plenka').removeClass('passive_button');
			$('#atermal_plenka').addClass('active_button');

			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#udar_plenka').bind('click', function() {

			//Udar prices
			var frontbackprice = 3000	///Боковое переднее
			var rearbackprice = 3000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#udar_plenka').removeClass('passive_button');
			$('#udar_plenka').addClass('active_button');
			udar_to_window(frontbackprice,rearbackprice);
		});
  	});
	$('#crossover_class').bind('click', function() {
		
		start_choise();
  	  	$('#crossover_class').removeClass('car_icon_passive');
  	  	$('#crossover_class').addClass('car_icon_active');
		//Show car and pricecount
		$('#aswf_plenka').bind('click', function() {

			//ASWF prices
			var frontprice = 2200	//Лобовое стекло
			var rearprice = 1500	///Заднее стекло
			var frontbackprice =1600	///Боковое переднее
			var rearbackprice = 2000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#aswf_plenka').removeClass('passive_button');
			$('#aswf_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#infinity_plenka').bind('click', function() {

			//Infinity prices
			var frontprice = 2200 * 1.4	//Лобовое стекло
			var rearprice = 1500 * 1.4	///Заднее стекло
			var frontbackprice =1600 * 1.4	///Боковое переднее
			var rearbackprice = 2000 * 1.4	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#infinity_plenka').removeClass('passive_button');
			$('#infinity_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#atermal_plenka').bind('click', function() {

			//Atermal prices
			var frontprice = 3700	//Лобовое стекло
			var rearprice = 2700	///Заднее стекло
			var frontbackprice = 2700	///Боковое переднее
			var rearbackprice = 2700	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#atermal_plenka').removeClass('passive_button');
			$('#atermal_plenka').addClass('active_button');

			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#udar_plenka').bind('click', function() {

			//Udar prices
			var frontbackprice = 3000	///Боковое переднее
			var rearbackprice = 3000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#udar_plenka').removeClass('passive_button');
			$('#udar_plenka').addClass('active_button');

			udar_to_window(frontbackprice,rearbackprice);
		});
  	});
	$('#offroad_class').bind('click', function() {
		
		start_choise();
  	  	$('#offroad_class').removeClass('car_icon_passive');
  	  	$('#offroad_class').addClass('car_icon_active');

		//Show car and pricecount
		$('#aswf_plenka').bind('click', function() {

			//ASWF prices
			var frontprice = 2400 	//Лобовое стекло
			var rearprice = 1700	///Заднее стекло
			var frontbackprice =1800	///Боковое переднее
			var rearbackprice = 2200	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#aswf_plenka').removeClass('passive_button');
			$('#aswf_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#infinity_plenka').bind('click', function() {

			//Infinity prices
			var frontprice = 2400 * 1.4	//Лобовое стекло
			var rearprice = 1700 * 1.4	///Заднее стекло
			var frontbackprice = 1800 * 1.4	///Боковое переднее
			var rearbackprice = 2200 * 1.4	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#infinity_plenka').removeClass('passive_button');
			$('#infinity_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#atermal_plenka').bind('click', function() {

			//Atermal prices
			var frontprice = 4200	//Лобовое стекло
			var rearprice = 3200	///Заднее стекло
			var frontbackprice = 3200	///Боковое переднее
			var rearbackprice = 3200	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#atermal_plenka').removeClass('passive_button');
			$('#atermal_plenka').addClass('active_button');

			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#udar_plenka').bind('click', function() {

			//Udar prices
			var frontbackprice = 3000	///Боковое переднее
			var rearbackprice = 3000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#udar_plenka').removeClass('passive_button');
			$('#udar_plenka').addClass('active_button');

			udar_to_window(frontbackprice,rearbackprice);
		});
  	});
	$('#minivan_class').bind('click', function() {
		
		start_choise();
  	  	$('#minivan_class').removeClass('car_icon_passive');
  	  	$('#minivan_class').addClass('car_icon_active');
		
		//Show car and pricecount
		$('#aswf_plenka').bind('click', function() {

			//ASWF prices
			var frontprice = 2400 	//Лобовое стекло
			var rearprice = 1700	///Заднее стекло
			var frontbackprice =1800	///Боковое переднее
			var rearbackprice = 2200	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#aswf_plenka').removeClass('passive_button');
			$('#aswf_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#infinity_plenka').bind('click', function() {

			//Infinity prices
			var frontprice = 2400 * 1.4	//Лобовое стекло
			var rearprice = 1700 * 1.4	///Заднее стекло
			var frontbackprice = 1800 * 1.4	///Боковое переднее
			var rearbackprice = 2200 * 1.4	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#infinity_plenka').removeClass('passive_button');
			$('#infinity_plenka').addClass('active_button');
			
			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#atermal_plenka').bind('click', function() {

			//Atermal prices
			var frontprice = 4200	//Лобовое стекло
			var rearprice = 3200	///Заднее стекло
			var frontbackprice = 3200	///Боковое переднее
			var rearbackprice = 3200	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#atermal_plenka').removeClass('passive_button');
			$('#atermal_plenka').addClass('active_button');

			price_to_window(frontprice,rearprice,frontbackprice,rearbackprice);
		});
		$('#udar_plenka').bind('click', function() {

			//Udar prices
			var frontbackprice = 3000	///Боковое переднее
			var rearbackprice = 3000	///Боковое заднее

			//Button_switching
			$('.plenka').addClass('passive_button');
			$('#udar_plenka').removeClass('passive_button');
			$('#udar_plenka').addClass('active_button');

			udar_to_window(frontbackprice,rearbackprice);
		});
  	});
});