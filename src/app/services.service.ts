import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  path = "assets/images/";

  vehicleList = [
    {
      imageUrl: this.path + '1.jpg', 
      title: 'Suzuki Wagon R 2021',
      type: 'Car',
      make: 'Suzuki',
      location: 'Faisalabad',
      dateAdded: 'Apr 15, 2022',
      ratings: 4,
      model: 2021,
      price: 2230000,
      kmsUsed: '14,750 km',
      transmission: 'Manual', 
      color: 'White',
      engineCapacity: 1000,
      registerdIn: 'Punjab',
      sellerName: 'Hareem Faisal',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '2.jpg', 
      title: 'Toyota Fortuner 2021',
      type: 'Car',
      make: 'Toyota',
      location: 'Lahore',
      dateAdded: 'Apr 15, 2022',
      ratings: 5,
      model: 2021,
      price: 11100000,
      kmsUsed: '20,000 km',
      transmission: 'Automatic', 
      color: 'White',
      engineCapacity: 2800,
      registerdIn: 'Lahore',
      sellerName: 'Zaynab Waqas',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '3.jpg', 
      title: 'Honda Fit 2016',
      type: 'Car',
      make: 'Honda',
      location: 'Islamabad',
      dateAdded: 'Apr 15, 2022',
      ratings: 3,
      model: 2016,
      price: 3050000,
      kmsUsed: '125,000 km',
      transmission: 'Automatic', 
      color: 'Black',
      engineCapacity: 1500,
      registerdIn: 'Lahore',
      sellerName: 'Hammad Naseer',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '4.jpg', 
      title: 'Suzuki Mehran 2011',
      type: 'Car',
      make: 'Suzuki',
      location: 'Islamabad',
      dateAdded: 'Apr 15, 2022',
      ratings: 3,
      model: 2011,
      price: 675000,
      kmsUsed: '110,000 km',
      transmission: 'Manual', 
      color: 'White',
      engineCapacity: 800,
      registerdIn: 'Islamabad',
      sellerName: 'Ammar Haider',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '5.jpg', 
      title: 'Hyundai Tucson 2022',
      type: 'Car',
      make: 'Hyundai',
      location: 'Islamabad',
      dateAdded: 'Apr 15, 2022',
      ratings: 5,
      model: 2022,
      price: 6750000,
      kmsUsed: '40 km',
      transmission: 'Automatic', 
      color: 'Silver',
      engineCapacity: 2000,
      registerdIn: 'Islamabad',
      sellerName: 'Dr. Adnan Tariq',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '6.jpg', 
      title: 'Daihatsu Rocky 2020',
      type: 'Car',
      make: 'Daihatsu',
      location: 'Karachi',
      dateAdded: 'Apr 16, 2022',
      ratings: 3,
      model: 2020,
      price: 4500000,
      kmsUsed: '18,349  km',
      transmission: 'Automatic', 
      color: 'Black',
      engineCapacity: 1000,
      registerdIn: 'Un-registered',
      sellerName: 'Yasir Hassan',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '7.jpg', 
      title: 'Mitsubishi Pajero Mini Limited 2011',
      type: 'Car',
      make: 'Mitsubishi',
      location: 'Islamabad',
      dateAdded: 'Apr 16, 2022',
      ratings: 4,
      model: 2011,
      price: 1800000,
      kmsUsed: '84,000 km',
      transmission: 'Automatic', 
      color: 'Silver',
      engineCapacity: 660,
      registerdIn: 'Islamabad',
      sellerName: 'Muhammad Ibrahim',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '8.jpg', 
      title: 'KIA Picanto 1.0 AT 2021',
      type: 'Car',
      make: 'KIA',
      location: 'Islamabad',
      dateAdded: 'Apr 16, 2022',
      ratings: 4,
      model: 2021,
      price: 2450000,
      kmsUsed: '10,500 km',
      transmission: 'Automatic', 
      color: 'Silver',
      engineCapacity: 1000,
      registerdIn: 'Islamabad',
      sellerName: 'Aamir Malik',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '9.jpg', 
      title: 'Yamaha YBR 125 2021',
      type: 'Bike',
      make: 'Yamaha',
      location: 'Lahore',
      dateAdded: 'Apr 15, 2022',
      ratings: 3,
      model: 2021,
      price: 210000,
      kmsUsed: '13,000 km',
      transmission: '4 Stroke', 
      color: 'Black',
      engineCapacity: 125,
      registerdIn: 'Punjab',
      sellerName: 'Scrooj Shehryar',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '10.jpg', 
      title: 'Honda CG 125 2021',
      type: 'Bike',
      make: 'Honda',
      location: 'Hyderabad',
      dateAdded: 'Apr 15, 2022',
      ratings: 5,
      model: 2021,
      price: 130000,
      kmsUsed: '6,000 km',
      transmission: '4 Stroke', 
      color: 'Black',
      engineCapacity: 125,
      registerdIn: 'Hyderabad',
      sellerName: 'Furqan Tariq',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '11.jpg', 
      title: 'Chinese Bikes Lifan 2022',
      type: 'Bike',
      make: 'Chinese Bikes',
      location: 'Lahore',
      dateAdded: 'Apr 15, 2022',
      ratings: 5,
      model: 2022,
      price: 725000,
      kmsUsed: '1 km',
      transmission: '4 Stroke', 
      color: 'Black',
      engineCapacity: 200,
      registerdIn: 'Un-registerd',
      sellerName: 'Usama Ejaz',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
    {
      imageUrl: this.path + '12.jpg', 
      title: 'United US 125 Euro II 2022',
      type: 'Bike',
      make: 'United',
      location: 'Lahore',
      dateAdded: 'Apr 15, 2022',
      ratings: 5,
      model: 2022,
      price: 90000,
      kmsUsed: '400 km',
      transmission: '4 Stroke', 
      color: 'Red',
      engineCapacity: 125,
      registerdIn: 'Lahore',
      sellerName: 'Ahsan Tariq',
      sellerEmail: 'seller@mywheels.com',
      sellerContactNumber: '0300-1234567',
      sellerComments: 'This is the best car in the world! Please buy! I am broke!'
    },
  ]
}
