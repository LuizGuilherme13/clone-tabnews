function status(request, response) {
    response.status(200).json({ chave: "olá mundo" })
}

export default status