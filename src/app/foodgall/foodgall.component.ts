import { Component, OnInit } from '@angular/core';
import { NonVegDishes } from '../images';
import { VegDishes } from '../images';
import { BothDishes } from '../images';

@Component({
  selector: 'app-foodgall',
  templateUrl: './foodgall.component.html',
  styleUrls: ['./foodgall.component.css']
})
export class FoodgallComponent implements OnInit {

  vegdishes=VegDishes;
  nonVeg=NonVegDishes;
  bothDishes=BothDishes;

  constructor() { }

  ngOnInit(): void {
  }

  dish:any=[];
  totalPrice:number=0;
  cart:number=0;
  dishTypes:any=[];

  dishTypeDetails()
  {
    let selectedValue = (<HTMLSelectElement>document.getElementById('dishType')).value;
    // var selectedValue = (document.getElementById("dishType") as HTMLSelectElement).value;
    console.log(selectedValue);
    
    if(selectedValue === "Veg")
    {
      this.dishTypes = this.vegdishes;
    }
    else if(selectedValue === "Non_Veg")
    {
      this.dishTypes = this.nonVeg;
    }
    else if(selectedValue === "Both")
    {
      this.dishTypes = this.bothDishes;
    }
  }

  onSelect(dishType:any)
  {
    this.dish.push(dishType);
    this.totalPrice += dishType.price;
    this.cart += 1;
  }

  onRelod()
  {
    try{
      location.reload();
    }
    finally{
      alert('Payment Recieved');
    }
  }

}