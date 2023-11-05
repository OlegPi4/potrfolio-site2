
/*---------События------------*/

/*Загрузка документа адаптация блока Story*/
window.addEventListener('DOMContentLoaded', () => {
   adaptStoryFrame();
}, false)
/*Изменение размера окна адаптация блока Story*/
window.addEventListener('resize', () => {
   adaptStoryFrame();
}, false)

/*Запуск видеофрагмента блока Story при нажатии на кнопку "play"*/

let elemPlay = document.querySelector('.video__a')

elemPlay.addEventListener('click', videoPlay)
/*Запуск видеофрагмента блока Story при нажатии на кнопку "lets get started"*/
let elemButton = document.querySelector('.story__a')
elemButton.addEventListener('click', videoPlay)   

/*-----------Функции-------------*/

/*Адаптация блока Story - видеофрагмента на изменение размера окна*/
function adaptStoryFrame() {
   const docWidth = document.documentElement.clientWidth
   const videoFrame = document.querySelector('.video-place');
   let widthFrameStr = '896px',
      heightFrameStr = '516px',
      widthFrame = 896,
      heightFrame = 516
   if ((docWidth > 1031)&&(docWidth <= 1500)) {
      widthFrame = Math.round(docWidth/1.719);
      heightFrame = Math.round(docWidth/2.98);
      widthFrameStr = widthFrame + 'px';
      heightFrameStr = heightFrame + 'px';
   }  else if (docWidth <= 1031) {
      widthFrame = Math.round((docWidth - 30) / 1.1);
      heightFrame = Math.round((docWidth - 30) / 1.1 / 1.78);
      widthFrameStr = widthFrame + 'px';
      heightFrameStr = heightFrame + 'px';
   }
   /* Условие для адаптации при воспроизвелении видео и без.*/   
   if (videoFrame.dataset.video == 1) { 
      videoFrame.style.cssText += `
         width: ${widthFrameStr};
         height: ${heightFrameStr};
         background: url('');   
         background-color: var(--background1);      
      `;   
      videoFrame.innerHTML = `
      <video id="video" autoplay controls width='${widthFrame}' height='${heightFrame}' src="../dist/video/HistoricalDrawings.mp4"></video>;
      `;
      endVideo();
   } else {
      videoFrame.style.cssText += `
        width: ${widthFrameStr};
        height: ${heightFrameStr};
       `;   
   }

}
   
 /*Запуск видеофрагмента блока Story*/
function videoPlay () {
   const videoFrame = document.querySelector('.video-place');
   videoFrame.dataset.video = 1
   adaptStoryFrame();
}

/*Завершение видео, востановление исходного вида */
function endVideo() { 
   let video = document.getElementsByTagName('video');
   const videoFrame = document.querySelector('.video-place');
   video = video[0];
   video.addEventListener('ended', function() {
      video.remove();
      videoFrame.innerHTML = `
         <div class="video__a" name="a-play">
            <a href="#!" class="video__a__play">
               <i class="icon-play-circled2"></i>
            </a>    
         </div>
      `;
      videoFrame.style.cssText += `
         background: url('../img/story-img.png') 50%/cover no-repeat;
        `; 
   videoFrame.dataset.video = 0
   }, false)
}

 