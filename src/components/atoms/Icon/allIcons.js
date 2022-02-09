import fs from 'fs'
import path from 'path'

const iconsDirectory = path.join(process.cwd(), 'src/components/atoms/Icon/icons')

const fileNames = fs.readdirSync(iconsDirectory)
const iconNames = fileNames.map(fileName => {
    return fileName.replace(/\.js$/, '')
})

export function getAllIcons() {
    
    return {
      icons: iconNames
    }
 }