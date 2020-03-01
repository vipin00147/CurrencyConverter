import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency Converter';
  projecttext1 : string="Select Country";
  projecttext2 : string="Select Country";
  money : number;
  total : number;
  name1 : string;
  name2 : string;
  alert : string;
  temp : string;
  calculate()
  {
    if(this.projecttext1=="Select Country"){
      
      alert("Error: Select a valid country!");
    }
    else if(this.projecttext2=="Select Country"){
      alert("Error: Select a valid country!");
    }
//INDIA.....   
    else if(this.projecttext1=="India(INR)"){
        this.name1="(INR)";
        if(this.projecttext2=="India(INR)"){
          this.total=this.money/1;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.95;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.60;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/1.16;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          (this.total=this.money/0.15);
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/47.08;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.85;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/16.14;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/53.80;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/10.32;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.021;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/72.29;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/10.65;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/4.62;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/9.26;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.0017;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.061;
          this.name2="(IQD)";
        }
    }
//Afganistan(AFN)....    
    else if(this.projecttext1=="Afganistan(AFN)"){
        this.name1="(AFN)";
        if(this.projecttext2=="Afganistan(AFN)"){
        this.total=this.money/1;
        this.name2="(AFN)";
        }
      else if(this.projecttext2=="India(INR)"){
        this.total=this.money/1.05;
        this.name2="(INR)";
        }
      else if(this.projecttext2=="Algeria(DZD)"){
        this.total=this.money/0.63;
        this.name2="(DZD)";
        }
      else if(this.projecttext2=="Argentina(ARS)"){
        this.total=this.money/1.22;
        this.name2="(ARS)";
        }
      else if(this.projecttext2=="Armenia(AMD)"){
        this.total=this.money/0.16;
        this.name2="(AMD)";
        }
      else if(this.projecttext2=="Australia(AUD)"){
        this.total=this.money/49.50;
        this.name2="(AUD)";
        }
      else if(this.projecttext2=="Bangladesh(BDT)"){
        this.total=this.money/0.89;
        this.name2="(BDT)";
        }
      else if(this.projecttext2=="Brazil(BRL)"){
        this.total=this.money/16.96;
        this.name2="(BRL)";
        }
      else if(this.projecttext2=="Canada(CAD)"){
        this.total=this.money/56.54;
        this.name2="(CAD)";
        }
      else if(this.projecttext2=="China(CNY)"){
        this.total=this.money/10.85;
        this.name2="(CNY)";
        }
      else if(this.projecttext2=="Colombia(COP)"){
        this.total=this.money/0.022;
        this.name2="(COP)";
        }
      else if(this.projecttext2=="Cuba(CUP)"){
        this.total=this.money/75.91;
        this.name2="(CUP)";
        }
      else if(this.projecttext2=="Denmark(DKK)"){
        this.total=this.money/11.19;
        this.name2="(DKK)";
        }
      else if(this.projecttext2=="Egypt(EGP)"){
        this.total=this.money/4.85;
        this.name2="(EGP)";
        }
      else if(this.projecttext2=="Honkong(HKD)"){
        this.total=this.money/9.73;
        this.name2="(HKD)";
        }
      else if(this.projecttext2=="Iran(IRR)"){
        this.total=this.money/0.0018;
        this.name2="(IRR)";
        }
      else if(this.projecttext2=="Iraq(IQD)"){
        this.total=this.money/0.064;
        this.name2="(IQD)";
        }
      }
//Algeria(DZD)........
    else if(this.projecttext1=="Algeria(DZD)"){
        this.name1="(DZD)";
        if(this.projecttext2=="India(INR)"){
        this.total=this.money/1.66;
        this.name2="INR";
      }
      else if(this.projecttext2=="Afganistan(AFN)"){
        this.total=this.money/1.58;
        this.name2="(AFN)";
      }
      else if(this.projecttext2=="Algeria(DZD)"){
        this.total=this.money/1;
        this.name2="(DZD)";
      }
      else if(this.projecttext2=="Argentina(ARS)"){
        this.total=this.money/1.93;
        this.name2="(ARS)";
      }
      else if(this.projecttext2=="Armenia(AMD)"){
        this.total=this.money/0.25;
        this.name2="(AMD)";
      }
      else if(this.projecttext2=="Australia(AUD)"){
        this.total=this.money/78.28;
        this.name2="(AUD)";
      }
      else if(this.projecttext2=="Bangladesh(BDT)"){
        this.total=this.money/1.41;
        this.name2="(BDT)";
      }
      else if(this.projecttext2=="Brazil(BRL)"){
        this.total=this.money/26.81;
        this.name2="(BRL)";
      }
      else if(this.projecttext2=="Canada(CAD)"){
        this.total=this.money/89.40;
        this.name2="(CAD)";
      }
      else if(this.projecttext2=="China(CNY)"){
        this.total=this.money/17.15;
        this.name2="(CNY)";
      }
      else if(this.projecttext2=="Colombia(COP)"){
        this.total=this.money/0.034;
        this.name2="(COP)";
      }
      else if(this.projecttext2=="Cuba(CUP)"){
        this.total=this.money/120.14;
        this.name2="(CUP)";
      }
      else if(this.projecttext2=="Denmark(DKK)"){
        this.total=this.money/17.70;
        this.name2="(DKK)";
      }
      else if(this.projecttext2=="Egypt(EGP)"){
        this.total=this.money/7.67;
        this.name2="(EGP)";
      }
      else if(this.projecttext2=="Honkong(HKD)"){
        this.total=this.money/15.38;
        this.name2="(HKD)";
      }
      else if(this.projecttext2=="Iran(IRR)"){
        this.total=this.money/0.0028;
        this.name2="(IRR)";
      }
      else if(this.projecttext2=="Iraq(IQD)"){
        this.total=this.money/0.10;
        this.name2="(IQD)";
      }
    }
//Argentina(ARS)........
    else if(this.projecttext1=="Argentina(ARS)"){
        this.name1="(ARS)";
        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.86;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.82;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.52;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/1;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.13;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/40.54;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.73;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/13.89;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/46.31;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/8.88;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.018;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/62.17;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/9.17;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/3.97;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/7.97;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.0015;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.052;
          this.name2="(IQD)";
        } 
    }
