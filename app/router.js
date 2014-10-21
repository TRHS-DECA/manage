var app = require('../app');

app.get('/', require('./routes/checkin').get);
app.post('/', require('./routes/checkin').post);
