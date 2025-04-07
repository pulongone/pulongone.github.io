$(function(){
	var $list_scrollTop = 0

	$('#g-nav a').click(function(e){
		var $this = $(this)
		var $href = $this.attr('href')
		$('#g-nav a').removeClass('active')
		$this.addClass('active')
		$('.list-page').removeClass('active')
		$($href).addClass('active')
		e.preventDefault()
	})

	$('.list-page a').click(function(e){
		var $this = $(this)
		var $href = $this.attr('href')
		//msg_trigger('msg-detail',$href)
		$list_scrollTop = $('html,body').scrollTop()
		$('.list-page').removeClass('active')
		$('#list-detail').addClass('active')
		$('#list-detail-img').attr('src','')
		$('#list-detail-img').attr('src',$href)
		$('body,html').animate({scrollTop:0},0)
		e.preventDefault()
	})

	$('#list-detail-close').click(function(){
		$('#g-nav a.active').click()
		$('body,html').animate({scrollTop:$list_scrollTop},0)		
	})

	$('.is-anchor').click(function(){
		var $target = $(this).attr('href')
		var $targetX = $($target).offset().top
		$('body,html').animate({scrollTop:$targetX},1000)
		return false
	})

})

function on_page_loaded(){
}

$(window).scroll(function() {
	detectScroll();
});