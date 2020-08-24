import { Component, OnInit } from '@angular/core';

// const audio = new Audio('assets/mp3/audio.mp3');
// audio.play();
// audio.onended = function() {
//   const alert = document.createElement('ion-alert');
//   alert.header = '녹음 파일이 종료되었습니다.';
//   alert.subHeader = '';
//   alert.message = '다시 들으시려면 다시 듣기를 눌러주세요.';
//   alert.buttons = [
//     {
//       text: '다시 듣기',
//       handler: () => {
//         audio.play();
//         console.log('recall');
//       }
//     },
//     {
//       text: '취소',
//       handler: () => {
//         console.log('canceled');
//       }
//     }
//   ];
//   document.body.appendChild(alert);
//   return alert.present();
// }

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor() {
  }
  
  ngOnInit() {
  }
    
}
