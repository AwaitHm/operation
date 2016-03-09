(function($){
	var defaults = {
		sum : ".sum",
		num : ".num",
		add : ".add",
		subtract : ".subtract",
		price : ".price"
	}
	$.fn.operations = function(options){
		options = $.extend(defaults,options);
		var price = $(options.price).text(),
        	sum = $(options.sum),
        	num = $(options.num);
	    	$(options.add).click(function(){
	    		var numVal = num.val();
	    		num.val(++numVal);
	    		sum.text(price * numVal);
			});
			$(options.subtract).click(function(){
				var numVal = num.val();
				(numVal > 0) ? num.val(--numVal) : alert("数量必须大于0");
				sum.text(price * numVal);
			});	
			num.on('input',function(){
	    		sum.text($(this).val()*price);		
			});
	}
})(jQuery)
