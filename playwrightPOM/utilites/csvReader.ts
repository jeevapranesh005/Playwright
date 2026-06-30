import fs from 'fs';
import path from 'path'
import {parse} from 'csv-parse/sync'


export interface loginuser{
    type:string;
    username:string;
    password:string;
}

export function readlogindata(): loginuser[]{
    
    const filepath = path.resolve(__dirname,'../testData/loginData.csv');
    console.log(filepath);
    const filecont = fs.readFileSync(filepath,'utf-8');
    return parse(filecont,{
        columns:true,
        skip_empty_lines:true,
        trim:true,

    }) as loginuser[];
}