const csv=require('csvtojson');
const _ = require('lodash');
const tf = require('@tensorflow/tfjs-node');


let loadCSVdata = async (fileName, columns) => {
    const jsonArray=await csv().fromFile(`./dataset/sample.csv`);
    console.log(jsonArray);

    let tempArr = [];
    for(let val of columns){
        tempArr.push(_.map(jsonArray, "height"));
    }
    return tempArr;
};

(async ()=>{
    const jsonArray=await csv().fromFile(`./dataset/sample.csv`);
    console.log(jsonArray);

    let height = _.map(jsonArray, "height")
    let weight = _.map(jsonArray, "weight")

    const feature = tf.tensor([1,2]);
    tf.print()
})();