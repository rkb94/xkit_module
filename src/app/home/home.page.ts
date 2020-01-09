import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HammerGestureConfig } from '@angular/platform-browser';

var flag = 0;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  percentage = 0.05;
  public pressState: string = "released";
  protected interval: any;

  constructor(public router: Router, public alertController: AlertController, public navCtrl: NavController) {}

  ionViewWillLeave(){
    this.percentage = 0.05;
    flag = 0;
  }

  onPress($event){
    this.pressState = 'pressing';
    this.startInterval();
    console.log("block");
  }
  
  onPressUp($event){
    this.pressState = 'released';
    this.stopInterval();
    console.log("none");
  }

  errorAlert($event){
    const alert = document.createElement('ion-alert');
    alert.header = '지문인식에 실패했습니다!';
    alert.subHeader = '';
    alert.message = '천천히 지문을 다시 인식해주세요.';
    alert.buttons = [
      {
        text: '확인',
        handler: () => {
          console.log("success");
        }
      }
    ];
    document.body.appendChild(alert);
    return alert.present();
  }
  
  success(){
    if(this.percentage >= 1.0 && flag == 0){
      flag = 1;
      this.stopInterval();
      const alert = document.createElement('ion-alert');
      alert.header = '엑스파일러 신원확인 결과';
      alert.subHeader = '';
      alert.message = '엑스파일러 신원이 인증되었습니다!';
      alert.buttons = [
        {
          text: '확인',
          handler: () => {
            this.percentage = 0.05;
            flag = 0;
            console.log("success");
            this.stopInterval();
          }
        }
      ];
      this.percentage = 0.05;
      document.body.appendChild(alert);
      this.router.navigate(['/call']);
      this.stopInterval();
      return alert.present();
    } else if(flag == 0){
      this.percentage = this.percentage + 0.1;
    }
  }
  
  startInterval(){
    this.interval = setInterval(() => { 
      this.success();
   }, 200);
  }


  stopInterval(){
    clearInterval(this.interval);
  }

}
