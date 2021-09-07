import { Component, OnInit } from '@angular/core';

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  name: string = '';
  speed: number = 0;
  model: string = '';
  colors: Colors = {
    car: '',
    salon: '',
    wheels: '',
  };
  options: string[] = [];
  isEdit: boolean = false;

  constructor() {}

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver',
    };
    this.options = ['RS8', 'Автопилот', 'Авто Паркинг'];
  }

  showEdit() {
    // console.log('kjhgyft');
    this.isEdit = !this.isEdit;
  }

  addOpt(option: string) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option: string) {
    console.log(option);
    this.options = this.options.filter((opt) => opt !== option);
  }

  carSelect(carName: string) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.speed = 200;
      this.model = 'М5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Серебристый',
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
    } else if (carName === 'audi') {
      this.name = 'AUDI';
      this.speed = 280;
      this.model = 'М5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Серебристый',
      };
      this.options = ['ABS', 'Авто Паркинг'];
    } else {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C180';
      this.colors = {
        car: 'Белый',
        salon: 'Красный',
        wheels: 'Черный',
      };
      this.options = ['Круиз контроль', 'Авто Паркинг'];
    }
  }
}
