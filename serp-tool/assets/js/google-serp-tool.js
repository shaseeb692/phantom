function getvalue(){
			var fieldlength = $(".info-textarea").val().length;
			$(".charwithspace").html(fieldlength);	

			var fieldlength1 = $(".info-textarea").val().split(" ").length;
			var whitespaces = fieldlength1 - 1;

			var fieldlength2 = fieldlength - fieldlength1 + 1;
			$(".charwithoutspace").html(fieldlength2);
			$(".whitespaces").html(whitespaces);

			var fieldvalue = $.trim($(".info-textarea").val()).length;
			
			if(fieldvalue >= 1 ){
			var fieldvalue1 = $.trim($(".info-textarea").val()).split(" ");

			$(".words").html(fieldvalue1.length);
			}

			if(fieldlength < 1){
				$(".words").html(0);
			}
		};
			
		function pageTitle(){
			var pagetitle = $(".pagetitle").val();
			var pagetitlelength = $(".pagetitle").val().length;
			if(pagetitlelength < 1){
				$(".snippet-title").html("For Example: #1 Digital Marketing Company - Example.com");
			}

			if(pagetitlelength < 1){
				$("#signal").removeClass("toosmall good average");
			}
		}

			function titlewithpx(text){
			      var titlecanvas = document.getElementById('titleCanvas');
			      var context = titlecanvas.getContext('2d');
			      var x = titlecanvas.width / 2;
			      var y = titlecanvas.height / 2 - 10;
			      var text = text;

			      context.font = '18px Arial';
			      context.fillText(text, x, y);

			      // get text metrics
			      var metrics = context.measureText(text);
			      var width = Math.round(metrics.width);
			      var titlepx = $(".titlepx");
			      titlepx.html(width);

						var pagetitle = $(".pagetitle").val();

						if(width > 534){
							document.getElementById('play').play();
						}

						if (width <= 534) {
							var seoTitle = pagetitle.slice(0, pagetitle.length);
							$(".snippet-title").html(seoTitle);
						}else if(pagetitle.length > 65 && width < 534){
							var seoTitle = pagetitle.slice(0, 70);
							$(".snippet-title").html(seoTitle + '....');
						}
						else{
							var seoTitle = pagetitle.slice(0, 65);
							$(".snippet-title").html(seoTitle + '....');
						}

						if(width < 1){
							$(".snippet-title").html("For Example: #1 Digital Marketing Company - Example.com");
						}

						if(width < 1){
							$("#signal").removeClass("toosmall good average");
							$("#titlestatusbar").html("Status");
						}
						else if(width > 1 && width < 155){
							$("#signal").addClass("toosmall");
							$("#signal").removeClass("average good");
							$(".signalStatus").html("Too small");
							$("#titlestatusbar").html("Too Small");
						}
						else if(width > 154 && width < 350){
							$("#signal").addClass("average");
							$("#signal").removeClass("good toosmall");
							$(".signalStatus").html("Average! Write more");
							$("#titlestatusbar").html("Average");
						}
						else if (width > 349 && width < 535) {
							$("#signal").addClass("good");
							$("#signal").removeClass("toosmall average");
							$(".signalStatus").html("Well done !!");
							$("#titlestatusbar").html("Well Done");
						}
						else if (width > 534) {
							$("#signal").removeClass("good");
							$("#signal").addClass("toosmall");
							$(".signalStatus").html("Too Big! Just Cut down Some Letters");
							$("#titlestatusbar").html("Too Big");
						}
			    }

					function urlwithpx(text){
			      var urlcanvas = document.getElementById('urlcanvas');
			      var urlcontext = urlcanvas.getContext('2d');
			      var xurl = urlcanvas.width / 2;
			      var yurl = urlcanvas.height / 2 - 10;
			      var urltext = text;

			      urlcontext.font = '13px Arial';
			      urlcontext.fillText(urltext, xurl, yurl);

			      // get text metrics
			      var urlmetrics = urlcontext.measureText(urltext);
			      var urlwidth = Math.round(urlmetrics.width);

						if(urlwidth < 1){
							$(".urlinfobar").html("Status");
						}
						else if(urlwidth > 1 && urlwidth < 512){
							$(".urlinfobar").html("Great..");
						}
						else if(urlwidth > 512){
							$(".urlinfobar").html("Bad....");
						}
			    }

		function getUrl(){
			var url = $(".snippetUrl").val();
			var urlLength = $(".snippetUrl").val().length;
			if (urlLength < 100 ) {
				$(".snippet-url").html(url);
			}

			if(urlLength < 1){
				$(".snippet-url").html("http://www.example.com");
			}
		}

		function descriptionwithpx(text){
			var descriptioncanvas = document.getElementById('descriptioncanvas');
			      var descriptioncontext = descriptioncanvas.getContext('2d');
			      var descriptionx = descriptioncanvas.width / 2;
			      var descriptiony = descriptioncanvas.height / 2 - 10;
			      var descriptiontext = text;

			      descriptioncontext.font = '13px Arial';
			      descriptioncontext.fillText(descriptiontext, descriptionx, descriptiony);

			      // get text metrics
			      var descriptionmetrics = descriptioncontext.measureText(descriptiontext);
			      var descriptionwidth = Math.round(descriptionmetrics.width);
			      var descriptionpx = $(".descriptionpx");
			      descriptionpx.html(descriptionwidth);

						if(descriptionwidth < 1){
							$("#descriptioninfobar").html("Status");
						}
						else if(descriptionwidth > 1 && descriptionwidth < 230){
							$("#descriptioninfobar").html("Too small");
						}
						else if(descriptionwidth > 229 && descriptionwidth < 460){
							$("#descriptioninfobar").html("Average");	
						}
						else if (descriptionwidth > 459 && descriptionwidth < 690) {
							$("#descriptioninfobar").html("Well Done!!");
						}
						else if (descriptionwidth > 689 && descriptionwidth < 920 ) {
							$("#descriptioninfobar").html("Excellent");
						}
						else if (descriptionwidth > 1000) {
							$("#descriptioninfobar").html("Too Big");
						}

			var descriptionchar = $(".descriptionchar").val();
			var descriptionlength = $(".descriptionchar").val().length;
			$(".descriptionlen").html(descriptionlength);

			if(descriptionwidth > 923){
				document.getElementById('play').play();
			}

			if (descriptionwidth <= 923 ) {
				var seodesc = descriptionchar.slice(0, descriptionlength)
				$(".snippet-description").html(seodesc);
			}else if (descriptionlength > 155 && descriptionwidth < 923) {
				var seodesc = descriptionchar.slice(0, 165)
				$(".snippet-description").html(seodesc + "...");
			}else{
				var seodesc = descriptionchar.slice(0, 155)
				$(".snippet-description").html(seodesc + "...");
			}


			if (descriptionwidth < 1) {
				$(".snippet-description").html("Write your meta description to tell the Google users that you are the best in your industry!<br><strong>Tip: Use natural language rather than keyword stuffing.</strong>");	
			}
		};