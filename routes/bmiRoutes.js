const path = require('path');
// const router = require('../root');
const bodyParser = require('body-parser');
const express = require('express');
const router = express();

const port = 3000;

router.use('/public', express.static(path.join(__dirname, '../public')));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/bmiCalculator.html'));
});


router.post('/bmicalculator', (req, res) => {

    const { height, weight, age, gender, unit } = req.body;

   
    let bmiValue;
    if (unit === 'metric') {
       
        bmiValue = weight / Math.pow(height / 100, 2);
    } else {
        
        bmiValue = (weight / Math.pow(height, 2)) * 703;
    }

    
    let resultMessage;
    if (bmiValue < 18.5) {
        resultMessage = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        resultMessage = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        resultMessage = 'Overweight';
    } else {
        resultMessage = 'Obesity';
    }

    res.json({ bmiResult: bmiValue.toFixed(2), message: resultMessage });
});

router.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});