$(document).ready(function(){
	$("#add-attr").attr("value", "Attribute Add")
	$("#add-attr").removeAttr("value")
	$("#add-prop").prop("checked", true) 
	$("select[multiple]").val();

	console.log($("select[multiple]").val())
	$("ul li").addClass(function (index){
		return "item-" + index
	})
})