$(function(){
      
            
              
        // 全屏滚动开始
        $('#fullpage').fullpage({
          menu: "#menu",
          scrollingSpeed: 1e3,
          anchors: ["page1", "page2", "page3", "page4", "page5","page6","page7"],
          loopBottom:true,
          loopTop:true,
          afterLoad: function(anchorLink,index){          
                        if(index == 1){
                                $('#summary').find('p')
                                .animate( { left: '0' },1000);
                                $('#summary').find('h3')
                                .animate( { top: '0' },1000);
                        }
                        if(index == 5){
                                $('#zigbee .fp-tableCell').children('ul')
                                .animate( { right: '0' },1000);
                                $('#zigbee .fp-tableCell').children('div')
                                .animate( { bottom: '0' },1000);
                        }
                        if(index == 6){
                                $('#cloud ').children('div').fadeIn(2000);

                         }

     




                     },
          onLeave:   function(index, direction){

                        if(index == '1'){
                                $('#summary').find('p').delay(500)
                                .animate({  left: '-120%' }, 1000);
                                $('#summary').find('h3').delay(500)
                                .animate({  top: '-120%' }, 1000);
                        }
                        if(index == 5){
                                $('#zigbee .fp-tableCell').children('ul').delay(500)
                                .animate( { right: '-120%' },1000);
                                $('#zigbee .fp-tableCell').children('div').delay(500)
                                .animate( { bottom: '-140%' },1000);
                        }
                        if(index == 6){
                                $('#cloud ').children('div').fadeOut(2000);

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
          $(' #sensor ul li').click(function(){
          $(this).addClass('active').siblings().removeClass('active');
          var index=$(this).index();
          console.log(index);
            $('#sensor .fp-tableCell>div').eq(index).show().siblings('div').hide();

        })
              
        
      })

       