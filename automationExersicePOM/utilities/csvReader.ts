import fs from'fs'
import path from 'path'
import {parse} from 'csv-parse/sync'

export interface loginUser{
    type:string;
    username:string;
    password:string;
}

export function readcsv(): loginUser[]{
    const filepath =path.resolve(__dirname,'../testData/loginData.csv')
    const fileformate = fs.readFileSync(filepath,'utf-8')

    return parse (fileformate,{
        trim:true,
        columns :true
    }) as loginUser[];
}
