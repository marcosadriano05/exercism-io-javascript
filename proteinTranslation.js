const translate = (rna) => {
  if(rna === undefined) {
    return [];
  }
  let proteins = [];
  let codons = [];
  for(let i=0; i<rna.length; i+=3) {
    codons.push(rna.slice(i, i+3));
  }
  let stopCodonIndex = codons.length-1;
  //Position of first stop codon
  for(let i=0; i<codons.length; i++) {
    if(stopCodons.includes(codons[i])) {
      stopCodonIndex = i;
      break;
    }
  }
  //Getting all valid codons
  let validateCodons = stopCodons;
  for(let i=0; i<mapping.length; i++) {
    let mappingCodons = [...mapping[i][1]];
    validateCodons = validateCodons.concat(mappingCodons);
  }
  //Associate codons with proteins
  for(let i=0; i<stopCodonIndex+1; i++) {
    //Throw an error if codon is invalid
    if(!validateCodons.includes(codons[i])) {
      throw new Error('Invalid codon');
    }
    for(let j=0; j<mapping.length; j++) {
      if(mapping[j][1].includes(codons[i])) {
        proteins.push(mapping[j][0]);
        break;
      }
    }
  }
  return proteins;
};

const mapping = [
  ['Methionine', ['AUG']],
  ['Phenylalanine', ['UUU', 'UUC']],
  ['Leucine', ['UUA', 'UUG']],
  ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
  ['Tyrosine', ['UAU', 'UAC']],
  ['Cysteine', ['UGU', 'UGC']],
  ['Tryptophan', ['UGG']],
];

const stopCodons = ['UAA', 'UAG', 'UGA'];
