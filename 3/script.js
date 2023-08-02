const input = document.getElementById("jsonInputField")


input.addEventListener("change", function () {
    const file = input.files[0];
    if (!file) return;

    const resultEl = document.getElementById("result");

    try {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            const obj = JSON.parse(reader.result);

            console.log("Успешно! Полученный объект:")
            console.log(obj);

            const extractedData = extractData(obj);
            resultEl.innerText = JSON.stringify(extractedData)
        })

        reader.readAsText(file);
    }
    catch (err) {
        console.error("Не получилось конвертировать JSON объект в JS объект.")
        resultEl.innerText = JSON.stringify({
            message: "Не получилось конвертировать JSON объект в JS объект. Проблема с файлом или со структурой данных."
        })
    }
})


// Согласно примеру, указанному в задании, результат возвращает
// функция extractData
function extractData(obj) {
    try {
        // В примере id = 1
        const id = 1;

        // Тогда
        const { data, included } = obj.order;
        const { colorId } = data.find(e => e.id === 1);
        const color = included.find(e => e.colorId === colorId);
        const object = [];
        object.push({
            id,
            color
        })
        return { object }
    } catch (err) {
        console.error("Ошибка при извлечении нужных данных. Возможно, не существует указанного id или полученные функцией данные имеют неправильную структуру.")
        return {
            message: "Ошибка при извлечении нужных данных. Возможно, не существует указанного id или полученные функцией данные имеют неправильную структуру"
        }
    }
}