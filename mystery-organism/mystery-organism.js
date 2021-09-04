// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function
function pAequorFactory(num = Number(), dnaBases = Array()){
  const pAequor = {
    specimenNum : num,
    dna : dnaBases,

    // Creates the complementary DNA strand
    complementStrand() {
      let complementaryStrand = [];

      this.dna.forEach(base => {
        switch (base) {
          case 'A':
            complementaryStrand.push('T');
            break;
          case 'T':
            complementaryStrand.push('A');
            break;
          case 'C':
            complementaryStrand.push('G');
            break;
          case 'G':
            complementaryStrand.push('C');
            break;
          default:
            console.log('Something went terribly wrong! (*__*)');
        }
      });

      return complementaryStrand;
    },

    // Mutates one DNA base
    mutate() {
      const randomBase = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();

      while (newBase === this.dna[randomBase]) {
        newBase = returnRandBase();
      }

      this.dna[randomBase] = newBase;

      return this.dna;
    },

    // Compares current DNA strand with that of the given object
    compareDNA(pAequor) {
      let commonBases = 0;

      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonBases++;
        }
      }

      commonPercentage = (commonBases / 15 * 100).toFixed(2);

      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${commonPercentage}% DNA in common.`)

      return commonPercentage;
    },

    // Considers whether the current strand is likely to survive
    willLikelySurvive() {
      let survivalChance = 0;

      this.dna.forEach(base => {
        if (base === 'C' || base === 'G') {
          survivalChance++;
        }
      });

      survivalChance = (survivalChance / 15 * 100).toFixed(2)

      if (survivalChance > 60) {
        return true;
      } else {
        return false;
      }
    }
  };

  return pAequor;
}

// Function that finds the two most related pAequor instances from the given array.
function findMostRelatedPAeqourInstances(pAequorArray) {
  let specimen1;
  let specimen2;
  let mostRelated = 0;

  for (let i = 0; i < pAequorArray.length - 1; i++) {
    for (let j = i + 1; j < pAequorArray.length; j++) {
      let relation  = pAequorArray[i].compareDNA(pAequorArray[j]);
      
      if (relation > mostRelated) {
        specimen1 = i;
        specimen2 = j;
        mostRelated = relation;
      }
    }
  }

  console.log();
  console.log(`Specimen #${pAequorArray[specimen1].specimenNum} and specimen #${pAequorArray[specimen2].specimenNum} are the two most related pAequor instances.`);
  console.log(`They are related by ${mostRelated}%`);
}

// Function that creates and returns a set amount of pAequor instances that can survive 
function pAequorInstances(instances = Number()) {
  let pAequorArray = [];
  let specimenNum = 0;
  
  while (pAequorArray.length < instances) {
    const pAequor = pAequorFactory(++specimenNum, mockUpStrand());

    if (pAequor.willLikelySurvive()) {
      pAequorArray.push(pAequor);
    }
  }
  
  return pAequorArray;
}

// 30 instances
const pAequorForResearch = pAequorInstances(30);

// Test
const specimen1 = pAequorFactory(1, mockUpStrand());
console.log(specimen1.dna);
specimen1.mutate();
console.log(specimen1.dna);
const specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen2.dna);
specimen1.compareDNA(specimen2);
console.log(specimen1.willLikelySurvive());
console.log(specimen2.willLikelySurvive());

pAequorForResearch.forEach(obj => console.log(obj.specimenNum))
console.log();
findMostRelatedPAeqourInstances(pAequorForResearch);
