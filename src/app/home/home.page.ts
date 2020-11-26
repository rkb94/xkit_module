import { Component, OnInit, NgModule } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Vibration } from '@ionic-native/vibration/ngx';

@NgModule({
  entryComponents: [ModalPage],
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // public bell = new Audio('assets/mp3/bell.mp3');
  public audio = new Audio('assets/mp3/A-1.mp3');
  public endVideoUrl = '../../assets/imgs/end-button.png';
  public startVideoUrl = '../../assets/imgs/play-button.png';
  public startImageUrl = '/assets/imgs/A-1.gif';
  public endImageUrl = '/assets/imgs/A-2.png';
  public play = false;
  
  public image = '../../assets/imgs/play-button.png';
  public gifImage = '/assets/imgs/A-2.png';
  constructor(public modalController: ModalController, public alertController: AlertController, public vibration: Vibration) {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '증거기록실 음성파일이 모두 재생되었습니다.',
      message: '다시 들으시려면 다시듣기를 눌러주세요.',
      buttons: [
        {
          text: '다시듣기',
          handler: () => {
            this.playAudio();
          }
        }, {
          text: '취소'
        }
      ]
    });

    await alert.present();
  }

  audioControl() {
    if (this.play) {
      this.stopAudio();
    } else {
      this.playAudio();
    }
  }

  stopAudio() {
    this.vibration.vibrate(15);
    this.play = false;
    this.image = this.startVideoUrl;
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  playAudio() {
    this.vibration.vibrate(15);
    this.play = true;
    this.audio.play();
    this.image = this.endVideoUrl;
    this.audio.onended = () =>{
      this.play = false;
      this.image = this.startVideoUrl;
    }
  }

  // playAudio() {
  //   this.vibration.vibrate(15);
  //   document.getElementById("call_button").setAttribute("color", "danger");
  //   document.getElementById("call_button").innerText = "전화 중...";
  //   document.getElementById("call_button").setAttribute("disabled", "true");
  //   this.play = false;
  //   this.bell.pause();
  //   this.bell.currentTime = 0;
  //   this.audio.play();
  //   this.audio.onended = () =>{
  //     document.getElementById("call_button").setAttribute("disabled", "false");
  //     document.getElementById("call_button").setAttribute("color", "success");
  //     document.getElementById("call_button").innerText = "다시 듣기";
  //   }
  // }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    // this.bell.play();
    // this.bell.onended = () => {
    //   if (this.play){
    //     this.bell.currentTime = 0;
    //     this.bell.play();
    //   }
    // }
  }
    
}
