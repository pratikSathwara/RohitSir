import { Component, OnInit } from '@angular/core';
import { of, range , timer, concat, interval} from 'rxjs';
import { map ,first, take, takeLast} from 'rxjs/operators';
@Component({
  selector: 'app-intro-rxjs',
  templateUrl: './intro-rxjs.component.html',
  styleUrls: ['./intro-rxjs.component.css']
})
export class IntroRxjsComponent implements OnInit {
  // sampledata = of({id:1,name:"pratik"}, [1,2,3,4,5], function display(){return 'hell pragnesh'});
  //x:number;
  constructor() {
  // const retust=map((x:number)=> x*9)(of(1,2,3)).subscribe((y)=>console.log(y));
  //   first()(of(1,2,3)).subscribe((v => console.log(`value : ${v}`)));
    
  //   const data = range(2,10); 
  //    data.subscribe(y => console.log(y))

  // const number = timer(3000);
// number.subscribe(x => console.log(x));   

// const timer4 = interval(1000);
// const timer5 = timer4.pipe(take(3));
// const timer1 = interval(1000).pipe(take(4));
// timer1.subscribe(v => console.log(v));

const many = range(1,10);
const lasttime = many.pipe(takeLast(3));
lasttime.subscribe(x => console.log(x))
}

  ngOnInit() {
    // result =this.sampledata.subscribe(well => console.log(well))
  }
}
