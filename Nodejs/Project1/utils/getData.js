import path from 'node:path'
import fs from 'node:fs/promises'


export async function getData(){
    try{
        const datapath=path.join('data','data.json')
        const data=await fs.readFile(datapath,'utf8')
        const parsedata=JSON.parse(data)
        return parsedata
    }catch{
        return []
    }
}