document.addEventListener("DOMContentLoaded", function () {


    const convertButton = document.getElementById("convert")

    async function convertCurrency() {
        const SourceCurrency = document.getElementById("source_currency").value.trim()
        const amount = parseFloat(document.getElementById("input_currency").value.trim())
        const targetCurrency = document.getElementById("target_currency").value.trim()
        const apiKey = "e3b5823bccc571ccf87088b0"
        const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${SourceCurrency}`

        const result = document.getElementById("result")

        const response = await fetch(apiUrl)
        const data = await response.json()

        if (data.result === "success") {
            const rate = data.conversion_rates[targetCurrency];
            const convertedAmount = (amount * rate).toFixed(2);

            result.innerText = `${amount} ${SourceCurrency} = ${convertedAmount} ${targetCurrency}`


        } else {
            result.innerText = "Error At Data Fetching"
        }
    }

    convertButton.addEventListener("click", convertCurrency)

})
