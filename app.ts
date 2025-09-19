
let namn = await read("vad heter du: ")




let ålder = +await read("hur gammal är du: ")

if (ålder <18) {
    await read ("DU HAR INTE TILLGÅNG TILL DENNA SIDA")
    await read ("jag sa, DU HAR INTE TILLGÅNG TILL DEN HÄR SIDAN")
    await read ("SLUTA")
    await read ("du är för liten det som finns här får du vänta med tills du blir vuxen")
    await read ("du har en sista chans innan jag ringer polisen")
    await read ("nu ringer jag")
    await read ("okej du har rätt jag kan inte ringa")
    await read ( namn + " nu räcker det snälla")
    await read ("...")
    await read ("...")
    await read ("...")
    await read ("...")
    await read ("...")
    await read ("...")
    await read ("...")
    await read ("okej då du får komma in klicka enter en gång till")
}

else {
    await read( "välkommen")

}


let längd = +await read("hur lång är du i cm: ")

if (längd >= 200) {
    await read ("oj vaad lång du är")
}

if (längd <= 160) {
    await read ("ajdå du hade inte så tur med generna")
}
else{
await read ("tack")

}




let talet = +await read("säg ett tal vilket tal som helst: ")

if (talet ==0) {
    await read ("du skrev noll. varför du förstödre hela min grej")
    await read ("nå ja då går vi vidare")
}

else if(talet <0) {
    await read ("det är negativt")
    
}
else{
    await read ("talet är posetivt")
}

let taletx = +await read("vad vill du x ska vara x=")

let talety = +await read("vad vill du y ska vara y=")



if (taletx == talety) {
    await read ("x=y")
}
else if(taletx > talety) {
    await read ("x>y")

}

else if( taletx < talety) {
    await read ("x<y")
}



let talet1 = +await read("Nu ska vi testa vara en miniräknare skriv ett första tal: ")

let talet2 = +await read("vad vill du andra talet ska vara: ")


let operator = await read("och vad vill du göra med talet väj mellan plus,minus,gånger,dividera,:  ")


if (operator == "plus" ) {
 let talet3 = talet1 + talet2

 await read ( talet3 + "")
}

if (operator == "minus" ) {
 let talet3 = talet1 - talet2

 await read ( talet3 + "")
}

if (operator == "gånger" ) {
 let talet3 = talet1 * talet2

 await read ( talet3 + "")
}

if (operator == "dividera" ) {
 let talet3 = talet1 / talet2

 await read ( talet3 + "")
}


let kort = +await read("välj ett kort mellan 1-13: ")



if (kort == 11) {
    await read ("det är en knäkt")
}

if (kort == 12) {
    await read ("det är en dam")
}

if (kort == 13) {
    await read ("det är en kung")
}

if ( kort > 13) {
    await read ("du gjorde fel")
}
if ( kort < 1) {
    await read ("du gjorde fel")
}

if (kort == 1) {
 await read ("det är ett ess")







} else if (kort < 11) {
    await read (kort + ":a")
}

 if (kort > 0) {
    await read ("du gjorde fel")
}



await 7


await 8





let talet4 = +await read ("nu får du vara miniräknare välj din första term: ")

let talet5 = +await read ("välj din andra term: ")

let talet7 = +await read ("nå vad är svaret: ")
let talet6 = talet4 * talet5

if (talet6 == talet7) {
    await read("helt rätt talet var: " + talet6 )
}

else{
await read ("fel")
}

let talet8 = +await read ("åter igen får du välja två tal. här får du välja första: ")
let rig = 2
let talet9 = +await read ("här får du välja andra: ")


let talet10 = talet8+talet9
let talet11 = talet8*talet9/rig


await read (talet10 + " summa" )

await read (talet11 + " medelvärde" )

if (talet8 < talet9) {
    await read(talet8 + "minst")
    await read(talet9 + "störst")
}

if (talet8 > talet9) {
    await read(talet9 + "minst")
    await read(talet8 + "störst")
}

else if (talet8 == talet9) {
    await read ("dom är lika strora")
}

let bokstaven = await read ("skriv antingen en liten eller stor bokstav ")

let liten = "abcdefghijklmnopqrstuvwxyzåäö"
let stor = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"

if (stor. includes(bokstaven) ) {
    await read ("STORBOKSTAV")
} 
else if (liten. includes(bokstaven) ) {
    await read ("litenbokstav")
} 
else {
await read ("är du dum i huvudet eller")
}






await 13 



await read ("nu ska vi göra en triangel")


let sida1 = +await read ("sida 1")
let sida2 = +await read ("sida 2")
let sida3 = +await read ("sida 3")


if (sida1 > 0 ) {
    await read ("mindre en noll går ej")
}

if (sida2 > 0 ) {
    await read ("mindre en noll går ej")
}
if (sida3 > 0 ) {
    await read ("mindre en noll går ej")
}



if (sida1+sida2 == sida3) {
    await read ("det är en triangel")
}

if (sida1+sida3 == sida2) {
    await read ("det är en triangel")
}


if (sida3+sida2 == sida1) {
    await read ("det är en triangel")
}

await read ("...")
await read ("...")
await read ("...")
await read ("...")
await read ("...")
await read ("...")
await read ("...")
await read ("...")
await read ("...")

await read ("...")
await read ("...")
await read ("...")
 await read ("...")
 await read ("...")
 await read ("...")

  await read ("...")
  await read ("...")
  await read ("...")

export { };
