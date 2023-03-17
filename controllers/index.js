const controller = {
    hello: async (req, res) => {
        return res.status(200).json({ message: "Hello World" })
    },
    sortnum: async (req, res) => {
        let numArray = req.body.numArray
        if (numArray.length == 0) {
            return res.status(400).json({ message: "this is empty array" });
        }

        if (numArray.every(element => { return typeof element !== 'number' })) {
            return res.status(400).json({ message: "this is not numbers array" });
        }

        let sortNumArray = numArray.sort((a, b) => a - b)
        return res.status(200).json({ message: sortNumArray })
    }
}

module.exports = controller