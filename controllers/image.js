const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'd12aaf44e08641828c6a4b72f1db9a0f'
});


const handleApiCall = (req,res) =>{
app.models
.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
.then(data =>{
    res.json(data);
})
.catch(err => res.status(400).json('Unable to work with API'))
}
const handleImage = (req,res,db) =>{
    const {id} = req.body;
    db('users').where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])
    })
    .catch(err => res.status(400).json('error'))
}

module.exports = {
    handleImage,
    handleApiCall
}