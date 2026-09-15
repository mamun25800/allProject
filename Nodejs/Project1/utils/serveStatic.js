import path from 'node:path'
import { sendResponse } from './sendResponse.js'
import { getcontentType } from './getcontentType.js'
import fs from 'node:fs/promises'

export async function serveStatic(req,res,dirname){
    const publicdir=path.join(dirname,'public')
    const pathtoserve=path.join(publicdir,req.url==='/'?'index.html':req.url)

    const ext=path.extname(pathtoserve)
    const contentType=getcontentType(ext)

    try{
        const content=await fs.readFile(pathtoserve)
        sendResponse(res,200,contentType,content)
    }catch(err){
        if(err.code==='ENOENT'){
            const content =await fs.readFile(path.join(publicdir,'404.html'))
            sendResponse(res,404,contentType,content)
        }
        else{
            sendResponse(res,500,'text/html',`<html><h1>Server Error:${err.code}`)
        }
    }

}