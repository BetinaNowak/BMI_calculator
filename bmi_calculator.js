/*
		The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2 (source: Wikipedia)
		
		BMI = weight (kg) / (height * height (m)) 
		
		Underweight: < 18.5
		Normal (healthy weight): 18.5 - 25
		Overweight: 25 - 30
		Obesity: > 30 
		
		*/
		
		// Globale variabler (synlige for HELE scriptet)
		var input, result, bmi, msg;
		
		function calculateBMI(){
			'use strict';
			// test om form/funktion kobling virker
			console.log('Form sent');
			
			// Samler alle HTML elementer med tag navnet 'input'
			input = document.getElementsByTagName('input');
			
			//message element:
			msg = document.getElementById('msg');
			
			//input er et array (variable med flere elementer indeni)
			console.log(input);
			
			// lokale variabler (kun synlige indenfor funktionen!)
			var w = input[0].value; // første input felt + værdi
			var h = input[1].value; // andet input felt + værdi 	
			// testing igen
			console.log('Weight: ' + w);
			
			// beregne BMI
			result = (w / (h * h));
			// toFixed bruges til at vise resultatet med to decimaler (2)
			bmi = result.toFixed(2);
			
			// test af beregning
			console.log(bmi);
			
			// output til brugeren: 
			/*
			jQuery UI alert classes:
			alert alert-danger
			alert alert-warning
			*/
			if (result < 18.5) {
				//msg.innerHTML = 'Underweight! (BMI: ' + bmi + ')';
				$('#msg').html('Underweight! (BMI: ' + bmi + ')').removeAttr('class').addClass('alert alert-danger').effect('pulsate', {times:5, distance:50}); 
			} else if (result >= 18.5 && result < 25) {
				//msg.innerHTML = 'Normal weight! (BMI: ' + bmi + ')';
				// jQuery finder id msg, tilføjer innerHTML og en CSS class fra jQuery UI css
				$('#msg').html('Normal weight! (BMI: ' + bmi + ')').addClass('alert alert-success').effect('bounce', {times:5, distance:50});
			} else if (result >= 25 && result < 30) {
				//msg.innerHTML = 'Overweight! (BMI: ' + bmi + ')';
				$('#msg').html('Overweight! (BMI: ' + bmi + ')').removeAttr('class').addClass('alert alert-warning').effect('shake', {times:5, distance:20});
			} else {
				//msg.innerHTML = 'Obese! (BMI: ' + bmi + ')';
				$('#msg').html('Obese! (BMI: ' + bmi + ')').removeAttr('class').addClass('alert alert-danger').effect('pulsate', {times:5, distance:50});
			}
			
			
				
			// test af output:	
			console.log(msg);
			
			
			// Forhindrer at formen bliver sendt
			return false;
		}

		// jQuery UI effects
		$(function() {
			'use strict';
			$(document).tooltip();  // jQuery + tooltip metoden fra jQuery UI
		});


