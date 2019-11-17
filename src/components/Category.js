module.exports = {
    populateCategoryDropdown(){
        fetch("http://localhost:8080/api/category/all")
        .then(response => response.json())
        .then(function (data) {
            
            for (let index = 0; index < data.length; index++) {
                const category = document.querySelector(".game-category");
                const option = document.createElement("option");
                option.classList.add("category-option");
                option.value = data[index].id;
                option.textContent = data[index].name;
                category.append(option);
            }
        })
    }

}

