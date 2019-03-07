
	function callPHPFunction(fn, parameter, element, type){
	var fn=fn;//Name of function written in php, which needs to be calles
	var element = element;//element in which result will be shown
	var parameter = parameter;//Parameters that need to be passed to the php function (it can be an array too)
	var type = type;//type of data to be captured (text, html, val)
	//alert(fn + element + parameter + type);
	$.ajax({
		method: 'get',
		url: '_function.php',//name of page of php
		data:{fn:fn, parameter:parameter},
		async: "false",
		crossDomain: true,
		beforeSend:function(){
			$('#loader').show();
		},
		success:function(data){
			
			//alert(data);
			//alert(JSON.stringify(element));
			if(element=='alrt'){
				Swal.fire({
				  title: 'Successfull',
				  text: "Changes done successlly!fu",
				  type: 'success',
				  showCancelButton: false,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Done!'
				}).then((result) => {
				  if (result.value) {
				    location.reload();
				  }
				});
			}
			
			else{
				if (type == 'val') {
					$(element).val(data);
				}
				if (type == 'text') {
					$(element).text(data);
				}
				if (type == 'html') {
					$(element).html(data);
				}
			}
			
		},
		error:function(ErrorMsg){
			console.log(JSON.stringify(ErrorMsg));
		},
		complete:function(){
			$('#loader').hide();
		}
	});
}


//callPHPFunction('get_cost_element', data, element, 'html'); use this to call the jquery function to run php function