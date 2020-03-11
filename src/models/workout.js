'use strict';

class Work {
  constructor (workData) {
    this.id = workData.id;
    this.date = workData.date;
    this.weight = workData.weight;
    this.exercise = workData.exercise;
  }
}

exports.findById = ((id) => {
  return new Promise ((resolve, reject) => {
    let workData = `dynamo query`;
    let cust = new Work (workData);
    });
  });
});7


export default facets;

