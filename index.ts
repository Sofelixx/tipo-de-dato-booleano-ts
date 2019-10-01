let esSuperMan:boolean = true;
let esBatman:boolean;
let esAcuaman = true;
function es_Superman() {
  if ( esSuperMan ) {
    console.log('Estamos salvados');
  } else {
    console.log('Oooops');
  }
}
function convertirClark() {
  return false;
}
es_Superman();
esSuperMan = convertirClark();
es_Superman();