//Armenia(AMD)......
      else if(this.projecttext1=="Armenia(AMD)"){
        this.name1="(AMD)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/6.61;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/6.31;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/3.99;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/7.70;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/1;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/312.17;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/5.65;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/107.00;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/356.75;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/68.45;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.14;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/478.98;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/70.63;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/30.62;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/61.39;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.011;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.40;
          this.name2="(IQD)";
        }
      }    
//Australia(AUD)......
      else if(this.projecttext1=="Australia(AUD)"){
        this.name1="(AUD)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.021;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.020;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.013;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/0.025;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.0032;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/1;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.018;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/0.34;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/1.15;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/0.22;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.00044;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/1.53;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/0.23;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/0.098;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/0.20;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.000036;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.0013;
          this.name2="(IQD)";
        }
      }
//Bangladesh(BDT)......   
      else if(this.projecttext1=="Bangladesh(BDT)"){
        this.name1="(BDT)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/1.17;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/1.12;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.71;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/1.37;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.18;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/55.31;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/1;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/18.95;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/63.21;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/12.13;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.024;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/84.93;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/12.52;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/5.42;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/10.88;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.0020;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.071;
          this.name2="(IQD)";
        }
      }
//Brazil(BRL)......   
      else if(this.projecttext1=="Brazil(BRL)"){
        this.name1="(BRL)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.062;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.059;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.037;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/0.072;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.0093;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/2.92;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.053;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/1;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/3.33;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/0.64;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.0013;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/4.48;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/0.66;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/0.29;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/0.57;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.00011;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.0038;
          this.name2="(IQD)";
        }
      }
//Canada(CAD).......      
      else if(this.projecttext1=="Canada(CAD)"){
        this.name1="(CAD)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.0185;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.018;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.011;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/0.022;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.0028;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/0.87;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.016;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/0.30;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/1;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/0.19;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.00038;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/1.34;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/0.20;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/0.086;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/0.17;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.000032;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.0011;
          this.name2="(IQD)";
        }
      }
//China(CNY).......      
      else if(this.projecttext1=="China(CNY)"){
        this.name1="(CNY)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.097;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.092;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.058;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/0.11;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.015;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/4.56;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.082;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/1.56;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/0.19;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/1;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.0020;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/7.00;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/1.03;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/0.45;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/0.90;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.00017;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.0059;
          this.name2="(IQD)";
        }
      }
//Colombia(COP).......      
      else if(this.projecttext1=="Colombia(COP)"){
        this.name1="(COP)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/48.36;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/46.15;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/29.18;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/56.35;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/7.34;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/2283.09;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/41.29;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/782.53;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/2609.12;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/499.23;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/1;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/3493.37;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/516.59;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/223.32;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/448.96;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.083;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/2.93;
          this.name2="(IQD)";
        }
      }
//Cuba(CUP).......      
      else if(this.projecttext1=="Cuba(CUP)"){
        this.name1="(CUP)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.0138553;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.0131788;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.00828226;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/0.0160968;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.00208943;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/0.651689;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.0117751;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/0.222114;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/0.745543;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/0.143040;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.000283850;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/1;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/0.147554;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/0.0639899;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/0.128285;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.0000237952;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.000840168;
          this.name2="(IQD)";
        }
      }
