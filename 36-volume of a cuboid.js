class Kata{
    static getVolumeOfCuboid(length , width , height){
        
        const v = length * width * height;
        return v;
    }
}
console.log(Kata.getVolumeOfCuboid(2,2,1));