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
eventPlay();
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
      widthFrameStr = (widthFrame) + 'px';
      heightFrameStr = (heightFrame) + 'px';
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
      <video id="video" autoplay controls width='${widthFrame+14}' height='${heightFrame+16}' src="../dist/video/HistoricalDrawings.mp4"></video>;
      `;
      endVideo();
   } else {
      videoFrame.style.cssText += `
        width: ${widthFrameStr};
        height: ${heightFrameStr};
        background: url('../dist/img/story-img.png') 50%/cover no-repeat;
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
const endVideo = async() => { 
   let video = document.getElementsByTagName('video');
   video = video[0]; 
     
   /*Обработка клика вне видеофрагмента*/
   // const videoFrame = document.querySelector('.video-place');
   // document.querySelector('body').onclick = function(e) {
   //    if ((e.target != video)&&(videoFrame.dataset.video == 1)) {
   //       if ((e.target != play)||(e.target != getStarted)) {  
   //          console.log(`e.target = ${e.target[0]}`);
   //          closeVideo();   
   //       }
   //    }
   // }

   /*Обработка события - завершения видео */
   video.addEventListener('ended', function() {
     closeVideo() 
   }, false)
   
}

/*ставим обработчик на кнопку "Play"*/
function eventPlay() {
   let elemPlay = document.getElementsByClassName('video__a');
   elemPlay=elemPlay[0];
   elemPlay.addEventListener('click', videoPlay)
}   

function closeVideo () {
   let video = document.getElementsByTagName('video');
   const videoFrame = document.querySelector('.video-place');
   video = video[0];
   video.remove();
   videoFrame.innerHTML = `
      <div class="video__a" name="a-play">
         <a href="#!" class="video__a__play">
            <i class="icon-play-circled2"></i>
         </a>    
      </div>
   `;
   videoFrame.style.cssText += `
      background: url('../dist/img/story-img.png') 50%/cover no-repeat;
     `; 
   videoFrame.dataset.video = 0
   eventPlay();
}