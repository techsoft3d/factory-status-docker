const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Communicator Demos | Tech Soft 3D' });
});

router.get('/factory-controller', function (req, res) {
    res.render('factory-controller', { title: 'Factory Controller | HOOPS Web Viewer' });
});

router.get('/health', (req, res, next) => {
	return res.status(200).send();
});

module.exports = router;
