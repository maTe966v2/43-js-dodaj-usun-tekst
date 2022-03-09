let paragraph = document.querySelector("#tekst");
let addButton = document.querySelector("#dodaj");
let removeButton = document.querySelector("#usun");

addButton.addEventListener("click", () => {
    paragraph.innerText =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui laborum reprehenderit facilis doloribus voluptas. Delectus et at perferendis eveniet, ex modi laudantium tempore omnis reprehenderit qui autem vel voluptatem?";
});

removeButton.addEventListener("click", () => {
    paragraph.innerText = "";
});
