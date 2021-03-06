import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  // checked_options = [];
  // realChecked = [["1"], ["6"], ["8"], ["12"]];
  // row1_options = [
  //   {name:'OptionA', value:'1', imgUrl:'../../assets/imgs/icon/1.png', checked:false},
  //   {name:'OptionB', value:'2', imgUrl:'../../assets/imgs/icon/2.png', checked:false},
  //   {name:'OptionC', value:'3', imgUrl:'../../assets/imgs/icon/3.png', checked:false}
  // ];
  // row2_options = [
  //   {name:'OptionA', value:'4', imgUrl:'../../assets/imgs/icon/4.png', checked:false},
  //   {name:'OptionB', value:'5', imgUrl:'../../assets/imgs/icon/5.png', checked:false},
  //   {name:'OptionC', value:'6', imgUrl:'../../assets/imgs/icon/6.png', checked:false}
  // ];
  // row3_options = [
  //   {name:'OptionA', value:'7', imgUrl:'../../assets/imgs/icon/7.png', checked:false},
  //   {name:'OptionB', value:'8', imgUrl:'../../assets/imgs/icon/8.png', checked:false},
  //   {name:'OptionC', value:'9', imgUrl:'../../assets/imgs/icon/9.png', checked:false}
  // ];
  // row4_options = [
  //   {name:'OptionA', value:'10', imgUrl:'../../assets/imgs/icon/10.png', checked:false},
  //   {name:'OptionB', value:'11', imgUrl:'../../assets/imgs/icon/11.png', checked:false},
  //   {name:'OptionC', value:'12', imgUrl:'../../assets/imgs/icon/12.png', checked:false}
  // ];
  inputPassword = "";
  realPassword = "13184";

  constructor(private router: Router, public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '잘못된 입력입니다.',
      message: '올바르게 입력해주세요.',
      buttons: ['확인']
    });

    await alert.present();
  }

  onValueChange(value) {
    if (this.inputPassword.length == 5) {
      return false;
    } else {
      this.inputPassword += value;
      console.log(this.inputPassword);
    }
  }

  checkPassword(input) {
    if (this.realPassword == input) {
      return true;
    } else {
      return false;
    }
  }

  go() {
    // if (value) {
    //   this.router.navigate(['home']);
    // } else {
    //   this.presentAlert();
    // }
    if (this.checkPassword(this.inputPassword)) {
      this.router.navigate(['home']);
    } else {
      this.presentAlert();
    }
  }

  inputNumeric(number) {
    this.onValueChange(number);
  }

  deleteNumeric() {
    this.inputPassword = this.inputPassword.slice(0, -1);
  }

  // selectedOptions() {
  //   this.checked_options = [];
  //   this.checked_options.push(this.row1_options
  //             .filter(opt => opt.checked)
  //             .map(opt => opt.value));
  //   this.checked_options.push(this.row2_options
  //               .filter(opt => opt.checked)
  //               .map(opt => opt.value));
  //   this.checked_options.push(this.row3_options
  //             .filter(opt => opt.checked)
  //             .map(opt => opt.value));
  //   this.checked_options.push(this.row4_options
  //     .filter(opt => opt.checked)
  //     .map(opt => opt.value));
  //   console.log(this.checked_options);
  //   console.log(this.realChecked);

  //   this.go(JSON.stringify(this.checked_options) == JSON.stringify(this.realChecked));
  // }

  ngOnInit() {
  }

}
