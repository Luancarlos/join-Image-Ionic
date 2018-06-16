import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  txt:any = "";
  image:any;
  moldura:any;
  canvas:any;
  ctx:any;
  // imagem gerada pelo canvas
  imgCanvas:any;

  width:any;
  height:any;

  constructor(public navCtrl: NavController,private zone:NgZone) {
      this.width  = document.body.offsetWidth;
      this.height = document.body.offsetHeight;
  }

  juntar(){
    console.log(this.txt);
    this.canvasJuncao();
  }

  canvasJuncao(){
		this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");  

    this.image   = this.loadImage('../assets/imgs/img.jpg');
    this.moldura = this.loadImage('../assets/imgs/moldura02.png');   
       
    setTimeout(()=>{
      this.main();
    },500); 
                     
  }

  loadImage(src) {
    var img = new Image();
    img.src = src;
    return img;
  }
  
main()  {
  // adicionando tamanho do canvas
  this.canvas.width  = (this.width - 30);
  // adicionando o tamanho do canvas
  this.canvas.height = (this.height - 100);
  // outra forma definir o tamanho
  
  //this.canvas.width  = (this.image.width / 6);
  //this.canvas.height = (this.image.height / 6);

  //desenhando no canvas a imagem
  this.ctx.drawImage(this.image, 0, 0,this.canvas.width,this.canvas.height);   
  // desenhando no canvas a moldura
  this.ctx.drawImage(this.moldura, 0,0,this.canvas.width,this.canvas.height);
  // definindo atributos do tetxo
  this.ctx.font = "30px Arial";
  this.ctx.fillStyle = "blank";
  this.ctx.textAlign = "center";

  this.ctx.fillText(this.txt,this.canvas.width/2,70);
  // transformar cavas em imagem
  this.imgCanvas = this.canvas.toDataURL();
  console.log(this.imgCanvas);
}

}
