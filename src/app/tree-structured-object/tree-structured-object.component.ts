import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-structured-object',
  templateUrl: './tree-structured-object.component.html',
  styleUrls: ['./tree-structured-object.component.css']
})
export class TreeStructuredObjectComponent implements OnInit {
  private firstLevelArr: any[];
  private secondLevelArr: any[];
  private thirdLevelArr: any[];
  private fourthLevelArr: any[];
  public parent:any={};

  // parentId;
  // parentPath;
  // private root: { id: number; name: string; }[];
  // private count=0;
  // private totalArrayList: any[];
  // private nestedKeys: string[];
  // private nestedCount: number=0;


  constructor() { }

  ngOnInit() {


    // this.root=[
    //   {id:-1,name:"Json"}
    // ]
    this.firstLevelArr = [
      { id: "1", name: "India" },
      { id: "2", name: "Germany" }
      ];
      this.secondLevelArr = [
      { id: "s1", parentId: "2", name: "Bavaria" },
      { id: "s2", parentId: "2", name: "Berlin" },
      { id: "s3", parentId: "1", name: "Maharashtra" },
      { id: "s4", parentId: "1", name: "Tamilnadu" }
      ];
      this.thirdLevelArr = [
      { id: "d1", parentId: "s1", name: "Upper Bavaria" },
      { id: "d2", parentId: "s1", name: "Lower Bavaria" },
      { id: "d3", parentId: "s2", name: "Berlin-Mitte" },
      { id: "d4", parentId: "s2", name: "Kreuzberg" },
      { id: "d5", parentId: "s3", name: "Nashik" },
      { id: "d6", parentId: "s3", name: "Jalgoan" },
      { id: "d7", parentId: "s4", name: "Ariyalur" },
      { id: "d8", parentId: "s4", name: "Chennai" }
      ];
      this.fourthLevelArr = [
      { id: "p1", parentId: "d1", name: "Munich" },
      { id: "p2", parentId: "d1", name: "Erding" },
      { id: "p3", parentId: "d2", name: "Leipzig" },
      { id: "p4", parentId: "d2", name: "Landshut" },
      { id: "p5", parentId: "d3", name: "Passau" },
      { id: "p6", parentId: "d3", name: "Gesundbrunnen" },
      { id: "p7", parentId: "d4", name: "Frieburg" },
      { id: "p8", parentId: "d4", name: "Hamburg" },
      { id: "p9", parentId: "d6", name: "Raver" },
      { id: "p10", parentId: "d6", name: "Savda" },
      { id: "p11", parentId: "d5", name: "Ozar" },
      { id: "p12", parentId: "d5", name: "Manmad" },
      { id: "p13", parentId: "d7", name: "Thirumanur" },
      { id: "p14", parentId: "d7", name: "Sendurai" },
      { id: "p15", parentId: "d8", name: "New Chennai" },
      { id: "p16", parentId: "d8", name: "Old Chennai" }
      ];

      this.firstLevelArr.map((data)=>{
        data['parentId']=-1;
      })


      //generating tree function
     this.generateJsonTree();


    //    this.totalArrayList=[{array:this.firstLevelArr,level:1},{array:this.secondLevelArr,level:2},{array:this.thirdLevelArr,level:3},{array:this.fourthLevelArr,level:4}]
    //   this.nestedKeys=["countries","states","districts","places"]
    //  this.recursive(this.totalArrayList[0],-1,this.parent)
  }

  private generateJsonTree(){

//first level
    for(let fi=0;fi<this.firstLevelArr.length;fi++){
      if(this.firstLevelArr[fi].parentId == -1){
     let {parentPath:parentPath,parentId:parentId} = this.createTreeNode(this.firstLevelArr,fi,this.parent,'countries')

     //second level

      for(let si=0;si<this.secondLevelArr.length;si++){
        if(this.secondLevelArr[si].parentId == parentId){

          let {parentPath:secondParentPath,parentId:secondParentId} =this.createTreeNode(this.secondLevelArr,si,parentPath,'states')

          //third level
            for(let ti=0;ti<this.thirdLevelArr.length;ti++){
              if(this.thirdLevelArr[ti].parentId == secondParentId){
                let {parentPath:thirdParentPath,parentId:thirdParentId} = this.createTreeNode(this.thirdLevelArr,ti,secondParentPath,'districts')

                //fourth level
                  for(let foi=0;foi<this.fourthLevelArr.length;foi++){
                    if(this.fourthLevelArr[foi].parentId == thirdParentId){

                      let {parentPath,parentId} = this.createTreeNode(this.fourthLevelArr,foi,thirdParentPath,'places')
                        console.log(this.parent)
                    }
                  }
              }
            }
        }
      }
    }
  }
  }

  private createTreeNode(array,index,parentPath,name){
    if(!parentPath[name]){
      parentPath[name] ={};
    }
    let key = array[index].id;
    parentPath[name][key]={};
    parentPath[name][key][name+'Name']= array[index].name;
    let updatedParentPath = parentPath[name][key] ;
    let updatedParentID = key;
    return {parentPath:updatedParentPath, parentId:updatedParentID};
  }


  // recursive(arrayObject,id,path){
  //   if(this.count<this.totalArrayList.length){
  //     this.count++;
  //     let parentPath,parentId,obj;
  //     for(let index=0;index<arrayObject.array.length;index++){
  //       if(arrayObject.array[index].parentId == id){

  //          obj = this.createTreeNode(arrayObject.array,index,path,this.nestedKeys[arrayObject.level-1])
  //           console.log(this.parent)
  //           if(this.count<this.totalArrayList.length){

  //           return this.recursive(this.totalArrayList[this.count],obj.parentId,obj.parentPath);
  //           }
  //       }
  //     }
  //   }
  // }


}
