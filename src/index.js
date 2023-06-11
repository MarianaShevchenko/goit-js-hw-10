const options = {
  heders: {
    Authorization:
      'live_ rbLLAVWafVoyBQow80r0b39YZ5x2Bn EGCiMfX2yBZpGhlmYCi3WFELkIRBos Pf2u',
  },
};
fetch('https://api.thecatapi.com/v1/breeds', options)
  .then(response => {
    return response.json();
  })
  .then(cats => {
    console.log(cats);
  });

// .catch(error =>
//     console.log(error)
//     );
const select = document.querySelector('.value-id');
console.log(select);
