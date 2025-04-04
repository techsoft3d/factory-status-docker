const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');



router.post('/export_json', (req, res) => {
    const filepath = String(req.body.filePath);
    const data = req.body.data;
    // _dirname for root directory, go up from route folder, start from public, write to json file (overwrite if it existd)
    const writePath = path.join(__dirname, '../', '/public', filepath);
    fs.writeFileSync(writePath, data);
    res.status(200).send(data);
});




router.post('/filedate', (req, res) => {
    const filepath = req.body.filePath;
    const readPath = path.join(__dirname, '../', '/public', filepath);
    fs.stat(readPath, (err, stats) => {
        if (err) {
            return console.log("Error in reading file: " + err);
        }
        res.send(stats.mtime);
    })
})

module.exports = router;