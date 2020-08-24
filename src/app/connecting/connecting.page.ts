import { Component, OnInit } from '@angular/core';

// var audio = new Audio('assets/mp3/call.mp3');
// audio.onended = function(){
//   const alert = document.createElement('ion-alert');
//   alert.header = '통화가 종료되었습니다.';
//   alert.subHeader = '';
//   alert.message = '다시걸기를 누르시면 긴급상황실과 다시 연결됩니다.';
//   alert.buttons = [
//     {
//       text: '다시걸기',
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
// };

@Component({
  selector: 'app-connecting',
  templateUrl: './connecting.page.html',
  styleUrls: ['./connecting.page.scss'],
})
export class ConnectingPage implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }

  ionViewWillEnter(){
    // audio.play();
  }

  ionViewWillLeave(){
    // audio.pause();
    // audio.currentTime = 0;
  }

}
