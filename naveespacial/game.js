export class Game extends Phaser.Scene {//permitimos enviar esta clase a quien lo pida
//Phaser.Scene contiene una escena básica y nosotros la extendemos para darle la funcionalidad que requiere nuestro juego.
    constructor() {
      super({ key: 'game' });//nombre clave de esta escena
    }
  
    preload() {//precarga cosas
      this.load.image('background', 'images/background.jpg');//carga la imagen y le da nombre background
      this.load.image('gameover', 'images/gameover.png');
      this.load.image('naveP', 'images/NaveAnim/nav1.png');
      this.load.image('bullet', 'images/bullet/b1.png');
    }
  
    create() {//crea luego de finalizada la precarga
        this.add.image(410, 250, 'background');//imprime el bacground. las coordenadas se toman desde el centro de la imagen y la esquina izquierda superior
        this.gameoverImage = this.add.image(400, 250, 'gameover');//imprime game over y le da sus propiedades a una variable para despues modificarlas
        this.gameoverImage.visible = false;//oculto la imagen
        this.naveP = this.physics.add.image(400, 400, 'naveP').setImmovable();;//agrego la nave con fisicas, y la funcion que le inpide ser impulsada por otros objetos
        this.naveP.body.allowGravity = false;//la gravedad no lo afecta
        this.cursors = this.input.keyboard.createCursorKeys();//accede a las teclas
        this.bullet = this.physics.add.image(400, 30, 'bullet');
        this.physics.world.setBoundsCollision(true, true, true, false);//todo es fisico menos el suelo
        this.bullet.setCollideWorldBounds(true);//le da estructura contra el canvas
        this.bullet.setBounce(1);//rebota segun la fuersa de choque
        //this.bullet.setVelocity(100, 10)//le da velocidad X e Y. aparte estan setVelocityX() y setVelocityY()
        
        let velocity = 100 * Phaser.Math.Between(1.3, 2);//numero aleatorio entre 1.3 y 2
        if (Phaser.Math.Between(0, 10) > 5)//numero entre 0 y 10
        {
            velocity = 0 - velocity;//volver negativa la velocidad
        }//esto hace que la velocidad sea hacia la derecha, pero si se cumple el if, va hacia la izquierda
        this.bullet.setVelocity(velocity, 10);

        this.physics.add.collider(this.bullet, this.naveP, this.navImpact, null, this);//reacciona al choque entre bullet y nave
        /*
        Objeto de colisión 1: el primer objeto sobre el que se configura 
        la colisión.
        Objeto de colisión 2: el segundo objeto implicado en la colisión.
        Callback de colisión: es una función que se ejecutará cuando los 
        dos elementos se han chocado. Esta función es la clave de la 
        implementación del comportamiento, pues es donde se permite 
        especificar el código del Javascript a ejecutar como consecuencia
        del impacto.
        Callback para decidir si hay colisión: esta sería una 
        función que permite decidir si se debe ejecutar el comportamiento 
        de colisión o no. Es una función que siempre debe devolver un
        boleano. Si le entregamos null, como en nuestro ejemplo, siempre 
        que se toquen los elementos se producirá el comportamiento de 
        colisión.
        El contexto sobre el que se ejecutarán los callback de colisión.
        Este contexto será habitualmente "this", para que dentro del 
        código de la función, la variable this siga siendo igual a la 
        escena sobre la que estamos trabajando. Aquí lo normal será 
        pasarle "this", pero podríamos pasarle otro objeto cualquiera, 
        para que "this" dentro del método callback de la colisión sea una 
        referencia a ese objeto. simplificad, es el parametro a enviar a la funcion navImpact
        */
   
   
    }

    update() 
    {//se ejecuta constantemente
        if (this.cursors.left.isDown) {//tecla izquierda
          this.naveP.setVelocityX(-500);//lo manda hacia atras
        }
        else if (this.cursors.right.isDown) {
          this.naveP.setVelocityX(500);
        }
        else {
          this.naveP.setVelocityX(0);//se detiene
        }
        if(this.bullet.y > 500) {
            console.log('fin');
            this.gameoverImage.visible = true;
            this.scene.pause();//detiene todo
        }
    }

}