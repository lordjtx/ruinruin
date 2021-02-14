import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  booAndromeia: boolean = false;
  booAntisora99: boolean = false;
  booAswraith: boolean = false;
  booDrewzerr: boolean = false;
  booDumberto: boolean = false;
  booDumbertoRandom: boolean = false;
  booEskimo: boolean = false;
  booGiucci: boolean = false;
  booGodspath: boolean = false;
  booHermitknob: boolean = false;
  booHermitknobRandom: boolean = false;
  booHeyitssunny: boolean = false;
  booImSteven: boolean = false;
  booInstablade: boolean = false;
  booJenntart: boolean = false;
  booJesses: boolean = false;
  booJulian: boolean = false;
  booMuito: boolean = false;
  booOgjoseph: boolean = false;
  booOvanilla: boolean = false;
  booPopyzera: boolean = false;
  booQuesti: boolean = false;
  booSlain: boolean = false;
  booSmooveSaiyan: boolean = false;
  booSpiritmoon: boolean = false;
  booSummerskin: boolean = false;
  booTiffie44: boolean = false;
  booTitanium: boolean = false;
  booZull: boolean = false;

  booArcher: boolean = false
  booMage: boolean = false
  booPirate: boolean = false
  booThief: boolean = false
  booWarrior: boolean = false
  booPolitoed: boolean = false

  randNumb: number = Math.random();

  charIGN: string = '';

  pressedAndromeia() {
    //change style to perma hover effect on andromeia

    this.charIGN = 'Andromeia';

    this.booAndromeia = true;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedAntisora99() {

    this.charIGN = 'Antisora99';

    this.booAndromeia = false;
    this.booAntisora99 = true;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = true;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedAswraith() {

    this.charIGN = 'Aswraith';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = true;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = true;
    this.booPolitoed = false;
  }

  pressedDrewzerr() {

    if(this.randNumb > 0.7) {
      this.charIGN = 'Cursus';
      this.randNumb = Math.random();
    } else {
      this.charIGN = 'Drewzer';
      this.randNumb = Math.random();
    }


    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = true;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = true;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedDumberto() {

    this.charIGN = 'dumberto';

    this.booPolitoed = false;
    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    if(this.randNumb > 0.5){
      this.booDumbertoRandom = true;
      this.booDumberto = false;
      this.booPolitoed = true;
      this.randNumb = Math.random();
    } else {
      this.booDumberto = true;
      this.booDumbertoRandom = false;
      this.randNumb = Math.random();
    }
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = true;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
  }

  pressedEskimo() {

    this.charIGN = 'Eskimo';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = true;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedGiucci() {

    this.charIGN = 'giucci';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = true;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }


  pressedGodspath() {

    this.charIGN = 'GodsPath';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = true;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedHermitnobb() {

    this.charIGN = 'HermitNobb';

    this.booPolitoed = false;
    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumbertoRandom = false;
    this.booDumberto = false;
    if(this.randNumb > 0.5){
      this.booHermitknobRandom = true;
      this.booHermitknob = false;
      this.booPolitoed = true;
      this.randNumb = Math.random();
    } else {
      this.booHermitknob = true;
      this.booHermitknobRandom = false;
      this.randNumb = Math.random();
    }
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = true;
    this.booWarrior = false;
  }

  pressedHeyitssunny() {

    this.charIGN = 'HeyItsSunny';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = true;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedImsteven() {

    this.charIGN = 'ImSteven';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = true;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = true;
    this.booPolitoed = false;
  }

  pressedInstablade() {

    this.charIGN = 'InstaBlade';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = true;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = true;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedJenntart() {

    this.charIGN = 'JENNTART';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = true;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = true;
    this.booPolitoed = false;
  }

  pressedJesses() {

    this.charIGN = 'Jesses';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = true;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = true;
    this.booPolitoed = false;
  }

  pressedJulian() {

    this.charIGN = 'Julian';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = true;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedMuito() {

    if(this.randNumb > 0.7) {
      this.charIGN = 'Tupinga';
      this.randNumb = Math.random();
    } else {
      this.charIGN = 'Muito';
      this.randNumb = Math.random();
    }

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = true;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedOgjoseph() {

    this.charIGN = 'OgJoseph';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = true;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = true;
    this.booPolitoed = false;
  }

  pressedOvanilla() {

    this.charIGN = 'oVanilla';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = true;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedPopyzera() {

    this.charIGN = 'popyZera';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = true;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = true;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedQuesti() {

    this.charIGN = 'questi';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = true;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedSlain() {

    this.charIGN = 'Slain';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = true;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedSmooveSaiyan() {

    this.charIGN = 'SmooveSaiyan';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = true;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = true;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedSpiritmoon() {

    this.charIGN = 'SpiritMoon';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = true;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = true;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedSummerskin() {

    this.charIGN = 'SummerSkin';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = true;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = true;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedTiffie44() {

    this.charIGN = 'Tiffie44';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = true;
    this.booTitanium = false;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = true;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedTitanium() {

    if(this.randNumb > 0.7) {
      this.charIGN = 'HerosRampage';
      this.randNumb = Math.random();
    } else {
      this.charIGN = 'Titanium';
      this.randNumb = Math.random();
    }
    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = true;
    this.booZull = false;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = true;
    this.booWarrior = false;
    this.booPolitoed = false;
  }

  pressedZull() {

    this.charIGN = 'Zull';

    this.booAndromeia = false;
    this.booAntisora99 = false;
    this.booAswraith = false;
    this.booDrewzerr = false;
    this.booDumberto = false;
    this.booDumbertoRandom = false;
    this.booEskimo = false;
    this.booGiucci = false;
    this.booGodspath = false;
    this.booHermitknob = false;
    this.booHermitknobRandom = false;
    this.booHeyitssunny = false;
    this.booImSteven = false;
    this.booInstablade = false;
    this.booJenntart = false;
    this.booJesses = false;
    this.booJulian = false;
    this.booMuito = false;
    this.booOgjoseph = false;
    this.booOvanilla = false;
    this.booPopyzera = false;
    this.booQuesti = false;
    this.booSlain = false;
    this.booSmooveSaiyan = false;
    this.booSpiritmoon = false;
    this.booSummerskin = false;
    this.booTiffie44 = false;
    this.booTitanium = false;
    this.booZull = true;

    this.booArcher = false;
    this.booMage = false;
    this.booPirate = false;
    this.booThief = false;
    this.booWarrior = true;
    this.booPolitoed = false;
  }

  pressedRuin() {
    console.log('hiii');
  }
}
