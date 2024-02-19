import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() viewNum = 0
  @Input() graphNum = 0
  currGraph = 0

  total = [1325, 4876, 3044, 5493, 1043]

  items = []
  
  latam = 253
  apac = 300
  africa = 240
  eur = 100
  na = 432

  poor = 300
  urbp = 240
  women = 100
  children = 432
  indig = 253
  lgbt = 34
  pwd = 123
  mental = 565
  senior = 245
  brokfam = 463
  orph = 256
  ousy =653
  pris = 125
  unemp = 564
  oth = 523

  serv = 300
  cbl = 240
  ri = 100
  ro = 432
  cc = 253
  proj = 565
  res = 245
  bs = 256
  ms = 653

  bro = 680
  respeep = 840
  teach = 411
  supp = 317
  kind = 895
  gra = 152
  hs = 630
  coll = 420
  grad = 604
  alum = 763
  par = 839
  vol = 418


  regions = [
    {desc: 'latam', ct: 253},
    {desc: 'apac', ct: 300},
    {desc: 'africa', ct: 240},
    {desc: 'eur', ct: 100},
    {desc: 'na', ct: 432}
  ]
  
  marg = [
    {desc: 'latam', ct: 253},
    {desc: 'apac', ct: 300},
    {desc: 'africa', ct: 240},
    {desc: 'eur', ct: 100},
    {desc: 'na', ct: 432},
    {desc: 'latam', ct: 253},
    {desc: 'apac', ct: 300},
    {desc: 'africa', ct: 240},
    {desc: 'eur', ct: 100},
    {desc: 'na', ct: 432},
    {desc: 'latam', ct: 253},
    {desc: 'apac', ct: 300},
    {desc: 'africa', ct: 240},
    {desc: 'eur', ct: 100},
    {desc: 'na', ct: 432}
  ]

  changeView(value: any) {
    this.viewNum = value;
    // this.changeViewEvent.emit(value);
    // if (this.viewNum == 0) {
    //   this.items = this.regions
    // }
    // else if (this.viewNum == 1) {
    //   this.items = this.marg
    // }
    // else if (this.viewNum == 0) {
      
    // }
    // else if (this.viewNum == 0) {
      
    // }
    // else {

    // }
  }

  changeGraph() {
    if (this.graphNum != 3) {
      this.graphNum = this.graphNum +  1;
    }
    else {
      this.graphNum = 0
    }
  }

}
