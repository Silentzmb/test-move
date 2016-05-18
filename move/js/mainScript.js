//JQuery
$(document).ready(function(){ 

	//表面积点击事件
	$(".area-btn").click(function(){
		$(".method-btn-wrap").show()
	})

	//方法一按钮点击事件
	$(".method-first-btn").click(function(){
		$(".method-btn").removeClass('method-btn-press')
		$(this).addClass('method-btn-press')
		$(".method-second").hide()
		$(".cubage-warp").hide()
		$(".method-first").show()
		$(".method-first .small-part-area").find(".small-part-area-title").show()
	})

	//上半部分表面积
	$(".method-first .small-part-area").find(".small-part-area-title").click(function(){
		$(".cube-box2").removeClass('cube-bg-red')
		var index = 0;
		var smallTimer = setInterval(function(){
			index += 1;
			if(index == "1"){  //图形闪动
				setTimeout(function(){
					$(".cube-box2").hide()
				},300)
				setTimeout(function(){
					$(".cube-box2").show()
				},500)
				setTimeout(function(){
					$(".cube-box2").hide()
				},700)
				setTimeout(function(){
					$(".cube-box2").show()
				},900)
			}else if(index == "3"){  //上面变红
				$(".cube-box2-front").removeClass('cube-bg-white')
				$(".cube-box2-right").removeClass('cube-bg-white')
				$(".cube-box2-up").addClass("cube-bg-red")
				setTimeout(function(){
					$(".cube-box2-up").removeClass("cube-bg-red")
				},500)
				setTimeout(function(){
					$(".cube-box2-up").addClass("cube-bg-red")
				},700)
			}else if(index == "5"){  //右面变红
				$(".cube-box2-right").addClass("cube-bg-red")
				setTimeout(function(){
					$(".cube-box2-right").removeClass("cube-bg-red")
				},500)
				setTimeout(function(){
					$(".cube-box2-right").addClass("cube-bg-red")
				},700)
			}else if(index == "7"){ //后面变红
				$(".cube-box2-behind").addClass("cube-bg-red")
				setTimeout(function(){
					$(".cube-box2-behind").removeClass("cube-bg-red")
				},500)
				setTimeout(function(){
					$(".cube-box2-behind").addClass("cube-bg-red")
				},700)
			}else if(index == "9"){ //左面变红
				$(".cube-box2-left").addClass("cube-bg-red")
				setTimeout(function(){
					$(".cube-box2-left").removeClass("cube-bg-red")
				},500)
				setTimeout(function(){
					$(".cube-box2-left").addClass("cube-bg-red")
				},700)
			}else if(index == "11"){ //前面变红
				$(".cube-box2-front").addClass("cube-bg-red")
				setTimeout(function(){
					$(".cube-box2-front").removeClass("cube-bg-red")
				},500)
				setTimeout(function(){
					$(".cube-box2-front").addClass("cube-bg-red")
				},700)
			}else if(index == "13"){
				$(".method-first .small-part-area").find("span").show()
				$(".method-first .small-part-area").find("p").show()
				$(".cube-box2").removeClass("cube-bg-red")
				$(".method-first .large-part-area").find(".small-part-area-title").show()
				clearInterval(smallTimer )
			}			
		},1000)
	})

	//下半部分表面积
	$(".method-first .large-part-area").find(".small-part-area-title").click(function(){
		$(".cube-box1").removeClass("cube-bg-red")
		var index = 0
		var largeTimer = setInterval(function(){
			index += 1
			if(index == "1"){
				setTimeout(function(){
					$(".cube-box1").hide()
				},300)
				setTimeout(function(){
					$(".cube-box1").show()
				},500)
				setTimeout(function(){
					$(".cube-box1").hide()
				},700)
				setTimeout(function(){
					$(".cube-box1").show()
				},900)
			}
		},1000)

	})
	//方法二按钮点击事件
	$(".method-second-btn").click(function(){
		$(".method-btn").removeClass('method-btn-press')
		$(this).addClass('method-btn-press')
		$(".method-first").hide()
		$(".cubage-warp").hide()
		$(".method-second").show()
		$(".method-second .method-second-sum-area").find(".small-part-area-title").show()
	})
}); 