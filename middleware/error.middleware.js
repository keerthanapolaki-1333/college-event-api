const errorHandler = (err, req, res, next) => {

    console.error(err);

    if (err.code === "ER_DUP_ENTRY") {

        return res.status(409).json({
            success: false,
            message: "Email already exists"
        });

    }

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

};

module.exports = errorHandler;