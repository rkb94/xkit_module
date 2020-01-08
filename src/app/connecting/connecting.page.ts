import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// var inputPassword = {pw};

var audio = new Audio('assets/mp3/call-2.mp3');
audio.onended = function(){
  const alert = document.createElement('ion-alert');
  alert.header = '통화가 종료되었습니다.';
  alert.subHeader = '';
  alert.message = '다시걸기를 누르시면 긴급상황실과 다시 연결됩니다.';
  alert.buttons = [
    {
      text: '다시 걸기',
      handler: () => {
        audio.play();
        console.log('recall');
      }
    },
    {
      text: '취소',
      handler: () => {
        console.log('canceled');
      }
    }
  ];
  document.body.appendChild(alert);
  audio.currentTime = 0;
  return alert.present();
};

@Component({
  selector: 'app-connecting',
  templateUrl: './connecting.page.html',
  styleUrls: ['./connecting.page.scss'],
})
export class ConnectingPage implements OnInit {
  
  constructor(public router: Router) { }

  password1: string;
  password2: string;
  
  ngOnInit() {
  }

  audioPlay(){
    if(audio.currentTime > 0){
      console.log(audio.currentTime);
      const alert = document.createElement('ion-alert');
      alert.header = '아직 통화중입니다.';
      alert.subHeader = '';
      alert.message = '통화가 종료된 후 눌러주세요.';
      alert.buttons = [
        {
          text: '확인',
        }
      ];
      document.body.appendChild(alert);
      return alert.present();
    } else {
      audio.play();
    }
  }

  ionViewWillEnter(){
    audio.play();
  }

  ionViewWillLeave(){
    audio.pause();
    audio.currentTime = 0;
  }

  checkPassword($event1, $event2){
    this.password1 = $event1;
    this.password2 = $event2;
    if((this.password1 == "SBW" || this.password1 == "sbw") && (this.password2 == "32db" || this.password2 == "32DB")){
      this.router.navigate(['/home']);
    } else {
      const alert = document.createElement('ion-alert');
      alert.header = '비밀번호가 틀렸습니다!';
      alert.subHeader = '';
      alert.message = '비밀번호를 다시 입력해주세요.';
      alert.buttons = [
        {
          text: '확인',
        }
      ];
      document.body.appendChild(alert);
      return alert.present();
    }
  }

}
