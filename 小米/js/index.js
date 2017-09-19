window.onload=function(){
	let aside=document.getElementsByClassName('aside')[0];
	let lis=aside.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
  let bannerimg=document.getElementsByClassName('bannerimg')[0];
  let bannerimgli=bannerimg.getElementsByTagName('li');
  let dian=document.getElementsByClassName('dian')[0];
  let dianli=dian.getElementsByTagName('li');
  let banner=document.getElementsByClassName('banner')[0];
  let lefts=document.getElementsByClassName('banner-left')[0];
  let rights=document.getElementsByClassName('banner-right')[0];
	for(let i=0;i<lis.length;i++){
       lis[i].onmouseover=function(){
       	item[i].style.display='block';
       }
       lis[i].onmouseout=function(){
       	item[i].style.display='none';
       }
	}
	// banner点
	let now=0;
	for(let i=0;i<dianli.length;i++){
	     dianli[i].onclick=function(){
       bannerimgli[now].style.display='none';
       bannerimgli[i].style.display='block';
       now=i;
   }
	}
      // console.log(banner1);
      //img自动
      let t;
      t=setInterval(move,3000);
      let num=0;
      function move(){  
            num++; 
            if(num==bannerimgli.length){
             num=0;
             }
            for(let i=0;i<bannerimgli.length;i++){
                bannerimgli[i].style.display="none";
                dianli[i].style.background='#a2a2a2';
            }
            bannerimgli[num].style.display="block";
            dianli[num].style.border="3px solid #a2a2a2"
            dianli[num].style.background='#f1f1f1';
      }
      function movel(){  
            num--; 
            if(num<0){
               num=bannerimgli.length-1;
             }
            for(let i=0;i<bannerimgli.length;i++){
                bannerimgli[i].style.display="none";
                dianli[i].style.background='#a2a2a2';
            }
            bannerimgli[num].style.display="block";
            dianli[num].style.border="3px solid #a2a2a2"
            dianli[num].style.background='#f1f1f1';
      }
      //鼠标移入之后停止，移除继续
            banner.onmouseover=function(){
                  clearInterval(t);
            }
            banner.onmouseout=function(){
                  // move();
                 t=setInterval(move,3000); 
            }
      //banner点
          for(let i=0;i<dianli.length;i++){
             dianli[i].onclick=function(){
                  for(let i=0;i<bannerimgli.length;i++){
                    bannerimgli[i].style.display='none';
                    dianli[i].style.background='#a2a2a2';
                  }
                   bannerimgli[i].style.display='block';
                   dianli[i].style.border="3px solid #a2a2a2"
                   dianli[i].style.background='#f1f1f1';
                   num=i;
             }
            } 
            lefts.onclick=function(){
                 movel();
            }
            rights.onclick=function(){
                 move();
            }





      //封装函数getClass
      function getClass(classname,ranger){
      ranger=ranger?ranger:document;
      ranger=ranger||document;
      if(document.getElementsByClassName){
      return ranger.getElementsByClassName(classname);
      }else{
            var newarr=[];
            var all=ranger.getElementsByTagName('*');
            for(let i=0;i<all.length;i++){
                  if(CheckClass(all[i].className,classname)){
                 newarr.push(all[i]);
                  }
            }
      }return newarr;
}     
      //简单调用方法
      /*  $(#box)--id
      $(.one)--class
      $(div)--tag*/
      function $(select){
            var first=select.charAt(0);
            if(first=='.'){
                return getClass(select.substring(1));
            }
            else if(first=='#'){
                  return document.getElementById(select.substring(1));
            }
            else if(/^[a-z][a-z1-6s]{0,7}$/.test(select)){
               return document.getElementsByTagName(select);
            }
      }

	
}