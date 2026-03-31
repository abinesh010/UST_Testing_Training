import * as xlsx from 'xlsx';
import * as path from 'path';

export const readExcelFile = (fileName : string , sheetName : string): any[] =>{

    const filePath = path.join(process.cwd(), 'test-data', fileName);

    try
    {
        const workbook = xlsx.readFile(filePath);
        const sheet = workbook.Sheets[sheetName]
        const data = xlsx.utils.sheet_to_json(sheet);
        return data;
    }
    catch(error)
    {
        console.error(`Error Reading the Excel File: ${error}`);
        throw new Error(`Error Reading the Excel File: ${error}`);
    }
}