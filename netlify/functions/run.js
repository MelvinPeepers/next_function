exports.handler = async function () {
    console.log('function ran')

    const data = { name: 'mel' }

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}