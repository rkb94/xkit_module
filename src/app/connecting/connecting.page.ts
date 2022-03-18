import { Component, OnInit } from '@angular/core';

var audio = new Audio('assets/mp3/audio.mp3');
var visibility = true;

audio.onended = function(){
  const alert = document.createElement('ion-alert');
  alert.header = '듣기가 종료되었습니다.';
  alert.subHeader = '';
  alert.message = '';
  alert.buttons = [
    {
      text: '다시듣기',
      handler: () => {
        audio.play();
        console.log('recall');
      }
    },
    {
      text: '취소',
      handler: () => {
        document.getElementById('tape-image').style.display = "block";
        document.getElementById('tape-play').style.display = "none";
        document.getElementById('unClicked').style.display = "block";
        document.getElementById('clicked').style.display = "none";
        console.log('canceled');
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
    let tape: HTMLElement = document.getElementById('tape-image');
    
    if (tape.style.display == "none" || visibility) {
      this.play();
    } else {
      this.unPlay();
    }

    visibility = false;
  }

  play(){
    let tape: HTMLElement = document.getElementById('tape-image');
    let tapePlay: HTMLElement = document.getElementById('tape-play');
    let unClicked: HTMLElement = document.getElementById('unClicked');
    let clicked: HTMLElement = document.getElementById('clicked');
    tape.setAttribute("style", "width: 94%; display: block;");
    tapePlay.setAttribute("style", "width: 94%; display: none;");
    unClicked.setAttribute("style", "width: 94%; display: block;");
    clicked.setAttribute("style", "width: 94%; display: none;");
    this.ionViewWillLeave();
  }

  unPlay(){
    let tape: HTMLElement = document.getElementById('tape-image');
    let tapePlay: HTMLElement = document.getElementById('tape-play');
    let unClicked: HTMLElement = document.getElementById('unClicked');
    let clicked: HTMLElement = document.getElementById('clicked');
    tape.setAttribute("style", "width: 94%; display: none;");
    tapePlay.setAttribute("style", "width: 94%; display: block;");
    unClicked.setAttribute("style", "width: 94%; display: none;");
    clicked.setAttribute("style", "width: 94%; display: block;");
  }

  ionViewWillLeave(){
    audio.pause();
    audio.currentTime = 0;
  }
}
