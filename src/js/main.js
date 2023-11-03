/*-----------Функции-------------*/

/*Адаптация блока Story после загрузки документа*/
function StoryVideo() {
   const screenWidth = window.screen.width;
   const videoFrame = document.querySelector('.video-place');
   let widthFrameStr = '896px',
   heightFrameStr = '516px'
   if ( (screenWidth > 1050)&&(screenWidth <= 1500)) {
      widthFrameStr = Math.round(screenWidth/1.719) + 'px';
      heightFrameStr = Math.round(screenWidth/2.98) + 'px';
   
   }  else if (screenWidth <= 1050) {
      if ((screenWidth - 30) / 1.1 <= 896) {
         widthFrameStr = Math.round((screenWidth - 30) / 1.1 ) + 'px';
         heightFrameStr = Math.round((screenWidth - 30) / 1.1 / 1.78 ) + 'px';
      }
   }
   videoFrame.style.cssText = `
      width: ${widthFrameStr};
      height: ${heightFrameStr};
      `;   
}

/*Адаптация блока Story - видеофрагмента на изменение размера окна*/
function adaptStoryVideo() {

   const screenWidth = window.screen.width;
   const videoFrame = document.querySelector('.video-place');
   let widthFrameStr = '896px',
      heightFrameStr = '516px',
      widthFrame = 906,
      heightFrame = 532
   
   if (+videoFrame.dataset.video == 1) {
      if ( (screenWidth > 1050)&&(screenWidth <= 1500)) {
         widthFrame = Math.round(16+screenWidth/1.719);
         heightFrame = Math.round(22+screenWidth/2.98);
         widthFrameStr = Math.round(screenWidth/1.719) + 'px';
         heightFrameStr = Math.round(screenWidth/2.98) + 'px';
      }  else {
         if (screenWidth <= 1050) {
            widthFrame = Math.round((12+screenWidth - 30) / 1.1);
            heightFrame = Math.round((18+screenWidth - 30) / 1.1 / 1.78);
            widthFrameStr = Math.round((screenWidth - 30) / 1.1) + 'px';
            heightFrameStr = Math.round((screenWidth - 30) / 1.1 / 1.78) + 'px';
         }
      }
   videoFrame.style.cssText = `
      width: ${widthFrameStr};
      height: ${heightFrameStr};
      `;   
   videoFrame.innerHTML = `
      <video  autoplay controls width='${widthFrame}' height='${heightFrame}' src="../dist/video/HistoricalDrawings.mp4"></video>;
      `;
   } else {

      if ( (screenWidth > 1050)&&(screenWidth <= 1500)) {
         console.log('adept 1050-1500');
         widthFrameStr = Math.round(16+screenWidth/1.719) + 'px';
         heightFrameStr = Math.round(22+screenWidth/2.98) + 'px';
         
      }  else  {

         if (screenWidth <= 1050) {
            console.log('adept < 1050 w<896');
            widthFrameStr = Math.round(12+(screenWidth - 30) / 1.1) + 'px';
            heightFrameStr = Math.round(14+(screenWidth - 30) / 1.1 / 1.78) + 'px';
         } 
      }   
      videoFrame.style.cssText += `
         width: ${widthFrameStr};
         height: ${heightFrameStr};
         `;
   }
}

 /*Запуск видеофрагмента блока Story*/
function videoPlay () {
   const screenWidth = window.screen.width;
   const videoFrame = document.querySelector('.video-place');
   let widthFrame = 906,
      heightFrame = 538,
      widthFrameStr = '896px',
      heightFrameStr = '516px'
   if ( (screenWidth > 1050)&&(screenWidth <= 1500)) {
      widthFrame = Math.round(12+screenWidth/1.719);
      heightFrame = Math.round(14+screenWidth/2.98);
      widthFrameStr = Math.round(screenWidth/1.719) + 'px';
      heightFrameStr = Math.round(screenWidth/2.98) + 'px';
   
   }  else {

      if (screenWidth <= 1050) {
         widthFrame = Math.round(12+(screenWidth - 30) / 1.1);
         heightFrame = Math.round(14+(screenWidth - 30) / 1.1 / 1.78);
         widthFrameStr = Math.round((screenWidth - 30) / 1.1 ) + 'px';
         heightFrameStr = Math.round((screenWidth - 30) / 1.1 / 1.78 ) + 'px';
      }
   }
  
   videoFrame.style.cssText = +`
      width: ${widthFrameStr};
      height: ${heightFrameStr};
      `;  
   videoFrame.innerHTML = `
      <video  autoplay controls width='${widthFrame}' height='${heightFrame}' src="../dist/video/HistoricalDrawings.mp4"></video>;
      `;
   videoFrame.dataset.video = 1
}


/*---------События------------*/

/*Загрузка документа адаптация блока Story*/
window.addEventListener('DOMContentLoaded', (e) => {
   //e.stopPropagation();
   adaptStoryVideo();
})
/*Изменение размера окна адаптация блока Story*/
window.addEventListener('resize', (e) => {
   e.stopPropagation();
   adaptStoryVideo();
})

/*Запуск видеофрагмента блока Story при нажатии на кнопку "play"*/
let elemPlay = document.querySelector('.video__a__play')
elemPlay.addEventListener('click', videoPlay)
/*Запуск видеофрагмента блока Story при нажатии на кнопку "lets get started"*/
let elemButton = document.querySelector('.story__a')
elemButton.addEventListener('click', videoPlay)   

/*Закрытие видеофрагмента по щелчку вне видео*/
// document.querySelector('body').onclick = function(e) {
//    const videoFrame = document.querySelector('.video-place');
//    if ((+videoFrame.dataset.video == 1)&&(e.target!=videoFrame)) {
//       videoFrame.innerHTML = `
//       <div class="video__a">
//          <a href="#!" class="video__a__play">
//             <i class="icon-play-circled2"></i>
//          </a>    
//       </div>
//       `;
//    }
// }


 