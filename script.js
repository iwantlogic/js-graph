c = document.getElementById("c") 
tb = document.getElementById("vulntbox")
ctx = c.getContext("2d")
originx = 250
originy = 250 
y=1
vulnfunc=()=>{
ctx.clearRect(0,0,500,500)
ctx.strokeStyle="green" 
ctx.moveTo(originx, 0) 
ctx.lineTo(originx, 500) 
ctx.moveTo(0, originy) 
ctx.lineTo(500, originy) 

ctx.stroke()
for (let x=0; x<=500; x += 0.01){
  y = originy-eval(tb.value)
  ctx.fillRect(originx+x,y,1,1) // Really scary right? - Seb (also exceptions)
}
for (let x=0; x>=-500; x -= 0.01){
  y = originy-eval(tb.value)
  ctx.fillRect(originx+x,y,1,1) // Really scary right? - also Seb (also exceptions) (i use vim so i used yy to copy it :cool:)
}

y=1
}
