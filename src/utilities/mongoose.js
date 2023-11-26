const multipleMongooseToObject = (mongoose) => {
    return mongoose.map(item => item.toObject())
}

const mongooseToObject = (mongoose) => {
    return mongoose ? mongoose.toObject : mongoose
}

module.exports = { multipleMongooseToObject, mongooseToObject }