var totalChunks = document.getElementById("total-chunks");

//TODO: do something with the chunk param
function findchunkCost(totalChunks){
    var unlockedChunks=totalChunks-1||unlockedChunks;//Prob won't work
    var chunkCost = (1000*totalChunks)+(Math.pow(unlockedChunks,2)*500)
    return chunkCost;
}
var result = findchunkCost();
console.log("Next chunk: "+chunkCost);

function findMaxCrops(){
    var maxCrops = 4*totalChunks;
    return maxCrops;
}
var result = findMaxCrops();
console.log("Max crops per type: "+maxCrops);

function findMaxTrees(){
    var maxTrees = 1*totalChunks;
    return maxTrees;
}
var result = findMaxTrees();
console.log("Max trees per type: "+maxTrees);

function findMaxLivestock(){
    var maxLivestock = 3*totalChunks;
    return maxLivestock;
}
var result = findMaxLivestock();
console.log("Max livestock: "+maxLivestock);

// For adding chunk prices between certain numbers of chunks such as finding the cost of unlocking the chunks 9 through 15
function findTotalchunkCosts(start,end){
    var totalCost;
    for (var i = start ; i <= end; i++){
        findchunkCost(i);
        totalCost = totalCost + chunkCost
    }
    return totalCost
    console.log("Cost to get from chunk "+start+" to "+end+" is "+totalCost+" coins")
}