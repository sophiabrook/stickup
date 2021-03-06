jQuery.fn.stickUp =function(){
	var $cur = this,
		curH = $cur.height(),
		curW = $cur.width(),
		offsetTop = $cur.offset().top,
		offsetLeft = $cur.offset().left;

		var $clone = $cur.clone().css({display:'none',visibility:'hideen'}).insertBefore($cur)
	$(window).on('scroll',function(){
		var scrollTop = $(this).scrollTop()
		if(scrollTop>=offsetTop){ 
		    if(!isFixed()){
		      setFixed()
		    }
		  }else{
		    if(isFixed()){
		      unsetFixed()
		    }
		  }
	})
	function isFixed(){
	  return $cur.data('data-fixed') //初始值为false,
	}
	function setFixed(){
	  $cur.data('data-fixed',true)
	  $cur.css({
	    position:'fixed',
	    width:curW,
	    height:curH,
	    left:offsetLeft,
	    // top:offsetTop,
	    top:0,
	    'z-index':999
	  })
	  $clone.show()
	}
	function unsetFixed(){
	  $cur.data('data-fixed',false)
	  $cur.removeAttr('style')
	  $clone.hide()
	}
}
