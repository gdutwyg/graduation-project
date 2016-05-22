$(function(){

            
              
        // 全屏滚动开始
        $('#fullpage').fullpage({
          menu: "#menu",
          scrollingSpeed: 1e3,
          anchors: ["page1", "page2", "page3", "page4", "page5","page6"],
          loopBottom:true,
          loopTop:true,
          afterLoad: function(anchorLink,index){          
                        if(index == 1){
                                $('#summary').find('p')
                                .animate( { left: '0' },1000);

                        }


                     },
          onLeave:   function(index, direction){

                        if(index == '1'){
                                $('.summary').find('p').delay(500)
                                .animate({  left: '-120%' }, 1000);

                        }
                    }


         
        })

        // 全屏滚动结束
        // 
        // tab切换
        $(' #zigbee ul li').click(function(){
          $(this).addClass('active').siblings().removeClass('active');
          var index=$(this).index();
          console.log(index);
            $('#zigbee .fp-tableCell>div').eq(index).show().siblings('div').hide();


        })
         $(' #cloud ul li').click(function(){
          $(this).addClass('active').siblings().removeClass('active');
          var index=$(this).index();
          console.log(index);
            $('#cloud .fp-tableCell>div').eq(index).show().siblings('div').hide();


        })
        
      })

       