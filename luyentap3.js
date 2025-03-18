let restaurent = [];
let choice;
do{
    choice = +prompt(`1. Thêm món ăn vào danh mục.
                      2. Xóa món ăn theo tên khỏi danh mục.
                      3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
                      4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
                      5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
                      6. Thoát
                      Nhập chức năng:`);
    if(choice ===1){
        addDish(restaurent);
    }
    else if(restaurent.length === 0 && !isNaN(choice) && choice < 6){
        alert('Chưa thêm món ăn');
    }
    else{
        switch (choice) {
            case 2:
                deleteDish(restaurent);
                break;
            case 3:
                updateDish(restaurent);
                break;
            case 4:
                console.table(restaurent);
                break;
            case 5:
                searchDish(restaurent);
                break;
            case 6:
                alert('Thoát thành công');
                break;
            default:
                alert('Chức năng không hợp lệ');
                break;
        }
    }
}
while(choice !== 6);

function addDish(restaurent){
    const nameOfDish = prompt('Nhập tên món ăn');
    const price = +prompt('Nhập giá món ăn:');
    const description = prompt('Nhập mô tả món ăn:');

    const newDish = {
        nameOfDish,
        price,
        description,
    };

    restaurent.push(newDish);
    alert('Thêm sản phẩm thành công');
}

function deleteDish(restaurent){
    const nameOfDishSearch = prompt('Nhập tên món ăn muốn xóa');
    const indexOfDish = restaurent.findIndex((restaurent) => restaurent.nameOfDish.toLowerCase() === nameOfDishSearch.toLowerCase());
    let confirmDelete;

    if(indexOfDish !== -1){
        confirmDelete = confirm('Bạn có chắc chắn muốn xóa món ăn này không?');
    }
    else{
        alert('Sản phẩm không tồn tại');
    }

    if(confirmDelete){
        alert('Xóa ăn ăn thành công');
        return restaurent.splice(indexOfDish, 1);
    }
}

function updateDish(restaurent){
    const nameOfDishUpdate = prompt('Nhập tên món ăn muốn xóa');
    const indexOfDish = restaurent.findIndex((restaurent) => restaurent.nameOfDish.toLowerCase() === nameOfDishUpdate.toLowerCase());
    let nameOfDishInput;
    let priceOfDishInput;
    let descriptionOfDishInput;
    let confirmUpdate;

    if(indexOfDish !== -1){
        confirmUpdate = confirm('Bạn có chắc chắn muốn chỉnh sửa món ăn này không');
    }
    else{
        alert('Sản phẩm không tồn tại');
    }

    if(confirmUpdate){
        nameOfDishInput = prompt('Nhập tên món ăn:');
        priceOfDishInput = +prompt('Nhập giá món ăn:');
        descriptionOfDishInput = prompt('Nhập mô tả món ăn');
        restaurent[indexOfDish].nameOfDish = nameOfDishInput;
        restaurent[indexOfDish].price = priceOfDishInput;
        restaurent[indexOfDish].description = descriptionOfDishInput;
        alert('Cập nhật thông tin thành công');
        return restaurent;
    }
}

function searchDish(restaurent){
    const nameOfDishSearch = prompt('Nhập tên món ăn muốn tìm kiếm:');
    const indexOfDish = restaurent.findIndex((restaurent) => restaurent.nameOfDish.toLowerCase() === nameOfDishSearch.toLowerCase());

    if(indexOfDish !== -1){
        console.table(restaurent[indexOfDish]);
    }
    else{
        alert('Sản phẩm không tồn tại');
    }
}
