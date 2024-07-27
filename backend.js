const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown = document.querySelectorAll(".dropdown select");

for (let select of dropdown)
{
    for (code in countryList)
    {
        let newOpt = document.createElement("option");
        newOpt.innerText = code;
        newOpt.value = code;
        select.append(newOpt);
    }
}

