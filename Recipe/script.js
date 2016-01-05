$(document).ready(function() {
  console.log("Script included!");
});

$('#columnList li').click(function(){
            var check = $(this).children();
            var checkVal = check.attr('value');
            var helper = $('.' + checkVal);
            console.log(helper);
            if(check.is(':checked')){
                check.attr('checked','');
                $.each(helper, function(i, e){
                    $(helper[i]).hide();
                });
            }else{
                check.attr('checked','checked');
                $.each(helper, function(i, e){
                    $(helper[i]).show();
                });
           } 
        });

        $('input[type="checkbox"]').click(function(e){
            e.stopPropagation();
        });

$(document).ready(function(){
    $("span1").click(function(){
        $("#p1").fadeTo("slow", 0.4);
    });
    $("span2").click(function(){
        $("#p2").fadeTo("slow", 0.4);
    });
    $("span3").click(function(){
        $("#p3").fadeTo("slow", 0.4);
    });
});

$(document).ready(function() {
	$("a").click(function(){
		$("img").hide();
	});
});