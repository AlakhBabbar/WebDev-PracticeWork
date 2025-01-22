/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {message: 'write the url', name: "url"}
]).then((ans)=>{
    const url = ans.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr.png'));

    fs.writeFile("url1.txt", url, (err)=>{
        if (err) throw err;
        console.log("yo");
    });
});