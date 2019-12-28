import { Component, OnInit } from '@angular/core';

var audio = new Audio('assets/mp3/call.mp3');
audio.onended = function(){
  const alert = document.createElement('ion-alert');
  alert.header = '통화가 종료되었습니다.';
  alert.subHeader = '';
  alert.message = '통화를 다시하려면 뒤로가기를 눌러주세요.';
  alert.buttons = [
    {
      text: '확인',
      handler: () => {
        console.log('ended');
      }
    }
  ];
  document.body.appendChild(alert);
  return alert.present();
};

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
    audio.play();
  }

  ionViewWillLeave(){
    audio.pause();
    audio.currentTime = 0;
  }

}