//Denmark(DKK).......      
      else if(this.projecttext1=="Denmark(DKK)"){
        this.name1="(DKK)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.0938999;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.0893156;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.0561305;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/0.109091;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.0141605;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/4.41739;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.0798019;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/1.50531;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/5.05248;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/0.969394;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.00192371;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/0.255743;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/1;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/0.433672;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/0.869396;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.000161265;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.00569398;
          this.name2="(IQD)";
        }
      }
//Egypt(EGP)........      
      else if(this.projecttext1=="Egypt(EGP)"){
        this.name1="(EGP)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.216523;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.205952;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.129431;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/0.251552;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.0326525;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/10.1860;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.184014;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/3.47108;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/11.6505;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/2.23535;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.00443586;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/0.589716;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/2.30589;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/1;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/2.00478;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.000371859;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.0131297;
          this.name2="(IQD)";
        }
      }
//Honkong(HKD)........      
      else if(this.projecttext1=="Honkong(HKD)"){
        this.name1="(HKD)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/0.108007;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/0.102734;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/0.0645616;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/0.125477;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/0.0162874;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/5.08161;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/0.0917885;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/1.73141;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/5.81119;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/1.11501;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.00221266;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/0.294157;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/1.15020;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/0.498812;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/1;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.000185487;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/0.00654925;
          this.name2="(IQD)";
        }
      }
//Iran(IRR)........      
      else if(this.projecttext1=="Iran(IRR)"){
        this.name1="(IRR)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/582.272;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/553.845;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/348.065;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/676.473;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/87.8089;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/27395.99;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/494.851;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/9346.42;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/31333.37;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/6011.27;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/11.9289;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/1585.86;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/6200.95;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/2,689.19;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/5391.18;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/1;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/35.3083;
          this.name2="(IQD)";
        }
      }
//Iraq(IQD)..........    
      else if(this.projecttext1=="Iraq(IQD)"){
        this.name1="(IQD)";

        if(this.projecttext2=="India(INR)"){
          this.total=this.money/16.4911;
          this.name2="(INR)";
        }
        else if(this.projecttext2=="Afganistan(AFN)"){
          this.total=this.money/15.6860;
          this.name2="(AFN)";
        }
        else if(this.projecttext2=="Algeria(DZD)"){
          this.total=this.money/9.85786;
          this.name2="(DZD)";
        }
        else if(this.projecttext2=="Argentina(ARS)"){
          this.total=this.money/19.1590;
          this.name2="(ARS)";
        }
        else if(this.projecttext2=="Armenia(AMD)"){
          this.total=this.money/2.48692;
          this.name2="(AMD)";
        }
        else if(this.projecttext2=="Australia(AUD)"){
          this.total=this.money/775.665;
          this.name2="(AUD)";
        }
        else if(this.projecttext2=="Bangladesh(BDT)"){
          this.total=this.money/14.0151;
          this.name2="(BDT)";
        }
        else if(this.projecttext2=="Brazil(BRL)"){
          this.total=this.money/264.583;
          this.name2="(BRL)";
        }
        else if(this.projecttext2=="Canada(CAD)"){
          this.total=this.money/887.374;
          this.name2="(CAD)";
        }
        else if(this.projecttext2=="China(CNY)"){
          this.total=this.money/170.248;
          this.name2="(CNY)";
        }
        else if(this.projecttext2=="Colombia(COP)"){
          this.total=this.money/0.337850;
          this.name2="(COP)";
        }
        else if(this.projecttext2=="Cuba(CUP)"){
          this.total=this.money/44.9146;
          this.name2="(CUP)";
        }
        else if(this.projecttext2=="Denmark(DKK)"){
          this.total=this.money/175.623;
          this.name2="(DKK)";
        }
        else if(this.projecttext2=="Egypt(EGP)"){
          this.total=this.money/76.1632;
          this.name2="(EGP)";
        }
        else if(this.projecttext2=="Honkong(HKD)"){
          this.total=this.money/152.686;
          this.name2="(HKD)";
        }
        else if(this.projecttext2=="Iran(IRR)"){
          this.total=this.money/0.0283219;
          this.name2="(IRR)";
        }
        else if(this.projecttext2=="Iraq(IQD)"){
          this.total=this.money/1;
          this.name2="(IQD)";
        }
      }
  }   

  Reset()
  {
    this.projecttext1='Select Country';
    this.projecttext2='Select Country';
    this.money=0;
    this.total=0;
    this.name1='';
    this.name2='';
  }
  swap()
  {
    this.temp=this.projecttext1;
    this.projecttext1=this.projecttext2;
    this.projecttext2=this.temp;
  }
  
}
