export class Recipe{
    public name:string;
    public description:string;
    public imgPath:string;


    constructor(name:string, describtion:string, imgPath:string){
        this.name = name;
        this.description = describtion;
        this.imgPath = imgPath;

    }
}