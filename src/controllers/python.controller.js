/* eslint-disable */
const catchAsync = require('../utils/catchAsync');
const { spawn } = require('child_process');
const pythonScriptPath = 'E:/5) College/ML Project/1) ML-Backend/ML-Back/src/python/main.py';

// const test_data_1 = [7.4, 0.700, 0.00, 1.9, 0.076, 11.0, 34.0, 0.99780, 3.51, 0.56, 9.4];
// const test_data_2 = [7.3, 0.65, 0.0, 1.2, 0.065, 15.0, 21.0, 0.9946, 3.39, 0.47, 10.0]

const python = catchAsync(async (req, res) => {
    let dataReceived;
    let formData = req.body.formData

    // Serialize the test_data array to a JSON string
    const dataToSend = JSON.stringify(formData);

    // Spawn the Python script as a child process
    const pythonProcess = spawn('python', [pythonScriptPath]);

    // Send data to the Python script
    pythonProcess.stdin.write(dataToSend);
    pythonProcess.stdin.end(); // End the input stream to signal end of input

    // Listen for data from the Python script
    pythonProcess.stdout.on('data', (data) => {
        console.log('Data received from Python:', data.toString().trim());
        dataReceived = JSON.parse(data.toString()); // Parse the JSON string to a JavaScript object
        res.send({
            data: dataReceived
        });
    });

    // Handle errors
    pythonProcess.stderr.on('data', (err) => {
        console.error('Error from Python:', err.toString());
    });

    // Handle process exit
    pythonProcess.on('exit', (code) => {
        console.log(`Python process exited with code ${code}`);
    });

});

const pythonPost = catchAsync(async (req, res) => {
    const { formData } = req.body
    console.log(formData)
    res.send('Succesfully Sent')
})

module.exports = {
    python,
    pythonPost
};
