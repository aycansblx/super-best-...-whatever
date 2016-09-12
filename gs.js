// global lists used in this game
var cl = []             // character list
var ml = []             // list of moving objects
var sl = []             // list of static (not moving) objects
var bp = []             // for the lamest animation ever !!!
var ol = []             // list of character names associated with the objective
var rl = []             // role catalogue
var il = []             // item catalogue
var tl = []             // tips list
// number type variables - some of them are also used for different purposes
var gt = 0              // game timer
var gl = 0              // game level
var sm = 0              // scheduled method id
var gg = 0              // game genre - actually it is the type of player's role
var bt = 0              // background animation timer
var gm = -1             // game counter
var gs = -1             // game state
// color strings - i used 5 colors at all
var rc = "#bf5f2b"      // red - they are all red to me
var gc = "#26ab7a"      // green - yeah it is turquise or something
var bc = "#2671ab"      // blue - some may think that this color is not blue
var yc = "#c9c72d"      // yellow - definitely yellow
var dc = "#000000"      // default - black (period)
// references to other objects
var cc = null           // reference to the controlled character
// game condition - both empty strings mean game continues
var wn = ""             // victory?
var df = ""             // defeat?
// role objects
rl.push({n:"godfather",o:"murder",t:1,                          i:[11,12,13,14,15,17,18,19,42,43],c:[25,26,29],e:[4,20]})
rl.push({n:"fbi agent",o:"eliminate",t:1,                       i:[11,12,13,14,15,17,18,19,41,42],c:[3,5,13,21,24],e:[20]})
rl.push({n:"n00b warrior",o:"break",t:1,                        i:[11,12,13,41,42,43,45,46],c:[31],e:[20]})
rl.push({n:"alien",o:"slaughter",t:1,                           i:[14,15,42,44,45,46,47,48,65],c:[1,4,7,28,30,32],e:[20]})
rl.push({n:"police officer",o:"arrest",t:2,                     i:[20,21,22,23,24],c:[0,18,19],e:[20]})
rl.push({n:"forger",o:"circulate to",t:2,                       i:[28,70,71],c:[6,18,19],e:[1,20]})
rl.push({n:"merchant",o:"sell to",t:2,                          i:[26,27,72],c:[2,11,27],e:[20]})
rl.push({n:"undercover ufo",o:"take samples from",t:2,          i:[29,73,74],c:[11,15,29,30],e:[1,3,20]})
rl.push({n:"teenage girl",o:"kiss",t:2,                         i:[6,7,8],c:[22,23],e:[]})
rl.push({n:"mafia",o:"guard",t:3,                               i:[0,38,39,49,50,51,62,66],c:[0,6,19],e:[4,20]})
rl.push({n:"pimp",o:"protect",t:3,                              i:[0,1,5,51,59,62,63],c:[18],e:[4,20]})
rl.push({n:"cleric",o:"support",t:3,                            i:[10,50,59,63,64,66],c:[2,27],e:[20]})
rl.push({n:"android",o:"cover",t:3,                             i:[9,38,60,64,66],c:[16],e:[28,20]})
rl.push({n:"terrorist",o:"kill",t:4,                            i:[25,40,17,18,19,65,42],c:[],e:[]})
rl.push({n:"depressed high school student",o:"murder",t:4,      i:[11,12,16,17,18,19,65],c:[],e:[]})
rl.push({n:"dragon",o:"destroy",t:4,                            i:[11,12,13,16,19,40,65],c:[],e:[]})
rl.push({n:"rebel robot",o:"exterminate",t:4,                   i:[11,12,16,17,18,66],c:[],e:[28]})
rl.push({n:"mutant",o:"slaughter",t:4,                          i:[44,45,46,47,48,14,15],c:[],e:[]})
rl.push({n:"hooker",o:"have sex with",t:5,                      i:[30,31,32],c:[],e:[4,20]})
rl.push({n:"drug dealer",o:"deal with",t:5,                     i:[33,34,67],c:[],e:[4,20]})
rl.push({n:"dungeon keeper",o:"imprison",t:5,                   i:[20,21,22,23,24],c:[],e:[27]})
rl.push({n:"martian",o:"contact with",t:5,                      i:[66,68,69],c:[],e:[1]})
rl.push({n:"vampire",o:"bite and transform",t:5,                i:[55,56,75,66],c:[],e:[]})
rl.push({n:"werewolf",o:"bite and kill",t:5,                    i:[45,47,48,66],c:[],e:[]})
rl.push({n:"zombie",o:"bite and infect",t:5,                    i:[54,55,56,66,75],c:[],e:[]})
rl.push({n:"super hero",o:"save",t:6,                           i:[3,9,35,36,37],c:[],e:[]})
rl.push({n:"security",o:"secure",t:6,                           i:[0,2,38,50,59,63,64],c:[],e:[]})
rl.push({n:"good wizard",o:"protect",t:6,                       i:[0,10,49,51,67,38,62,],c:[],e:[]})
rl.push({n:"galactic commander",o:"guard",t:6,                  i:[0,3,5,38,60,64,65,66],c:[],e:[]})
rl.push({n:"sneak",o:"survive",t:7,                             i:[0,3,4,38,51,62,64,66],c:[],e:[0,20]})
rl.push({n:"civilian",o:"don't die",t:7,                        i:[0,3,4,5,59,60,62],c:[],e:[3]})
rl.push({n:"barrel",o:"stay whole",t:7,                         i:[9,10,50,61,62,66],c:[],e:[2]})
rl.push({n:"galaxy hitchhiker",o:"be safe",t:7,                 i:[0,49,50,61,62,66],c:[],e:[3]})
rl.push({n:"thief",o:"rob",t:5,                                 i:[52,53,76],c:[],e:[4]})
// item objects
il.push({n:"nothing :P"})
il.push({n:"golden teeth"})
il.push({n:"uselessness"})
il.push({n:"mp3 player"})
il.push({n:"briefcase"})
il.push({n:"colorful and furry clothes"})
il.push({n:"boy band t-shirt",v:"kiss",a:interact})
il.push({n:"ridiculous make-up",v:"kiss",a:interact})
il.push({n:"disturbing voice",v:"kiss",a:interact})
il.push({n:"rusty nail"})
il.push({n:"generous loot"})
il.push({n:"pistol",v:"fire",a:fire,                  rl:30,  r:350,  p:[15,25,4]})
il.push({n:"sub machine gun",v:"fire",a:fire,         rl:15,  r:300,  p:[20,15,4]})
il.push({n:"assault rifle",v:"fire",a:fire,           rl:10,  r:400,  p:[25,20,4]})
il.push({n:"sniper rifle",v:"fire",a:fire,            rl:50,  r:900,  p:[45,60,4]})
il.push({n:"heavy machine gun",v:"fire",a:fire,       rl:5,   r:400,  p:[30,20,4]})
il.push({n:"fire breath",v:"breath fire",a:fire,      rl:5,   r:150,  p:[30,15,3]})
il.push({n:"fireball spell scrolls",v:"cast",a:fire,   cd:100,  l:[10,19], r:200,  p:[30,55,3]})
il.push({n:"arcane spell scrolls",v:"cast",a:fire,     cd:100,  l:[20,25], r:200,  p:[20,70,0]})
il.push({n:"thunder spell scrolls",v:"cast",a:fire,    cd:100,  l:[10,19], r:200,  p:[40,40,1]})
il.push({n:"handcuffs",v:"use",a:arrest,                    cd:150})
il.push({n:"cable tie",v:"use",a:arrest,                    cd:150})
il.push({n:"chains",v:"use",a:arrest,                       cd:150})
il.push({n:"fishnet gun",v:"throw",a:rngarrest,             cd:150, r:150,  l:[3,7], p:20})
il.push({n:"teleport to prison spell",v:"cast",a:rngarrest, cd:100, r:150,  l:[3,7], p:20})
il.push({n:"explosive belt",v:"detonate",a:scdatt,r:75})
il.push({n:"brand new shields",v:"offer your goods",a:interact, cd:200})
il.push({n:"common weapons",v:"offer your goods",a:interact,    cd:200})
il.push({n:"forged banknotes",v:"circulate",a:interact,  cd:200})
il.push({n:"sample bag",v:"take samples",a:interact,    cd:250})
il.push({n:"strawberry condoms",v:"have sex",a:sex,  cd:300})
il.push({n:"sexy lingerie",v:"have sex",a:sex,        cd:300})
il.push({n:"hiv positive lol",v:"have sex",a:sex,     cd:300})
il.push({n:"synthetic drugs",v:"sell drugs",a:inject, cd:30})
il.push({n:"fresh weed",v:"sell drugs",a:inject,      cd:30})
il.push({n:"super punch",v:"punch",a:stun, cd:300,p:150})
il.push({n:"super kick",v:"kick",a:stun,   cd:300,p:200})
il.push({n:"super slap",v:"slap",a:stun,   cd:300,p:100})
il.push({n:"pepper spray",v:"spray",a:suspend,     cd:150,l:[3,7]})
il.push({n:"banknotes",v:"bribe",a:suspend,        cd:150,l:[1,3]})
il.push({n:"ground mine",v:"lay ground mine",a:minelay,cd:300,r:100,l:[5,10]})
il.push({n:"dagger",v:"stab",a:mlatt,                   cd:50,p:[20,10]})
il.push({n:"bastard sword",v:"bash",a:mlatt,            cd:150,p:[40,20]})
il.push({n:"two handed axe",v:"hurl",a:mlatt,           cd:250,p:[60,30]})
il.push({n:"197 pointy teeth",v:"bite",a:mlatt,         cd:100,p:[25,0]})
il.push({n:"claws on his both hands",v:"punch",a:mlatt, cd:200,p:[50,0]})
il.push({n:"33 arms",v:"punch",a:mlatt,                 cd:100,p:[50,0]})
il.push({n:"fluffy fur",v:"bite",a:mlatt,               cd:500,p:[150,50]})
il.push({n:"no tusk xD",v:"bite",a:mlatt,              cd:10,p:[5,10]})
il.push({n:"memory eraser",v:"fire",a:rngstun,  cd:250, r:200,l:[1,3],p:[30,600]})
il.push({n:"teasar gun",v:"activate",a:rngstun, cd:250, r:150,l:[3,7],p:[30,300]})
il.push({n:"pain killers",v:"use",a:selfheal,cd:100,r:80,l:[1,3],p:10})
il.push({n:"weak pickpocket skills",v:"rob someone near you",   a:rob, cd:300,p:75})
il.push({n:"strong pickpocket skills",v:"rob someone near you", a:rob, cd:200,p:25})
il.push({n:"infection",v:"attack",a:transmit,         cd:250})
il.push({n:"sexy look",v:"bite",a:transmit,           cd:250})
il.push({n:"red and black cloak",v:"bite",a:transmit, cd:250})
il.push({n:"something"})
il.push({n:"something"})
il.push({n:"mushroom",v:"eat",a:cngcnt,       r:50, cd:500, p:500})
il.push({n:"horse semen",v:"drink",a:cngcnt,  r:50, cd:400, p:400})
il.push({n:"beeper",v:"call for help",a:call,cd:100,r:200,l:[1,3],p:450})
il.push({n:"huge dildo",v:"expose the dildo",a:surprise,cd:400,r:333,p:500})
il.push({n:"heal spell",v:"cast the spell",a:rngheal,cd:450,r:300,p:30})
il.push({n:"molecular transportation device",v:"fire",a:rndgo,r:300,cd:400,l:[1,3]})
il.push({n:"holy hand grenade",v:"take out the holy pin",a:bomb,r:100,cd:400,l:[1,3],p:[30,300]})
il.push({n:"towel",v:"bring out your towel for an instant win",a:win})
il.push({n:"very bad goods",v:"sell drugs",a:inject,      cd:30})
il.push({n:"awesome intelligence",v:"contact",a:interact})
il.push({n:"scary look",v:"contact",a:interact})
il.push({n:"forged documents",v:"circulate",a:interact,  cd:200})
il.push({n:"forged id cards",v:"circulate",a:interact,  cd:200})
il.push({n:"rare spell scrolls",v:"offer your goods",a:interact, cd:200})
il.push({n:"spoon",v:"take samples",a:interact,    cd:250})
il.push({n:"specimen bottle",v:"take samples",a:interact,    cd:250})
il.push({n:"vampire fang",v:"bite",a:transmit,           cd:300})
il.push({n:"epic pickpocket skills",v:"rob someone near you", a:rob, cd:200,p:5})
// ss is the only sprite sheet of this game
// game starts when it is loaded successfully
var ss = new Image()
ss.onload = mainsc
ss.src = 'ss.png'
// core methods
function ecl(x1,y1,x2,y2) {     // euclid
  return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
}
function rnd(min,max) {         // random number generator
  return min+Math.round(Math.random()*(max-min-1))
}
function def(sv) {              // checks if the variable "sv" defined
  return typeof sv != "undefined"
}
// flow methods
function mainsc(){              // main scene is the first scene in the game
  gl = 0
  reset()
  for (var i=0; i<4; i++) {
    cl[i].r = rl[0]
    initch(cl[i])
  }
  cl[3].i = il[15]
  cl[0].hd = ["the background ? :S", 300, "what's wrong with", 300]
  cl[0].dx = 350
  wa = true
  sm = setInterval(mainlp,20)
}
function mainlp(){              // main loop is for main scene (dialogues are here)
  upddrw()
  wrt("super best friends",12,73,50,rc)
  ctx.fillStyle = bc;
  ctx.fillRect(565,73,360,15)
  wrt("whatever",10,604,127,bc)
  if (gg == 0 && cl[0].t == 0) {
    cl[0].d = 1
    cl[0].hd = ["i am roger!",100,"hey kids :D",100]
    gg++
  } else if (gg == 1 && cl[0].hd.length == 0) {
    cl[0].hd = ["in super fun land!",250,"have super fun time",250,"together we gonna",250]
    gg++
  } else if (gg == 2 && cl[0].hd.length == 0) {
    cl[0].d = 0
    cl[1].dx = 510
    cl[0].hd = ["super best friends.",250,"he's one of my",250,"hey! here's roderick.",250]
    gg++
  } else if (gg == 3 && cl[1].t == 0) {
    cl[0].hd = []
    cl[1].hd = ["my awesome friend?",250,"how are you",250,"hey roger :D",250]
    gg++
  }else if (gg == 4 && cl[1].hd.length == 0) {
    cl[0].hd = ["actually i'm superb.",200,"fine.",200]
    gg++
  } else if (gg == 5 && cl[0].hd.length == 0) {
    cl[1].hd = ["brian and samson?",250,"our other two best friends",250,"cool! have you seen",250]
    gg++
  } else if (gg == 6 && cl[1].hd.length == 0) {
    cl[2].dx = 700
    cl[0].hd = ["isn't this samson's voice?",250,"but wait!",250,"no...",250]
    gg++
    updmvs(false,7)
  } else if (gg == 7 && cl[2].t == 0) {
    cl[0].hd = []
    cl[2].hd = ["run for your lives!",250,"seriously...",250,"guys guys guys!",250]
    gg++
  } else if (gg == 8 && cl[2].hd.length == 0) {
    cl[1].d = 0
    cl[1].hd = ["what's going on?",250,"my fantastic mate samson!",250]
    gg++
  } else if (gg == 9 && cl[1].hd.length == 0) {
    cl[2].hd = ["to our repository.",250,"wrong source codes",250,"idiot developers commited",250]
    gg++
  } else if (gg == 10 && cl[2].hd.length == 0) {
    cl[3].dx = 850
    cl[2].hd = ["this's a shot'em up game!",250,"now brian thinks",250]
    gg++
  } else if (gg == 11 && cl[3].t == 0) {
    cl[2].hd = []
    cl[3].hd = ["to my little fella",250,"say hello",250,"here you are my best friends.",250]
    addhud(cl[0],"wut?",250)
    addhud(cl[1],"wtf?",250)
    addhud(cl[2],"ah come on!",250)
    gg++
  } else if ((gg == 12 && cl[3].hd.length == 0)){
    for (var i=0; i<cl.length; i++)
      cl[i].dx = -400
    addhud(cl[0],"aaaahhhhh",9999)
    addhud(cl[1],"run away! run away!",9999)
    addhud(cl[2],"holy sh...",9999)
    addhud(cl[3],"die guys. lol",9999)
    gg++
    updmvs(false,10)
  } else if (cl[3].t == 0 && gg == 13) {
    cl[0].x = -100
    cl[1].x = -260
    cl[2].x = -450
    cl[3].x = -600
    for (var i=0; i<cl.length; i++)
      cl[i].dx = 1400
    gg++
    updmvs(false,10)
  } else if (gg == 14 && cl[3].t == 0) {
    cl[0].x = 1400
    cl[1].x = 1560
    cl[2].x = 1750
    cl[3].x = 2000
    for (var i=0; i<cl.length; i++)
      cl[i].dx = -400
    gg--
    updmvs(false,10)
  } else if (gg == 13 || gg == 14) {
    fire.call(cl[3])
    updmvs(false,10)
  } else if (gg == 7)
    updmvs(false,7)
  if (gg != 13 && gg != 14 && gg!=7)
    updmvs(false,3)
  wrt("press a to start",7,73,512,gc)
}
function initlvl () {           // level generator
  reset()
  gl++
  createchs()
  introsc()
  gs = 1
}
function createchs () {         // character creation (role assignments) for a new level
  var rs = []
  cc = cl[rnd(0,cl.length)]
  cc.r = rl[rnd(0,rl.length)]
  initch(cc)
  rs = (rs.concat(cc.r.c)).concat(cc.r.e)
  var tc = null
  do {
    tc = cl[rnd(0,cl.length)]
  } while (tc == cc)
  if (cc.r.t < 4) {
    tc.r = rl[cc.r.c[rnd(0,cc.r.c.length)]]
    if (cc.r.t == 3) {
      var tt = null
      do {
        tt = cl[rnd(0,cl.length)]
      } while (tt == cc || tt == tc)
      tt.r = rl[tc.r.e[rnd(0,tc.r.e.length)]]
      initch(tt)
      rs = (rs.concat(tt.r.c)).concat(tt.r.e)
    }
  } else {
    do {
      tc.r = rl[rnd(0,rl.length)]
    } while (tc.r.t != 4)
    if (cc.r.e.length > 0)
      tc.r = rl[cc.r.e[rnd(0,cc.r.e.length)]]
  }
  initch(tc)
  rs = (rs.concat(tc.r.c)).concat(tc.r.e)
  for (var i=0; i<rl.length; i++)
    if (rl[i].c.length == 0)
      rs.push(i)
  for (var i=0; i<cl.length; i++) {
    if (def(cl[i].r))
      continue
    do {
      cl[i].r = rl[rs[rnd(0,rs.length)]]
      for (var j=0; j<i; j++)
        if (cl[j].r == cl[i].r)
          cl[i].r = cc.r
    } while (cl[i].r == cc.r || cl[i].r == tc.r)
    initch(cl[i])
    rs = (rs.concat(cl[i].r.c)).concat(cl[i].r.e)
  }
}
function introsc () {           // this scene introduces new level
  ctx.clearRect(0, 0, cnv.width, cnv.height)
  bgdrw()
  cc.x = 77
  cc.y = 77
  var na = info(cc)
  wrt(na[0],3,190,73,bc)
  wrt(na[1],2,190,100,dc)
  if (na.length > 2)
    wrt(na[2],2,190,123,dc)
  drw(cc,false)
  var yp = 215;
  for (var i=0; i<cl.length; i++) {
    if (cl[i] == cc)
      continue
    cl[i].x = 77;
    cl[i].y = yp;
    drw(cl[i],false)
    na = info(cl[i])
    wrt(na[0],3,190,yp-4,bc)
    wrt(na[1],2,190,yp+23,dc)
    wrt("stamina: ",2,190,yp+46,dc)
    ctx.fillStyle = (cl[i].s == 3) ? rc : ((cl[i].s == 6) ? yc : gc)
    for (var j=0; j<cl[i].s/3; j++)
      ctx.fillRect(260+13*j, yp+43, 10, 15);
    wrt("vitality: ",2,320,yp+46,dc)
    ctx.fillStyle = (cl[i].mh == 80) ? rc : ((cl[i].mh == 100) ? yc : gc)
    for (var j=0; j<(cl[i].mh-60)/20; j++)
      ctx.fillRect(400+13*j, yp+43, 10, 15);
    wrt("intelligence: ",2,455,yp+46,dc)
    ctx.fillStyle = (cl[i].di == 70) ? rc : ((cl[i].di == 100) ? yc : gc)
    for (var j=0; j<(cl[i].di-40)/30; j++)
      ctx.fillRect(570+13*j, yp+43, 10, 15);
    yp += (cl[i].h+41)
  }
  gt = 25 + rnd(0,3)*10
  var ms = "to win: " + cc.r.o;
  if (cc.r.t < 4) {
    for (var i=0; i<cl.length; i++)
      if (cc.r.c.indexOf(rl.indexOf(cl[i].r)) != -1)
        ol.push(cl[i].n)
    ms += " "
    ms += (ol.length == 3) ? "everybody." : (ol.join() + ".")
    var vs = ms.lastIndexOf(",")
    if (vs != -1)
      ms = ms.substr(0,vs) + " and " + ms.substr(vs+1,ms.length)
  } else if (cc.r.t < 7) {
    ms += " "
    ms += (((gm = rnd(1,4)) == 1) ? "1 character." : gm + " characters.")
  } else
    ms += "."
  gg = cc.r.t
  wrt("you play as:",6,77,23,rc)
  wrt("other characters:",6,77,161,rc)
  wrt(ms,6,77,yp-8,rc)
  wrt(("game time is  " + gt + " seconds."),6,269,yp+38,rc)
  gt *= 50
}
function placechs () {          // initial positions of characters
  for (var i=0; i<cl.length; i++) {
    var vp = true;
    do {
      vp = true;
      cl[i].dx = rnd(19,cnv.width-cl[i].w-19);
      cl[i].dy = rnd(19,cnv.height-cl[i].h-19);
      for (var j=0; j<i; j++)
        if (ecl(cl[i].dx,cl[i].dy,cl[j].dx,cl[j].dy) < 333)
          vp = false;
    } while (!vp);
  }
  sm = setInterval(upd, 20);
}
function upd () {               // cool, epic, fantastic update logic
  if (gs == 2) {
    var c = 0
    for (var i=0; i<cl.length; i++){
      if (cl[i].t == 0) {
        c++
        cl[i].d = 1
      }
    }
    if (c == 4) {
      clearInterval(sm)
      gs = 3
    }
    updmvs(false,15)
  } else if (gs == 4) {
    if (cc!=null && cc.ac <= 0)
      checkcc();
    for (var i=0; i<cl.length; i++)
      if (cl[i]!=cc)
        checkch(cl[i])
    for (var i=0; i<cl.length; i++)
      interaction(cl[i])
    updmvs(true,0)
    gt--
    mc--
  }
  upddrw()
  if (gs == 3)
    wrt("ready?",7,cnv.width/2-msr("ready?",7),250,dc)
  wrt("level: " + gl,3,28,27,rc)
  wrt("time left: " + Math.round(gt/50),3,28,51,bc)
  checkgame()
}
function updmvs (coll,fs) {     // movements
  for (var i=0; i<cl.length; i++) {
    cl[i].ac--
    if (def(cl[i].i.a))
      cl[i].i.t--;
    if (cl[i].ac <= 0)
      move(cl[i],coll,fs)
  }
  for (var i=0; i<ml.length; i++) {
    move(ml[i],false,0)
    if (ml[i].t == 0) {
      if (ml[i].n == "stan") {
        var nop = rnd(7,19)
        for (var j=0; j<nop; j++) {
          var bb = {x:rnd(ml[i].x-ml[i].w/2,ml[i].x+ml[i].w/2),y:rnd(ml[i].y-ml[i].h/2,ml[i].y+ml[i].h/2),w:9,h:9,ox:197,oy:204,n:"bill"}
          bb.s = 30
          bb.dm = rnd(30,70)
          var r = rnd(70,100)
          var dd = calcdest(bb.x,bb.y,rnd(0,4),r)
          bb.dx = dd.dx
          bb.dy = dd.dy
          bb.o = ml[i].o
          ml.push(bb)
        }
      }
      ml.splice(i,1)
    }
  }
}
function upddrw() {             // each frame is rendered in this function
  bgdrw()
  for (var i=0; i<sl.length; i++)
    drw(sl[i],false)
  for (var i=0; i<cl.length; i++)
    drw(cl[i],true)
  for (var i=0; i<ml.length; i++)
    drw(ml[i],false)
}
function checkcc () {           // check keyboard inputs for controlled character
  if ((rp && mc<0) || (mc>0 && lp))
    cc.dx += cc.s
  else if ((lp && mc<0) || (mc>0 && rp))
    cc.dx -= cc.s
  else if ((up && mc<0) || (mc>0 && dp))
    cc.dy -= cc.s
  else if ((dp && mc<0) || (mc>0 && up))
    cc.dy += cc.s
  else
    cc.t = 0;
  if (def(cc.i.a) && wa)
    cc.i.a.call(cc)
}
function checkch (ch) {         // check ai controlled characters
  if (def(ch.i.a) && ch.ac <= 0)
    if (ch.i.t <= 0)
      aiact(ch)
  if (ch.dt-- <= 0 || ch.t <= 0)
    aimove(ch)
}
function finalscene() {         // final scene is visible when a level is finished
  ctx.clearRect(0, 0, cnv.width, cnv.height)
  bgdrw()
  if (gs == 5) {
    wrt("level "+gl+" cleared",12,cnv.width/2-msr("level "+gl+" cleared",12),73,rc)
    wrt(wn,7,cnv.width/2-msr(wn,7),190,bc)
  }
  else if (gs == 6) {
    wrt("level "+gl+" failed",12,cnv.width/2-msr("level "+gl+" failed",12),73,rc)
    wrt(df,7,cnv.width/2-msr(df,7),190,bc)
    wrt("your score is " + (gl-1),7,cnv.width/2-msr("your score is " + gl,7), 330,yc)
  }
  wrt("press a to continue.", 5, cnv.width/2-msr("press a to continue.",5),500,gc)
}
function bgdrw () {             // background is drawed in this function
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  if (bt-- == 0) {
    bp = []
    for (var i=0; i<Math.ceil(cnv.height/23); i++) {
      var br = []
      for (var j=0; j<Math.ceil(cnv.width/23); j++)
        br.push(rnd(0,7))
      bp.push(br)
    }
    bt = 40
  }
  for (var i=0; i<Math.ceil(cnv.height/23); i++)
    for (var j=0; j<Math.ceil(cnv.width/23); j++)
      ctx.drawImage(ss,bp[i][j]*23,204,23,23,j*23,i*23,23,23)
}
function reset () {             // resets the game
  gg = 0
  cl = []
  sl = []
  ml = []
  ol = []
  gm = 0
  cl.push({x:-300,y:300,w:48,h:51,ox:48,oy:0,  n:"roger"})
  cl.push({x:1200,y:350,w:48,h:51,ox:48,oy:51, n:"roderick"})
  cl.push({x:2000,y:400,w:48,h:51,ox:48,oy:102,n:"samson"})
  cl.push({x:1200,y:260,w:48,h:51,ox:48,oy:153,n:"brian"})
  wn = ""
  df = ""
  wa = false
}
// mechanic methods
function initch(cp) {           // character initialization after role assignment
  cp.i = il[cp.r.i[rnd(0,cp.r.i.length)]]
  if (def(cp.i.a) && def(cp.i.l))
    cp.i.c = (cp.i.l.length == 0) ? cp.i.l[0] : rnd(cp.i.l[0],cp.i.l[1])
  cp.i.t = 0
  if (cp == cc) {
    var min = 0
    if (gl < 3)
      min = 2
    else if (gl < 6)
      min = 1
    cp.s = 3 + rnd(min,3)*3
    cp.mh = 80 + 20*rnd(min,3)
    cp.ch = cp.mh
  } else {
    cp.s = rnd(1,4)*3
    cp.mh = 80 + 20*rnd(0,3)
    cp.ch = cp.mh
  }
  cp.di = 70 + 30*rnd(0,3)
  cp.hd = []
  cp.c = []
  cp.e = []
  cp.t = 1
  cp.d = 1
  cp.dt = 0
  cp.aa = null
  cp.a = false
  cp.dx = cp.x
  cp.dy = cp.y
  cp.ct = 0
  cp.co = null
  cp.ac = 0
}
function info(cp) {             // get character's name and item in a string array
  var r = []
  r.push(cp.n + " the " + cp.r.n)
  it = "with " + cp.i.n
  if (typeof cp.i.c != "undefined")
    it += (cp.i.c == 1) ? ": 1 usage only" : (": " + cp.i.c + " usages")
  r.push(it+".")
  if (def(cp.i.a))
    r.push("press  a  to " + cp.i.v)
  return r
}
function drw(cp,an) {           // this function draws a gameobject to the screen
  if (def(cp.hd))
    otp(cp)
  if (an) {
    var sf = (cp.t < 10) ? 0 : 5
    cp.ox = cp.w*cp.d
    ctx.drawImage(ss, cp.ox, cp.oy+cp.h/2, cp.w, cp.h/2, cp.x, cp.y+cp.h/2, cp.w, cp.h/2)
    ctx.drawImage(ss, cp.ox, cp.oy, cp.w, cp.h/2, cp.x, cp.y+sf+1, cp.w, cp.h/2)
  } else
    ctx.drawImage(ss, cp.ox, cp.oy, cp.w, cp.h, cp.x, cp.y, cp.w, cp.h)
}
function otp (ob) {             // hud function - text outputs on characters' heads
  if (ob.hd.length == 0)
    return
  if (ob.hd.length > 6)
    ob.hd.splice(0,ob.hd.length-6)
  for (var i=0; i<ob.hd.length; i+=2) {
    wrt(ob.hd[i],2,ob.x+ob.w/2-msr(ob.hd[i],2),ob.y-19-i*7,dc)
    ob.hd[i+1]--
  }
  if (ob.hd[1] <= 0)
    ob.hd.splice(0,2)
}
function move(cp,coll,fs) {     // move logic for not static game objects
  var ms = (fs == 0) ? cp.s : fs
  if (cp.t++ == 20)
    cp.t = 1
  var xd = cp.dx - cp.x
  var yd = cp.dy - cp.y
  if (Math.abs(xd) > ms/2) {
    cp.x += (xd > 0) ? ms : -ms
    cp.d = (xd > 0) ? 0 : 3
    if (coll && !colldet(cp)) {
      cp.x -= (xd > 0) ? ms : -ms
      if (cp == cc)
        cp.dx = cp.x
      else {
        if (def(cp.i.a))
          if (cp.i.t <= 0)
            aiact(cp)
        aimove(cp)
      }
    }
  } else if (Math.abs(yd) > ms/2) {
    cp.y += (yd > 0) ? ms : -ms
    cp.d = (yd > 0) ? 1 : 2
    if (coll && !colldet(cp)) {
      cp.y -= (yd > 0) ? ms : -ms
      if (cp == cc)
        cp.dy = cp.y
      else {
        if (def(cp.i.a))
          if (cp.i.t <= 0)
            aiact(cp)
        aimove(cp)
      }
    }
  } else {
    cp.t = 0
    cp.dx = cp.x
    cp.dy = cp.y
  }
}
function colldet(cp) {          // cp's collisions with borders and other characters
  var vm = true
  if (cp.x < 0 || cp.x+cp.w+9 > cnv.width)
    vm = false
  if (cp.y < 0 || cp.y+cp.h+9 > cnv.height)
    vm = false
  var r1 = {x:cp.x, y:cp.y, w:cp.w, h:cp.h}
  if (cp.ct-- <= 0)
    cp.co = null
  for (var i=0; i<cl.length; i++) {
    if (cl[i] == cp)
      continue
    var r2 = {x:cl[i].x-7, y:cl[i].y-7, w:cl[i].w+14, h:cl[i].h+14}
    var r3 = {x:cl[i].x, y:cl[i].y, w:cl[i].w, h:cl[i].h}
    if (r1.x < r2.x + r2.w && r1.x + r1.w > r2.x && r1.y < r2.y + r2.h && r1.h + r1.y > r2.y) {
      if (cp.d == 0 && r2.x > r1.x) {
        cp.co = cl[i]
        cp.ct = 3
      } else if (cp.d == 3 && r1.x > r2.x) {
        cp.co = cl[i]
        cp.ct = 3
      } else if (cp.d == 1 && r2.y > r1.y) {
        cp.co = cl[i]
        cp.ct = 3
      } else if (cp.d == 2 && r1.y > r2.y) {
        cp.co = cl[i]
        cp.ct = 3
      }
      else
        cp.ct--
    }
    if (r1.x < r3.x + r3.w && r1.x + r1.w > r3.x && r1.y < r3.y + r3.h && r1.h + r1.y > r3.y)
      vm = false
  }
  return vm
}         // collision detection between characters
function interaction (cp) {     // cp's interactions with other objects
  var r1 = {x:cp.x, y:cp.y, w:cp.w, h:cp.h}
  for (var i=0; i<ml.length; i++){
    if (ml[i].o == cp)
      continue
    var r2 = {x:ml[i].x, y:ml[i].y, w:ml[i].w, h:ml[i].h}
    if (!(r1.x < r2.x + r2.w && r1.x + r1.w > r2.x && r1.y < r2.y + r2.h && r1.h + r1.y > r2.y))
      continue
    if (cl.indexOf(cp) == -1)
      break;
    if (ml[i].n == "bill") {
      appdmg(cp,ml[i])
    } else if (ml[i].n == "mike") {
      sl.push({x:cp.x,y:cp.y,w:cp.w,h:cp.h,ox:48,oy:cp.oy,n:"cgd",o:ml[i].o,s:cp,hd:["prisoned",9999]})
      cl.splice(cl.indexOf(cp),1)
      if (ml[i].o == cc)
        exclude(cp.n)
      else if (cp == cc)
        cc = null
    } else if (ml[i].n == "joel") {
      cp.ac = ml[i].dm
      addhud(cp,"stunned :D", ml[i].dm)
    } else if (ml[i].n == "leon") {
      do {
        cp.x = rnd(19,cnv.width-cp.w-19)
        cp.y = rnd(19,cnv.height-cp.h-19)
        for (var j=0; j<cl.length; j++) {
          if (cl[i]==cp)
            continue
          if (ecl(cp.x,cp.y,cl[i].x,cl[i].y) < 200)
            cp.x = 0
        }
      } while (cp.x == 0)
    } else if (ml[i].n == "stan") {
      var nop = rnd(7,19)
      for (var i=0; i<nop; i++) {
        var bb = {x:rnd(ml[i].x-ml[i].w/2,ml[i].x+ml[i].w/2),y:rnd(ml[i].y-ml[i].h/2,ml[i].y+ml[i].h/2),w:9,h:9,ox:197,oy:204,n:"bill"}
        bb.s = 30
        bb.dm = rnd(30,70)
        var r = rnd(70,100)
        var dd = calcdest(bb.x,bb.y,rnd(0,4),r)
        bb.dx = dd.dx
        bb.dy = dd.dy
        bb.o = ml[i].o
        ml.push(bb)
      }
    }
    ml.splice(i,1)
  }
  for (var i=0; i<sl.length; i++) {
    if (sl[i].o == cp)
      continue
    var r2 = {x:sl[i].x, y:sl[i].y, w:sl[i].w, h:sl[i].h}
    if (!(r1.x < r2.x + r2.w && r1.x + r1.w > r2.x && r1.y < r2.y + r2.h && r1.h + r1.y > r2.y))
      continue
    if (sl[i].n == "mn") {
      appdmg(cp,sl[i])
      sl.splice(i,1)
    }
  }
}
function addhud(obj,txt,t) {
  obj.hd.push(txt)
  obj.hd.push(t)
}
function checkgame() {
  if ((wn != "" || df != "") && gm < 77) {
    gm++
    return
  } else if (wn != "" || df != "") {
    if (wn != "")
      gs = 5
    else
      gs = 6
    finalscene()
  }
  if ((gs == 6 || gs == 5)) {
    clearInterval(sm)
    finalscene()
  }
  if (cc == null)
    df = "you are inactivated."
  var counter = 0
  if (gg == 1 || gg == 4) {
    for (var i=0; i<sl.length; i++) {
      if (ol.indexOf(sl[i].s.n) != -1 && sl[i].o==cc && gg == 1)
        counter++
      else if (ol.indexOf(sl[i].s.n) == -1 && sl[i].o==cc && gg == 1) {
        df = "you killed " + sl[i].s.n + " by mistake."
        break
      } else if (ol.indexOf(sl[i].n) != -1 && gg == 1) {
        df = "your target is killed by " + sl[i].o.n + "."
        break;
      } else if (gg == 4 && sl[i].o == cc)
        counter++
    }
    if (counter == ol.length && gg == 1)
      wn = "you killed all your targets."
    else if (counter == gm && gg == 4)
      wn = "you killed enough."
    else if (gg == 4 && gm-counter > cl.length)
      df = "not enough character left for you."
  } else if (gg == 3 || gg == 6) {
    for (var i=0; i<cl.length; i++)
      if (ol.indexOf(cl[i].n) != -1 && gg == 3)
        counter++
    if (counter != ol.length && gg == 3)
      df = "you couldn't guard."
    else if (cl.length-1 < gm)
      df = "you couldn't guard."
  }
  if (gt <= 0 && (cc.r.t == 3 || cc.r.t == 6 || cc.r.t == 7)) {
    wn = "you've made it."
    gm = 99
  } else if (gt <= 0) {
    df = "time is over."
    gm = 99
  } else if (wn != "" || df != "")
    gm = 0
}
function checkitem(cp) {
  var tt = 0
  if (def(cp.i.cd)) {
    tt = cp.i.cd
    wa = false
  } else if (def(cp.i.rl))
    tt = cp.i.rl
  else
    wa = false
  if (!def(cp.i.r) && cp.co == null && cp.i.t <= 0) {
    addhud(cp,"nobody around",50)
    return false
  }
  if(cp.i.t > 0 && (!wa && cp==cc)) {
    addhud(cp,"cooling down",50)
    return false
  } else if (cp.i.t > 0)
    return false
  if (typeof cp.i.c != "undefined") {
    if (cp.i.c <= 0) {
      if (cp == cc)
        addhud(cp,"out of item",50)
      return false
    } else
      addhud(cp,cp.i.n + " usages left: " + --cp.i.c,50)
  }
  cp.i.t = tt
  return true
}
// ai functions
function aimove(cp) {           // ai movement behaviour
  cp.dt = cp.di
  cp.c = []
  cp.e = []
  for (var i=0; i<cl.length; i++) {
    if (cl[i] == cp)
      continue
    if (cp.r.c.indexOf(rl.indexOf(cl[i].r))!=-1)
      cp.c.push(cl[i])
    else if (cp.r.e.indexOf(rl.indexOf(cl[i].r))!=-1)
      cp.e.push(cl[i])
    else if (cl[i].r.t == 4)
      cp.e.push(cl[i])
    else if (cp.r.t==6 && (cl[i].r.t==1 || cl[i].r.t==4))
      cp.c.push(cl[i])
    else if (cp.r.c.length == 0)
      cp.c.push(cl[i])
  }
  cp.aa = null
  var aic = rnd(0,99)
  if (aic < 77 && cp.c.length!=0) {
    cp.aa = cp.c[rnd(0,cp.c.length)]
    cp.dx = cp.aa.x
    cp.dy = cp.aa.y
  } else if (cp.e.length!=0) {
    cp.aa = cp.e[rnd(0,cp.e.length)]
    cp.dx = cp.x - (cp.aa.x-cp.x)
    cp.dy = cp.y - (cp.aa.y-cp.y)
    if (cp.dx < 0)
      cp.dx = 19
    else if (cp.dx > cnv.width-cp.w)
      cp.dx = cnv.width-cp.w-19
    if (cp.dy < 0)
      cp.dy = 19
    else if (cp.dy > cnv.height-cp.h)
      cp.dy = cnv.height-cp.h-19
  }
  if (cp.aa == null || 197 > ecl(cp.x,cp.y,cp.dx,cp.dy)) {
    cp.dx = rnd(19,cnv.width-cp.w-19)
    cp.dy = rnd(19,cnv.height-cp.h-19)
  }
}
function aiact(cp) {            // ai action behaviour
  var ll = (cp.r.t == 3 || cp.r.t == 6 || cp.r.t == 7) ? cp.e : cp.c
  if (def(cp.i.r)) {
    for (var i=0; i<ll.length; i++) {
      if (ecl(cp.x,cp.y,ll[i].x,ll[i].y) < cp.i.r) {
        cp.i.a.call(cp)
        break
      }
    }
  } else if (cp.co != null){
    if (ll.indexOf(cp.co) != -1)
      cp.i.a.call(cp)
  }
}
// helpers
function appdmg(cp,bl) {        // appdmg applies damage to character
  addhud(cp,"damage taken - hp:" + (cp.ch-=bl.dm)+"/"+cp.mh,50)
  if (cp.ch <= 0)
    die(cp,bl.o)
}
function die(cp,mr) {           // die is for death :D mr is the murderer
  sl.push({x:cp.x,y:cp.y,w:48,h:51,ox:192,oy:cp.oy,n:"grv",o:mr,s:cp,hd:["rip",9999]})
  cl.splice(cl.indexOf(cp),1)
  if (cp == cc)
    cc = null
}
function apphl(cp,hl) {         // apphl is for healing characters - hl is heal amount
  cp.ch = (cp.ch+hl > cp.mh) ? cp.mh : cp.ch+hl
  addhud(cp,"healed - hp:" + cp.ch+"/"+cp.mh,50)
}
function calcdest(x,y,d,r){     // calcdest calculates the destinations w.r.t "d" (direction)
  if (d == 0)
    x += r
  else if (d == 3)
    x -= r
  else if (d == 1)
    y += r
  else
    y -= r
  return {dx:x,dy:y}
}
function exclude(n) {           // exclude removes the name of the interacted character from objectives list
  if (gg == 2 && ol.indexOf(n)!=-1) {
    ol.splice(ol.indexOf(n),1)
    if (ol.length == 0)
      wn = "you got the job done."
  }
  else if (gg == 2)
    df = "wrong target: " + n
  else if (gg == 5 && --gm == 0)
    wn = "that's enough for now :D"
}
// ability functions
function interact() {           // simple close interaction
  if (!checkitem(this))
    return
  addhud(this,"success!",50)
  if (this == cc)
    exclude(this.co.n)
}
function fire(){                // fire bullet or something like that
  if (!checkitem(this))
    return
  var bb = {x:this.x+this.w/2,y:this.y+this.h/2,w:9,h:9,ox:161+this.i.p[2]*9,oy:204,s:this.i.p[0],dm:this.i.p[1],n:"bill"}
  var dd = calcdest(bb.x,bb.y,this.d,this.i.r)
  bb.dx = dd.dx
  bb.dy = dd.dy
  bb.o = this
  ml.push(bb)
}
function arrest(){              // arrest - prison - etc.
  if (!checkitem(this))
    return
  sl.push({x:this.co.x,y:this.co.y,w:this.co.w,h:this.co.h,ox:48,oy:this.co.oy,n:"cgd",o:this,s:this.co,hd:["prisoned",9999]})
  cl.splice(cl.indexOf(this.co),1)
  if (this == cc)
    exclude(this.co.n)
  else if (this.co == cc)
    cc = null
}
function rngarrest() {          // ranged arrest function
  if (!checkitem(this))
    return
  var bb = {x:this.x+this.w/2,y:this.y+this.h/2,w:9,h:9,ox:188,oy:204,o:this,n:"mike"}
  bb.s = this.i.p
  var dd = calcdest(bb.x,bb.y,this.d,this.i.r)
  bb.dx = dd.dx
  bb.dy = dd.dy
  bb.o = this
  ml.push(bb)
}
function scdatt(){              // primary terrorist attack
  if (!checkitem(this))
    return
  var nop = rnd(7,19)
  die(this,this)
  for (var i=0; i<nop; i++) {
    var bb = {x:rnd(this.x-this.w/2,this.x+this.w/2),y:rnd(this.y-this.h/2,this.y+this.h/2),w:9,h:9,ox:197,oy:204,n:"bill"}
    bb.s = 30
    bb.dm = rnd(30,70)
    var r = rnd(70,100)
    var dd = calcdest(bb.x,bb.y,rnd(0,4),r)
    bb.dx = dd.dx
    bb.dy = dd.dy
    bb.o = this
    ml.push(bb)
  }
}
function sex(){                 // best method ever
  if (!checkitem(this))
    return
  if (this.co.ch > this.co.mh*0.7) {
    addhud(this,"health is high - rejected",50)
    return
  }
  apphl(this.co,30)
  if (this.co.s <= 0)
    this.co.s = 1
  addhud(this.co,"speed nerfed",50)
  if (this.s <= 0)
    this.s = 1
  addhud(this,"speed nerfed",50)
  if (this == cc)
    exclude(this.co.n)
}
function inject() {             // drugs method lol
  if (!checkitem(this))
    return
  if (this.co.ch < this.co.mh*0.5) {
    addhud(this,"health is low - rejected",50)
    return
  }
  appdmg(this.co,{dm:30,o:this})
  this.co.s += 2
  if (this.co.s >= 9)
    this.co.s = 9
  addhud(this.co,"speed buffed",50)
  this.co.ac = 100
  addhud(this.co,"stonned",100)
  if (this == cc)
    exclude(this.co.n)
}
function stun(){                // stun
  if (!checkitem(this))
    return
  this.co.ac = this.i.p
  addhud(this.co,this.i.v+"ed",this.i.p)
  addhud(this.co,"stunned",this.i.p)
}
function rngstun(){             // ranged stun
  if (!checkitem(this))
    return
  var bb = {x:this.x+this.w/2,y:this.y+this.h/2,w:9,h:9,ox:179,oy:204,n:"joel"}
  bb.s = this.i.p[0]
  bb.dm = this.i.p[1]
  var dd = calcdest(bb.x,bb.y,this.d,this.i.r)
  bb.dx = dd.dx
  bb.dy = dd.dy
  bb.o = this
  ml.push(bb)
}
function suspend(){             // suspends people
  if (!checkitem(this))
    return
  addhud(this.co,this.i.v + "ed",50)
  addhud(this.co,"running away",50)
  var dd = calcdest(this.co.x,this.co.y,(this.co.d+2)%3,500)
  this.co.dx = dd.x
  this.co.dy = dd.y
  if (this.co.dx < 0)
    this.co.dx = 0
  if (this.co.dx > cnv.width-this.co.w)
    this.co.dx = cnv.width-this.co.w
  if (this.co.dy < 0)
    this.co.dy = 0
  if (this.co.dy > cnv.height-this.co.h)
    thid.co.dy = cnv.height-this.co.h
  this.co.dt = 130
}
function minelay() {
  if (!checkitem(this))
    return
  sl.push({x:this.x,y:this.y,w:18,h:9,ox:161,oy:213,n:"mn",o:this,dm:150})
}
function mlatt(){
  if (!checkitem(this))
    return
  var pr = rnd(0,100)
  if (pr < this.i.p[1])
    addhud(this,"miss",50)
  else
    appdmg(this.co,{dm:this.i.p[0],o:this})
}
function selfheal(){            // character heals himself
  if (!checkitem(this))
    return
  if (this != cc && this.ch > this.mh*0.7)
    return
  apphl(this,this.i.p)
}
function rngheal(){             // range heal - except for character
  if (!checkitem(this))
    return
  for (var i=0; i<cl.length; i++) {
    if (this == cl[i])
      continue
    if (ecl(cl[i].x,cl[i].y,this.x,this.y) < this.i.r)
      apphl(cl[i],this.i.p)
  }
}
function rob(){
  if (!checkitem(this))
    return
  var pr = rnd(0,100)
  if (pr < this.i.p) {
    addhud(this,"failed",50)
    addhud(this.co,"heeey!",50)
    return
  } else {
    addhud(this,"success",50)
    addhud(this.co,"robbed",50)
    if (this == cc)
      exclude(this.co.n)
  }
}
function transmit() {
  if (!checkitem(this))
    return
  sl.push({x:this.co.x,y:this.co.y,w:this.co.w,h:this.co.h,ox:48,oy:this.co.oy,n:"trns",o:this,s:this.co,hd:["transformed",9999]})
  cl.splice(cl.indexOf(this.co),1)
  if (this == cc)
    exclude(this.co)
  else if (this.co == cc)
    cc = null
}
function cngcnt() {
  if (!checkitem(this))
    return
  if (this == cc) {
    mc = this.i.p
    addhud(this,"haluscinating",this.i.p)
  }
}
function call(){                // call for help method
  if (!checkitem(this))
    return
  var tc = null
  for (var i=0; i<cl.length; i++) {
    if (cl[i] == this)
      continue
    var ds = ecl(this.x,this.y,cl[i].x,cl[i].y)
    if (this.r.c.indexOf(rl.indexOf(cl[i].r)) != -1 && ds < this.i.p[0]) {
      tc = cl[i]
      break
    }
  }
  if (tc != null) {
    tc.dx = this.x
    tc.dy = this.y
    tc.dt = 130
    addhud(this,tc.r.n + " is called",50)
    addhud(tc,"coming!",50)
  } else {
    addhud(this,"no one to call around",50)
  }
}
function surprise() {           // surprise and stun other characters
  if (!checkitem(this))
    return
  for (var i=0; i<cl.length; i++) {
    if (cl[i]==this)
      continue
    if (ecl(this.x,this.y,cl[i].x,cl[i].y)<this.i.p) {
      cl[i].ac = 50
      if (rnd(0,2) == 0)
        addhud(cl[i],"wtf!",50)
      else if (rnd(0,2) == 0)
        addhud(cl[i],"wut?",50)
      else if (rnd(0,2) == 0)
        addhud(cl[i],"is that a joke?",50)
      else
        addhud(cl[i],"wtf did i just see?",50)
    }
  }
  addhud(this,"surprise mfs",50)
}
function rndgo() {              // for transportation
  if (!checkitem(this))
    return
  var bb = {x:this.x+this.w/2,y:this.y+this.h/2,w:9,h:9,ox:160,oy:204,o:this,n:"leon"}
  bb.s = 20
  var dd = calcdest(bb.x,bb.y,this.d,this.i.r)
  bb.dx = dd.dx
  bb.dy = dd.dy
  bb.o = this
  ml.push(bb)
}
function bomb() {
  if (!checkitem(this))
    return
  var bb = {x:this.x+this.w/2,y:this.y+this.h/2,w:12,h:12,ox:179,oy:213,o:this,n:"stan"}
  bb.s = 25
  var dd = calcdest(bb.x,bb.y,this.d,this.i.r)
  bb.dx = dd.dx
  bb.dy = dd.dy
  bb.o = this
  bb.t = 3
  ml.push(bb)
}
function win() {                // instant win for controlled character
  if (!checkitem)
    return
  if (this == cc) {
    wn = "towel win."
    gm = 99
  }
}
